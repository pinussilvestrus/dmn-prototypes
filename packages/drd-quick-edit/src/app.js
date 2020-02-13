/* global document, window */

import $ from 'jquery';

import variantA from './variants/_A';
import variantB from './variants/_B';
import variantC from './variants/_C';

import './app.scss';

const VARIANTS = {
  'A': variantA,
  'B': variantB,
  'C': variantC
};

let current;

function bindListeners(event) {

  // SHIFT + 5
  if (event.shiftKey && event.keyCode == 37) {
    toggleVariant(current === 'A' ? 'B' : 'A');
  }

  // // SHIFT + 2
  // else if (event.shiftKey && event.keyCode == 34) {
  //   toggleVariant('B');
  // }

  // SHIFT + 3
  // else if (event.shiftKey && event.keyCode == 167) {
  //   toggleVariant('C');
  // }
}

function initVariant() {
  const variantParam = urlParam('variant');
  toggleVariant(variantParam);
}

function addVariantBadge(variant) {
  const badgeSVG = $(`<div><span>${variant}</span></div>`)
    .addClass('badge')
    .click(() => toggleVariant(current === 'A' ? 'B' : 'A'));

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

  return results && results[1] || 'A';
}
