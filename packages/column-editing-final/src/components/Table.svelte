<script>
  import BasicTable from '../../../column-editing/src/components/shared/BasicTable';
  import DirectEditing from '../../../column-editing/src/components/variant_B/DirectEditing';

  import ResizableColumnWrapper from './ResizableColumnWrapper';

  import ellipsizeTextBox from '../util/ellipsizeTextBox';

  const handleTextBoxOverflow = (node, expression) => {
    ellipsizeTextBox(node, expression);
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
    onTextBoxOverflow={handleTextBoxOverflow}
    resizeComponent={ResizableColumnWrapper}
    editComponent={DirectEditing} />
</div>