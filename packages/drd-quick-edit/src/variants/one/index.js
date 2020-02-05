import $ from 'jquery';

import { forEach } from 'min-dash';

import diagramSVG from '../../../resources/diagram.svg';

import QuickEditModal from './components/quick-edit-modal';

import NewInputConnection from './components/new-input-connection';

import getElement from '../../util/getElement';

import './one-styles.scss';

const SELECTED_MARKER = 'selected';

const HOVER_MARKER = 'hover';

const HIGHLIGHT_MARKER = 'highlight';

const VARIANT_CLASS = 'variant-one';

let AVAILABLE_INPUTS = [
  {
    label: 'Employee fills skillset',
    elements: ['Decision_11xban0', 'connection_148'],
    type: 'boolean'
  },
  {
    label: 'Employee Experience',
    elements: ['Decision_19jtlzt', 'connection_149'],
    type: 'string'
  },
  {
    label: 'Employee',
    elements: ['InputData_011xp5m', 'connection_145']
  },
  {
    label: 'Claim',
    elements: ['InputData_0qarm4x', 'connection_146']
  }

  // default state
  // {
  //   label: 'Number of open claims of employee',
  //   elements: ['InputData_13z77r8', 'connection_147'],
  //   type: 'integer'
  // }
];

let DT_INPUTS = [

  // default state
  // {
  //   label: 'Number of open claims of employee',
  //   type: 'integer'
  // },
  {
    label: 'Employee.region = Claim.region',
    type: 'boolean'
  },
  {
    label: 'Claim.expenditure',
    type: 'integer'
  },
  {
    label: 'Employee Experience',
    type: 'string'
  },
  {
    label: 'Employee fills skillset',
    type: 'boolean'
  }
];

let quickEditModal;
let newInputConnection;

function unhighlightElements(elements) {
  forEach(elements, id => {
    const element = getElement(id);

    element.removeClass(HIGHLIGHT_MARKER);
  });
}

function highlightElements(elements) {
  forEach(elements, id => {
    const element = getElement(id);

    element.addClass(HIGHLIGHT_MARKER);
  });
}

function addNewInput(text) {
  newInputConnection.showInput(text);

  newInputConnection.showConnection();
}

function updateNewInputValue(text) {
  newInputConnection.showInput(text);
  updateInputs(true, text);
}

function updateInputs(open = false, text) {
  DT_INPUTS.push({
    label: text || 'Number of open claims of employee',
    type: 'integer'
  });

  AVAILABLE_INPUTS.push({
    label: text || 'Number of open claims of employee',
    elements: ['InputData_13z77r8', 'connection_147'],
    type: 'integer'
  });

  if (quickEditModal) {
    quickEditModal.setInputs({
      availableInputs: AVAILABLE_INPUTS,
      inputHeaders: DT_INPUTS
    });
    quickEditModal.render();
  }

  if (open) {
    quickEditModal.open();
  }
}

function openEditModal() {
  const node = $('<div class="edit-modal-placeholder"></div>');
  $('.contents').append(node);

  if (!quickEditModal) {
    quickEditModal = new QuickEditModal({
      node,
      onClose: closeModal,
      onHighlight: highlightElements,
      onUnhighlight: unhighlightElements,
      onAddNewInput: addNewInput,
      onUpdateNewInput: updateNewInputValue,
      availableInputs: AVAILABLE_INPUTS,
      inputHeaders: DT_INPUTS
    });
  }

  quickEditModal.open();
}

function closeModal() {
  quickEditModal && quickEditModal.hide();
}

function initInteractions(decision) {
  const hitBox = decision.children('.djs-hit');

  hitBox.mouseover(() => decision.addClass(HOVER_MARKER));

  hitBox.mouseout(() => decision.removeClass(HOVER_MARKER));

  $('svg').click(event => {
    if (event.target == hitBox[0]) {
      decision.addClass(SELECTED_MARKER);

      return openEditModal(decision);
    }

    closeModal();
    decision.removeClass(SELECTED_MARKER);
  });

  hitBox.click(() => {});
}

function enable() {
  const contents = $('.contents');
  contents.addClass(VARIANT_CLASS);

  const diagramGfx = $(diagramSVG).addClass('diagram');

  // insert diagram svg into page
  contents.append(diagramGfx);

  const decision = getElement('Decision_03absfl');

  initInteractions(decision);

  // initialize new input connections actions
  newInputConnection = new NewInputConnection({
    svgContainer: contents.find('svg').first(),
    onUpdateInputs: updateInputs
  });
  newInputConnection.render();
}

function disable() {
  $('.contents').removeClass(VARIANT_CLASS).empty();
  quickEditModal = undefined;
}

export default {
  enable,
  disable
};
