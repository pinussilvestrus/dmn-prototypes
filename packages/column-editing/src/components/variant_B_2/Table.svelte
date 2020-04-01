<script>
  import BasicTable from '../shared/BasicTable';

  import DirectEditing from '../variant_B/DirectEditing';

  import NonResizableColumnWrapper from '../variant_A_2/NonResizableColumnWrapper';

  import ellipsizeTextBox from '../../util/ellipsizeTextBox';


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
    resizeComponent={NonResizableColumnWrapper} />
</div>