import $ from 'jquery';

import { forEach } from 'min-dash';

import diagramSVG from './resources/diagram.svg';

import QuickEditModal from '../../components/quick-edit-modal';

import NewInputConnection from '../../components/new-input-connection';

import InputDataModal from '../../components/input-data-modal';

import getElement from '../../util/getElement';

import './styles.scss';

const SELECTED_MARKER = 'selected';

const HOVER_MARKER = 'hover';

const HIGHLIGHT_MARKER = 'highlight';

const VARIANT_CLASS = 'variant-a';

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

let decision = {
  id: 'Decision_03absfl',
  name: 'Employeen Suitability Score',
  inputHeaders: [

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
  ]
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
  label: 'Number of open claims of employee',
  type: 'integer'
};

let quickEditModal;
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
    inputHeaders: [
      ...decision.inputHeaders,
      {
        label: 'Number of open claims of employee',
        type: inputDataType
      }
    ]
  };

  availableInputs.push({
    label: 'Number of open claims of employee',
    elements: ['InputData_13z77r8', 'connection_147'],
    type: inputDataType
  });

  if (quickEditModal) {
    quickEditModal.setInputs({
      availableInputs: availableInputs,
      decision
    });
    quickEditModal.render();
  }

  if (open) {
    quickEditModal.open();
  }
}

function openDecisionModal() {
  const node = $('<div class="edit-modal-placeholder"></div>');
  $('.contents').append(node);

  if (!quickEditModal) {
    quickEditModal = new QuickEditModal({
      node,
      onClose: closeDecisionModal,
      onHighlight: highlightElements,
      onUnhighlight: unhighlightElements,
      availableInputs,
      decision,
      inputData
    });
  }

  quickEditModal.open();
}

function closeDecisionModal() {
  quickEditModal && quickEditModal.hide();
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
  quickEditModal = undefined;
}

export default {
  enable,
  disable
};
