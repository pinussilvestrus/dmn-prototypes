<script>
    import dom from 'domtastic';

    import './ColumnHeader.scss';

    const noop = () => {};

    const PREVIEW_MARKER = 'preview';

    let expressionSuffix = '';
    let typeSuffix = '';
    $: {
      const headerNode = getHeaderNode(data.idx);
    
      if (headerNode.length) {
        expressionSuffix = headerNode.find('.expression').hasClass(PREVIEW_MARKER) ? '*' : '';
        typeSuffix = headerNode.find('.type').hasClass(PREVIEW_MARKER) ? '*' : '';
      }
    }


    // methods //////////

    function handleContextMenu(event) {
      onContextMenu(event, data);
    }

    function handleDblClick(event) {
      onDblClick(event, data);
    }


    // exports //////////

    export let data = {};
    export let onMouseover = noop;
    export let onMouseout = noop;
    export let onDblClick = noop;
    export let onContextMenu = noop;
    export let columnType = noop;


    // helpers //////////

    function getHeaderNode(idx) {
      return dom(`[data-header-id="${idx}"`);
    }
</script>

<th 
    class="{columnType}-header" 
    data-header-id={data.idx} 
    on:mouseover={onMouseover}
    on:mouseout={onMouseout}
    on:dblclick={handleDblClick} 
    on:contextmenu|preventDefault={handleContextMenu}>
        <span class="clause">{data.clause}</span>
        <p class="expression">{data.expression + expressionSuffix}</p>
        <span class="type" data-size={data.smaller ? 'smaller' : ''}>
            {data.type + typeSuffix}
        </span>
</th>