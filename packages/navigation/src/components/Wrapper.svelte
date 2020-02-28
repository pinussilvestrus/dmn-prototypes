<script>
  export let view;
  export let activeView;
  export let style = '';
</script>

<div
  class="wrapper"
  style="{style} display: {view === activeView ? 'block' : 'none'}">
  {#if view === activeView}
      <slot/>
  {/if}
</div>
