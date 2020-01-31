/* global document */

import $ from 'jquery';

import varianteOne from './variants/one';
import variantTwo from './variants/two';

import './app.css';

const VARIANTS = {
  ONE: varianteOne,
  TWO: variantTwo
};

let current;

function bindListeners(event) {

  // SHIFT + 1
  if (event.shiftKey && event.keyCode == 33) {
    toggleVariant('ONE');
  }

  // SHIFT + 2
  else if (event.shiftKey && event.keyCode == 34) {
    toggleVariant('TWO');
  }
}


function toggleVariant(variant) {
  if (current) {
    VARIANTS[current].disable();
  }

  current = variant;
  VARIANTS[current].enable();
}

$(document).ready(() => {
  $('body').keypress(bindListeners);
  toggleVariant('ONE');
});
