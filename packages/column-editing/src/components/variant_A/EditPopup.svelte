<script>
    import { afterUpdate } from 'svelte';

    import dom from 'domtastic';

    import AutoCompleteInput from './AutocompleteInput';

    import './EditPopup.scss';

    const noop = () => {};

    $: originalData = header.data;


    // methods //////////

    function handleChange({ target }) {
      const formNode = dom(target);

      const {
        data: headerData
      } = header;

      const updated = {
        [formNode.attr('name')]: formNode.val()
      };

      headerData && onUpdateHeader(headerData.idx, updated);
    }

    function handleClickOutside(event) {
      const {
        target
      } = event;

      if (!isOnPage(target)) {
        return;
      }
    
      const node = dom(target);

      if (!isInsidePopup(node)) {
        handleClose();
      }

    }

    function undoChanges() {
      onUpdateHeader(header.data.idx, originalData);
    }


    function handleClose() {
      onClose();
    }

    function handleKeydown(event) {
    
      // ESC
      if (event.which === 27) {
        undoChanges();
        handleClose();
      }
    }


    // lifecycle //////////

    afterUpdate(async () => {
    
      // set autofocus
      const expressionNode = dom('.column-header-edit-popup form input[name="expression"]')[0];
      expressionNode && expressionNode.focus();

      // handle background activity
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

    function isInsidePopup(node) {
      return node.closest('.column-header-edit-popup').length;
    }

    function isOnPage(node) {
      return document.body.contains(node);
    }

</script>

<div 
    class="popup column-header-edit-popup" 
    style="
left: {header.bBox.left + 13}px; 
top: {header.bBox.bottom - 10}px;
display: {header.data ? 'block' : 'none'}
">
    {#if header.data}
        <form 
          id="column-header-edit"
          on:click|preventDefault={noop}
          autocomplete="off">
            <div class="field expression-field">
                <label for="type">expression</label>
                <input 
                    on:change|preventDefault={handleChange} 
                    id="expression" 
                    name="expression"
                    type="text" 
                    value="{header.data.expression}" />
            </div>
    
            <div class="field type-field">
                <label for="type">allowed values</label>
                <AutoCompleteInput 
                  id="type" 
                  name="type"
                  type="text"
                  onInputChange={handleChange}
                  value="{header.data.type}" />
            </div>
        </form>
    {/if}
    
</div>