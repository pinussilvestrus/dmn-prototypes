<script>
    import { afterUpdate } from 'svelte';

    import dom from 'domtastic';

    import { css } from 'emotion';

    import NoopResizeComponent from './NoopResize';

    import './ColumnHeader.scss';

    const noop = () => {};

    const PREVIEW_MARKER = 'preview';


    // state //////////

    let expressionSuffix = '';
    let typeSuffix = '';

    $: {
      const headerNode = getHeaderNode(data.idx);

      expressionSuffix = headerNode.find('.expression').hasClass(PREVIEW_MARKER) ? '*' : '';
      typeSuffix = headerNode.find('.type').hasClass(PREVIEW_MARKER) ? '*' : '';
    }

    $: wrapClass = generateWrapClass(wrapExpressionStyles);

    
    // lifecycle //////////

    afterUpdate(async () => {
      const headerNode = getHeaderNode(data.idx);

      const expressionNode = headerNode.find('.expression');

      if (headerNode.length) {
        onTextBoxOverflow(expressionNode, data.expression, expressionSuffix);
      }
    });


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
    export let onTextBoxOverflow = noop;
    export let columnType = noop;
    export let wrapExpressionStyles = {};
    export let resizeComponent = NoopResizeComponent;


    // helpers //////////

    function getHeaderNode(idx) {
      return dom(`[data-header-id="${idx}"`);
    }

    function generateWrapClass(wrapExpressionStyles) {
      return css`
        white-space: ${wrapExpressionStyles.whiteSpace} !important;
        max-width: ${wrapExpressionStyles.maxWidth} !important;
        max-height: ${wrapExpressionStyles.maxHeight} !important;
        overflow: ${wrapExpressionStyles.overflow} !important;
        text-overflow: ${wrapExpressionStyles.textOverflow} !important;
      `;
    }


</script>

<th 
    class="{columnType}-header" 
    data-header-id={data.idx} 
    on:mouseover={onMouseover}
    on:mouseout={onMouseout}
    on:dblclick={handleDblClick} 
    on:contextmenu|preventDefault={handleContextMenu}>
        <svelte:component this={resizeComponent}>
          <span class="clause">{data.clause}</span>
          <p class="{'expression ' + wrapClass}">
              {data.expression + expressionSuffix}
          </p>
          <span class="type" data-size={data.smaller ? 'smaller' : ''}>
              {data.type + typeSuffix}
          </span>
        </svelte:component>
</th>