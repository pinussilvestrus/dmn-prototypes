<script>
  import { onMount } from 'svelte';

  import { findIndex } from 'min-dash';

  // variant A
  import Table_A from './components/variant_A/Table.svelte';

  // variant B
  import Table_B from './components/variant_B/Table.svelte';

  // variant A_2
  import Table_A_2 from './components/variant_A_2/Table.svelte';

  // variant B_2
  import Table_B_2 from './components/variant_B_2/Table.svelte';

  // variant C
  import Table_C from './components/variant_C/Table.svelte';

  import data from '../resources/data.js';

  import './App.scss';

  const VARIANTS = ['A1', 'A2', 'B1', 'B2', 'C'];

  const DEFAULT_VARIANT = 'A1';

  const toggleVariant = (variant) => {
    const found = findIndex(VARIANTS, v => v === variant);

    if (found < 0) {
      return active = VARIANTS[0];
    }
  
    active = variant;
    updateURL(variant);
  };

  const onNextVariant = () => {
    const found = findIndex(VARIANTS, v => v === active);

    if (found === VARIANTS.length - 1) {
      return toggleVariant(VARIANTS[0]);
    }

    return toggleVariant(VARIANTS[found + 1]);
  };


  // state //////////

  let tableData = data['Decision_03absfl'];
  let active = DEFAULT_VARIANT;


  // lifecycle //////////
  onMount(async () => {
    const variant = urlParam('variant');
    toggleVariant(variant);
  });


  // helpers //////////

  function updateURL(variant) {
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?variant=${variant}`;
    window.history.pushState({ path: newurl }, '', newurl);
  }

  function urlParam(name) {
    const results = new RegExp('[?&]' + name + '=([^&#]*)')
      .exec(window.location.href);

    return results && results[1] || DEFAULT_VARIANT;
  }


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

<div class="variant-c">
  {#if active === 'C'}
    <Table_C { tableData } />
  {/if}
</div>
