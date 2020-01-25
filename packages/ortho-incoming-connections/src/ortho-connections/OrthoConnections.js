import { forEach } from "min-dash";

export default function OrthoConnections(eventBus, modeling, elementRegistry) {
  this._eventBus = eventBus;
  this._modeling = modeling;
  this._elementRegistry = elementRegistry;
}

OrthoConnections.prototype.format = function(shape) {
  const incomingConnections = shape.incoming;

  // get lower edge
  const lowerEdge = {
    start: {
      x: shape.x,
      y: shape.y + shape.height
    },
    end: {
      x: shape.x + shape.width,
      y: shape.y + shape.height
    },
    get length() {
      return this.end.x - this.start.x;
    }
  };

  const self = this;

  const pieces = incomingConnections.length

  // sort connected decisions from left to right with bubble sort
  for (let i = 0; i < incomingConnections.length ; i++) {

    for (let j = 0 ; j < incomingConnections.length - i - 1; j++) {

    if (incomingConnections[j].source.x > incomingConnections[j + 1].source.x) {

      // swap
      const temp = incomingConnections[j];
      incomingConnections[j] = incomingConnections[j+1];
      incomingConnections[j + 1] = temp;
    }
   }
  };

  forEach(incomingConnections, (connection, index) => {
    const waypoints = connection.waypoints;

    const newLastWaypoint = {
      x: lowerEdge.start.x + (index + 1) * (lowerEdge.length / pieces),
      y: lowerEdge.start.y
    };

    const orthoWaypoint = {
      x: newLastWaypoint.x,
      y: newLastWaypoint.y + 20
    };

    const newWaypoints = [
      ...waypoints.slice(0, waypoints.length - 1),
      orthoWaypoint,
      newLastWaypoint
    ];

    self._modeling.updateWaypoints(connection, newWaypoints);
  });
};

OrthoConnections.$inject = ["eventBus", "modeling", "elementRegistry"];
