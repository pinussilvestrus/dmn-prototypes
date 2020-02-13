import $ from 'jquery';

import TextUtil from 'diagram-js/lib/util/Text';

const LABEL_STYLE = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '12px'
};

export default class NewInputConnection {

  constructor(options) {
    this._svgContainer = options.svgContainer;
    this._onUpdateInputs = options.onUpdateInputs;

    this._textUtil = new TextUtil({
      style: LABEL_STYLE,
      size: { width: 100 }
    });
  }

  render() {
    this.showNewInput();
  }

  showInput(text) {
    const inputGfx = this._svgContainer.find('[data-element-id="InputData_13z77r8"]');
    inputGfx.css('display', 'block');

    if (typeof text !== 'undefined') {

      const newText = this._textUtil.createText(text, {
        box: { width: 125, height: 45 },
        align: 'center-middle',
        padding: 5
      });

      $(newText).addClass('djs-label');

      inputGfx.find('text').remove();

      inputGfx.find('.djs-visual').append(newText);
    }

    this.hideNewInput();
  }

  hideNewInput() {
    const newInputGfx = this._svgContainer.find('.new-input-data');
    newInputGfx.css('display', 'none');
  }

  hideNewConnection() {
    const newConnectionGfx = this._svgContainer.find('.new-connection');
    newConnectionGfx.css('display', 'none');
  }

  showConnection() {
    const connectionGfx = this._svgContainer.find('[data-element-id="connection_147"]');
    connectionGfx.css('display', 'block');

    this.hideNewConnection();
  }

  showNewInput() {
    const self = this;

    const newInputGfx = this._svgContainer.find('.new-input-data');

    newInputGfx.css('display', 'block');

    newInputGfx.click(() => {
      self.showInput('Open Claims');
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