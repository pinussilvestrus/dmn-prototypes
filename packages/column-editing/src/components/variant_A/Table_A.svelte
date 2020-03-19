<script>
  import BasicTable from '../shared/BasicTable.svelte';


  // exports //////////

  export let tableData;
  export let editComponent;
</script>

<div>
  <BasicTable {tableData} {editComponent} />
</div>