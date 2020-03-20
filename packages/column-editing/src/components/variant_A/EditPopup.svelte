<script>
    import './EditPopup.scss';

    const noop = () => {};

    function handleSubmit({ target: form }) {
      const updated = constructBody(form);
      onUpdateHeader(header.data.idx, updated);
    }

    // exports //////////

    export let header = {
      bBox: {},
      data: null
    };
    export let onUpdateHeader = noop;

    // helpers //////////

    function constructBody(form) {
      return {
        expression: form.expression.value,
        type: form.type.value
      };
    }
</script>

<div 
    class="column-header-edit-modal" 
    style="
left: {header.bBox.x + 13}px; 
top: {header.bBox.y + 50}px;
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