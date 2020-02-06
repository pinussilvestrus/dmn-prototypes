import $ from 'jquery';

import 'webpack-jquery-ui/autocomplete';
import 'webpack-jquery-ui/sortable';

import 'webpack-jquery-ui/css';

import { filter, find, flatten, forEach, map } from 'min-dash';

import modalSkeleton from './QuickEditModal.html';
import inputSkeleton from './Input.html';
import newInputBtnSkeleton from './NewInputBtn.html';

import closeSVG from '../../../../../resources/close.svg';
import plusSVG from '../../../../../resources/plus.svg';
import minusSVG from '../../../../../resources/minus.svg';
import dragSVG from '../../../../../resources/drag.svg';
import tableSVG from '../../../../../resources/table.svg';

import getAutocompleteConfig from '../../../../util/getAutocompleteConfig';

import './QuickEditModal.scss';

export default class QuickEditModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._onHighlight = options.onHighlight;
    this._onUnhighlight = options.onUnhighlight;
    this._onAddNewInput = options.onAddNewInput;
    this._onUpdateNewInput = options.onUpdateNewInput;

    this.setInputs(options);
    this.render();
  }

  renderClose() {
    const container = this._node.find('.modal-container');

    const closeGfx = $(closeSVG).addClass('close');

    closeGfx.click(this._onClose);

    container.prepend(closeGfx);
  }

  setInputs(options) {
    const {
      availableInputs,
      inputHeaders
    } = options;

    this._availableInputs = availableInputs;
    this._inputHeaders = inputHeaders;

    this.AVAILABLE_INPUT_LABELS = map(this._availableInputs, i => i.label);
    this.ALL_ELEMENTS = flatten(map(this._availableInputs, i => i.elements));
  }

  // todo(pinussilvestrus): remove me after user test
  mockNewInput(event) {
    const {
      target
    } = event;

    const mockText = 'Number of open claims of employee';

    $(target).val(mockText);
    this._onUpdateNewInput(mockText);
    this.highlightRelatedElements({ target: mockText });
  }

  renderNewInputBtn() {
    const self = this;

    const container = this._node.find('.modal-container');

    const newInputBtnGfx = $(newInputBtnSkeleton);

    const plusGfx = $(plusSVG).addClass('plus');
    newInputBtnGfx.prepend(plusGfx);

    newInputBtnGfx.click(() => {
      const newInput = this.addInput();

      self._onAddNewInput('');

      // todo(pinussilvestrus): remove me
      $('[data-element-id="InputData_13z77r8"]').find('text').css('display', 'none');

      newInput.find('input')
        .click(e => {
          self.mockNewInput(e);
        })
        .change(e => {

          // todo(pinussilvestrus): add me after user test
          // self._onUpdateNewInput(e.target.value);
        });
    });

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

    // todo(pinussilvestrus): remove me after user test
    const lastInput = inputContainer.find('input:last');
    lastInput.val() === 'Number of open claims of employee' && lastInput.focus();
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

    return newInput;
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

  renderHeader() {
    const tableGfx = $(tableSVG).addClass('table-icon');

    this._node.find('.modal-header').prepend(tableGfx);
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

  setType(inputNode) {
    const typeNode = $(inputNode).siblings('select');

    const input = find(this._availableInputs, i => inputNode.value === i.label);

    if (input && typeNode) {
      typeNode.val(input.type);
    }

  }

  bindAutocomplete(input) {
    input.find('input')
      .autocomplete(
        getAutocompleteConfig(this.AVAILABLE_INPUT_LABELS, event => {
          const {
            isSelect,
            target
          } = event;

          isSelect && this.setType(target);

          this.highlightRelatedElements(event);
        })
      )
      .focus(function() {
        const node = $(this);

        if (isEmpty(node)) {
          node.data('uiAutocomplete').search(node.val());
        }

      });
  }

  render() {
    this._node.empty();
    this._node.append(modalSkeleton);
    this._node.addClass('quick-edit-modal');

    this.renderHeader();
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
