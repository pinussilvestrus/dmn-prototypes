<script>
  import Diagram from '../../resources/diagram.svg';

  import { onMount } from 'svelte';

  import './DRD.scss';

  import dom from 'domtastic';

  function bindDecisionInteractions(decision) {
    decision.on('mouseover', () => {
      decision.addClass('hover');
    });

    decision.on('mouseout', () => {
      decision.removeClass('hover');
    });

    decision.on('click', () => {
      decision.removeClass('hover');
      decision.addClass('selected');
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
