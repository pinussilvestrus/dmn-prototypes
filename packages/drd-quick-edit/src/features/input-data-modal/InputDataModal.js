import $ from 'jquery';

import {
  forEach
} from 'min-dash';

import 'webpack-jquery-ui/autocomplete';
import 'webpack-jquery-ui/sortable';

import 'webpack-jquery-ui/css';

import modalSkeleton from './InputDataModal.html';

import closeSVG from '../../../resources/close.svg';
import fileSVG from '../../../resources/file.svg';

import getElement from '../../util/getElement';

import './InputDataModal.scss';

const DEFAULT_POSITION = {
  left: 900,
  top: 500,
};

const noop = () => {};

export default class InputDataModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._onTypeChanged = options.onTypeChanged;
    this._attributeTypes = options.attributeTypes;
    this._onReplaceDecision = options.onReplaceDecision || noop;
    this._noReplace = options.noReplace;

    this.setInputData(options.inputData);
    this.render();
  }

  setInputData(inputData = {}) {
    this._inputData = inputData;
  }

  renderClose() {
    const container = this._node.find('.modal-container');

    const closeGfx = $(closeSVG).addClass('close');

    closeGfx.click(this._onClose);

    container.prepend(closeGfx);
  }

  renderHeader() {
    const {
      name: inputDataName
    } = this._inputData;

    const header = this._node.find('.modal-header');

    const fileGfx = $(fileSVG).addClass('input-icon');
    const label = $('<p></p>');

    const replace= $('<a class="transform-to-decision">Transform to Decision</a>');
    replace.click(() => this._onReplaceDecision());

    inputDataName && label.text(inputDataName);

    header.append(fileGfx);
    header.append(label);
    !this._noReplace && header.append(replace);
  }

  renderSelect() {
    const select = this._node.find('select');

    const type = (this._inputData || {}).type;

    const attributeTypes = this._attributeTypes;

    function _initAttributes() {
      forEach(attributeTypes, a => {
        select.append(`<option value="${a}">${a}</option>`);
      });
    }

    function _initComplexObject() {
      if (type === 'data object') {

        // show attributes
        $('.attributes').css('display', 'block');
      } else {
        $('.attributes').css('display', 'none');
      }
    }

    select.change(e => {
      const {
        target
      } = e;

      // todo(pinussilvestrus): push attribute changes for data object
      // eslint-disable-next-line
      const textArea = $(target).find('textarea');

      this._onTypeChanged({
        type: target.value
      });

    });

    _initComplexObject({ target: select[0] });
    _initAttributes();
    select.val(type);
  }

  getCoordinates() {
    const elementGfx = getElement((this._inputData || {}).id);

    const position = elementGfx[0].getBoundingClientRect();

    if (!position) {
      return DEFAULT_POSITION;
    }

    return {
      top: position.bottom + 20,
      left: position.left - 20
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
