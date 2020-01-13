import {
    domify
} from 'min-dom';

import {
    forEach
} from 'min-dash';

const LOW_PRIORITY = 100;

export default function Levels(eventBus, canvas, overlays) {

    this._eventBus = eventBus;
    this._canvas = canvas;
    this._overlays = overlays;

    const self = this;

    this._eventBus.on('import.done', LOW_PRIORITY, function(e) {
        self._init();
    });
}

Levels.prototype._init = function() {
    const container = this._container = domify(Levels.HTML_MARKUP);

    const rootElement = this._canvas.getRootElement();

    forEach(Levels.LEVELS, function(l) {
        const level = domify(`<p>${l.idx}</p>`);

        level.style.cssText = `position: absolute; top: ${l.lineHeight}; left: 20px`;

        container.appendChild(level);
    });

    this._overlays.add(rootElement, {
        position: {
          top: 2,
          left: 2
        },
        html: container
    });
}

Levels.prototype.getParentContainer = function() {
    return this._canvas.getContainer();
}

Levels.HTML_MARKUP = '<div class="dmn-js-levels"></div'

Levels.LEVELS = [
    {
        idx: 0,
        lineHeight: '123px'
    },
    {
        idx: 1,
        lineHeight: '273px'
    },
    {
        idx: 2,
        lineHeight: '423px'
    },
    {
        idx: 3,
        lineHeight: '573px'
    }

]

Levels.$inject = [ 'eventBus', 'canvas', 'overlays' ];