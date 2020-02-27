<script>
  import DRD from "./components/DRD.svelte";
  import SplitScreen from "./components/SplitScreen.svelte";
  import Table from "../../decision-table-layout/src/components/Table.svelte";

  let view = "drd";

  function handleDecisionClick() {
    view = "split-screen";
  }
</script>

<style lang="scss">
  .drd-view {
    width: 60%;
    margin-left: 5rem;
  }
</style>

<div class="wrapper drd-view" style="display: {view === 'drd' ? 'block' : 'none'}">
  <DRD onDecisionClick={handleDecisionClick} />
</div>

<div
  class="wrapper split-screen-view"
  style="display: {view === 'split-screen' ? 'block' : 'none'}">
  <SplitScreen />
</div>

<div class="wrapper table-view" style="display: {view === 'table' ? 'block' : 'none'}">
  <Table />
</div>
