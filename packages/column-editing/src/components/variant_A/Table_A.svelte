<script>
  import BasicTable from '../shared/BasicTable.svelte';

  import EditPopup from './EditPopup.svelte';


  // exports //////////

  export let tableData;
</script>

<div>
  <BasicTable {tableData} editComponent={EditPopup} />
</div>