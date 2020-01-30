import $ from "jquery";

import "webpack-jquery-ui";

import "webpack-jquery-ui/css";

import { forEach } from "min-dash";

import MODAL_SKELETON from "./QuickEditModal.html";

import closeSVG from "../../resources/close.svg";

import getAutocompleteConfig from '../util/getAutocompleteConfig';

import "./QuickEditModal.css";

// todo(pinussilvestrus): move me
const RELATIONS = [
  {
    inputSelector: "Number of open claims of employee",
    elements: ["InputData_13z77r8", "connection_147"]
  },
  {
    inputSelector: "Employee.region = Claim.region",
    elements: [
      "InputData_011xp5m",
      "InputData_0qarm4x",
      "connection_146",
      "connection_145"
    ]
  },
  {
    inputSelector: "Claim.expenditure",
    elements: [
      "InputData_0qarm4x",
      "connection_146"
    ]
  },
  {
    inputSelector: "Employee Experience",
    elements: [
      "Decision_19jtlzt",
      "connection_149"
    ]
  },
  {
    inputSelector: "Employee fills skillset",
    elements: [
      "Decision_11xban0",
      "connection_148"
    ]
  }
];

const AVAILABLE_INPUTS = [
    "Employee fills skillset",
    "Employee Experience",
    "Employee",
    "Claim",
    "Number of open claims of employees"
];


export default class QuickEditModal {
  constructor(options) {
    this._node = options.node;
    this._onClose = options.onClose;
    this._onHighlight = options.onHighlight;
    this._onUnhighlight = options.onUnhighlight;

    this.init();
  }

  appendClose() {
    const container = this._node.find(".modal-container");

    const closeGfx = $(closeSVG).addClass("close");

    closeGfx.click(this._onClose);

    container.prepend(closeGfx);
  }

  bindRelations() {
    forEach(RELATIONS, r => {
      const { inputSelector, elements } = r;

      $(`input[value="${inputSelector}"]`).focus(
        this._onHighlight.bind(this, elements)
      );
      $(`input[value="${inputSelector}"]`).focusout(
        this._onUnhighlight.bind(this, elements)
      );
    });
  }

  bindAutocomplete() {
      $('.inputs input').autocomplete(getAutocompleteConfig(AVAILABLE_INPUTS));
  }

  init() {
    this._node.append(MODAL_SKELETON);

    this.appendClose();

    this.bindRelations();
    this.bindAutocomplete();

    this.hide();
  }

  open() {
    this._node.css("visibility", "visible");
    this._opened = true;
  }

  isOpened() {
    return this._opened;
  }

  hide() {
    this._node.css("visibility", "hidden");
    this._opened = false;
  }
}
