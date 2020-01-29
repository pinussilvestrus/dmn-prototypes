/* global document */

import $ from 'jquery';

import diagram from '../resources/diagram.svg';


function openEditModal() {
  
  const decision = $(this);

  // mark as selected
  decision.addClass('selected');

}

function mockInteractions(decision) {

  const hitBox = decision.children('.djs-hit');

  const outline = decision.children('.djs-outline');

  decision.mouseover(() => decision.addClass('hover'));

  decision.mouseout(() => decision.removeClass('hover'))
}

function main() {
  
  const diagramGfx = $(diagram)[0];

  const contents = $('.contents')[0];

  // insert diagram svg into page
  contents.append(diagramGfx);

  const decision = $('.demo-decision');

  mockInteractions(decision);

  decision.click(openEditModal);

}


$(document).ready(main);
