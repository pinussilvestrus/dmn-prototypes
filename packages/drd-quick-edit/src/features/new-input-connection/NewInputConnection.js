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
    this._input = options.input || 'InputData_13z77r8';
    this._connection = options.connection || 'connection_147';
    this._decision = options.decision || 'new_decision';
    this._decisionConnection = options.decisionConnection || 'new_connection';

    this._textUtil = new TextUtil({
      style: LABEL_STYLE,
      size: { width: 100 }
    });
  }

  render() {
    this.showNewInput();
  }

  showDecision(text) {
    const decisionGfx = this._svgContainer.find(`[data-element-id="${this._decision}"]`);
    decisionGfx.css('display', 'block');

    if (typeof text !== 'undefined') {

      const newText = this._textUtil.createText(text, {
        box: { width: 180, height: 80 },
        align: 'center-middle',
        padding: 5
      });

      $(newText).addClass('djs-label');

      decisionGfx.find('text').remove();

      decisionGfx.find('.djs-visual').append(newText);
    }
  }

  showInput(text) {
    const inputGfx = this._svgContainer.find(`[data-element-id="${this._input}"]`);
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
    const connectionGfx = this._svgContainer.find(`[data-element-id="${this._connection}"]`);
    connectionGfx.css('display', 'block');

    this.hideNewConnection();
  }

  showDecisionConnection() {
    const connectionGfx = this._svgContainer.find(`[data-element-id="${this._decisionConnection}"]`);
    connectionGfx.css('display', 'block');
  }

  showNewInput() {
    const self = this;

    const newInputGfx = this._svgContainer.find('.new-input-data');

    newInputGfx.css('display', 'block');

    newInputGfx.click(() => {
      self.showInput('Open Claims');
      self.renderNewConnection();
    });
  }

  showNewConnection() {
    const newConnectionGfx = this._svgContainer.find('.new-connection');
    newConnectionGfx.css('display', 'block');
  }

  renderNewConnection() {
    const self = this;

    const newConnectionGfx = this._svgContainer.find('.new-connection');

    this.showNewConnection();

    newConnectionGfx.find('tspan').click(() => {
      self.showConnection();
      this._onUpdateInputs();
    });
  }

}