<script>
  import BasicTable from '../shared/BasicTable';

  import EditPopup from './EditPopup';


  // exports //////////

  export let tableData;
  export let onHighlight;
</script>

<div>
  <BasicTable {tableData} {onHighlight} editComponent={EditPopup} />
</div>