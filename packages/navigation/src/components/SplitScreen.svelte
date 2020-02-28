<script>
  import dom from 'domtastic';

  import { find, forEach, filter, map } from 'min-dash';

  import DRD from './DRD.svelte';

  import Table from '../../../decision-table-layout/src/components/Table.svelte';

  import ExpandSvg from '../../resources/expand-solid.svg';

  import getElement from '../util/getElement';

  import './SplitScreen.scss';

  const noop = () => {};

  const DATA_HEADER_BINDINGS = [
    {
      element: 'InputData_0qarm4x',
      headerIdx: ['input-header-1', 'input-header-2']
    },
    {
      element: 'Decision_11xban0',
      headerIdx: ['input-header-4']
    },
    {
      element: 'Decision_19jtlzt',
      headerIdx: ['input-header-3']
    },
    {
      element: 'InputData_011xp5m',
      headerIdx: ['input-header-1']
    },
    {
      element: 'InputData_13z77r8',
      headerIdx: ['input-header-0']
    },
    {
      element: 'Decision_13nychf',
      headerIdx: ['output-header-0']
    }
  ];

  const HIGHLIGHT_MARKER = 'highlight';

  export let onViewSwitch = noop;

  function setMarker(node, marker) {
    node.hasClass(marker) ? node.removeClass(marker) : node.addClass(marker);
  }

  function highlightForDrdElement(elementId) {
    const found = find(DATA_HEADER_BINDINGS, binding => {
      return binding.element === elementId;
    });

    found && forEach(found.headerIdx, idx => {
      const header = dom(`[data-header-id="${idx}"]`);
      setMarker(header, HIGHLIGHT_MARKER);
    });
  }

  function highlightForTableHeader(tableHeaderId) {
    const found = filter(DATA_HEADER_BINDINGS, binding => {
      return find(binding.headerIdx, idx => idx === tableHeaderId);
    });

    if (found.length) {
      const dataElements = map(found, binding => binding.element);
  
      forEach(dataElements, id => {
        const element = getElement(id);
        setMarker(element, HIGHLIGHT_MARKER);
      });
    }
  }

  // handles highlighting + unhighlighting
  function highlightElements(hovered) {
    const elementId = hovered.attr('data-element-id');
    const tableHeaderId = hovered.attr('data-header-id');

    // (1) drd elements
    if (elementId) {
      return highlightForDrdElement(elementId);
    }

    // (2) table headers
    return highlightForTableHeader(tableHeaderId);
  }
</script>

<div class="split-screen">
  <div class="drd-part">
    <span class="expand" on:click={() => onViewSwitch('drd')}>
      {@html ExpandSvg}
    </span>
    <h2 class="title">Decision Requirements</h2>
    <DRD onHighlight={highlightElements}/>
  </div>
  <div class="table-part">
    <span class="expand" on:click={() => onViewSwitch('table')}>
      {@html ExpandSvg}
    </span>
    <h2 class="title">Decision Table</h2>
    <Table onHighlight={highlightElements} />
  </div>
</div>
