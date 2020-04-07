<script>
    import { onMount, afterUpdate } from 'svelte';

    import tippy from 'sveltejs-tippy';
    import 'tippy.js/themes/light-border.css';

    import autosize from 'autosize';

    import dom from 'domtastic';

    import './AdvancedExpressionInput.scss';

    
    const noop = () => {};

    let inputState = 'textarea';
    let isModeChanging = false;

    const otherLanguageTooltip = {
      content: 'This is not a FEEL expression. Other expression languages than FEEL are not recommended any more. <br/><br/><a>Change expression language to FEEL</a>',
      placement: 'bottom',
      theme: 'light-border',
      duration: 500,
      hideOnClick: true,
      allowHTML: true
    };

    function adjustTextBoxSize() {
      if (inputState === 'textarea') {
        const node = getTextAreaNode()[0];
        autosize(node);
      }
    }

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

    function handleTextBoxKeyup(event) {
      adjustTextBoxSize();
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
        const node = getTextAreaNode();
        node[0].focus();
      }

      adjustTextBoxSize();
    });


    // exports //////////

    export let id;
    export let name;
    export let type;
    export let placeholder;
    export let label = 'Expression';
    export let value = {};
    export let onChange = noop;


    // helpers //////////

    function getTextAreaNode() {
      return dom('.advanced-expression').find('textarea');
    }
</script>

<div class="advanced-expression">
    <label for="advancedExpression">
        {label}{#if value.isNotFeelinIt}<span class="not-feel" use:tippy={otherLanguageTooltip}> {value.expressionLanguage} (deprecated)</span>{/if}
    </label>

    {#if inputState === 'textarea'}
        <textarea 
            {id}
            {name}
            {type}
            {placeholder}
            value={value.val || ''}
            on:keydown={handleKeydown}
            on:keyup={handleTextBoxKeyup}
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