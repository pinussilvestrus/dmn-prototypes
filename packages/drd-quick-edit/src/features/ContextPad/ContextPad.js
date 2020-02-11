import $ from 'jquery';

import TextUtil from 'diagram-js/lib/util/Text';

import wrenchSVG from '../../../resources/wrench.svg';

import getElement from '../../util/getElement';

import './ContextPad.scss';

const LABEL_STYLE = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '12px'
};

export default class ContextPad {
  constructor(options) {

    this._node = options.node;
    this._inputData = options.inputData;
    this._decision = options.decision;
    this._inputDataSVG = getElement(this._inputData.id);
    this._onChange = options.onChange;
    this._open = false;

    this._textUtil = new TextUtil({
      style: LABEL_STYLE,
      size: { width: 100 }
    });

    this.render();
  }

  isOpened() {
    return this._open;
  }

  open() {
    this._open = true;
    this._node.css('visibility', 'visible');
  }

  hide() {
    this._open = false;
    this._node.css('visibility', 'hidden');
  }

  renderDecision(name) {
    const decisionGfx = getElement(this._decision);

    decisionGfx.css('display', 'block');

    const newText = this._textUtil.createText(name, {
      box: { width: 180, height: 80 },
      align: 'center-middle',
      padding: 5
    });

    $(newText).addClass('djs-label');

    decisionGfx.find('text').remove();

    decisionGfx.find('.djs-visual').append(newText);
  }

  renderChangeToDecision() {
    const wrenchGfx = $(wrenchSVG).addClass('change-type');

    wrenchGfx.click(() => {
      this._inputDataSVG.css('display', 'none');
      this.hide();
      this.renderDecision(this._inputData.name);
      this._onChange();
    });
    this._node.append(wrenchGfx);
  }

  render() {

    // set position relative to input data
    const position = this._inputDataSVG.offset();

    if (position) {
      this._node.css({
        top: position.top,
        left: position.left - 15
      });
    }

    this.renderChangeToDecision();
  }
}