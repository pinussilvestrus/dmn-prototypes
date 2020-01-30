import $ from 'jquery';

import {
    forEach
} from 'min-dash';

import MODAL_SKELETON from "./QuickEditModal.html";

import closeSVG from '../../resources/close.svg';

import "./QuickEditModal.css";

// todo(pinussilvestrus): move me
const RELATIONS = [
    {
        inputSelector: 'Number of open claims of employee',
        elements: ['InputData_13z77r8']
    }
];


export default class QuickEditModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._onHighlight = options.onHighlight;
    this._onUnhighlight = options.onUnhighlight;
    this._opened = false;
  }

  appendClose() {
      const container = this._node.find('.modal-container');

      const closeGfx = $(closeSVG).addClass('close');

      closeGfx.click(this._onClose);

      container.prepend(closeGfx);
  }

  bindRelations() {
      forEach(RELATIONS, r => {

        const {
            inputSelector,
            elements
        } = r;

        $(`input[value="${inputSelector}"]`).focus(this._onHighlight.bind(this, elements));
        $(`input[value="${inputSelector}"]`).focusout(this._onUnhighlight.bind(this, elements));

      });
  }

  open() {
    if (!this._opened) {
      this._node.append(MODAL_SKELETON);

      this.appendClose();

      this.bindRelations();

      this._opened = true;
    }
  }

  isOpened() {
    return this._opened;
  }

  close() {
      this._node.empty();
      this._opened = false;
  }
}
