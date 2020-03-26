<script>
    import { afterUpdate } from 'svelte';

    import dom from 'domtastic';

    import AutoCompleteInput from '../shared/AutoCompleteInput';

    import './DirectEditing.scss';

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

      if (!isInsideBox(node)) {
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

    function handleTextAreaKeydown(event) {

      // Enter
      if (event.which === 13) {
        handleChange(event);
        return handleClose();
      }
    }

    function handleTextAreaKeyup({ target }) {
      if (target.scrollHeight > target.clientHeight) {
        target.style.height = target.scrollHeight + 'px';
      }
    }


    // lifecycle //////////

    afterUpdate(async () => {
    
      // set autofocus
      const expressionNode = dom('.direct-editing form textarea[name="expression"]')[0];
      expressionNode && expressionNode.focus();
      expressionNode && handleTextAreaKeyup({ target: expressionNode });

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
      expressionBbox: {},
      data: null
    };
    export let onUpdateHeader = noop;
    export let onClose = noop;


    // helpers //////////

    function isInsideBox(node) {
      return node.closest('.direct-editing').length;
    }

    function isOnPage(node) {
      return document.body.contains(node);
    }

</script>

<div 
    class="direct-editing" 
    style="
left: {header.bBox.left}px; 
top: {header.bBox.top}px;
width: {Math.round(header.bBox.right - header.bBox.left)}px;
display: {header.data ? 'block' : 'none'}
">
    {#if header.data}
        <form 
          id="column-header-edit"
          on:click|preventDefault={noop}
          autocomplete="off">
            <div class="field expression-field">
                <textarea 
                    style="margin-top: {Math.round(header.expressionBbox.top - header.bBox.top - 13)}px"
                    contenteditable="true"
                    on:keydown={handleTextAreaKeydown}
                    on:keyup={handleTextAreaKeyup}
                    on:change|preventDefault={handleChange} 
                    id="expression" 
                    name="expression"
                    type="text" 
                    value="{header.data.expression}" />
            </div>
    
            <div class="field type-field">
                <label for="type">Allowed Values</label>
                <AutoCompleteInput 
                  id="type" 
                  name="type"
                  type="text"
                  onInputChange={handleChange}
                  value="{header.data.type}" />
            </div>

            <div class="field expression-field">
              <label for="type">Engine Variable</label>
              <input 
                  on:change|preventDefault={handleChange} 
                  id="variable" 
                  name="variable"
                  type="text" 
                  value="{header.data.variable || ''}" />
            </div>
        </form>
    {/if}
    
</div>