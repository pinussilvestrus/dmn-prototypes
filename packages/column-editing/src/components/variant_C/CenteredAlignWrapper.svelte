<script>
    import ResizableColumnWrapper from '../shared/ResizableColumnWrapper';

    import './CenteredAlignWrapper.scss';

    const noop = () => {};
    
    // exports //////////

    export let onResizeEnd = noop;
    export let onResizeStart = noop;
</script>

<div class="centered-align-wrapper">
    <ResizableColumnWrapper {onResizeStart} {onResizeEnd}>
        <slot/>
    </ResizableColumnWrapper>
</div>