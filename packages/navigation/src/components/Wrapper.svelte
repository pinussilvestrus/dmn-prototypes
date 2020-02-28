<script>
  export let view;
  export let activeView;
  export let style = '';
  export let className = '';
</script>

<div
  class="wrapper { className }"
  style="{style} display: {view === activeView ? 'block' : 'none'}">
  {#if view === activeView}
      <slot/>
  {/if}
</div>
