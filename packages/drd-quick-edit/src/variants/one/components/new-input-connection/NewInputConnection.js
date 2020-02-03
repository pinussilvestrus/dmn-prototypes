export default class NewInputConnection {

  constructor(options) {
    this._svgContainer = options.svgContainer;
    this._onUpdateInputs = options.onUpdateInputs;
  }

  render() {
    this.showNewInput();
  }

  showInput() {
    const inputGfx = this._svgContainer.find('[data-element-id="InputData_13z77r8"]');
    inputGfx.css('display', 'block');

    const newInputGfx = this._svgContainer.find('.new-input-data');
    newInputGfx.css('display', 'none');
  }

  showConnection() {
    const connectionGfx = this._svgContainer.find('[data-element-id="connection_147"]');
    connectionGfx.css('display', 'block');

    const newConnectionGfx = this._svgContainer.find('.new-connection');
    newConnectionGfx.css('display', 'none');

    this._onUpdateInputs();
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
    });
  }


}