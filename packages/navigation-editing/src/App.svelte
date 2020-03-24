<script>
  import DRD from '../../navigation/src/components/DRD.svelte';
  import SplitScreen from './components/SplitScreen.svelte';
  import NavigationTable from './components/NavigationTable.svelte';
  import Wrapper from '../../navigation/src/components/Wrapper.svelte';

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

  function handleUpdateTableData(updated = {}) {
    const {
      id
    } = updated;

    if (!id) {
      return;
    }

    data[id] = {
      ...data[id],
      ...updated
    };

    // is this really necessary? Might run into performance issues...
    changeTable(id);
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

<Wrapper view="split-screen" activeView={view} style="height: 100%;">
  <SplitScreen
    onViewSwitch={switchView}
    tableData={currentTable}
    onUpdateTableData={handleUpdateTableData}
    onTableChange={changeTable} />
</Wrapper>

<Wrapper view="table" activeView={view} className="table-view" style="height: 100%;">
  <NavigationTable 
    onViewSwitch={switchView} 
    tableData={currentTable}
    onUpdateTableData={handleUpdateTableData} />
</Wrapper>
