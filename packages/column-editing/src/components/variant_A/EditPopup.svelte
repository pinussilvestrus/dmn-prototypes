<script>
    import { afterUpdate } from 'svelte';

    import dom from 'domtastic';

    import './EditPopup.scss';


    const noop = () => {};

    function handleSubmit({ target: form }) {
      const updated = constructBody(form);
      onUpdateHeader(header.data.idx, updated);
    }

    function handleClickOutside(event) {
      const {
        target
      } = event;
    
      const node = dom(target);

      if (!isInsidePopup(node)) {
        handleClose();
      }
    }

    function handleClose() {
      onClose();
    }

    function handleKeydown(event) {
    
      // ESC
      if (event.which === 27) {
        handleClose();
      }
    }


    // lifecycle //////////

    afterUpdate(async () => {
    
      const body = dom('body');

      if (header.data) {
        body.on('click', handleClickOutside);
        body.on('keydown', handleKeydown);
      } else {
        body.off('click', handleClickOutside);
        body.off('keydown', handleKeydown);
      }
    });


    // exports //////////

    export let header = {
      bBox: {},
      data: null
    };
    export let onUpdateHeader = noop;
    export let onClose = noop;

    // helpers //////////

    function constructBody(form) {
      return {
        expression: form.expression.value,
        type: form.type.value
      };
    }

    function isInsidePopup(node) {
      return node.closest('.column-header-edit-modal').length;
    }
</script>

<div 
    class="column-header-edit-modal" 
    style="
left: {header.bBox.left + 13}px; 
top: {header.bBox.bottom - 10}px;
display: {header.data ? 'block' : 'none'}
">
    {#if header.data}
        <form on:submit|preventDefault={handleSubmit}>
            <div class="field expression-field">
                <label for="type">expression</label>
                <input 
                    id="expression" 
                    name="expression"
                    type="text" 
                    value="{header.data.expression}" />
            </div>
    
            <div class="field type-field">
                <label for="type">allowed values</label>
                <input 
                    id="type" 
                    name="name"
                    type="text" 
                    value="{header.data.type}" />
            </div>

            <input type="submit"/>
        </form>
    {/if}
    
</div>