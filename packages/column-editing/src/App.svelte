<script>
  import { findIndex } from 'min-dash';

  // variant A
  import Table_A from './components/variant_A/Table_A.svelte';

  // variant B
  import Table_B from './components/variant_B/Table_B.svelte';

  // variant C
  import Table_C from './components/variant_C/Table_C.svelte';

  import data from '../resources/data.js';

  import './App.scss';

  const variants = ['A', 'B', 'C'];

  const toggleVariant = (variant) => active = variant;

  const onNextVariant = () => {
    const found = findIndex(variants, v => v === active);

    if (found < 0) {
      return toggleVariant(variants[0]);
    }

    if (found === variants.length - 1) {
      return toggleVariant(variants[0]);
    }

    return toggleVariant(variants[found + 1]);
  };

  let tableData = data['Decision_03absfl'];

  let active = 'A';

</script>

<div class="variant-badge" on:click={onNextVariant}>
  <span>{active}</span>
</div>

<div class="variant-a">
  {#if active === 'A'}
    <Table_A { tableData }/>
  {/if}
</div>

<div class="variant-b">
  {#if active === 'B'}
    <Table_B { tableData } />
  {/if}
</div>

<div class="variant-c">
  {#if active === 'C'}
    <Table_C { tableData } />
  {/if}
</div>
