<script>
    import { onMount, afterUpdate } from 'svelte';

    import tippy from 'sveltejs-tippy';
    import 'tippy.js/themes/light-border.css';

    import dom from 'domtastic';

    import WarningSVG from '../../../resources/warning.svg';

    import './AdvancedExpressionInput.scss';

    
    const noop = () => {};

    let inputState = 'input';
    let isModeChanging = false;

    const otherLanguageTooltip = {
      content: 'This is not a FEEL expression. Other expression languages than FEEL are not recommended any more.',
      placement: 'bottom',
      theme: 'light-border'
    };

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

      const newValue = {
        ...value,
        val,
        isMultiLine: inputState !== 'input'
      };
    
      onChange({
        target: target[0],
        value: newValue
      });
    }

    // lifecycle //////////

    onMount(async () => {
      inputState = value.isMultiLine ? 'textarea' : 'input';
    });

    afterUpdate(async () => {
      if (isModeChanging) {
        isModeChanging = false;
        const node = dom('.advanced-expression').find('textarea');
        node[0].focus();
      }
    });


    // exports //////////

    export let id;
    export let name;
    export let type;
    export let placeholder;
    export let label = 'Expression';
    export let value = {};
    export let onChange = noop;
</script>

<div class="advanced-expression">
    <label for="advancedExpression">{label}</label>
    {#if value.isNotFeelinIt}
        <span class="not-feel" use:tippy={otherLanguageTooltip}>{@html WarningSVG}</span>
    {/if}

    {#if inputState === 'textarea'}
        <textarea 
            {id}
            {name}
            {type}
            {placeholder}
            value={value.val || ''}
            on:keydown={handleKeydown}
            on:change|preventDefault={handleChange}/>
    {:else}
        <input 
            {id}
            {name}
            {type}
            {placeholder}
            value={value.val || ''}
            on:keydown={handleKeydown}
            on:change|preventDefault={handleChange} />
    {/if}
</div>