/* global document */

import $ from "jquery";

import diagram from "../resources/diagram.svg";

function openEditModal(decision) {
  // mark as selected
  decision.addClass("selected");
}

function _interactions(decision) {
  const hitBox = decision.children(".djs-hit");

  hitBox.mouseover(() => decision.addClass("hover"));

  hitBox.mouseout(() => decision.removeClass("hover"));

  $("body").click(event => {
    if (event.target == hitBox[0]) {
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
