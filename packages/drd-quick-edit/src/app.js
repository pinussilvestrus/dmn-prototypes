/* global document */

import $ from "jquery";

import diagram from "../resources/diagram.svg";

import QuickEditModal from "./components/QuickEditModal";

import './app.css';

function openEditModal(decision) {

  const node = $('.edit-modal-placeholder');

  const quickEditModal = new QuickEditModal({
    node
  });

  quickEditModal.init();

}

function _interactions(decision) {
  const hitBox = decision.children(".djs-hit");

  hitBox.mouseover(() => decision.addClass("hover"));

  hitBox.mouseout(() => decision.removeClass("hover"));

  $("body").click(event => {
    if (event.target == hitBox[0]) {

      decision.addClass("selected");

      return openEditModal(decision);
    }

    decision.removeClass("selected");
  });

  hitBox.click(() => {});
}

function main() {
  const diagramGfx = $(diagram)[0];

  const contents = $(".contents")[0];

  // insert diagram svg into page
  contents.append(diagramGfx);

  const decision = $(".demo-decision");

  _interactions(decision);
}

$(document).ready(main);
