<script>
  import { onMount, afterUpdate } from 'svelte';

  import { filter, forEach } from 'min-dash';

  import dom from 'domtastic';

  import getElement from '../util/getElement';

  import Diagram from '../../resources/diagram.svg';

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


  // lifecycle //////////

  onMount(async () => {

    const decisionElements = filter(DATA_ELEMENTS, e => isDecision(getElement(e)));

    forEach(decisionElements, id => {
      const _decision = getElement(id);
      _decision.addClass('decision');
      addTableIcon(_decision);
    });

    if (isSplitScreen()) {

      forEach(DATA_ELEMENTS, id => {
        const dataElement = getElement(id);
        bindDataInteractions(dataElement);
      });
  
    } else {

      forEach(decisionElements, id => {
        const _decision = getElement(id);
        bindDecisionInteractions(_decision);
      });

    }

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


  // methods //////////

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

    decision.on('dblclick', event => {
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

  function addTableIcon(decision) {
    const tableIconBox = createSVGNode('g', {
      'pointer-events': 'all',
      class: 'dt-icon',
      cursor: isSplitScreen() ? 'normal' : 'pointer'
    });

    const rect = createSVGNode('rect', {
      x: 0,
      y: 0,
      transform: 'translate (2, 2)',
      width: 20,
      height: 20,
      fill:  isSplitScreen() ? 'none' : '#52B415'
    });

    const icon = createSVGNode('path', {
      fill: isSplitScreen() ? 'black' : 'white',
      transform: 'scale (0.025) translate (200, 200)',
      d: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z'
    });

    !isSplitScreen() && dom(tableIconBox).on('click', () => {
      onTableChange(decision.attr('data-element-id'));
      onViewSwitch('split-screen');
    });

    tableIconBox.append(rect);
    tableIconBox.append(icon);
    decision.append(tableIconBox);
  }


  // exports //////////

  export let decision = 'Decision_03absfl';
  export let onViewSwitch = noop;
  export let onHighlight = noop;
  export let onTableChange = noop;


  // helpers //////////

  function isDecision(dataElement) {
    return dataElement.attr('data-element-id').includes('Decision_');
  }

  function isSplitScreen() {
    return onHighlight !== noop;
  }

  function createSVGNode(n, v = {}) {
    n = document.createElementNS('http://www.w3.org/2000/svg', n);
    for (var p in v) {
      n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) { return '-' + m.toLowerCase(); }), v[p]);
    }
    return n;
  }
</script>

<div class="diagram">
  {@html Diagram}
</div>
