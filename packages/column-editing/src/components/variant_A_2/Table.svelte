<script>
  import BasicTable from '../shared/BasicTable';

  import EditPopup from '../variant_A/EditPopup';

  import NonResizableColumnWrapper from './NonResizableColumnWrapper';

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
    editComponent={EditPopup}
    resizeComponent={NonResizableColumnWrapper}
    onTextBoxOverflow={handleTextBoxOverflow} />
</div>