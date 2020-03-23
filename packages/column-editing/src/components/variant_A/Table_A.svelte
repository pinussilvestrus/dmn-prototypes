<script>
  import BasicTable from '../shared/BasicTable';

  import EditPopup from './EditPopup';


  // exports //////////

  export let tableData;
  export let onHighlight;
  export let onUpdateTableData;
</script>

<div>
  <BasicTable {tableData} {onHighlight} {onUpdateTableData} editComponent={EditPopup} />
</div>