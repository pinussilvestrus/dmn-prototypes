import $ from 'jquery';

import { forEach, findIndex } from 'min-dash';

import diagramSVG from './resources/diagram.svg';

import DecisionModal from '../../features/decision-modal';

import InputDataModal from '../../features/input-data-modal';

import MissingConnections from '../../features/missing-connections';

import getElement from '../../util/getElement';

import './styles.scss';

const SELECTED_MARKER = 'selected';

const HOVER_MARKER = 'hover';

const HIGHLIGHT_MARKER = 'highlight';

const VARIANT_CLASS = 'variant-e';

const ATTRIBUTE_TYPES = [
  'string', 'boolean', 'integer', 'long', 'double', 'date'
];

let availableInputs = [
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
  },
  {
    label: 'Open Claims',
    elements: ['InputData_13z77r8'],
    missingConnections: ['connection_147']
  }
];

let defaultDecision = {
  id: 'Decision_03absfl',
  name: 'Employee Suitability Score',
  inputColumns: [
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
    },
    {
      label: 'Open Claims',
      type: 'integer'
    }
  ],
  outputHeaders : [],
  outputType: 'integer',
  fixed: true
};


let inputData = {
  id: 'InputData_13z77r8',
  name: 'Open Claims',
  type: 'integer'
};

let decisionModal;
let inputDataModal;
let missingConnections;

function unhighlightElements(elements, missing) {
  forEach(elements, id => {
    const element = getElement(id);
    element.removeClass(HIGHLIGHT_MARKER);
  });

  missingConnections.setConnections(missing);
  missingConnections.hide();
}

function highlightElements(elements, missing) {
  forEach(elements, id => {
    const element = getElement(id);
    element.addClass(HIGHLIGHT_MARKER);
  });

  missingConnections.setConnections(missing);
  missingConnections.show();
}

function openDecisionModal(decision) {
  if (!decisionModal) {
    const node = $('<div class="edit-modal-placeholder"></div>');
    $('.contents').append(node);

    decisionModal = new DecisionModal({
      node,
      onClose: closeDecisionModal,
      onHighlight: highlightElements,
      onUnhighlight: unhighlightElements,
      onUpdateInput: updateInput,
      availableInputs,
      decision,
      inputData
    });
  }

  decisionModal.setInputs({
    availableInputs,
    decision
  });

  decisionModal.open();
}

function closeDecisionModal() {
  decisionModal && decisionModal.hide();
}

function initDecisionInteractions(decision) {

  const element = getElement(decision.id);

  element.addClass('active');

  const hitBox = element.children('.djs-hit');

  hitBox.mouseover(() => element.addClass(HOVER_MARKER));

  hitBox.mouseout(() => element.removeClass(HOVER_MARKER));

  hitBox.click(event => {
    event.stopPropagation();
    event.preventDefault();

    element.addClass(SELECTED_MARKER);
    return openDecisionModal(decision);
  });

  // outside click
  $('svg').click(() => {
    closeDecisionModal();
    element.removeClass(SELECTED_MARKER);
    $('*').removeClass(HIGHLIGHT_MARKER);
  });
}

function updateInput(oldLabel, updated) {
  if (!oldLabel) {
    return;
  }

  const found = findIndex(defaultDecision.inputColumns, i => i.label === oldLabel);

  if (found < 0) {
    return;
  }

  const newInputColumn = {
    ...defaultDecision.inputColumns[found],
    ...updated
  };

  defaultDecision.inputColumns.splice(found, 1, newInputColumn);

  if (decisionModal) {
    decisionModal.setInputs({ decision: defaultDecision, availableInputs });
  }
}

function initInputDataInteractions(inputData) {
  const hitBox = inputData.children('.djs-hit');

  hitBox.mouseover(() => inputData.addClass(HOVER_MARKER));

  hitBox.mouseout(() => inputData.removeClass(HOVER_MARKER));

  $('svg').click(event => {
    if (event.target == hitBox[0]) {
      inputData.addClass(SELECTED_MARKER);

      return openInputDataModal();
    }

    // outside click
    closeInputDataModal();
    inputData.removeClass(SELECTED_MARKER);
    $('*').removeClass(HIGHLIGHT_MARKER);
  });
}

function changeInputType(updated) {
  inputData = {
    ...inputData,
    ...updated
  };

  if (inputDataModal) {
    inputDataModal.setInputData(inputData);
    inputDataModal.render();
    inputDataModal.open();
  }
}

function openInputDataModal() {

  if (!inputDataModal) {
    const node = $('<div class="edit-modal-placeholder"></div>');
    $('.contents').append(node);

    inputDataModal = new InputDataModal({
      node,
      inputData,
      attributeTypes: ATTRIBUTE_TYPES,
      onClose: closeInputDataModal,
      onTypeChanged: changeInputType,
      noReplace: true
    });
  }

  inputDataModal.open();
}

function closeInputDataModal() {
  inputDataModal && inputDataModal.hide();
}

function addMissingConnection() {
  availableInputs.splice(availableInputs.length - 1, 1, {
    label: 'Open Claims',
    elements: ['InputData_13z77r8', 'connection_147']
  });
}

function initMissingConnections() {
  missingConnections = new MissingConnections({
    onAddMissingConnection: addMissingConnection
  });
}

function addHeader() {
  const headerNode = $('<div>Missing Connection</div>').addClass('header');
  $('.contents').append(headerNode);
}


function enable() {
  const contents = $('.contents');
  contents.addClass(VARIANT_CLASS);

  const diagramGfx = $(diagramSVG).addClass('diagram');

  // insert diagram svg into page
  contents.append(diagramGfx);

  const inputData = getElement('InputData_13z77r8');

  initDecisionInteractions(defaultDecision);
  initInputDataInteractions(inputData);
  initMissingConnections();

  addHeader();
}

function disable() {
  $('.contents').removeClass(VARIANT_CLASS).empty();
  decisionModal = undefined;
}

export default {
  enable,
  disable
};
