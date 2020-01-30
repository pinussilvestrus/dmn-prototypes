/* global document */

import $ from "jquery";

import diagram from "../resources/diagram.svg";

import QuickEditModal from "./components/QuickEditModal";

import './app.css';

let quickEditModal;

function openEditModal(decision) {

  const node = $('.edit-modal-placeholder');

  if(!quickEditModal) {
    quickEditModal = new QuickEditModal({
      node,
      onClose: closeModal
    });
  }

  quickEditModal.open();

}

function closeModal() {
  quickEditModal && quickEditModal.close();
}

function interactions(decision) {
  const hitBox = decision.children(".djs-hit");

  hitBox.mouseover(() => decision.addClass("hover"));

  hitBox.mouseout(() => decision.removeClass("hover"));

  $("svg").click(event => {
    if (event.target == hitBox[0]) {

      decision.addClass("selected");

      return openEditModal(decision);
    }

    closeModal();
    decision.removeClass("selected");
  });

  hitBox.click(() => {});
}

function main() {
  const diagramGfx = $(diagram)[0];

  const contents = $(".contents")[0];

  // insert diagram svg into page
  contents.append(diagramGfx);

  const decision = $('[data-element-id="Decision_03absfl"]');

  debugger;

  interactions(decision);
}

$(document).ready(main);
