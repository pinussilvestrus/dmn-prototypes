<script>
    import { afterUpdate } from 'svelte';

    import {
      filter,
      find,
      findIndex,
      forEach,
      keys,
      map
    } from 'min-dash';

    import dom from 'domtastic';

    import './BasicTable.scss';

    import HIT_POLICIES from '../../util/getHitPolicies';

    import ColumnHeader from './ColumnHeader';
    import AddColumnButton from './AddColumnButton';
    import ContextMenu from './ContextMenu';

    const PREVIEW_MARKER = 'preview';
    const FIELD_FOCUS_MARKER = 'edit-focus';

    const noop = () => {};

    const nullHeader = {
      bBox: {},
      expressionBbox: {},
      data: null
    };

    const nullContextMenu = {
      position: {},
      data: null
    };

    // state //////////

    let currentHeader = nullHeader;
    let currentContextMenu = nullContextMenu;

    $: explanation = find(HIT_POLICIES, hp => hp.name === tableData.hitPolicy).explanation;
    $: tableLength = tableData.inputHeaders.length + tableData.outputHeaders.length + 4;

    let addInputBounds = {};
    let addOutputBounds = {};


    // lifecycle //////////

    afterUpdate(async () => {
      updateAddColumnBounds();
    });


    // methods //////////

    function handleChangeHitPolicy(event) {
      const {
        target: { value }
      } = event;

      tableData.hitPolicy = value;
    }

    function handleMouseover(event) {
      onHeaderMouseover(event);
    }

    function handleMouseout(event) {
      onHeaderMouseout(event);
    }

    function updateAddColumnBounds() {

      // inputs
      const inputGap = dom('#input-gap');
      let bBox = inputGap[0].getBoundingClientRect();

      addInputBounds = {
        left: bBox.x - 7 + 'px',
        top: bBox.bottom - bBox.top + 'px'
      };

      // outputs
      const outputGap = dom('#output-gap');
      bBox = outputGap[0].getBoundingClientRect();

      addOutputBounds = {
        left: bBox.x - 7 + 'px',
        top: bBox.bottom - bBox.top + 'px'
      };
    }

    function updateTableData(updated) {
      tableData = {
        ...tableData,
        ...updated
      };

      onUpdateTableData(tableData);
    }

    function handleEditColumn(header) {
      const headerNode = getHeaderNode(header.idx);

      const bBox = headerNode[0].getBoundingClientRect();

      const expressionBbox = headerNode.find('.expression')[0].getBoundingClientRect();

      currentHeader = {
        data: header,
        bBox,
        expressionBbox
      };
    }

    function handleColumnClick(event, header) {
      const {
        target
      } = event;

      if (!target) {
        return;
      }
    
      header && handleEditColumn(header);
    }

    // todo(pinussilvestrus): refactor me, I AM NOT STABLE
    function handleRemoveColumn(idx) {
      const {
        inputHeaders,
        outputHeaders,
        rules
      } = tableData;

      // (1) try to update inputs
      const updatedInputHeaders = filter(inputHeaders, h => h.idx !== idx);

      // (2) try to update outputHeaders
      const updatedOutputHeaders = filter(outputHeaders, h => h.idx !== idx);

      // (3) try to update rules
      let updatedRules = [];

      const updateRules = (index, type) => {
        updatedRules = map(rules, r => {
          r[type].splice(index, 1);
          return r;
        });
      };
    
      let index = findIndex(inputHeaders, h => h.idx === idx);

      if (index) {
        updateRules(index, 'inputCells');
      } else {
        let index = findIndex(outputHeaders, h => h.idx === idx);
        updateRules(index, 'outputCells');
      }

      updateTableData({
        inputHeaders: updatedInputHeaders,
        outputHeaders: updatedOutputHeaders,
        rules: updatedRules
      });

    }

    function markPreview(idx, properties) {
      const node = getHeaderNode(idx);

      forEach(keys(properties), key => {
        node.find(`.${key}`).addClass(PREVIEW_MARKER);
      });
    }

    function handleUpdateColumnHeader(idx, updated = {}) {
      const {
        inputHeaders,
        outputHeaders
      } = tableData;

      // (1) try to update inputHeaders
      const updatedInputHeaders = map(inputHeaders, h => {
        if (h.idx === idx) {
          h = {
            ...h,
            ...updated
          };

          markPreview(idx, updated);
        }

        return h;
      });

      // (2) try to update outputHeaders
      const updatedOutputHeaders = map(outputHeaders, h => {
        if (h.idx === idx) {
          h = {
            ...h,
            ...updated
          };

          markPreview(idx, updated);
        }

        return h;
      });
    
      updateTableData({
        inputHeaders: updatedInputHeaders,
        outputHeaders: updatedOutputHeaders
      });
    }

    function handleEditFieldFocus(idx, prop) {
      const headerNode = getHeaderNode(idx);

      if (!headerNode.length) {
        return;
      }

      headerNode.find('.' + prop).addClass(FIELD_FOCUS_MARKER);
    }

    function handleEditFieldFocusOut(idx, prop) {
      const headerNode = getHeaderNode(idx);

      if (!headerNode.length) {
        return;
      }

      headerNode.find('.' + prop).removeClass(FIELD_FOCUS_MARKER);
    }

    function handleCloseEditComponent() {
      currentHeader = nullHeader;

      // remove previews
      dom('.input-header *, .output-header *').removeClass(PREVIEW_MARKER);
      updateTableData({});
    }

    function handleOpenContextMenu(event, header) {
      const {
        target
      } = event;

      if (!target) {
        return;
      }

      currentContextMenu = {
        data: header,
        position: {
          x: event.pageX,
          y: event.pageY
        }
      };
    }

    function handleCloseContextMenu() {
      currentContextMenu = nullContextMenu;
    }


    // exports //////////

    export let onUpdateTableData = noop;
    export let onHeaderMouseover = noop;
    export let onHeaderMouseout = noop;
    export let tableData = {};
    export let editComponent;


    // helpers //////////

    function getHeaderNode(idx) {
      return dom(`[data-header-id="${idx}"`);
    }

</script>
  
<div class="decision-table">
  <table>
    <thead>
      <tr class="title-row">
        <th colspan="{tableLength}">
          <p>{tableData.name}</p>
          <span />
          <select on:change={handleChangeHitPolicy}>
            {#each HIT_POLICIES as { name }}
              <option selected={name === tableData.hitPolicy}>{name}</option>
            {/each}
          </select>
          <p class="hp-explanation">{explanation}</p>
          <p />
        </th>
      </tr>
      <tr class="header-row">
        <th class="empty-cell"/>

        {#each tableData.inputHeaders as header, i}
          <ColumnHeader
            columnType="input"
            data={header}
            onMouseover={handleMouseover}
            onMouseout={handleMouseout}
            onDblClick={handleColumnClick}
            onContextMenu={handleOpenContextMenu} />

          {#if i === tableData.inputHeaders.length - 1}
            <th class="empty-cell" id="input-gap" />
          {/if}
        {/each}

        {#each tableData.outputHeaders as header, i}
          <ColumnHeader
            columnType="output"
            data={header}
            onMouseover={handleMouseover}
            onMouseout={handleMouseout}
            onDblClick={handleColumnClick}
            onContextMenu={handleOpenContextMenu} />
    
          {#if i === tableData.outputHeaders.length - 1}
            <th class="empty-cell" id="output-gap" />
          {/if}
        {/each}

        <th class="annotation-header annotation-cell">Annotations</th>
      </tr>
    </thead>
    <tbody>

      <tr class="empty-line">
        <td colspan={tableLength}></td>
      </tr>
      {#each tableData.rules as { idx, inputCells, outputCells }, i}
        <tr id={idx}>
          <td class="rule">{idx}</td>
          {#each inputCells as input, j}
            <td class="input-cell" data-empty="{input === '-' ? 'empty' : 'none'}">{input}</td>

            {#if j === inputCells.length - 1}
              <td class="empty-cell  {i === tableData.rules.length - 1 ? 'last-rule' : ''} "/>
            {/if}
          {/each}
          {#each outputCells as output, j}
            <td class="output-cell">{output}</td>

            {#if j === outputCells.length - 1}
            <td class="empty-cell  {i === tableData.rules.length - 1 ? 'last-rule' : ''} "/>
          {/if}
          {/each}
          <td class="annotation-cell" />
        </tr>
      {/each}

    </tbody>
  </table>  

  <!-- Adding Component, fixed by now -->
  <AddColumnButton 
    id="add-input-column" 
    bounds={addInputBounds}
    onUpdateTable={updateTableData} 
    {tableData} />

  <AddColumnButton 
    id="add-output-column" 
    bounds={addOutputBounds}
    onUpdateTable={updateTableData}
    {tableData} />

  <!-- Context Menu Component, fixed by now -->
  <ContextMenu 
    context={currentContextMenu}
    onClose={handleCloseContextMenu}
    onEditColumn={handleEditColumn}
    onRemoveColumn={handleRemoveColumn} />

  <!-- Editing Component, variant dependent -->
  <svelte:component 
    this="{editComponent}" 
    header={currentHeader} 
    onUpdateHeader={handleUpdateColumnHeader}
    onFieldFocus={handleEditFieldFocus}
    onFieldFocusOut={handleEditFieldFocusOut}
    onClose={handleCloseEditComponent} />
</div>
  