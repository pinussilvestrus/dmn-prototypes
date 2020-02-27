<script>
  import Table from './components/Table.svelte';

  export let title;
</script>

<style lang="scss">
  h1 {
    color: black;
  }
</style>

<h1>{title}</h1>

<Table></Table>
