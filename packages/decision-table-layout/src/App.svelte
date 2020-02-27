<script>
  import Table from './components/Table.svelte';

  export let title;
  export let subtitle;
</script>

<style lang="scss">
  h1, h3 {
    color: black;
    margin: 0.5rem 0 1rem 1.5rem;
  }

  h1 {
    font-size: 200%;
  }

  hr {
    width: 50%;
    border: 0.5px solid gray;
  }
</style>

<h3>{subtitle}</h3>
<h1>{title}</h1>
<hr>

<Table></Table>
