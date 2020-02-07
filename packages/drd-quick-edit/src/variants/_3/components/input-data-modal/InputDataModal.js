import $ from 'jquery';

import 'webpack-jquery-ui/autocomplete';
import 'webpack-jquery-ui/sortable';

import 'webpack-jquery-ui/css';

import modalSkeleton from './InputDataModal.html';

import closeSVG from '../../../../../resources/close.svg';
import fileSVG from '../../../../../resources/file.svg';

import './InputDataModal.scss';

export default class InputDataModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;

    this.render();
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

    function _initComplexObject(event) {
      const {
        target
      } = event;

      if (target.value === 'complex object') {

        // show attributes
        $('.attributes').css('display', 'block');
      } else {
        $('.attributes').css('display', 'none');
      }
    }

    select.change(_initComplexObject);

    _initComplexObject({ target: select[0] });
  }

  render() {
    this._node.empty();
    this._node.append(modalSkeleton);
    this._node.addClass('input-data-modal');

    this.renderHeader();
    this.renderClose();
    this.renderSelect();

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
