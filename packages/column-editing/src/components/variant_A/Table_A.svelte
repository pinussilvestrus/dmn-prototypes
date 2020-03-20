<script>
  import BasicTable from '../shared/BasicTable';

  import EditPopup from './EditPopup';


  // exports //////////

  export let tableData;
</script>

<div>
  <BasicTable {tableData} editComponent={EditPopup} />
</div>