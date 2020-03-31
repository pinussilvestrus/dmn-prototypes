<script>
  import BasicTable from '../shared/BasicTable';

  import DirectEditing from '../variant_B/DirectEditing';

  import ellipsizeTextBox from '../../util/ellipsizeTextBox';

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
</script>

<div>
  <BasicTable 
    {tableData} 
    {onHighlight} 
    {onUpdateTableData} 
    {onHeaderMouseover}
    {onHeaderMouseout}
    editComponent={DirectEditing}
    onTextBoxOverflow={handleTextBoxOverflow}
    {resizeStyles} />
</div>