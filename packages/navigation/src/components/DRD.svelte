<script>
  import Diagram from '../../resources/diagram.svg';

  import { onMount, afterUpdate } from 'svelte';

  import { filter, forEach } from 'min-dash';

  import getElement from '../util/getElement';

  import './DRD.scss';

  // todo(pinussilvestrus): maybe move to global data
  const DATA_ELEMENTS = [
    'Decision_11xban0',
    'Decision_19jtlzt',
    'InputData_011xp5m',
    'InputData_0qarm4x',
    'InputData_13z77r8',
    'Decision_13nychf',
    'Decision_03absfl',
    'InputData_1vzqswv',
    'InputData_1x2qw0w'
  ];

  const noop = () => {};

  export let decision = 'Decision_03absfl';
  export let onViewSwitch = noop;
  export let onHighlight = noop;
  export let onTableChange = noop;

  function bindDecisionInteractions(decision) {
  
    // do not do it on split screen
    if (onHighlight !== noop) {
      return;
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

      onTableChange(decision.attr('data-element-id'));
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

    isDecision(dataElement) &&
      dataElement.on('click', event => {
        onTableChange(dataElement.attr('data-element-id'));
      });
  }

  onMount(async () => {
    forEach(filter(DATA_ELEMENTS, e => isDecision(getElement(e))), id => {
      const _decision = getElement(id);
      _decision.addClass('decision');
      bindDecisionInteractions(_decision);
    });

    forEach(DATA_ELEMENTS, id => {
      const dataElement = getElement(id);
      bindDataInteractions(dataElement);
    });
  });

  afterUpdate(async () => {
  
    // remove selected from all decisions first
    forEach(DATA_ELEMENTS, id => {
      const dataElement = getElement(id);
      dataElement.removeClass('selected');
    });

    if (onHighlight !== noop) {
      getElement(decision).addClass('selected');
    }

  });

  // helpers //////////////

  function isDecision(dataElement) {
    return dataElement.attr('data-element-id').includes('Decision_');
  }
</script>

<div class="diagram">
  {@html Diagram}
</div>
