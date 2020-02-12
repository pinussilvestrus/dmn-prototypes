import $ from 'jquery';

import { forEach } from 'min-dash';

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
  inputHeaders: [
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
  outputType: 'integer'
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
  type: 'integer'
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

function updateInputs(open = false) {
  const {
    type: inputDataType
  } = inputData;

  decision = {
    ...decision,
    connected: true,
    inputHeaders: [
      ...decision.inputHeaders,
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
    decisionModal.open();
  }
}

function openDecisionModal() {
  const node = $('<div class="edit-modal-placeholder"></div>');
  $('.contents').append(node);

  if (!decisionModal) {
    decisionModal = new DecisionModal({
      node,
      onClose: closeDecisionModal,
      onHighlight: highlightElements,
      onUnhighlight: unhighlightElements,
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

    closeDecisionModal();
    decision.removeClass(SELECTED_MARKER);
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


  if (decision.connected) {
    decision = {
      ...decision,
      inputHeaders: decision.inputHeaders.slice(0, decision.inputHeaders.length - 1)
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
  const node = $('<div class="edit-modal-placeholder"></div>');
  $('.contents').append(node);

  if (!inputDataModal) {
    inputDataModal = new InputDataModal({
      node,
      inputData,
      attributeTypes: ATTRIBUTE_TYPES,
      onClose: closeInputDataModal,
      onTypeChanged: changeInputType
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

  initDecisionInteractions(decision);
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
