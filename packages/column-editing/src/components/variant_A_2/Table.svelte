<script>
  import BasicTable from '../shared/BasicTable';

  import EditPopup from '../variant_A/EditPopup';

  import ellipsizeTextBox from '../../util/ellipsizeTextBox';

  const wrapExpressionStyles = {
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
</script>

<div>
  <BasicTable 
    {tableData} 
    {onHighlight} 
    {onUpdateTableData} 
    {onHeaderMouseover}
    {onHeaderMouseout}
    editComponent={EditPopup}
    {wrapExpressionStyles}
    onTextBoxOverflow={handleTextBoxOverflow} />
</div>