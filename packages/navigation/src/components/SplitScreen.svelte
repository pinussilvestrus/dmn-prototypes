<script>

    import DRD from './DRD.svelte';

    import Table from '../../../decision-table-layout/src/components/Table.svelte';

    import ExpandSvg from '../../resources/expand-solid.svg';

    import './SplitScreen.scss';

    export let onViewSwitch;

</script>

<div class="split-screen">
    <div class="drd-part">
         <span class="expand" on:click={() => onViewSwitch('drd')}>{@html ExpandSvg}</span>
        <h2 class="title">Decision Requirements</h2>
        <DRD />
    </div>
    <div class="table-part">
        <span class="expand" on:click={() => onViewSwitch('table')}>{@html ExpandSvg}</span>
        <h2 class="title">Decision Table</h2>
        <Table />
    </div>
</div>