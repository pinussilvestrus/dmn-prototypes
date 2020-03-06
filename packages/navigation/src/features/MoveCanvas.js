import dom from 'domtastic';

export default class MoveCanvas {

  constructor(node) {
    this._node = dom(node);
  }

  scrollNode(delta = {}) {

    const {
      x,
      y
    } = delta;

    if (!x || !y) {
      return;
    }

    const diagram = this._node.children();

    const viewbox = diagram.attr('viewBox');

    const split = viewbox.split(' ');

    // transform delta
    const scrollDelta = {
      x: -1 * x * 2,
      y: -1 * y * 2
    };

    const newViewBox = `${parseInt(split[0]) + scrollDelta.x} ${parseInt(split[1]) + scrollDelta.y} ${split[2]} ${split[3]}`;

    diagram.attr('viewBox', newViewBox);
  }

  move(event) {

    if (!this._start) {
      return;
    }

    const position = toPoint(event);

    const lastPosition = this._last || this._start;

    const delta = deltaPos(position, lastPosition);

    this.scrollNode(delta);

    this._last = position;
  }

  zoomDiagram() {
    const diagram = this._node.children();
    diagram.attr('viewBox', '200 50 800 900');
  }

  unbind() {
    this._node.off('mousemove', this.move);
    this._start = null;
    this._last = null;
  }

  init() {
    this._node.on('mousedown', event => {
      this._start = toPoint(event);

      this._node.on('mousemove', e => this.move(e));
      this._node.on('mouseup', _ => this.unbind());
    });
  }

}


// helpers //////////

function toPoint(event) {

  if (event.pointers && event.pointers.length) {
    event = event.pointers[0];
  }

  if (event.touches && event.touches.length) {
    event = event.touches[0];
  }

  return event ? {
    x: event.clientX,
    y: event.clientY
  } : null;
}

function deltaPos(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}