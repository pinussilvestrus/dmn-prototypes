
<script>
  import dom from 'domtastic';

  import './ResizableColumnWrapper.scss';

  const RESIZING_MARKER = 'resizing';
  const RESIZED_MARKER = 'resized';

  const noop = () => {};

  let startX;
  let startWidth;

  function handleInitResize(event) {
  
    if (!isRootElement(event)) {
      return;
    }

    // check event on right border
    if (!isOnRightBorder(event)) {
      return;
    }

    const rootNode = getRootElement(event);

    startX = event.pageX;
    startWidth = rootNode[0].getBoundingClientRect().width;

    rootNode.addClass(RESIZING_MARKER);

    rootNode.on('mousemove', handleResize);
    rootNode.on('mouseup', handleEndResize);

    onResizeStart();
  }

  function handleResize(event) {
    const rootNode = getRootElement(event);

    // (1) resize header
    const delta = event.pageX - startX;
    rootNode[0].style.width = startWidth + delta + 'px';

    // (2) switch to <resized> mode
    rootNode.addClass(RESIZED_MARKER);

    // (3) ellipsize if needed
    onTextBoxOverflow(getExpressionElement(event), header.expression);
  }

  function handleEndResize(event) {
    const rootNode = getRootElement(event);

    rootNode.removeClass(RESIZING_MARKER);

    rootNode.off('mouseup', handleEndResize);
    rootNode.off('mousemove', handleResize);

    onResizeEnd();
  }


  // exports //////////

  export let onResizeEnd = noop;
  export let onResizeStart = noop;
  export let onTextBoxOverflow = noop;
  export let header = {};


  // helpers //////////

  function isOnRightBorder(event) {
    const rootElement = getRootElement(event);
    return event.offsetX >= rootElement[0].getBoundingClientRect().width - 20;
  }

  function isRootElement(event) {
    return dom(event.target).hasClass('advanced-resizable-column-wrapper');
  }

  function getRootElement(event) {
    return dom(event.target).closest('.advanced-resizable-column-wrapper');
  }

  function getExpressionElement(event) {
    const rootElement = getRootElement(event);
    return rootElement.find('.expression');
  }

</script>

<div class="advanced-resizable-column-wrapper" on:mousedown={handleInitResize}>
  <slot/>
</div>