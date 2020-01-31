import $ from 'jquery';

import diagramSVG from '../../../resources/diagram.svg';

import './two-styles.css';

function main() {
  $('.contents')
    .append(diagramSVG)
    .prepend('<div class="under-construction"><p>UNDER CONSTRUCTION</p></div>');
}

export default main;