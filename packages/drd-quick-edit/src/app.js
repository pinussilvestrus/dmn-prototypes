/* global document */

import $ from 'jquery';

import varianteOne from './variants/one';
import enableTwo from './variants/two';

import './app.css';

const VARIANTS = {
  ONE: varianteOne,
  TWO: enableTwo
};

let current;

function toggleVariant(variant) {

  if (current) {
    VARIANTS[current].disable();
  }

  current = variant;
  VARIANTS[current].enable();
}

$(document).ready(() => {

  toggleVariant('ONE');

});
