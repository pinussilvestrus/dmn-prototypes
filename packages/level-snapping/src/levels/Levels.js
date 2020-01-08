import {
    domify
} from 'min-dom';

import {
    forEach
} from 'min-dash';

export default function Levels(eventBus, canvas) {

    this._eventBus = eventBus;
    this._canvas = canvas;

    const self = this;

    this._eventBus.on('diagram.init', function(e) {
        self._init();
    });
}

Levels.prototype._init = function() {
    const container = this._container = domify(Levels.HTML_MARKUP);

    const parentContainer = this.getParentContainer();

    forEach(Levels.LEVELS, function(l) {
        const level = domify(`<p>${l.idx}</p>`);

        level.style.cssText = `position: relative; top: ${l.lineHeight}; left: 20px`;

        container.appendChild(level);
    });

    parentContainer.appendChild(container);
}

Levels.prototype.getParentContainer = function() {
    return this._canvas.getContainer();
}

Levels.HTML_MARKUP = '<div class="dmn-js-levels"></div'

Levels.LEVELS = [
    {
        idx: 1,
        lineHeight: '200px'
    }
]

Levels.$inject = [ 'eventBus', 'canvas' ];