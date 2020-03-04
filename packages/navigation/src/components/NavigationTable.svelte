<script>
    import Table from '../../../decision-table-layout/src/components/Table.svelte';
    import ArrowExpandSvg from '../../resources/arrow-expand.svg';

    import './NavigationTable.scss';

    const noop = () => {};

    export let onViewSwitch = noop;
    export let tableData;
</script>

<div class="navigation-table">
    <div class="buttons">
        <span class="arrow-expand btn" on:click={() => onViewSwitch('split-screen')}>
          {@html ArrowExpandSvg}
        </span>
        <button class="edit-drd btn" on:click={() => onViewSwitch('drd')}>
          Edit DRD
        </button>
    </div>
    <Table { tableData } />
</div>
