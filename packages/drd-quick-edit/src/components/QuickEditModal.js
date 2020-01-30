import $ from 'jquery';

import MODAL_SKELETON from "./QuickEditModal.html";

import closeSVG from '../../resources/close.svg';

import "./QuickEditModal.css";


export default class QuickEditModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._opened = false;
  }

  appendClose() {
      const container = this._node.find('.modal-container');

      const closeGfx = $(closeSVG).addClass('close');

      closeGfx.click(this._onClose);

      container.prepend(closeGfx);
  }

  open() {
    if (!this._opened) {
      this._node.append(MODAL_SKELETON);

      this.appendClose();

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
