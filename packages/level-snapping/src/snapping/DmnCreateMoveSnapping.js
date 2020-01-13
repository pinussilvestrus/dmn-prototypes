import inherits from "inherits";

import CreateMoveSnapping from "diagram-js/lib/features/snapping/CreateMoveSnapping";

/**
 * Snap during create and move.
 *
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */
export default function DmnCreateMoveSnapping(injector) {
  injector.invoke(CreateMoveSnapping, this);
}

inherits(DmnCreateMoveSnapping, CreateMoveSnapping);

DmnCreateMoveSnapping.$inject = ["injector"];

DmnCreateMoveSnapping.prototype.addSnapTargetPoints = function(snapPoints, shape, target) {
  // CreateMoveSnapping.prototype.addSnapTargetPoints.call(this, snapPoints, shape, target);

  // snap levels
  snapPoints.add("mid", { y: 150, x: 0 });

  snapPoints.add("mid", { y: 300, x: 0 });

  snapPoints.add("mid", { y: 450, x: 0 });

  snapPoints.add("mid", { y: 600, x: 0 });

  return snapPoints;
};
