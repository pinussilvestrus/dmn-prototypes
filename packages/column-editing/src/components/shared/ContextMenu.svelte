<script>
    import { afterUpdate } from 'svelte';

    import dom from 'domtastic';

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

    function handleClickOutside(event) {
      const {
        target
      } = event;
    
      const node = dom(target);

      if (!isInsideMenu(node)) {
        handleClose();
      }
    }

    function handleClose() {
      onClose();
    }


    // lifecycle //////////

    afterUpdate(async () => {
      const body = dom('body');

      if (context.data) {
        body.on('click', handleClickOutside);
      } else {
        body.off('click', handleClickOutside);
      }
    });


    // exports //////////

    export let context = {
      position: {},
      data: null
    };
    export let onClose = noop;


    // helpers //////////

    function isInsideMenu(node) {
      return node.closest('.context-menu').length;
    }
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