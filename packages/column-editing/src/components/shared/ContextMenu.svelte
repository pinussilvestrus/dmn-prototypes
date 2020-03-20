<script>
    import './ContextMenu.scss';

    const noop = () => {};

    const items = [
      {
        key: 'cut',
        label: 'Cut Column',
        action: noop
      },
      {
        key: 'copy',
        label: 'Copy Column',
        action: noop
      },
      {
        key: 'paste-left',
        label: 'Paste Column Left',
        action: noop
      },
      {
        key: 'paste-right',
        label: 'Paste Column Right',
        action: noop
      },
      {
        key: 'seperator'
      },
      {
        key: 'new-left',
        label: 'Add Column Left',
        action: noop
      },
      {
        key: 'new-right',
        label: 'Add Column Right',
        action: noop
      },
      {
        key: 'remove',
        label: 'Remove Column',
        action: noop
      }
    ];

    // exports //////////

    export let context = {
      position: {},
      data: null
    };
</script>

<div 
    class="popup context-menu" 
    style="
left: {context.position.x}px; 
top: {context.position.y}px;
display: {context.data ? 'block' : 'none'}
">
    {#if context.data}
        {#each items as {key, label, action}}

            {#if key === 'seperator'}
                <div class="separator"></div>
            {:else}
                <div class="item" id="action-{key}">{label}</div>
            {/if}
        {/each}
    {/if}
</div>