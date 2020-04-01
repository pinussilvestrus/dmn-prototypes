<script>
  import BasicTable from '../shared/BasicTable';

  import DirectEditing from '../variant_B/DirectEditing';

  import CenteredAlignWrapper from './CenteredAlignWrapper';


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
    resizeComponent={CenteredAlignWrapper} />
</div>