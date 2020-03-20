<script>
    import { afterUpdate } from 'svelte';

    import { find, forEach, map } from 'min-dash';

    import dom from 'domtastic';

    import './BasicTable.scss';

    import HIT_POLICIES from '../../util/getHitPolicies';

    import AddColumnButton from './AddColumnButton';

    import ContextMenu from './ContextMenu';

    const HOVER_MARKER = 'hover';

    const noop = () => {};

    const nullHeader = {
      bBox: {},
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


    // lifecycle //////////

    afterUpdate(async () => {
      const {
        inputHeaders,
        outputHeaders
      } = tableData;

      forEach(inputHeaders, ({ idx }) => {
        const header = dom(`[data-header-id="${idx}"`);
        initHeaderInteractions(header);
      });

      forEach(outputHeaders, ({ idx }) => {
        const header = dom(`[data-header-id="${idx}"`);
        initHeaderInteractions(header);
      });

      initAddColumnBtns();
    });


    // methods //////////

    function handleChangeHitPolicy(event) {
      const {
        target: { value }
      } = event;

      tableData.hitPolicy = value;
    }

    function initHeaderInteractions(header) {
    
      // do not do anything if not in split screen
      if (onHighlight === noop) {
        return;
      }

      header.addClass('table-header');

      header.on('mouseover', event => {
        event.stopPropagation();
        event.preventDefault();

        if (header.hasClass(HOVER_MARKER)) {
          return;
        }
    
        header.addClass(HOVER_MARKER);
        onHighlight(header);
      });

      header.on('mouseout', event => {
        event.stopPropagation();
        event.preventDefault();

        if (!header.hasClass(HOVER_MARKER)) {
          return;
        }
    
        header.removeClass(HOVER_MARKER);
        onHighlight(header);
      });
    }

    function initAddColumnBtns() {

      // inputs
      const inputGap = dom('#input-gap');
      let bBox = inputGap[0].getBoundingClientRect();
    
      const addInputBtn = dom('#add-input-column');
      addInputBtn.css('left', bBox.x - 10 + 'px');
      addInputBtn.css('top', (bBox.bottom - bBox.top) + 'px');

      // outputs
      const outputGap = dom('#output-gap');
      bBox = outputGap[0].getBoundingClientRect();
    
      const addOutputBtn = dom('#add-output-column');
      addOutputBtn.css('left', bBox.x - 10 + 'px');
      addOutputBtn.css('top', (bBox.bottom - bBox.top) + 'px');
    }

    function updateTableData(updated) {
      tableData = {
        ...tableData,
        ...updated
      };
    }

    function handleColumnClick(event) {
      const {
        target
      } = event;

      if (!target) {
        return;
      }

      const original = dom(target);

      const headerNode = original.closest('th');

      const header = getTableHeader(headerNode.attr('data-header-id'));
    
      if (header) {
        currentHeader = {
          data: header,
          bBox: headerNode[0].getBoundingClientRect()
        };
      }
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
        }

        return h;
      });

      handleEditComponentClose();

      updateTableData({
        inputHeaders: updatedInputHeaders,
        outputHeaders: updatedOutputHeaders
      });
    }

    function handleEditComponentClose() {
      currentHeader = nullHeader;
    }

    function handleOpenContextMenu(event) {
      const {
        target
      } = event;

      if (!target) {
        return;
      }

      const original = dom(target);

      const headerNode = original.closest('th');

      const header = getTableHeader(headerNode.attr('data-header-id'));

      currentContextMenu = {
        data: header,
        position: {
          x: event.pageX,
          y: event.pageY - 15
        }
      };
    }


    // exports //////////

    export let onHighlight = noop;
    export let tableData = {};
    export let editComponent;


    // helpers //////////

    function getTableHeader(idx) {
      const found = find(tableData['inputHeaders'], h => h.idx === idx);

      if (found) {
        return found;
      }

      return find(tableData['outputHeaders'], h => h.idx === idx);
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

        {#each tableData.inputHeaders as { idx, clause, expression, type, smaller }, i}
          <th 
            class="input-header" 
            data-header-id={idx} 
            on:dblclick={handleColumnClick} 
            on:contextmenu|preventDefault={handleOpenContextMenu}>
              <span class="clause">{clause}</span>
              <p class="label">{expression}</p>
              <span class="type" data-size={smaller ? 'smaller' : ''}>
                {type}
              </span>
          </th>

          {#if i === tableData.inputHeaders.length - 1}
            <th class="empty-cell" id="input-gap" />
          {/if}
        {/each}

        {#each tableData.outputHeaders as { idx, clause, expression, type }, i}
          <th
            class="output-header output-cell"
            data-header-id={idx}
            on:dblclick={handleColumnClick} >
              <span class="clause">{clause}</span>
              <p class="label">{expression}</p>
              <span class="type">{type}</span>
          </th>

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
  <AddColumnButton id="add-input-column" {tableData} onUpdateTable={updateTableData} />
  <AddColumnButton id="add-output-column" {tableData} onUpdateTable={updateTableData} />

  <!-- Context Menu Component, fixed by now -->
  <ContextMenu context={currentContextMenu} />

  <!-- Editing Component, variant dependent -->
  <svelte:component 
    this="{editComponent}" 
    header={currentHeader} 
    onUpdateHeader={handleUpdateColumnHeader}
    onClose={handleEditComponentClose} />
</div>
  