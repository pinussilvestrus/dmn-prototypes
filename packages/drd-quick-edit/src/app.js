/* global document, window */

import $ from 'jquery';

import varianteOne from './variants/_1';
import variantTwo from './variants/_2';

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

function initVariant() {
  const variantParam = $.urlParam('variant');
  toggleVariant(variantParam);
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
  initVariant();
});

// helper ///////////

$.urlParam = function(name) {
  const results = new RegExp('[?&]' + name + '=([^&#]*)')
    .exec(window.location.href);

  return results && results[1] || 1;
};
