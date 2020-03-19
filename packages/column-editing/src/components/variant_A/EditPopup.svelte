<script>
    import './EditPopup.scss';

    // exports //////////

    export let header = {
      bBox: {},
      data: null
    };
</script>

<div 
    class="column-header-edit-modal" 
    style="
left: {header.bBox.x + 13}px; 
top: {header.bBox.y + 42}px;
display: {header.data ? 'block' : 'none'}
">
    {#if header.data}
        <div class="field expression-field">
            <label>expression</label>
            <input value="{header.data.name}" />
        </div>

        <div class="field type-field">
            <label>allowed values</label>
            <input value="{header.data.type}" />
        </div>
    {/if}
    
</div>