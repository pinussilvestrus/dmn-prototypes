import $ from 'jquery';

import { forEach } from 'min-dash';

import diagramSVG from './resources/diagram.svg';

import DecisionModal from '../../features/decision-modal';

import NewInputConnection from '../../features/new-input-connection';

import InputDataModal from '../../features/input-data-modal';

import ContextPad from '../../features/context-pad';

import getElement from '../../util/getElement';

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

  // {
  //   label: 'Number of open claims of employee',
  //   elements: ['InputData_13z77r8', 'connection_147'],
  //   type: 'integer'
  // }
];

let defaultDecision = {
  id: 'Decision_03absfl',
  name: 'Employee Suitability Score',
  inputColumns: [

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

function addNewInput(text) {
  newInputConnection.showInput(text);
  newInputConnection.showConnection();
}

function updateInputData(text) {
  inputData = {
    ...inputData,
    name: text
  };
}

function updateNewInputValue(text) {
  newInputConnection.showInput(text);
  updateInputs(text);
  updateInputData(text);
}

function updateInputs(text) {
  defaultDecision = {
    ...defaultDecision,
    inputColumns: [
      ...defaultDecision.inputColumns,
      {
        label: text || 'Number of open claims of employee',
        type: 'integer'
      }
    ]
  };

  availableInputs = [
    ...availableInputs,
    {
      label: text || 'Number of open claims of employee',
      elements: ['InputData_13z77r8', 'connection_147'],
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
      onUpdateNewInput: updateNewInputValue,
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

function replaceDecision() {
  const contextPad = new ContextPad({
    decision: 'new_decision',
    connection: 'connection_147',
    newConnection: 'new_connection',
    inputData,
    node: $('<div></div>')
  });

  contextPad.renderDecision(inputData.name);
  contextPad.hideInputData();
  closeInputDataModal();

  // open new decision modal
  newDecision = {
    ...inputData,
    ...newDecision,
    outputType: inputData.type
  };

  openDecisionModal(newDecision);
  getElement(newDecision.id).addClass('selected');
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
  });
}

function initInputDataInteractions(inputData) {
  const hitBox = inputData.children('.djs-hit');

  hitBox.mouseover(() => inputData.addClass(HOVER_MARKER));

  hitBox.mouseout(() => inputData.removeClass(HOVER_MARKER));

  $('svg').click(event => {
    if (event.target == hitBox[0]) {
      inputData.addClass(SELECTED_MARKER);

      return openInputDataModal(inputData);
    }

    closeInputDataModal();
    inputData.removeClass(SELECTED_MARKER);
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
      onReplaceDecision: replaceDecision
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
