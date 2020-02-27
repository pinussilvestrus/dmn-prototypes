<script>
  import DRD from './components/DRD.svelte';
  import Table from '../../decision-table-layout/src/components/Table.svelte';

  let showTableView = false;

  function handleDecisionClick() {
    showTableView = true;
  }
</script>

<DRD class="drd-view" onDecisionClick={handleDecisionClick} />

<Table class="table-view" visible={showTableView} />
