
import $ from 'jquery';

import 'webpack-jquery-ui/autocomplete';
import 'webpack-jquery-ui/sortable';

import 'webpack-jquery-ui/css';

import { filter, find, flatten, forEach, map } from 'min-dash';

import modalSkeleton from './DecisionModal.html';
import inputSkeleton from './Input.html';
import outputSkeleton from './Output.html';
import newInputBtnSkeleton from './NewInputBtn.html';

import closeSVG from '../../../resources/close.svg';
import plusSVG from '../../../resources/plus.svg';
import minusSVG from '../../../resources/minus.svg';
import dragSVG from '../../../resources/drag.svg';
import tableSVG from '../../../resources/table.svg';

import getElement from '../../util/getElement';
import getAutocompleteConfig from '../../util/getAutocompleteConfig';

import './DecisionModal.scss';

const DEFAULT_POSITION = {
  left: 50,
  top: 50
};

export default class DecisionModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._onHighlight = options.onHighlight;
    this._onUnhighlight = options.onUnhighlight;
    this._onUpdateInput = options.onUpdateInput;
    this._onAddNewInput = options.onAddNewInput;

    // todo(pinussilvestrus): combine
    this._onUpdateNewInput = options.onUpdateNewInput;
    this._inputData = options.inputData;

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
      decision,
    } = options;

    this._decision = decision;

    this._availableInputs = availableInputs;
    this._inputColumns = decision.inputColumns;

    this.AVAILABLE_INPUT_LABELS = map(this._availableInputs, i => i.label);
    this.ALL_ELEMENTS = flatten(map(this._availableInputs, i => i.elements));

    // re-render, OMG I miss react
    this.render();
  }

  renderNewInputBtn() {
    const self = this;

    const container = this._node.find('.modal-container');

    const newInputBtnGfx = $(newInputBtnSkeleton);

    const plusGfx = $(plusSVG).addClass('plus');
    newInputBtnGfx.prepend(plusGfx);

    newInputBtnGfx.click(() => {
      const newInput = this.addInput();

      newInput.find('input')
        .change(e => {
          self._onUpdateNewInput?.({
            name: e.target.value
          });
        });

      newInput.find('select')
        .change(e => {
          self._onUpdateNewInput?.({
            type: e.target.value
          });
        });
    });

    container.append(newInputBtnGfx);
  }

  addOutput(options) {
    const { label, type } = options;

    const outputContainer = this._node.find('.outputs');

    const newOutput = $(outputSkeleton).attr('id', generateID);

    newOutput.find('input').val(label);
    newOutput.find('select').val(type);

    outputContainer.append(newOutput);

    return newOutput;
  }

  renderOutputs() {
    const outputHeaders = this._decision.outputHeaders;

    if (outputHeaders.length) {
      this._node.find('.outputs-header').html('Output Columns');

      const outputContainer = $('.outputs');

      outputContainer.empty();

      forEach(outputHeaders, output => {
        this.addOutput(output);
      });
    } else {
      this._node.find('.output-type').val(this._decision.outputType);
    }
  }

  renderInputs() {
    const inputContainer = $('.inputs');

    inputContainer.empty();

    forEach(this._inputColumns, input => {
      this.addInput(input);
    });

    inputContainer.sortable({
      placeholder: 'ui-state-highlight'
    });
  }

  addInput(options = {}) {
    const { label, type } = options;

    const inputContainer = this._node.find('.inputs');

    const newInput = $(inputSkeleton).attr('id', generateID);

    const dragGfx = $(dragSVG).addClass('drag');
    newInput.prepend(dragGfx);

    const minusGfx = $(minusSVG)
      .addClass('delete')
      .click(() => newInput.remove());
    newInput.append(minusGfx);

    newInput
      .find('input')
      .val(label)
      .change((e) => {

        this._onUpdateInput?.(
          label,
          { label: e.target.value }
        );

      });

    newInput
      .find('select')
      .val(type)
      .change((e) => {

        this._onUpdateInput?.(
          label,
          { type: e.target.value }
        );

      });

    this.bindRelations(newInput);
    this.bindAutocomplete(newInput);

    inputContainer.append(newInput);

    return newInput;
  }

  highlightElements(elements) {
    this._onUnhighlight(this.ALL_ELEMENTS);
    this._onHighlight(elements);
  }

  getRelatedElements(value) {

    // (1) find exact match
    const input = find(this._availableInputs, i => value === i.label);

    if (input) {
      return input.elements;
    }

    // (2) find including match
    const inputs = filter(this._availableInputs, i =>
      value.includes(i.label)
    );

    const elements = flatten(map(inputs, input => input.elements)) || [];

    return elements;
  }

  highlightRelatedElements(event) {
    let { target } = event;

    if (typeof target !== 'string') {
      target = $(event.target).val();
    }

    const elements = this.getRelatedElements(target);

    this.highlightElements(elements);
  }

  renderHeader() {
    const {
      name: decisionName
    } = this._decision;

    const tableGfx = $(tableSVG).addClass('table-icon');

    decisionName && this._node.find('.modal-header').text(decisionName);

    this._node.find('.modal-header').prepend(tableGfx);
  }

  bindRelations(input) {
    const self = this;

    input.find('input')
      .focus(e => this.highlightRelatedElements(e))
      .blur(() => this.highlightElements([]))
      .change(e => this.setType(e.target));

    input.find('select')
      .change(e => {

        // todo(pinussilvestrus): remove me
        const relatedElements = self.getRelatedElements(input.find('input').val());

        if (
          relatedElements.includes(self._inputData.id) &&
          typeof self._onUpdateNewInput === 'function'
        ) {
          self._onUpdateNewInput({
            type: e.target.value
          });
        }

      });
  }

  setType(inputNode) {
    const typeNode = $(inputNode).siblings('select');

    const value = inputNode.value;

    let type;

    // (1) find in 1st level inputs
    const input = find(this._availableInputs, i => value === i.label);

    type = input && input.type;

    // (2) find in nested data input
    if (!input && this._inputData) {
      const [ name, attribute ] = value.split('.');

      const {
        attributes,
        name: inputDataName
      } = this._inputData;

      if (!attribute || name !== inputDataName) {
        return;
      }

      const found = find(attributes, a => {
        return a.name == attribute;
      });

      type = found && found.type;
    }

    if (type && typeNode) {
      typeNode.val(type);
    }

  }

  bindAutocomplete(input) {
    const self = this;

    function onSelect(event) {
      const {
        isSelect,
        target
      } = event;

      isSelect && self.setType(target);

      self.highlightRelatedElements(event);
    }

    function onCreate(type, name) {
      if (type === 'inputData') {
        self._onAddNewInput?.(name);
      } else {
        return;
      }
    }

    input.find('input')

      // configure autocomplete module
      .autocomplete(getAutocompleteConfig({
        items: this.AVAILABLE_INPUT_LABELS,
        selectCb: onSelect,
        createCb: onCreate,
        disableCreate: typeof self._onAddNewInput !== 'function'
      }))
      .focus(function() {
        const node = $(this);

        // even search if empty
        if (isEmpty(node)) {
          node.data('uiAutocomplete').search(node.val());
        }

      });
  }

  getCoordinates() {
    const elementGfx = getElement((this._decision || {}).id);

    const position = elementGfx[0].getBoundingClientRect();

    if (!position || this._decision.fixed) {
      return DEFAULT_POSITION;
    }

    return {
      top: position.bottom + 20,
      left: position.left - 40
    };
  }

  render() {
    this._node.empty();
    this._node.append(modalSkeleton);
    this._node.addClass('decision-modal');

    this.renderHeader();
    this.renderInputs();
    this.renderOutputs();
    this.renderClose();
    !this._decision.isMock && this.renderNewInputBtn();

    // set coordinates
    this._node
      .find('.modal-container')
      .css(this.getCoordinates());
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

function generateID() {
  return Math.random().toString(36).substr(2, 9);
}
