import $ from 'jquery';

import 'webpack-jquery-ui/autocomplete';
import 'webpack-jquery-ui/sortable';

import 'webpack-jquery-ui/css';

import { filter, find, flatten, forEach, map } from 'min-dash';

import modalSkeleton from './QuickEditModal.html';
import inputSkeleton from './Input.html';
import newInputBtnSkeleton from './NewInputBtn.html';

import closeSVG from '../../../../resources/close.svg';
import plusSVG from '../../../../resources/plus.svg';
import minusSVG from '../../../../resources/minus.svg';
import dragSVG from '../../../../resources/drag.svg';

import getAutocompleteConfig from '../../../util/getAutocompleteConfig';

import './QuickEditModal.css';

export default class QuickEditModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._onHighlight = options.onHighlight;
    this._onUnhighlight = options.onUnhighlight;
    this._availableInputs = options.availableInputs;
    this._inputHeaders = options.inputHeaders;

    this.AVAILABLE_INPUT_LABELS = map(this._availableInputs, i => i.label);
    this.ALL_ELEMENTS = flatten(map(this._availableInputs, i => i.elements));

    this.init();
  }

  renderClose() {
    const container = this._node.find('.modal-container');

    const closeGfx = $(closeSVG).addClass('close');

    closeGfx.click(this._onClose);

    container.prepend(closeGfx);
  }

  renderNewInputBtn() {
    const container = this._node.find('.modal-container');

    const newInputBtnGfx = $(newInputBtnSkeleton);

    const plusGfx = $(plusSVG).addClass('plus');
    newInputBtnGfx.prepend(plusGfx);

    newInputBtnGfx.click(() => this.addInput());

    container.append(newInputBtnGfx);
  }

  renderInputs() {
    const inputContainer = $('.inputs');

    forEach(this._inputHeaders, input => {
      this.addInput(input);
    });

    inputContainer.sortable({
      placeholder: 'ui-state-highlight'
    });
  }

  addInput(options = {}) {
    const { label, type } = options;

    const inputContainer = this._node.find('.inputs');

    const newInput = $(inputSkeleton);

    const dragGfx = $(dragSVG).addClass('drag');
    newInput.prepend(dragGfx);

    const minusGfx = $(minusSVG)
      .addClass('delete')
      .click(() => newInput.remove());
    newInput.append(minusGfx);

    newInput.find('input').val(label);
    newInput.find('select').val(type);

    this.bindRelations(newInput);
    this.bindAutocomplete(newInput);

    inputContainer.append(newInput);
  }

  highlightElements(elements) {
    this._onUnhighlight(this.ALL_ELEMENTS);
    this._onHighlight(elements);
  }

  highlightRelatedElements(event) {
    const self = this;

    function getRelatedElements(value) {

      // (1) find exact match
      const input = find(self._availableInputs, i => value === i.label);

      if (input) {
        return input.elements;
      }

      // (2) find including match
      const inputs = filter(self._availableInputs, i =>
        value.includes(i.label)
      );

      const elements = flatten(map(inputs, input => input.elements)) || [];

      return elements;
    }

    let { target } = event;

    if (typeof target !== 'string') {
      target = $(event.target).val();
    }

    const elements = getRelatedElements(target);

    this.highlightElements(elements);
  }

  bindRelations(input) {
    const self = this;

    input.find('input')
      .focus(e => this.highlightRelatedElements(e))
      .focusout(() => this.highlightElements([]))
      .on('keyup', event => {

        // lazy check
        setTimeout(this.highlightRelatedElements.bind(self, event), 800);
      });
  }

  bindAutocomplete(input) {
    input.find('input')
      .autocomplete(
        getAutocompleteConfig(this.AVAILABLE_INPUT_LABELS, e =>
          this.highlightRelatedElements(e)
        )
      )
      .focus(function() {
        const node = $(this);

        if (isEmpty(node)) {
          node.data('uiAutocomplete').search(node.val());
        }

      });
  }

  init() {
    this._node.append(modalSkeleton);

    this.renderInputs();
    this.renderClose();
    this.renderNewInputBtn();

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


// helpers ///////////////////

function isEmpty(node) {
  return !node.val().trim();
}
