import $ from 'jquery';

import diagramSVG from './resources/diagram.svg';

import InputDataModal from './components/input-data-modal';

import getElement from '../../util/getElement';

import './three-styles.scss';

const VARIANT_CLASS = 'variant-three';

const SELECTED_MARKER = 'selected';

const HOVER_MARKER = 'hover';

let inputDataModal;

function openEditModal() {
  const node = $('<div class="edit-modal-placeholder"></div>');
  $('.contents').append(node);

  if (!inputDataModal) {
    inputDataModal = new InputDataModal({
      node,
      onClose: closeModal
    });
  }

  inputDataModal.open();
}

function closeModal() {
  inputDataModal && inputDataModal.hide();
}

function initInteractions(inputData) {
  const hitBox = inputData.children('.djs-hit');

  hitBox.mouseover(() => inputData.addClass(HOVER_MARKER));

  hitBox.mouseout(() => inputData.removeClass(HOVER_MARKER));

  $('svg').click(event => {
    if (event.target == hitBox[0]) {
      inputData.addClass(SELECTED_MARKER);

      return openEditModal(inputData);
    }

    closeModal();
    inputData.removeClass(SELECTED_MARKER);
  });
}

function enable() {
  const diagramGfx = $(diagramSVG).addClass('diagram');

  $('.contents')
    .addClass(VARIANT_CLASS)
    .append(diagramGfx);

  const inputData = getElement('InputData_0qarm4x');
  initInteractions(inputData);
}

function disable() {
  $('.contents').removeClass(VARIANT_CLASS).empty();
  inputDataModal = undefined;
}

export default {
  disable,
  enable
};