<script>
  import Diagram from '../../resources/diagram.svg';

  import { onMount } from 'svelte';

  import './DRD.scss';

  import dom from 'domtastic';

  const noop = () => {};

  export let onViewSwitch = noop;

  function bindDecisionInteractions(decision) {
    decision.on('mouseover', () => {
      decision.addClass('hover');
    });

    decision.on('mouseout', () => {
      decision.removeClass('hover');
    });

    decision.on('click', event => {
      event.stopPropagation();
      event.preventDefault();

      decision.removeClass('hover');
      decision.addClass('selected');

      onViewSwitch('split-screen');
    });
  }

  onMount(async () => {
    const decision = dom('[data-element-id="Decision_03absfl"]');
    decision.addClass('decision');
    bindDecisionInteractions(decision);
  });
</script>

<div class="diagram">
  {@html Diagram}
</div>
