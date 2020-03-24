<script>
    import Table from '../../../column-editing/src/components/variant_A/Table_A';
    
    import ArrowExpandSvg from '../../resources/arrow-expand.svg';

    import './NavigationTable.scss';

    const noop = () => {};

    export let onViewSwitch = noop;
    export let onUpdateTableData = noop;
    export let tableData;
</script>

<div class="navigation-table">
    <div class="buttons">
        <span class="arrow-expand btn btn-sticky" on:click={() => onViewSwitch('split-screen')}>
          {@html ArrowExpandSvg}
        </span>
        <button class="edit-drd btn" on:click={() => onViewSwitch('drd')}>
          Edit DRD
        </button>
    </div>
    <Table 
      {onUpdateTableData} 
      {tableData} />
</div>
