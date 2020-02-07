/* global document, window */

import $ from 'jquery';

import variantOne from './variants/_1';
import variantTwo from './variants/_2';
import variantThree from './variants/_3';

import './app.scss';

const VARIANTS = {
  '1': variantOne,
  '2': variantTwo,
  '3': variantThree
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

  // SHIFT + 3
  else if (event.shiftKey && event.keyCode == 167) {
    toggleVariant('3');
  }
}

function initVariant() {
  const variantParam = urlParam('variant');
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

  updateURL(variant);

  addVariantBadge(variant);
}

$(document).ready(() => {
  $('body').keypress(bindListeners);
  initVariant();
});

// helper ///////////

function updateURL(variant) {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?variant=${variant}`;
  window.history.pushState({ path: newurl }, '', newurl);
}

function urlParam(name) {
  const results = new RegExp('[?&]' + name + '=([^&#]*)')
    .exec(window.location.href);

  return results && results[1] || 1;
}
