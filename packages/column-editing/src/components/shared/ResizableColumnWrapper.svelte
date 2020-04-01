
<script>
  import dom from 'domtastic';

  import { forEach } from 'min-dash';

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

    const delta = event.pageX - startX;

    rootNode[0].style.width = startWidth + delta + 'px';

    // switch resize mode
    const expressionNode = getExpressionElement(event);
    expressionNode.addClass(RESIZED_MARKER);

    // please do not do such stuff in real life
    resizeSiblings(event);
  }

  function resizeSiblings(event) {
    const rootElement = getRootElement(event);

    forEach(dom('.resize-wrapper'), wrapper => {
      if (!wrapper.style || isRootElement({ target: wrapper })) {
        return;
      }
  
      console.log(wrapper.style.height);
      wrapper.style.height = rootElement[0].getBoundingClientRect().height + 'px';
    });
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


  // helpers //////////

  function isOnRightBorder(event) {
    const rootElement = getRootElement(event);
    return event.offsetX >= rootElement[0].getBoundingClientRect().width - 20;
  }

  function isRootElement(event) {
    return dom(event.target).hasClass('resizable-column-wrapper');
  }

  function getRootElement(event) {
    return dom(event.target).closest('.resizable-column-wrapper');
  }

  function getExpressionElement(event) {
    const rootElement = getRootElement(event);
    return rootElement.find('.expression');
  }

</script>

<div class="resize-wrapper resizable-column-wrapper" on:mousedown={handleInitResize}>
  <slot/>
</div>