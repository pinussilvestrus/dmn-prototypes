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
        <button class="edit-drd btn" on:click={() => onViewSwitch('drd')}>
            Edit DRD
        </button>
        <span class="arrow-expand btn" on:click={() => onViewSwitch('split-screen')}>
          {@html ArrowExpandSvg}
        </span>
    </div>
    <Table { tableData } />
</div>
