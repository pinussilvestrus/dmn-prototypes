import $ from 'jquery';

import { forEach } from 'min-dash';

import diagramSVG from './resources/diagram.svg';

import InputDataModal from '../../features/input-data-modal';

import DecisionModal from '../../features/decision-modal';

import ContextPad from '../../features/context-pad';

import getElement from '../../util/getElement';

const VARIANT_CLASS = 'variant-c';

const SELECTED_MARKER = 'selected';

const HOVER_MARKER = 'hover';

const HIGHLIGHT_MARKER = 'highlight';


import './styles.scss';

const ATTRIBUTE_TYPES = [
  'string', 'boolean', 'integer', 'long', 'double', 'date', 'data object'
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
    label: 'Number of open claims of employee',
    elements: ['InputData_13z77r8', 'connection_147'],
    type: 'integer'
  }
];

let decision = {
  id: 'Decision_03absfl',
  name: 'Employee Suitability Score',
  inputHeaders: [
    {
      label: 'Number of open claims of employee',
      type: 'integer'
    },
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
  outputHeaders : [
    {
      label: 'Score',
      type: 'integer'
    }
  ],
  outputType: 'integer',
  fixed: true
};

let inputData = {
  id: 'InputData_0qarm4x',
  name: 'Claim',
  type: 'data object',

  // only belongs to type==='data object'
  attributes: [
    {
      name: 'region',
      type: 'string'
    },
    {
      name: 'expenditure',
      type: 'integer'
    }
  ]
};

let decisionModal;
let inputDataModal;
let contextPad;

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

function onToDecisionChange() {
  closeInputDataModal();
}

function openContextPad() {
  const node = $('<div class="context-pad-placeholder"></div>');
  $('.contents').append(node);

  if (!contextPad) {
    contextPad = new ContextPad({
      decision: 'dump_decision',
      inputData,
      node,
      onChange: onToDecisionChange
    });
  }

  contextPad.open();
}

function closeContextPad() {
  contextPad && contextPad.hide();
}

function initInputDataInteractions(inputData) {
  const hitBox = inputData.children('.djs-hit');

  hitBox.mouseover(() => inputData.addClass(HOVER_MARKER));

  hitBox.mouseout(() => inputData.removeClass(HOVER_MARKER));

  $('svg').click(event => {
    if (event.target == hitBox[0]) {
      inputData.addClass(SELECTED_MARKER);

      openContextPad();

      return openInputDataModal(inputData);
    }

    closeInputDataModal();

    closeContextPad();

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

function addUnderConstruction() {
  const deprecatedNode = $('<div>⛑Under Construction</div>').addClass('under-construction');
  $('.contents').append(deprecatedNode);
}

function enable() {
  const contents = $('.contents');
  contents.addClass(VARIANT_CLASS);

  const diagramGfx = $(diagramSVG).addClass('diagram');

  // insert diagram svg into page
  contents.append(diagramGfx);

  const decision = getElement('Decision_03absfl');
  const inputData = getElement('InputData_0qarm4x');

  initDecisionInteractions(decision);
  initInputDataInteractions(inputData);

  addUnderConstruction();
}

function disable() {
  $('.contents').removeClass(VARIANT_CLASS).empty();
  inputDataModal = undefined;
}

export default {
  disable,
  enable
};