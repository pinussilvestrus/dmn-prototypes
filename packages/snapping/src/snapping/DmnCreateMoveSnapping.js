import inherits from "inherits";

import CreateMoveSnapping from "diagram-js/lib/features/snapping/CreateMoveSnapping";

import {
  isSnapped,
  setSnapped,
  topLeft,
  bottomRight
} from "diagram-js/lib/features/snapping/SnapUtil";

import { asTRBL, getMid } from "diagram-js/lib/layout/LayoutUtil";

import { forEach } from "min-dash";

const HIGH_PRIORITY = 1500;

/**
 * Snap during create and move.
 *
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */
export default function DmnCreateMoveSnapping(eventBus, injector) {
  injector.invoke(CreateMoveSnapping, this);
}

inherits(DmnCreateMoveSnapping, CreateMoveSnapping);

DmnCreateMoveSnapping.$inject = ["eventBus", "injector"];

DmnCreateMoveSnapping.prototype.addSnapTargetPoints = function(snapPoints, shape, target) {
  // CreateMoveSnapping.prototype.addSnapTargetPoints.call(this, snapPoints, shape, target);

  // snap levels
  snapPoints.add("mid", { y: 300, x: 0 });

  snapPoints.add("mid", { y: 450, x: 0 });

  snapPoints.add("mid", { y: 600, x: 0 });

  return snapPoints;
};
