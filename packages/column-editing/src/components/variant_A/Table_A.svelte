<script>
  import BasicTable from '../shared/BasicTable';

  import EditPopup from './EditPopup';


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
    editComponent={EditPopup} />
</div>