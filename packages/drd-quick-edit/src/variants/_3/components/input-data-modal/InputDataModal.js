import $ from 'jquery';

import 'webpack-jquery-ui/autocomplete';
import 'webpack-jquery-ui/sortable';

import 'webpack-jquery-ui/css';

import modalSkeleton from './InputDataModal.html';

import closeSVG from '../../../../../resources/close.svg';
import fileSVG from '../../../../../resources/file.svg';

import getElement from '../../../../util/getElement';

import './InputDataModal.scss';

export default class InputDataModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._onTypeChanged = options.onTypeChanged;

    this.setInputData(options.inputData);
    this.render();
  }

  setInputData(inputData) {
    this._inputData = inputData;
  }

  renderClose() {
    const container = this._node.find('.modal-container');

    const closeGfx = $(closeSVG).addClass('close');

    closeGfx.click(this._onClose);

    container.prepend(closeGfx);
  }

  renderHeader() {
    const fileGfx = $(fileSVG).addClass('input-icon');

    this._node.find('.modal-header').prepend(fileGfx);
  }

  renderSelect() {
    const select = $('select');

    const type = this._inputData.type;

    select.val(type);

    function _initComplexObject() {
      if (type === 'data object') {

        // show attributes
        $('.attributes').css('display', 'block');
      } else {
        $('.attributes').css('display', 'none');
      }
    }

    select.change(this._onTypeChanged);

    _initComplexObject({ target: select[0] });
  }

  getCoordinates() {
    const elementGfx = getElement(this._inputData.id);

    const position = elementGfx.offset();

    return {
      top: position.top + 125,
      left: position.left - 100
    };
  }

  render() {
    this._node.empty();
    this._node.append(modalSkeleton);
    this._node.addClass('input-data-modal');

    this.renderHeader();
    this.renderClose();
    this.renderSelect();

    // set coordinates
    this._node
      .find('.modal-container')
      .css(this.getCoordinates());

    this.hide();
  }

  open() {
    this._node.css('visibility', 'visible');
    this._opened = true;
  }

  isOpened() {
    return this._opened;
  }

  hide() {
    this._node.css('visibility', 'hidden');
    this._opened = false;
  }
}
