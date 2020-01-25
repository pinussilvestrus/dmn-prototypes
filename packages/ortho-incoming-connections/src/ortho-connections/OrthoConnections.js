import {
    forEach
} from 'min-dash';

export default function OrthoConnections(eventBus, modeling, elementRegistry) {

    this._eventBus = eventBus;
    this._modeling = modeling;
    this._elementRegistry = elementRegistry;
}

OrthoConnections.prototype.format = function(shape) {

    var incomingConnections = shape.incoming;

    // get lower edge
    var lowerEdge = {
        start: {
            x: shape.x,
            y: shape.y + shape.height
        },
        end: {
            x: shape.x + shape.width,
            y: shape.y + shape.height
        },
        get length() { return this.end.x - this.start.x }
    }

    var self = this;

    var pieces = incomingConnections.length;

    forEach(incomingConnections, (connection, index) => {

        var waypoints = connection.waypoints;

        // todo(pinussilvestrus): from where to start?
        var newLastWaypoint = { 
            x: lowerEdge.end.x - (index + 1) * (lowerEdge.length / pieces), 
            y: lowerEdge.end.y 
        };

        var orthoWaypoint = {
            x: newLastWaypoint.x,
            y: newLastWaypoint.y + 20
        };

        var newWaypoints = [
            ...waypoints.slice(0, waypoints.length - 1),
            orthoWaypoint,
            newLastWaypoint
        ];

        self._modeling.updateWaypoints(connection, newWaypoints);
    });
}

OrthoConnections.$inject = [ 'eventBus', 'modeling', 'elementRegistry' ];