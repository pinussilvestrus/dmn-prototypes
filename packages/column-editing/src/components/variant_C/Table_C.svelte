<script>
  import BasicTable from '../shared/BasicTable';

  import EditPopup from '../variant_A/EditPopup';

  const resizeStyles = {
    maxWidth: '10rem',
    maxHeight: '4rem',
    overflow: 'hidden',
    textOverflow: '…',
    whiteSpace: 'nowrap'
  };

  const handleTextBoxOverflow = (node, expression, expressionSuffix) => {
    ellipsizeTextBox(node, expression, expressionSuffix);
  };


  // exports //////////

  export let tableData;
  export let onHighlight;
  export let onUpdateTableData;
  export let onHeaderMouseover;
  export let onHeaderMouseout;


  // helper //////////

  function isTooLarge(node) {
    return getScrollHeight(node) > getOffsetHeight(node);
  }

  function getOffsetHeight(node) {
    return node[0].offsetHeight;
  }

  function getScrollHeight(node) {
    return node[0].scrollHeight;
  }

  // large content, very dirty stuff because monkey-patching
  function ellipsizeTextBox(node, fullExpression, expressionSuffix) {
    const element = node[0];

    element.innerHTML = fullExpression;
  
    let wordArray = element.innerHTML.split('');

    while (isTooLarge([element])) {
      wordArray.pop();
      element.innerHTML = wordArray.join('') + '...';
    }

    // add suffix
    element.innerHTML += expressionSuffix;

    return element.innerHTML;
  }
</script>

<div>
  <BasicTable 
    {tableData} 
    {onHighlight} 
    {onUpdateTableData} 
    {onHeaderMouseover}
    {onHeaderMouseout}
    editComponent={EditPopup}
    {resizeStyles}
    onTextBoxOverflow={handleTextBoxOverflow} />
</div>