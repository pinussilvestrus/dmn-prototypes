<script>
  import dom from 'domtastic';

  import { find, forEach } from 'min-dash';

  import DRD from './DRD.svelte';

  import Table from '../../../decision-table-layout/src/components/Table.svelte';

  import ExpandSvg from '../../resources/expand-solid.svg';

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

  // handles highlighting + unhighlighting
  function highlightElements(hovered) {
      const elementId = hovered.attr('data-element-id');

      const found = find(DATA_HEADER_BINDINGS, binding => {
          return binding.element === elementId;
      });

      found && forEach(found.headerIdx, idx => {
          const header = dom(`[data-header-id="${idx}"]`);
          setMarker(header, HIGHLIGHT_MARKER)
      });
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
    <Table />
  </div>
</div>
