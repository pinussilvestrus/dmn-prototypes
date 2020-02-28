<script>
  import Diagram from '../../resources/diagram.svg';

  import { onMount } from 'svelte';

  import dom from 'domtastic';

  import { forEach } from 'min-dash';

  import getElement from '../util/getElement';

  import './DRD.scss';

  const DECISION = 'Decision_03absfl';

  const INPUT_DATA_ELEMENTS = [
    'Decision_11xban0',
    'Decision_19jtlzt',
    'InputData_011xp5m',
    'InputData_0qarm4x',
    'InputData_13z77r8'
  ];

  const noop = () => {};

  export let onViewSwitch = noop;
  export let onHighlight = noop;

  function bindDecisionInteractions(decision) {

    // set to selected in split screen automatically
    if(onHighlight !== noop) {
      decision.addClass('selected');
    }

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

  function bindInputDataInteractions(inputData) {

    // do not do anything if not in split screen
    if(onHighlight === noop) {
      return;
    }

    inputData.addClass('inputData');

    inputData.on('mouseover', event => {
      inputData.addClass('hover');
      onHighlight(inputData);
    });

    inputData.on('mouseout', event => {
      inputData.removeClass('hover');
      onHighlight(inputData);
    });
  }

  onMount(async () => {
    const decision = getElement(DECISION);
    decision.addClass('decision');
    bindDecisionInteractions(decision);

    forEach(INPUT_DATA_ELEMENTS, id => {
      const inputData = getElement(id);
      bindInputDataInteractions(inputData);
    })

  });
</script>

<div class="diagram">
  {@html Diagram}
</div>
