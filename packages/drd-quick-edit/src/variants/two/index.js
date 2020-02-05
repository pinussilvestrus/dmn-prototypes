import $ from 'jquery';

import diagramSVG from '../../../resources/diagram.svg';

import './two-styles.scss';

function enable() {
  const diagramGfx = $(diagramSVG).addClass('diagram');

  $('.contents')
    .append(diagramGfx)
    .prepend('<div class="under-construction"><p>UNDER CONSTRUCTION</p></div>');
}

function disable() {
  $('.contents').empty();
}

export default {
  disable,
  enable
};