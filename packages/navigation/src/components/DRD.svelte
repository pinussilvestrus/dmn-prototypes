<script>
  import Diagram from '../../resources/diagram.svg';

  import { onMount } from 'svelte';

  import { forEach } from 'min-dash';

  import getElement from '../util/getElement';

  import './DRD.scss';

  const DECISION = 'Decision_03absfl';

  const DATA_ELEMENTS = [
    'Decision_11xban0',
    'Decision_19jtlzt',
    'InputData_011xp5m',
    'InputData_0qarm4x',
    'InputData_13z77r8',
    'Decision_13nychf'
  ];

  const noop = () => {};

  export let onViewSwitch = noop;
  export let onHighlight = noop;

  function bindDecisionInteractions(decision) {

    // set to selected in split screen automatically
    if (onHighlight !== noop) {
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

  function bindDataInteractions(dataElement) {

    // do not do anything if not in split screen
    if (onHighlight === noop) {
      return;
    }

    dataElement.addClass('data-element');

    dataElement.on('mouseover', event => {
      dataElement.addClass('hover');
      onHighlight(dataElement);
    });

    dataElement.on('mouseout', event => {
      dataElement.removeClass('hover');
      onHighlight(dataElement);
    });
  }

  onMount(async () => {
    const decision = getElement(DECISION);
    decision.addClass('decision');
    bindDecisionInteractions(decision);

    forEach(DATA_ELEMENTS, id => {
      const dataElement = getElement(id);
      bindDataInteractions(dataElement);
    });

  });
</script>

<div class="diagram">
  {@html Diagram}
</div>
