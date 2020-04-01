
<script>
  import dom from 'domtastic';

  import './ResizableColumnWrapper.scss';

  const RESIZE_MARKER = 'resizing';

  let startX;
  let startWidth;

  function handleInitResize(event) {
    const rootNode = getRootElement(event);

    startX = event.pageX;
    startWidth = rootNode[0].getBoundingClientRect().width;

    rootNode.addClass(RESIZE_MARKER);

    rootNode.on('mousemove', handleResize);
    rootNode.on('mouseup', handleEndResize);
  }

  function handleResize(event) {
    const rootNode = getRootElement(event);

    const delta = event.pageX - startX;

    rootNode[0].style.width = startWidth + delta + 'px';
  }

  function handleEndResize(event) {
    const rootNode = getRootElement(event);

    rootNode.removeClass(RESIZE_MARKER);

    rootNode.off('mouseup', handleEndResize);
    rootNode.off('mousemove', handleResize);
  }


  // helpers //////////

  function getRootElement(event) {
    return dom(event.target).closest('.resizable-column-wrapper');
  }

</script>

<div class="resizable-column-wrapper" on:mousedown={handleInitResize}>
  <slot/>
  <!-- <div 
    class="resize-handler"
    on:mousedown={handleInitResize} /> -->
</div>