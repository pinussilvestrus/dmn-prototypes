import $ from 'jquery';

import { forEach, find, findIndex } from 'min-dash';

import diagramSVG from './resources/diagram.svg';

import DecisionModal from '../../features/decision-modal';

import NewInputConnection from '../../features/new-input-connection';

import InputDataModal from '../../features/input-data-modal';

import getElement from '../../util/getElement';

import './styles.scss';

const SELECTED_MARKER = 'selected';

const HOVER_MARKER = 'hover';

const HIGHLIGHT_MARKER = 'highlight';

const VARIANT_CLASS = 'variant-a';

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
  }
];

let decision = {
  id: 'Decision_03absfl',
  name: 'Employee Suitability Score',
  connected: false, // connected to new input data (mock)
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
    }
  ],
  outputHeaders : [],
  outputType: 'integer',
  fixed: true
};

// todo(pinussilvestrus): use in future
// let inputData = {
//   id: 'InputData_0qarm4x',
//   label: 'Claim',
//   type: 'data object',

//   // only belongs to type==='data object'
//   attributes: [
//     {
//       name: 'region',
//       type: 'string'
//     },
//     {
//       name: 'expenditure',
//       type: 'integer'
//     }
//   ]
// };

let inputData = {
  id: 'InputData_13z77r8',
  name: 'Number of open claims of employee',
  type: 'string',
  typeChanged: false
};

let decisionModal;
let newInputConnection;
let inputDataModal;

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

function updateInput(oldLabel, updated) {
  if (!oldLabel) {
    return;
  }

  const found = findIndex(decision.inputColumns, i => i.label === oldLabel);

  if (found < 0) {
    return;
  }

  const newInputColumn = {
    ...decision.inputColumns[found],
    ...updated
  };

  decision.inputColumns.splice(found, 1, newInputColumn);

  if (decisionModal) {
    decisionModal.setInputs({ decision, availableInputs });
  }
}

function updateInputs(open = false) {
  const {
    type: inputDataType
  } = inputData;

  decision = {
    ...decision,
    connected: true,
    inputColumns: [
      ...decision.inputColumns,
      {
        label: 'Open Claims',
        type: inputDataType
      }
    ]
  };

  availableInputs.push({
    label: 'Open Claims',
    elements: ['InputData_13z77r8', 'connection_147'],
    type: inputDataType
  });

  if (decisionModal) {
    decisionModal.setInputs({
      availableInputs: availableInputs,
      decision
    });
    decisionModal.render();
  }

  if (open) {
    openDecisionModal();
  }
}

function updateNewInput(updated) {
  inputData = {
    ...inputData,
    ...updated
  };

  inputDataModal.setInputData(inputData);
  inputDataModal.render();
}

function openDecisionModal() {

  if (!decisionModal) {
    const node = $('<div class="edit-modal-placeholder"></div>');
    $('.contents').append(node);

    decisionModal = new DecisionModal({
      node,
      onClose: closeDecisionModal,
      onHighlight: highlightElements,
      onUnhighlight: unhighlightElements,
      onUpdateNewInput: updateNewInput,
      onUpdateInput: updateInput,
      availableInputs,
      decision,
      inputData
    });
  }

  decisionModal.open();
}

function closeDecisionModal() {
  decisionModal && decisionModal.hide();
}

function initDecisionInteractions(decision) {
  const hitBox = decision.children('.djs-hit');

  hitBox.mouseover(() => decision.addClass(HOVER_MARKER));

  hitBox.mouseout(() => decision.removeClass(HOVER_MARKER));

  $('svg').click(event => {
    if (event.target == hitBox[0]) {
      decision.addClass(SELECTED_MARKER);

      return openDecisionModal(decision);
    }

    // outside click
    closeDecisionModal();
    decision.removeClass(SELECTED_MARKER);
    $('*').removeClass(HIGHLIGHT_MARKER);
  });
}

function initInputDataInteractions(inputData) {
  const hitBox = inputData.children('.djs-hit');

  // todo(pinussilvestrus): dirty stuff
  const newInputDataAction = $('svg').find('.new-input-data rect, .new-input-data tspan');

  hitBox.mouseover(() => inputData.addClass(HOVER_MARKER));

  hitBox.mouseout(() => inputData.removeClass(HOVER_MARKER));

  $('svg').click(event => {

    const {
      target
    } = event;

    if (event.target == hitBox[0]) {
      inputData.addClass(SELECTED_MARKER);
      return openInputDataModal(inputData);
    }

    if (includesNode(newInputDataAction, target)) {
      newInputConnection.hideNewConnection();
      updateInputData({ name: 'Open Claims' });
      inputData.addClass(SELECTED_MARKER);
      return openInputDataModal(inputData);
    }

    // outside click
    closeInputDataModal();
    inputData.removeClass(SELECTED_MARKER);
  });
}

function mockFirstInputDataTypeChanged() {
  if (!inputData.typeChanged) {
    inputData.typeChanged = true;
    newInputConnection.showNewConnection();
  }
}

function handleInputDataTypeChanged(updated) {
  mockFirstInputDataTypeChanged();
  updateInputData(updated);
}

function updateInputData(updated) {
  inputData = {
    ...inputData,
    ...updated
  };


  if (decision.connected) {
    decision = {
      ...decision,
      inputColumns: decision.inputColumns.slice(0, decision.inputColumns.length - 1)
    };

    updateInputs(false);
  }


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
      onTypeChanged: handleInputDataTypeChanged,
      noReplace: true
    });
  }

  inputDataModal.open();
}

function closeInputDataModal() {
  inputDataModal && mockFirstInputDataTypeChanged();
  inputDataModal && inputDataModal.hide();
}

function initNewInputConnection() {
  const contents = $('.contents');

  // initialize new input connections actions
  newInputConnection = new NewInputConnection({
    svgContainer: contents.find('svg').first(),
    onUpdateInputs: updateInputs
  });
  newInputConnection.render();
}

function enable() {
  const contents = $('.contents');
  contents.addClass(VARIANT_CLASS);

  const diagramGfx = $(diagramSVG).addClass('diagram');

  // insert diagram svg into page
  contents.append(diagramGfx);

  const decision = getElement('Decision_03absfl');
  const inputData = getElement('InputData_13z77r8');

  initNewInputConnection();
  initDecisionInteractions(decision);
  initInputDataInteractions(inputData);
}

function disable() {
  $('.contents').removeClass(VARIANT_CLASS).empty();
  decisionModal = undefined;
}

export default {
  enable,
  disable
};


// helpers ///////

function includesNode($_nodes, node) {
  return find([$_nodes[0], $_nodes[1]], n => {
    return n === node;
  });
}
