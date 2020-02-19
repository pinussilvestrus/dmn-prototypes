import { forEach } from 'min-dash';

import getElement from '../../util/getElement';

import './MissingConnections.scss';

export default class MissingConnections {
  constructor(options) {
    this._onAddMissingConnection = options.onAddMissingConnection;

    this.setConnections(options.connections || []);
  }

  setConnections(connections) {
    this._connections = connections;

    forEach(this._connections, c => {
      const element = getElement(c);
      element.addClass('ghost');
    });
  }

  show() {
    forEach(this._connections, c => {
      const element = getElement(c);
      element.css('display', 'block');
    });
  }

  hide() {
    forEach(this._connections, c => {
      const element = getElement(c);
      element.css('display', 'none');
    });
  }

  addConnection(connection) {
    this._onAddMissingConnection?.(connection);
  }
}