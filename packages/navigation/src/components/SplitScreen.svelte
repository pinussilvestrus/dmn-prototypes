<script>
  import dom from 'domtastic';

  import { find, forEach, filter, map } from 'min-dash';

  import { afterUpdate } from 'svelte';

  import DRD from './DRD.svelte';

  import Table from '../../../decision-table-layout/src/components/Table.svelte';

  import ExpandSvg from '../../resources/expand-solid.svg';

  import getElement from '../util/getElement';

  import './SplitScreen.scss';

  const noop = () => {};


  const HIGHLIGHT_MARKER = 'highlight';

  export let onViewSwitch = noop;
  export let onTableChange = noop;

  export let tableData = {};
  $: dataHeaderBindings = tableData.bindings;

  function setMarker(node, marker) {
    node.hasClass(marker) ? node.removeClass(marker) : node.addClass(marker);
  }

  function highlightForDrdElement(elementId) {
    const found = find(dataHeaderBindings, binding => {
      return binding.element === elementId;
    });

    found &&
      forEach(found.headerIdx, idx => {
        const header = dom(`[data-header-id="${idx}"]`);
        setMarker(header, HIGHLIGHT_MARKER);
      });
  }

  function highlightForTableHeader(tableHeaderId) {
    const found = filter(dataHeaderBindings, binding => {
      return find(binding.headerIdx, idx => idx === tableHeaderId);
    });

    if (found.length) {
      const dataElements = map(found, binding => binding.element);
      const connections = map(found, binding => binding.connection);

      forEach([...dataElements, ...connections], id => {
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

  afterUpdate(async () => {

    // cleanup markers
    forEach([...tableData.outputHeaders, ...tableData.inputHeaders], ({idx}) => {
      const header = dom(
        `[data-header-id="input-header-${idx}"], [data-header-id="output-header-${idx}"]`
      );

      header.removeClass(HIGHLIGHT_MARKER);
    });
  });
</script>

<div class="split-screen">
  <div class="drd-part">
    <span class="expand" on:click={() => onViewSwitch('drd')}>
      {@html ExpandSvg}
    </span>
    <h2 class="title">Decision Requirements</h2>
    <DRD onHighlight={highlightElements} {onTableChange} decision={tableData.id} />
  </div>
  <div class="table-part">
    <span class="expand" on:click={() => onViewSwitch('table')}>
      {@html ExpandSvg}
    </span>
    <h2 class="title">Decision Table</h2>
    <Table onHighlight={highlightElements} {tableData} />
  </div>
</div>
