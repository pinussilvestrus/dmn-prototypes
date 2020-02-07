/* global document */

/* eslint-disable-next-line */
import $ from 'jquery';

export default class NewInputConnection {

  constructor(options) {
    this._svgContainer = options.svgContainer;
    this._onUpdateInputs = options.onUpdateInputs;
  }

  render() {
    this.showNewInput();
  }

  showInput(text) {
    const inputGfx = this._svgContainer.find('[data-element-id="InputData_13z77r8"]');
    inputGfx.css('display', 'block');
    inputGfx.find('text').css('display', 'block');

    if (typeof text !== 'undefined') {
      const textGfx = inputGfx.find('text');

      textGfx.empty();

      $(SVG('tspan'))
        .attr('x', '19.47')
        .attr('y','25')
        .html(text)
        .appendTo(textGfx);
    }

    const newInputGfx = this._svgContainer.find('.new-input-data');
    newInputGfx.css('display', 'none');
  }

  showConnection() {
    const connectionGfx = this._svgContainer.find('[data-element-id="connection_147"]');
    connectionGfx.css('display', 'block');

    const newConnectionGfx = this._svgContainer.find('.new-connection');
    newConnectionGfx.css('display', 'none');
  }

  showNewInput() {
    const self = this;

    const newInputGfx = this._svgContainer.find('.new-input-data');

    newInputGfx.css('display', 'block');

    newInputGfx.click(() => {
      self.showInput();
      self.showNewConnection();
    });
  }

  showNewConnection() {
    const self = this;

    const newConnectionGfx = this._svgContainer.find('.new-connection');

    newConnectionGfx.css('display', 'block');

    newConnectionGfx.find('tspan').click(() => {
      self.showConnection();
      this._onUpdateInputs();
    });
  }


}

// helpers ////////////////

/* eslint-disable-next-line */
function SVG(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}