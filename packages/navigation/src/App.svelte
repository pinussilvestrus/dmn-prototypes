<script>
  import DRD from './components/DRD.svelte';
  import SplitScreen from './components/SplitScreen.svelte';
  import NavigationTable from './components/NavigationTable.svelte';
  import Wrapper from './components/Wrapper.svelte';

  import data from '../resources/data.js';

  import './App.scss';

  let view = 'drd';
  let currentTable = data['Decision_03absfl'];
  let expanded = true;

  function updateExpand(isExpanded) {
    expanded = isExpanded;
  }

  function switchView(name) {
    if (name === 'table') {
      updateExpand(false);
    }

    if (view === 'table' && name === 'split-screen') {
      updateExpand(true);
    }

    view = (name === 'split-screen' && !expanded) ? 'table' : name;
  }

  function changeTable(tableId) {
    const newTable = data[tableId];

    if (!newTable || currentTable === newTable) {
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
  <NavigationTable onViewSwitch={switchView} tableData={currentTable} />
</Wrapper>
