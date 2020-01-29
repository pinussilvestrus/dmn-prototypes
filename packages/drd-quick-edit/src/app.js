/* global document */

import $ from 'jquery';

import diagram from '../resources/diagram.svg';

function main() {
  
  const diagramGfx = $(diagram)[0];

  const contents = $('.contents')[0];

  contents.append(diagramGfx);

  debugger;

}


$(document).ready(main);
