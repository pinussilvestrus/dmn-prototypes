<script>
    import { onMount, afterUpdate } from 'svelte';

    import './AdvancedExpressionInput.scss';

    import dom from 'domtastic';
    
    const noop = () => {};

    let inputState = 'input';
    let isModeChanging = false;

    function handleKeydown(event) {
      const target = dom(event.target);

      event.stopPropagation;
      event.preventDefault;

      // Enter
      if (event.which === 13) {

        // switch to multiline moude
        inputState = 'textarea';
        isModeChanging = true;
        value.val = target.val();
      }
    }

    function handleChange(event) {
      const target = dom(event.target);

      const val = target.val();

      const value = {
        val,
        isMultiLine: inputState !== 'input'
      };
    
      onChange({
        target: target[0],
        value
      });
    }

    // lifecycle //////////

    onMount(async () => {
      inputState = value.isMultiLine ? 'textarea' : 'input';
    });

    afterUpdate(async () => {
      if (isModeChanging) {
        isModeChanging = false;
        const node = dom('textarea.advanced-expression');
        node[0].focus();
      }
    });


    // exports //////////

    export let id;
    export let name;
    export let type;
    export let placeholder;
    export let value = {};
    export let onChange = noop;
</script>

{#if inputState === 'textarea'}
    <textarea 
        class="advanced-expression"
        {id}
        {name}
        {type}
        {placeholder}
        value={value.val || ''}
        on:keydown={handleKeydown}
        on:change|preventDefault={handleChange}/>
{:else}
    <input 
        class="advanced-expression"
        {id}
        {name}
        {type}
        {placeholder}
        value={value.val || ''}
        on:keydown={handleKeydown}
        on:change|preventDefault={handleChange} />
{/if}