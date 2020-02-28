<script>
  import DRD from './components/DRD.svelte';
  import SplitScreen from './components/SplitScreen.svelte';
  import Table from '../../decision-table-layout/src/components/Table.svelte';

  import Wrapper from './components/Wrapper.svelte';

  let view = 'drd';

  function switchView(name) {
    view = name;
  }
</script>

<Wrapper
  view="drd"
  activeView={view}
  style="width: 60%; margin-left: 5rem;">
  <DRD onViewSwitch={switchView} />
</Wrapper>

<Wrapper view="split-screen" activeView={view}>
  <SplitScreen onViewSwitch={switchView} />
</Wrapper>

<Wrapper view="table" activeView={view} let:onViewSwitch={switchView}>
  <Table onViewSwitch={switchView} />
</Wrapper>
