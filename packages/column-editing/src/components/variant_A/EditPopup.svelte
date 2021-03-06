<script>
    import { afterUpdate } from 'svelte';

    import dom from 'domtastic';

    import AutoCompleteInput from '../shared/AutoCompleteInput';

    import FileCodeSvg from '../../../resources/file-code.svg';

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

    function handleExpressionInput(event) {
      const {
        target
      } = event;

      target.style.width = target.value.length + 'ch';
    }

    function handleFocus(event) {
      if (!header.data) {
        return;
      }

      const node = dom(event.target);
      onFieldFocus(header.data.idx, node.attr('name'));
    }

    function handleFocusOut(event) {
      if (!header.data) {
        return;
      }

      const node = dom(event.target);
      onFieldFocusOut(header.data.idx, node.attr('name'));
    }


    // lifecycle //////////

    afterUpdate(async () => {
    
      // set autofocus
      const expressionNode = dom('.column-header-edit-popup form input[name="expression"]')[0];
      expressionNode && expressionNode.focus();
      expressionNode && handleExpressionInput({ target: expressionNode });

      // handle background activity
      const body = dom('body');

      if (header.data) {
        body.on('mousedown', handleClickOutside);
        body.on('keydown', handleKeydown);
      } else {
        body.off('mousedown', handleClickOutside);
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
    export let onFieldFocus = noop;
    export let onFieldFocusOut = noop;


    // helpers //////////

    function isInsidePopup(node) {
      return node.closest('.column-header-edit-popup').length;
    }

    function isOnPage(node) {
      return document.body.contains(node);
    }

    function isInputHeader(header) {
      return header.idx.includes('input-header');
    }

</script>

<div 
    class="popup column-header-edit-popup" 
    style="
left: {header.bBox.left + 13}px; 
top: {header.bBox.bottom}px;
display: {header.data ? 'block' : 'none'}
">
    {#if header.data}
        <form 
          id="column-header-edit"
          on:click|preventDefault={noop}
          autocomplete="off">
            <div class="field expression-field">
                <label for="type"><span class="blank">Expression</span> <span class="feel">{@html FileCodeSvg}FEEL</span></label>
                <input
                    on:change|preventDefault={handleChange} 
                    on:focus={handleFocus}
                    on:focusout={handleFocusOut}
                    on:input={handleExpressionInput}
                    id="expression" 
                    name="expression"
                    value="{header.data.expression}" />
            </div>
    
            <div class="field type-field">
                <label for="type">Allowed Values</label>
                <AutoCompleteInput 
                  id="type" 
                  name="type"
                  type="text"
                  onInputChange={handleChange}
                  onInputFocus={handleFocus}
                  onInputFocusOut={handleFocusOut}
                  value="{header.data.type}" />
            </div>

            {#if isInputHeader(header.data)}
            <div class="field variable-field">
              <label for="type">Engine Variable Name</label>
              <input 
                  on:change|preventDefault={handleChange} 
                  id="variable" 
                  name="variable"
                  type="text" 
                  value="{header.data.variable || ''}" />
            </div>
          {/if}
        </form>
    {/if}
    
</div>