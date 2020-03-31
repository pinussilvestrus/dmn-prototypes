<script>
  import { findIndex } from 'min-dash';

  // variant A
  import Table_A from './components/variant_A/Table.svelte';

  // variant B
  import Table_B from './components/variant_B/Table.svelte';

  // variant A_2
  import Table_A_2 from './components/variant_A_2/Table.svelte';

  // variant B_2
  import Table_B_2 from './components/variant_B_2/Table.svelte';

  import data from '../resources/data.js';

  import './App.scss';

  const variants = ['A1', 'A2', 'B1', 'B2'];

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

  let active = 'A1';

</script>

<div class="variant-badge" on:click={onNextVariant}>
  <span>{active}</span>
</div>

<div class="variant-a">
  {#if active === 'A1'}
    <Table_A { tableData }/>
  {/if}
</div>

<div class="variant-b">
  {#if active === 'B1'}
    <Table_B { tableData } />
  {/if}
</div>

<div class="variant-a-2">
  {#if active === 'A2'}
    <Table_A_2 { tableData } />
  {/if}
</div>

<div class="variant-b-2">
  {#if active === 'B2'}
    <Table_B_2 { tableData } />
  {/if}
</div>
