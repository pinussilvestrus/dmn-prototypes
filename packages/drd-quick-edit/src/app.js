/* global document */

import $ from 'jquery';

import varianteOne from './variants/one';
import variantTwo from './variants/two';

import './app.scss';

const VARIANTS = {
  '1': varianteOne,
  '2': variantTwo
};

let current;

function bindListeners(event) {

  // SHIFT + 1
  if (event.shiftKey && event.keyCode == 33) {
    toggleVariant('1');
  }

  // SHIFT + 2
  else if (event.shiftKey && event.keyCode == 34) {
    toggleVariant('2');
  }
}

function addVariantBadge(variant) {
  const badgeSVG = $(`<div><span>${variant}</span></div>`).addClass('badge');
  $('.contents').append(badgeSVG);
}

function toggleVariant(variant) {
  if (current) {
    VARIANTS[current].disable();
  }

  current = variant;
  VARIANTS[current].enable();
  addVariantBadge(variant);
}

$(document).ready(() => {
  $('body').keypress(bindListeners);
  toggleVariant('1');
});
