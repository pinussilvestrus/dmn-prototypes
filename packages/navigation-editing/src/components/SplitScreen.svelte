<script>
  import dom from 'domtastic';

  import { find, forEach, filter, map } from 'min-dash';

  import { afterUpdate, onMount } from 'svelte';

  import MicroModal from 'micromodal';

  import DRD from '../../../navigation/src/components/DRD.svelte';

  import PropertiesModal from '../../../navigation/src/components/PropertiesModal.svelte';

  import Table from '../../../column-editing/src/components/variant_A/Table_A';

  import CollapseSVG from '../../resources/arrow-collapse.svg';

  import getElement from '../util/getElement';

  import MoveCanvas from '../../../navigation/src/features/MoveCanvas';

  import './SplitScreen.scss';

  const noop = () => {};

  const HIGHLIGHT_MARKER = 'highlight';

  $: dataHeaderBindings = tableData.bindings;


  // methods //////////

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


  // lifecycle //////////

  onMount(async () => {
    const moveCanvas = new MoveCanvas('.diagram');
    moveCanvas.init();
    moveCanvas.zoomDiagram();

    MicroModal.init();
    const emptyCell = dom('.empty-cell');
    emptyCell.attr('data-micromodal-trigger', 'modal-1');
    emptyCell.on('dblclick', () => {
      MicroModal.show('modal-1');
    });
  });
  
  afterUpdate(async () => {

    // cleanup markers
    forEach([...tableData.outputHeaders, ...tableData.inputHeaders], ({ idx }) => {
      const header = dom(
        `[data-header-id="${idx}"], [data-header-id="${idx}"]`
      );

      header.removeClass(HIGHLIGHT_MARKER);
    });
  });


  // exports

  export let onViewSwitch = noop;
  export let onTableChange = noop;
  export let onUpdateTableData = noop;
  export let tableData = {};

</script>

<div class="split-screen">
  <div class="drd-part">
    <button class="edit-drd btn" on:click={() => onViewSwitch('drd')}>
      Edit DRD
    </button>
    <div class="drd">
      <DRD onHighlight={highlightElements} {onTableChange} decision={tableData.id} />
    </div>
    <div class="collapse btn btn-sticky" on:click={() => onViewSwitch('table')}>
      {@html CollapseSVG}
    </div>
  </div>
  <div class="split"></div>
  <div class="table-part">
    <Table onHighlight={highlightElements} {onUpdateTableData} {tableData} />
  </div>
  <PropertiesModal />
</div>
