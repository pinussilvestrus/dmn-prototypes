/* global document */

import $ from "jquery";

import {
  forEach
} from 'min-dash';

import diagram from "../resources/diagram.svg";

import QuickEditModal from "./components/QuickEditModal";

import getElement from "./util/getElement";

import './app.css';

const SELECTED_MARKER = "selected";

const HOVER_MARKER = "hover";

const HIGHLIGHT_MARKER = "highlight";

// todo(pinussilvestrus): make it possible to create variations (multiple app.js) and toggle them

let quickEditModal;

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

function openEditModal() {

  const node = $('.edit-modal-placeholder');

  if(!quickEditModal) {
    quickEditModal = new QuickEditModal({
      node,
      onClose: closeModal,
      onHighlight: highlightElements,
      onUnhighlight: unhighlightElements
    });
  }

  quickEditModal.open();

}

function closeModal() {
  quickEditModal && quickEditModal.hide();
}

function interactions(decision) {
  const hitBox = decision.children(".djs-hit");

  hitBox.mouseover(() => decision.addClass(HOVER_MARKER));

  hitBox.mouseout(() => decision.removeClass(HOVER_MARKER));

  $("svg").click(event => {
    if (event.target == hitBox[0]) {

      decision.addClass(SELECTED_MARKER);

      return openEditModal(decision);
    }

    closeModal();
    decision.removeClass(SELECTED_MARKER);
  });

  hitBox.click(() => {});
}

function main() {
  const diagramGfx = $(diagram)[0];

  const contents = $(".contents")[0];

  // insert diagram svg into page
  contents.append(diagramGfx);

  const decision = getElement('Decision_03absfl');

  interactions(decision);
}

$(document).ready(main);
