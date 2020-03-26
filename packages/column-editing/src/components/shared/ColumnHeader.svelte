<script>
    import './ColumnHeader.scss';

    const noop = () => {};


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
</script>

<th 
    class="{columnType}-header" 
    data-header-id={data.idx} 
    on:mouseover={onMouseover}
    on:mouseout={onMouseout}
    on:dblclick={handleDblClick} 
    on:contextmenu|preventDefault={handleContextMenu}>
        <span class="clause">{data.clause}</span>
        <p class="expression">{data.expression}</p>
        <span class="type" data-size={data.smaller ? 'smaller' : ''}>
            {data.type}
        </span>
</th>