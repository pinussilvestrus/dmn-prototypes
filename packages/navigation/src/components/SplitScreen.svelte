<script>

    import DRD from './DRD.svelte';

    import Table from '../../../decision-table-layout/src/components/Table.svelte';

    import './SplitScreen.scss';
</script>

<div class="split-screen">
    <div class="drd-part">
        <DRD />
    </div>
    <div class="table-part">
        <Table />
    </div>
</div>