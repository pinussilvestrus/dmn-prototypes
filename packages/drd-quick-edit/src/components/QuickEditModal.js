import $ from "jquery";

import "webpack-jquery-ui";

import "webpack-jquery-ui/css";

import { filter, find, flatten, map } from "min-dash";

import MODAL_SKELETON from "./QuickEditModal.html";

import closeSVG from "../../resources/close.svg";

import getAutocompleteConfig from "../util/getAutocompleteConfig";

import "./QuickEditModal.css";

// todo(pinussilvestrus): move me
const INPUTS = [
  {
    label: "Number of open claims of employee",
    elements: ["InputData_13z77r8", "connection_147"]
  },
  {
    label: "Employee",
    elements: ["InputData_011xp5m", "connection_145"]
  },
  {
    label: "Claim",
    elements: ["InputData_0qarm4x", "connection_146"]
  },
  {
    label: "Employee Experience",
    elements: ["Decision_19jtlzt", "connection_149"]
  },
  {
    label: "Employee fills skillset",
    elements: ["Decision_11xban0", "connection_148"]
  }
];

const AVAILABLE_INPUTS = map(INPUTS, i => i.label);

const ALL_ELEMENTS = flatten(map(INPUTS, i => i.elements));

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

  highlightElements(elements) {
    this._onUnhighlight(ALL_ELEMENTS);
    this._onHighlight(elements);
  }

  highlightRelatedElements(event) {
    function getRelatedElements(value) {

      // (1) find exact match
      const input = find(INPUTS, i => value === i.label);

      if (input) {
        return input.elements;
      }

      // (2) find including match
      const inputs = filter(INPUTS, i => value.includes(i.label));

      const elements = flatten(map(inputs, input => input.elements)) || [];

      return elements;
    }

    let {
      target
    } = event;

    if(typeof target !== 'string') {
      target = $(event.target).val()
    }


    console.log(target);
    
    const elements = getRelatedElements(target);

    this.highlightElements(elements);
  }

  bindRelations() {
    const self = this;

    $(".inputs input")
      .focus(e => this.highlightRelatedElements(e))
      .focusout(() => this.highlightElements([]))
      .on("keyup", event => {

        // lazy check
        setTimeout(this.highlightRelatedElements.bind(self, event), 800);
      });
  }

  bindAutocomplete() {

    $(".inputs input").autocomplete(
      getAutocompleteConfig(AVAILABLE_INPUTS, e => this.highlightRelatedElements(e))
    );
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
