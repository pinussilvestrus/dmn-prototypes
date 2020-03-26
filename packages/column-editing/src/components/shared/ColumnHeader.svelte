<script>
    import { beforeUpdate, afterUpdate } from 'svelte';

    import dom from 'domtastic';

    import './ColumnHeader.scss';

    const noop = () => {};

    const PREVIEW_MARKER = 'preview';

    let displayExpression = '';
    let expressionSuffix = '';
    let typeSuffix = '';
    
    // lifecycle //////////

    beforeUpdate(async () => {
      displayExpression = data.expression;
    });

    afterUpdate(async () => {
      const headerNode = getHeaderNode(data.idx);

      const expressionNode = headerNode.find('.expression');

      if (headerNode.length) {

        // large content, very dirty stuff

        displayExpression = ellipsizeTextBox(expressionNode, data.expression);

        // preview
        expressionSuffix = expressionNode.hasClass(PREVIEW_MARKER) ? '*' : '';
        typeSuffix = headerNode.find('.type').hasClass(PREVIEW_MARKER) ? '*' : '';
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
    export let columnType = noop;


    // helpers //////////

    function getHeaderNode(idx) {
      return dom(`[data-header-id="${idx}"`);
    }

    function isTooLarge(node) {
      return getScrollHeight(node) > getOffsetHeight(node);
    }

    function getOffsetHeight(node) {
      return node[0].offsetHeight;
    }

    function getScrollHeight(node) {
      return node[0].scrollHeight;
    }

    function ellipsizeTextBox(node, fullExpression) {
      const element = node[0];

      element.innerHTML = fullExpression;
    
      let wordArray = element.innerHTML.split('');

      while (isTooLarge([element])) {
        wordArray.pop();
        element.innerHTML = wordArray.join('') + '...';
      }

      return element.innerHTML;
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
        <p class="expression">
            {displayExpression + expressionSuffix}
        </p>
        <span class="type" data-size={data.smaller ? 'smaller' : ''}>
            {data.type + typeSuffix}
        </span>
</th>