import $ from 'jquery';

import { forEach, findIndex } from 'min-dash';

import diagramSVG from './resources/diagram.svg';

import DecisionModal from '../../features/decision-modal';

import NewInputConnection from '../../features/new-input-connection';

import InputDataModal from '../../features/input-data-modal';

import getElement from '../../util/getElement';

import {
  CREATE_NEW_INPUT_DATA, CREATE_NEW_DECISION
} from '../../util/getAutocompleteConfig';

import './styles.scss';

const SELECTED_MARKER = 'selected';

const HOVER_MARKER = 'hover';

const HIGHLIGHT_MARKER = 'highlight';

const VARIANT_CLASS = 'variant-b';

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

  // actions
  {
    label: CREATE_NEW_INPUT_DATA,
    elements: ['InputData_13z77r8', 'connection_147'],
    action: true
  },
  {
    label: CREATE_NEW_DECISION,
    elements: ['new_decision', 'new_connection'],
    action: true
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

let newDecision = {
  inputColumns: [{
    label: '',
    type: ''
  }],
  id: 'new_decision',
  outputHeaders: [],
  isMock: true
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

function addNewDecision(text) {
  newInputConnection.showDecision(text);
  newInputConnection.showDecisionConnection();
}

function addNewInput(text) {
  newInputConnection.showInput(text);
  newInputConnection.showConnection();
}

function updateInputData(updated) {
  inputData = {
    ...inputData,
    ...updated
  };
}

function updateNewDecision(updated) {
  newDecision = {
    ...newDecision,
    ...updated
  };
}

function updateNewInput(updated = {}, type = 'inputData') {
  const {
    name
  } = updated;

  if (type === 'inputData') {
    updateInputData(updated);
    name && newInputConnection.showInput(name);
    name && updateInputColumns(name);
  } else {
    updateNewDecision({
      ...updated,
      outputType: updated.type
    });

    name && newInputConnection.showDecision(name);
    name && updateInputColumns(name, [ 'new_decision', 'new_connection' ]);
  }

}

function updateInputColumns(text, elements) {
  defaultDecision = {
    ...defaultDecision,
    inputColumns: [
      ...defaultDecision.inputColumns,
      {
        label: text || 'Open Claims'
      }
    ]
  };

  availableInputs = [
    ...availableInputs,
    {
      label: text || 'Open  Claims',
      elements: elements || ['InputData_13z77r8', 'connection_147'],
      type: 'integer'
    }
  ];

  if (decisionModal) {
    decisionModal.setInputs({
      availableInputs,
      decision: defaultDecision
    });
  }
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
      onAddNewInput: addNewInput,
      onAddNewDecision: addNewDecision,
      onUpdateNewInput: updateNewInput,
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

function initDecisionInteractions(decisions) {

  let elements = [];

  forEach(decisions, decision => {
    const element = getElement(decision.id);

    elements.push(element);

    element.addClass('active');

    const hitBox = element.children('.djs-hit');

    hitBox.mouseover(() => element.addClass(HOVER_MARKER));

    hitBox.mouseout(() => element.removeClass(HOVER_MARKER));

    hitBox.click(event => {
      element.addClass(SELECTED_MARKER);

      // todo(pinussilvestrus): refactor me to handle decision state updates
      event.stopPropagation();
      event.preventDefault();
      return openDecisionModal(decision.id === defaultDecision.id ? defaultDecision : newDecision);
    });
  });

  // outside click
  $('svg').click(() => {
    closeDecisionModal();
    forEach(elements, e => e.removeClass(SELECTED_MARKER));
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

function initNewInputConnection() {
  const contents = $('.contents');

  // initialize new input connections actions
  newInputConnection = new NewInputConnection({
    svgContainer: contents.find('svg').first()
  });
  newInputConnection.render();
  newInputConnection.hideNewInput();
}

function enable() {
  const contents = $('.contents');
  contents.addClass(VARIANT_CLASS);

  const diagramGfx = $(diagramSVG).addClass('diagram');

  // insert diagram svg into page
  contents.append(diagramGfx);

  const inputData = getElement('InputData_13z77r8');

  initDecisionInteractions([ defaultDecision, newDecision ]);
  initInputDataInteractions(inputData);
  initNewInputConnection();
}

function disable() {
  $('.contents').removeClass(VARIANT_CLASS).empty();
  decisionModal = undefined;
}

export default {
  enable,
  disable
};
