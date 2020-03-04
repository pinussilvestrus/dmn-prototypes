<script>
  import DRD from './components/DRD.svelte';
  import SplitScreen from './components/SplitScreen.svelte';
  import Table from '../../decision-table-layout/src/components/Table.svelte';
  import Wrapper from './components/Wrapper.svelte';

  import ArrowExpandSvg from '../resources/arrow-expand.svg';
  import data from '../resources/data.js';

  import './App.scss';

  let view = 'drd';
  let currentTable = data['Decision_03absfl'];

  function switchView(name) {
    view = name;
  }

  function changeTable(tableId) {
    if (!data[tableId]) {
      return;
    }

    currentTable = data[tableId];
  }
</script>

<Wrapper view="drd" activeView={view} style="width: 60%; margin-left: 5rem;">
  <DRD 
    decision={currentTable.id} 
    onViewSwitch={switchView} 
    onTableChange={changeTable} />
</Wrapper>

<Wrapper view="split-screen" activeView={view}>
  <SplitScreen
    onViewSwitch={switchView}
    tableData={currentTable}
    onTableChange={changeTable} />
</Wrapper>

<Wrapper view="table" activeView={view} className="table-view">
  <button class="edit-drd btn" on:click={() => switchView('drd')}>
    Edit DRD
  </button>
  <span class="arrow-expand btn" on:click={() => switchView('split-screen')}>
    {@html ArrowExpandSvg}
  </span>
  <Table onViewSwitch={switchView} tableData={currentTable} />
</Wrapper>
