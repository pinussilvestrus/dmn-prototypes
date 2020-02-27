<script>
  import DRD from "./components/DRD.svelte";
  import SplitScreen from "./components/SplitScreen.svelte";
  import Table from "../../decision-table-layout/src/components/Table.svelte";

  import Wrapper from "./components/Wrapper.svelte";

  let view = "drd";

  function handleDecisionClick() {
    view = "split-screen";
  }
</script>

<Wrapper view="drd" activeView={view} style="width: 60%; margin-left: 5rem;">
  <DRD onDecisionClick={handleDecisionClick} />
</Wrapper>

<Wrapper view="split-screen" activeView={view}>
  <SplitScreen />
</Wrapper>

<Wrapper view="table" activeView={view}>
  <Table />
</Wrapper>
