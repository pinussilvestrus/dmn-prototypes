import inherits from 'inherits';

import CreateMoveSnapping from 'diagram-js/lib/features/snapping/CreateMoveSnapping';

import {
  isSnapped,
  setSnapped,
  topLeft,
  bottomRight
} from 'diagram-js/lib/features/snapping/SnapUtil';

import {
  asTRBL,
  getMid
} from 'diagram-js/lib/layout/LayoutUtil';

import { forEach } from 'min-dash';

const HIGH_PRIORITY = 1500;

/**
 * Snap during create and move.
 *
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */
export default function DmnCreateMoveSnapping(eventBus, injector) {
  injector.invoke(CreateMoveSnapping, this);

  // snap on levels
  eventBus.on([
    'create.move',
    'create.end',
    'shape.move.move',
    'shape.move.end'
  ], HIGH_PRIORITY, function(event) {
    // var context = event.context,
    //     canExecute = context.canExecute,
    //     target = context.target;

    // var canAttach = canExecute && (canExecute === 'attach' || canExecute.attach);

    // if (canAttach && !isSnapped(event)) {
    //   snapBoundaryEvent(event, target);
    // }

    console.log(event);
  });
}

inherits(DmnCreateMoveSnapping, CreateMoveSnapping);

DmnCreateMoveSnapping.$inject = [
  'eventBus',
  'injector'
];

// helpers //////////

function snapBoundaryEvent(event, target) {
  var targetTRBL = asTRBL(target);

  var direction = getBoundaryAttachment(event, target);

  var context = event.context,
      shape = context.shape;

  var offset;

  if (shape.parent) {
    offset = { x: 0, y: 0 };
  } else {
    offset = getMid(shape);
  }

  if (/top/.test(direction)) {
    setSnapped(event, 'y', targetTRBL.top - offset.y);
  } else if (/bottom/.test(direction)) {
    setSnapped(event, 'y', targetTRBL.bottom - offset.y);
  }

  if (/left/.test(direction)) {
    setSnapped(event, 'x', targetTRBL.left - offset.x);
  } else if (/right/.test(direction)) {
    setSnapped(event, 'x', targetTRBL.right - offset.x);
  }
}

function areAll(elements, type) {
  return elements.every(function(el) {
    return is(el, type);
  });
}

function isContainer(element) {
  if (is(element, 'bpmn:SubProcess') && isExpanded(element)) {
    return true;
  }

  return is(element, 'bpmn:Participant');
}


function setSnappedIfConstrained(event) {
  var context = event.context,
      createConstraints = context.createConstraints;

  if (!createConstraints) {
    return;
  }

  var top = createConstraints.top,
      right = createConstraints.right,
      bottom = createConstraints.bottom,
      left = createConstraints.left;

  if ((left && left >= event.x) || (right && right <= event.x)) {
    setSnapped(event, 'x', event.x);
  }

  if ((top && top >= event.y) || (bottom && bottom <= event.y)) {
    setSnapped(event, 'y', event.y);
  }
}

function includes(array, value) {
  return array.indexOf(value) !== -1;
}
