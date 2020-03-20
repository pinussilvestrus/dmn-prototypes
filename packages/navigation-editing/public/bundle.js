/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../column-editing/node_modules/domtastic/src/array.js":
/*!*************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/array.js ***!
  \*************************************************************/
/*! exports provided: every, filter, forEach, each, indexOf, map, pop, push, reduce, reduceRight, reverse, shift, some, unshift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pop", function() { return pop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shift", function() { return shift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshift", function() { return unshift; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../column-editing/node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector/index */ "../column-editing/node_modules/domtastic/src/selector/index.js");
/**
 * @module Array
 */




const ArrayProto = Array.prototype;

/**
 * Checks if the given callback returns a true(-ish) value for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Boolean} Whether each element passed the callback check.
 * @example
 *     // Test whether every element in the collection has the "active" attribute
 *     $('.items').every(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const every = ArrayProto.every;

/**
 * Filter the collection by selector or function, and return a new collection with the result.
 *
 * @param {String|Function} selector Selector or function to filter the collection.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} A new wrapped collection
 * @chainable
 * @example
 *     $('.items').filter('.active');
 * @example
 *     $('.items').filter(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const filter = function(selector, thisArg) {
  const callback = typeof selector === 'function' ? selector : element => Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(element, selector);
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(ArrayProto.filter.call(this, callback, thisArg));
};

/**
 * Execute a function for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').forEach(function(element) {
 *         element.style.color = 'evergreen';
 *     );
 */

const forEach = function(callback, thisArg) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, callback, thisArg);
};

const each = forEach;

/**
 * Returns the index of an element in the collection.
 *
 * @param {Node} element
 * @return {Number} The zero-based index, -1 if not found.
 * @example
 *     $('.items').indexOf(element); // 2
 */

const indexOf = ArrayProto.indexOf;

/**
 * Create a new collection by executing the callback for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Array} Collection with the return value of the executed callback for each element.
 * @example
 *     // Create a new array with the attribute value of each element:
 *     $('.items').map(function(element) {
 *         return element.getAttribute('name')
 */

const map = ArrayProto.map;

/**
 * Removes the last element from the collection, and returns that element.
 *
 * @return {Object} The last element from the collection.
 * @example
 *     var lastElement = $('.items').pop();
 */

const pop = ArrayProto.pop;

/**
 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').push(element);
 */

const push = ArrayProto.push;

/**
 * Apply a function against each element in the collection, and this accumulator function has to reduce it
 * to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Calculate the combined height of elements:
 *     $('.items').reduce(function(previousValue, element, index, collection) {
 *         return previousValue + element.clientHeight;
 *     }, 0);
 */

const reduce = ArrayProto.reduce;

/**
 * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
 * to reduce it to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Concatenate the text of elements in reversed order:
 *     $('.items').reduceRight(function(previousValue, element, index, collection) {
 *         return previousValue + element.textContent;
 *     }, '');
 */

const reduceRight = ArrayProto.reduceRight;

/**
 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
 *
 * @return {Object} The wrapped collection, reversed
 * @chainable
 * @example
 *     $('.items').reverse();
 */

const reverse = function() {
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this).reverse());
};

/**
 * Removes the first element from the collection, and returns that element.
 *
 * @return {Object} The first element from the collection.
 * @example
 *     var firstElement = $('.items').shift();
 */

const shift = ArrayProto.shift;

/**
 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @return {Boolean} Whether any element passed the callback check.
 * @example
 *     $('.items').some(function(element) {
 *         return element.hasAttribute('active')
 *     }); // true/false
 */

const some = ArrayProto.some;

/**
 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').unshift(element);
 */

const unshift = ArrayProto.unshift;


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/baseClass.js":
/*!*****************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/baseClass.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector/index */ "../column-editing/node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module BaseClass
 */




/* harmony default export */ __webpack_exports__["default"] = (function(api) {

  /**
   * Provide subclass for classes or components to extend from.
   * The opposite and successor of plugins (no need to extend `$.fn` anymore, complete control).
   *
   * @return {Class} The class to extend from, including all `$.fn` methods.
   * @example
   *     import { BaseClass } from  'domtastic';
   *
   *     class MyComponent extends BaseClass {
   *         doSomething() {
   *             return this.addClass('.foo');
   *         }
   *     }
   *
   *     let component = new MyComponent('body');
   *     component.doSomething();
   *
   * @example
   *     import $ from  'domtastic';
   *
   *     class MyComponent extends $.BaseClass {
   *         progress(value) {
   *             return this.attr('data-progress', value);
   *         }
   *     }
   *
   *     let component = new MyComponent(document.body);
   *     component.progress('ive').append('<p>enhancement</p>');
   */

  class BaseClass {
    constructor() {
      _selector_index__WEBPACK_IMPORTED_MODULE_0__["DOMtastic"].call(this, Object(_selector_index__WEBPACK_IMPORTED_MODULE_0__["$"])(...arguments));
    }
  }
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(BaseClass.prototype, api);
  return BaseClass;
});


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/css.js":
/*!***********************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/css.js ***!
  \***********************************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module CSS
 */



const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);

const camelize = value => value.replace(/-([\da-z])/gi, (matches, letter) => letter.toUpperCase());

const dasherize = value => value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
 *
 * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
 * @param {String} [value] The value of the style property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').css('padding-left'); // get
 *     $('.item').css('color', '#f00'); // set
 *     $('.item').css({'border-width': '1px', display: 'inline-block'}); // set multiple
 */

const css = function(key, value) {

  let styleProps, prop, val;

  if(typeof key === 'string') {
    key = camelize(key);

    if(typeof value === 'undefined') {
      let element = this.nodeType ? this : this[0];
      if(element) {
        val = element.style[key];
        return isNumeric(val) ? parseFloat(val) : val;
      }
      return undefined;
    }

    styleProps = {};
    styleProps[key] = value;
  } else {
    styleProps = key;
    for(prop in styleProps) {
      val = styleProps[prop];
      delete styleProps[prop];
      styleProps[camelize(prop)] = val;
    }
  }

  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    for(prop in styleProps) {
      if(styleProps[prop] || styleProps[prop] === 0) {
        element.style[prop] = styleProps[prop];
      } else {
        element.style.removeProperty(dasherize(prop));
      }
    }
  });

  return this;
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/dom/attr.js":
/*!****************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/dom/attr.js ***!
  \****************************************************************/
/*! exports provided: attr, removeAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module Attr
 */



/**
 * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
 *
 * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
 * @param {String} [value] The value of the attribute to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').attr('attrName'); // get
 *     $('.item').attr('attrName', 'attrValue'); // set
 *     $('.item').attr({attr1: 'value1', 'attr-2': 'value2'}); // set multiple
 */

const attr = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element ? element.getAttribute(key) : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(typeof key === 'object') {
      for(let attr in key) {
        element.setAttribute(attr, key[attr]);
      }
    } else {
      element.setAttribute(key, value);
    }
  });
};

/**
 * Remove attribute from each element in the collection.
 *
 * @param {String} key Attribute name
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeAttr('attrName');
 */

const removeAttr = function(key) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.removeAttribute(key));
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/dom/class.js":
/*!*****************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/dom/class.js ***!
  \*****************************************************************/
/*! exports provided: addClass, removeClass, toggleClass, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module Class
 */



/**
 * Add a class to the element(s)
 *
 * @param {String} value Space-separated class name(s) to add to the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').addClass('bar');
 *     $('.item').addClass('bar foo');
 */

const addClass = function(value) {
  if(value && value.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, 'add'));
  }
  return this;
};

/**
 * Remove a class from the element(s)
 *
 * @param {String} value Space-separated class name(s) to remove from the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeClass('bar');
 *     $('.items').removeClass('bar foo');
 */

const removeClass = function(value) {
  if(value && value.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, 'remove'));
  }
  return this;
};

/**
 * Toggle a class at the element(s)
 *
 * @param {String} value Space-separated class name(s) to toggle at the element(s).
 * @param {Boolean} [state] A Boolean value to determine whether the class should be added or removed.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').toggleClass('bar');
 *     $('.item').toggleClass('bar foo');
 *     $('.item').toggleClass('bar', true);
 */

const toggleClass = function(value, state) {
  if(value && value.length) {
    const action = typeof state === 'boolean' ? state ? 'add' : 'remove' : 'toggle';
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, action));
  }
  return this;
};

/**
 * Check if the element(s) have a class.
 *
 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
 * returns `true` if _any_ of them contains the class name.
 * @return {Boolean} Whether the element's class attribute contains the class name.
 * @example
 *     $('.item').hasClass('bar');
 */

const hasClass = function(value) {
  return (this.nodeType ? [this] : this).some(element => element.classList.contains(value));
};

/**
 * Specialized iteration, applying `fn` of the classList API to each element.
 *
 * @param {String} fnName
 * @param {String} className
 * @private
 */

const _each = function(fnName, className) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.classList[fnName](className));
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/dom/contains.js":
/*!********************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/dom/contains.js ***!
  \********************************************************************/
/*! exports provided: contains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/**
 * @module contains
 */

/**
 * Test whether an element contains another element in the DOM.
 *
 * @param {Element} container The element that may contain the other element.
 * @param {Element} element The element that may be a descendant of the other element.
 * @return {Boolean} Whether the `container` element contains the `element`.
 * @example
 *     $.contains(parentElement, childElement); // true/false
 */

const contains = (container, element) => {
  if(!container || !element || container === element) {
    return false;
  } else if(container.contains) {
    return container.contains(element);
  } else if(container.compareDocumentPosition) {
    return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
  }
  return false;
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/dom/data.js":
/*!****************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/dom/data.js ***!
  \****************************************************************/
/*! exports provided: data, prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module Data
 */



const isSupportsDataSet = typeof document !== 'undefined' && 'dataset' in document.documentElement;
const DATAKEYPROP = isSupportsDataSet ? 'dataset' : '__DOMTASTIC_DATA__';

const camelize = str => str.replace(/-+(.)?/g, (match, char) => char ? char.toUpperCase() : '');

/**
 * Get data from first element, or set data for each element in the collection.
 *
 * @param {String} key The key for the data to get or set.
 * @param {String} [value] The data to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').data('attrName'); // get
 *     $('.item').data('attrName', {any: 'data'}); // set
 */

const data = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && DATAKEYPROP in element ? element[DATAKEYPROP][camelize(key)] : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!isSupportsDataSet) {
      element[DATAKEYPROP] = element[DATAKEYPROP] || {};
    }

    element[DATAKEYPROP][camelize(key)] = value;
  });
};

/**
 * Get property from first element, or set property on each element in the collection.
 *
 * @param {String} key The name of the property to get or set.
 * @param {String} [value] The value of the property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prop('attrName'); // get
 *     $('.item').prop('attrName', 'attrValue'); // set
 */

const prop = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && element ? element[key] : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element[key] = value);
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/dom/extra.js":
/*!*****************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/dom/extra.js ***!
  \*****************************************************************/
/*! exports provided: appendTo, empty, remove, replaceWith, text, val */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceWith", function() { return replaceWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "../column-editing/node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selector/index */ "../column-editing/node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM (extra)
 */





/**
 * Append each element in the collection to the specified element(s).
 *
 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').appendTo(container);
 */

const appendTo = function(element) {
  const context = typeof element === 'string' ? Object(_selector_index__WEBPACK_IMPORTED_MODULE_2__["$"])(element) : element;
  _index__WEBPACK_IMPORTED_MODULE_1__["append"].call(context, this);
  return this;
};

/*
 * Empty each element in the collection.
 *
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').empty();
 */

const empty = function() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.innerHTML = '');
};

/**
 * Remove the collection from the DOM.
 *
 * @return {Array} Array containing the removed elements
 * @example
 *     $('.item').remove();
 */

const remove = function() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

/**
 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
 *
 * @return {Array} Array containing the replaced elements
 */

const replaceWith = function() {
  return _index__WEBPACK_IMPORTED_MODULE_1__["before"].apply(this, arguments).remove();
};

/**
 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').text('New content');
 */

const text = function(value) {

  if(value === undefined) {
    return this[0].textContent;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.textContent = '' + value);
};

/**
 * Get the `value` from the first, or set the `value` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('input.firstName').val('New value');
 */

const val = function(value) {

  if(value === undefined) {
    return this.length > 0 ? this[0].value : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.value = value);
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/dom/html.js":
/*!****************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/dom/html.js ***!
  \****************************************************************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module HTML
 */



/*
 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
 *
 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').html();
 *     $('.item').html('<span>more</span>');
 */

const html = function(fragment) {

  if(fragment === undefined) {
    const element = this.nodeType ? this : this[0];
    return element ? element.innerHTML : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.innerHTML = fragment);
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/dom/index.js":
/*!*****************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/dom/index.js ***!
  \*****************************************************************/
/*! exports provided: append, prepend, before, after, clone, _clone, _each */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_clone", function() { return _clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_each", function() { return _each; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/index */ "../column-editing/node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM
 */




const forEach = Array.prototype.forEach;

/**
 * Append element(s) to each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to append to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').append('<p>more</p>');
 */

const append = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforeend', element);
    } else {
      if(element instanceof Node) {
        this.appendChild(element);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements, this.appendChild.bind(this));
      }
    }
  } else {
    _each(this, append, element);
  }
  return this;
};

/**
 * Place element(s) at the beginning of each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prepend('<span>start</span>');
 */

const prepend = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterbegin', element);
    } else {
      if(element instanceof Node) {
        this.insertBefore(element, this.firstChild);
      } else {
        let elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements.reverse(), prepend.bind(this));
      }
    }
  } else {
    _each(this, prepend, element);
  }
  return this;
};

/**
 * Place element(s) before each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').before('<p>prefix</p>');
 */

const before = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforebegin', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements, before.bind(this));
      }
    }
  } else {
    _each(this, before, element);
  }
  return this;
};

/**
 * Place element(s) after each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').after('<span>suf</span><span>fix</span>');
 */

const after = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterend', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this.nextSibling);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements.reverse(), after.bind(this));
      }
    }
  } else {
    _each(this, after, element);
  }
  return this;
};

/**
 * Clone a wrapped object.
 *
 * @return {Object} Wrapped collection of cloned nodes.
 * @example
 *     $(element).clone();
 */

const clone = function() {
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(_clone(this));
};

/**
 * Clone an object
 *
 * @param {String|Node|NodeList|Array} element The element(s) to clone.
 * @return {String|Node|NodeList|Array} The cloned element(s)
 * @private
 */

const _clone = element => {
  if(typeof element === 'string') {
    return element;
  } else if(element instanceof Node) {
    return element.cloneNode(true);
  } else if('length' in element) {
    return [].map.call(element, el => el.cloneNode(true));
  }
  return element;
};

/**
 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
 *
 * @param {NodeList|Array} collection
 * @param {Function} fn
 * @param {Node} element
 * @private
 */

const _each = (collection, fn, element) => {
  let l = collection.length;
  while(l--) {
    const elm = l === 0 ? element : _clone(element);
    fn.call(collection[l], elm);
  }
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/event/index.js":
/*!*******************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/event/index.js ***!
  \*******************************************************************/
/*! exports provided: on, off, one, getHandlers, clearHandlers, proxyHandler, delegateHandler, bind, unbind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "one", function() { return one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandlers", function() { return getHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHandlers", function() { return clearHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyHandler", function() { return proxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateHandler", function() { return delegateHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return unbind; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/closest */ "../column-editing/node_modules/domtastic/src/selector/closest.js");
/**
 * @module Events
 */




/**
 * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
 *
 * @param {String} eventNames List of space-separated event types to be added to the element(s)
 * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @param {Boolean} once=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').on('click', callback);
 *     $('.container').on('click focus', '.item', handler);
 */

const on = function(eventNames, selector, handler, useCapture, once) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    eventListener;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    eventListener = proxyHandler(handler);

    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {

      if(selector) {
        eventListener = delegateHandler.bind(element, selector, eventListener);
      }

      if(once) {
        const listener = eventListener;
        eventListener = event => {
          off.call(element, eventNames, selector, handler, useCapture);
          listener.call(element, event);
        };
      }

      element.addEventListener(eventName, eventListener, useCapture || false);

      getHandlers(element).push({
        eventName,
        handler,
        eventListener,
        selector,
        namespace
      });
    });

  }, this);

  return this;
};

/**
 * Shorthand for `removeEventListener`.
 *
 * @param {String} eventNames List of space-separated event types to be removed from the element(s)
 * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').off('click', callback);
 *     $('#my-element').off('myEvent myOtherEvent');
 *     $('.item').off();
 */

const off = function(eventNames = '', selector, handler, useCapture) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    handlers;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {

      handlers = getHandlers(element);

      Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(handlers.filter(item => {
        return (
          (!eventName || item.eventName === eventName) &&
          (!namespace || item.namespace === namespace) &&
          (!handler || item.handler === handler) &&
          (!selector || item.selector === selector)
        );
      }), item => {
        element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
        handlers.splice(handlers.indexOf(item), 1);
      });

      if(!eventName && !namespace && !selector && !handler) {
        clearHandlers(element);
      } else if(handlers.length === 0) {
        clearHandlers(element);
      }

    });

  }, this);

  return this;
};

/**
 * Add event listener and execute the handler at most once per element.
 *
 * @param eventNames
 * @param selector
 * @param handler
 * @param useCapture
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').one('click', callback);
 */

const one = function(eventNames, selector, handler, useCapture) {
  return on.call(this, eventNames, selector, handler, useCapture, 1);
};

/**
 * Get event handlers from an element
 *
 * @private
 * @param {Node} element
 * @return {Array}
 */

const eventKeyProp = '__domtastic_event__';
let id = 1;
let handlers = {};
let unusedKeys = [];

const getHandlers = element => {
  if(!element[eventKeyProp]) {
    element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
  }
  const key = element[eventKeyProp];
  return handlers[key] || (handlers[key] = []);
};

/**
 * Clear event handlers for an element
 *
 * @private
 * @param {Node} element
 */

const clearHandlers = element => {
  const key = element[eventKeyProp];
  if(handlers[key]) {
    handlers[key] = null;
    element[eventKeyProp] = null;
    unusedKeys.push(key);
  }
};

/**
 * Function to create a handler that augments the event object with some extra methods,
 * and executes the callback with the event and the event data (i.e. `event.detail`).
 *
 * @private
 * @param handler Callback to execute as `handler(event, data)`
 * @return {Function}
 */

const proxyHandler = handler => function(event) {
  return handler.call(this, augmentEvent(event));
};

const eventMethods = {
  preventDefault: 'isDefaultPrevented',
  stopImmediatePropagation: 'isImmediatePropagationStopped',
  stopPropagation: 'isPropagationStopped'
};
const returnTrue = () => true;
const returnFalse = () => false;

/**
 * Attempt to augment events and implement something closer to DOM Level 3 Events.
 *
 * @private
 * @param {Object} event
 * @return {Function}
 */

const augmentEvent = event => {
  if(!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
    for(const methodName in eventMethods) {
      (function(methodName, testMethodName, originalMethod) {
        event[methodName] = function() {
          this[testMethodName] = returnTrue;
          return originalMethod && originalMethod.apply(this, arguments);
        };
        event[testMethodName] = returnFalse;
      }(methodName, eventMethods[methodName], event[methodName]));
    }
    if(event._preventDefault) {
      event.preventDefault();
    }
  }
  return event;
};

/**
 * Function to test whether delegated events match the provided `selector` (filter),
 * if the event propagation was stopped, and then actually call the provided event handler.
 * Use `this` instead of `event.currentTarget` on the event object.
 *
 * @private
 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Event} event
 */

const delegateHandler = function(selector, handler, event) {
  const eventTarget = event._target || event.target;
  const currentTarget = _selector_closest__WEBPACK_IMPORTED_MODULE_1__["closest"].call([eventTarget], selector, this)[0];
  if(currentTarget && currentTarget !== this) {
    if(currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
      handler.call(currentTarget, event);
    }
  }
};

const bind = on;
const unbind = off;


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/event/ready.js":
/*!*******************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/event/ready.js ***!
  \*******************************************************************/
/*! exports provided: ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/**
 * @module Ready
 */

/**
 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
 *
 * @param handler Callback to execute when initial DOM content is loaded.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $(document).ready(callback);
 */

const ready = function(handler) {
  if(/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
  return this;
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/event/trigger.js":
/*!*********************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/event/trigger.js ***!
  \*********************************************************************/
/*! exports provided: trigger, triggerHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerHandler", function() { return triggerHandler; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/contains */ "../column-editing/node_modules/domtastic/src/dom/contains.js");
/**
 * @module trigger
 */




const reMouseEvent = /^(mouse(down|up|over|out|enter|leave|move)|contextmenu|(dbl)?click)$/;
const reKeyEvent = /^key(down|press|up)$/;

/**
 * Trigger event at element(s)
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').trigger('anyEventType');
 */

const trigger = function(type, data, {bubbles = true, cancelable = true, preventDefault = false} = {}) {

  const EventConstructor = getEventConstructor(type);
  const event = new EventConstructor(type, {
    bubbles,
    cancelable,
    preventDefault,
    detail: data
  });

  event._preventDefault = preventDefault;

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
      dispatchEvent(element, event);
    } else {
      triggerForPath(element, type, {
        bubbles,
        cancelable,
        preventDefault,
        detail: data
      });
    }
  });
};

const getEventConstructor = type => isSupportsOtherEventConstructors ? (reMouseEvent.test(type) ? MouseEvent : (reKeyEvent.test(type) ? KeyboardEvent : CustomEvent)) : CustomEvent;

/**
 * Trigger event at first element in the collection. Similar to `trigger()`, except:
 *
 * - Event does not bubble
 * - Default event behavior is prevented
 * - Only triggers handler for first matching element
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event
 * @example
 *     $('form').triggerHandler('submit');
 */

const triggerHandler = function(type, data) {
  if(this[0]) {
    trigger.call(this[0], type, data, {
      bubbles: false,
      preventDefault: true
    });
  }
};

/**
 * Check whether the element is attached to or detached from) the document
 *
 * @private
 * @param {Node} element Element to test
 * @return {Boolean}
 */

const isAttachedToDocument = element => {
  if(element === window || element === document) {
    return true;
  }
  return Object(_dom_contains__WEBPACK_IMPORTED_MODULE_1__["contains"])(element.ownerDocument.documentElement, element);
};

/**
 * Dispatch the event at the element and its ancestors.
 * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
 *
 * @private
 * @param {Node} element First element to dispatch the event at
 * @param {String} type Type of the event
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * Will be set to false (but shouldn't matter since events don't bubble anyway).
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 */

const triggerForPath = (element, type, params = {}) => {
  params.bubbles = false;
  const event = new CustomEvent(type, params);
  event._target = element;
  do {
    dispatchEvent(element, event);
  } while(element = element.parentNode); // eslint-disable-line no-cond-assign
};

/**
 * Dispatch event to element, but call direct event methods instead if available
 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
 *
 * @private
 * @param {Node} element Element to dispatch the event at
 * @param {Object} event Event to dispatch
 */

const directEventMethods = ['blur', 'focus', 'select', 'submit'];

const dispatchEvent = (element, event) => {
  if(directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
    element[event.type]();
  } else {
    element.dispatchEvent(event);
  }
};

/**
 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill).
 * Needed to support IE (9, 10, 11) & PhantomJS
 */

(() => {
  const CustomEvent = function(event, params = {
    bubbles: false,
    cancelable: false,
    detail: undefined
  }) {
    let customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return customEvent;
  };

  CustomEvent.prototype = _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent && _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent.prototype;
  _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent = CustomEvent;

})();

/*
 * Are events bubbling in detached DOM trees?
 * @private
 */

const isEventBubblingInDetachedTree = (() =>{
  let isBubbling = false;
  const doc = _util__WEBPACK_IMPORTED_MODULE_0__["win"].document;
  if(doc) {
    const parent = doc.createElement('div');
    const child = parent.cloneNode();
    parent.appendChild(child);
    parent.addEventListener('e', function() {
      isBubbling = true;
    });
    child.dispatchEvent(new CustomEvent('e', {bubbles: true}));
  }
  return isBubbling;
})();

const isSupportsOtherEventConstructors = (() => {
  try {
    new MouseEvent('click');
  } catch(e) {
    return false;
  }
  return true;
})();


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/index.js":
/*!*************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../column-editing/node_modules/domtastic/src/util.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../column-editing/node_modules/domtastic/src/array.js");
/* harmony import */ var _baseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseClass */ "../column-editing/node_modules/domtastic/src/baseClass.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css */ "../column-editing/node_modules/domtastic/src/css.js");
/* harmony import */ var _dom_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/index */ "../column-editing/node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _dom_attr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/attr */ "../column-editing/node_modules/domtastic/src/dom/attr.js");
/* harmony import */ var _dom_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/class */ "../column-editing/node_modules/domtastic/src/dom/class.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/contains */ "../column-editing/node_modules/domtastic/src/dom/contains.js");
/* harmony import */ var _dom_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/data */ "../column-editing/node_modules/domtastic/src/dom/data.js");
/* harmony import */ var _dom_extra__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/extra */ "../column-editing/node_modules/domtastic/src/dom/extra.js");
/* harmony import */ var _dom_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/html */ "../column-editing/node_modules/domtastic/src/dom/html.js");
/* harmony import */ var _event_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/index */ "../column-editing/node_modules/domtastic/src/event/index.js");
/* harmony import */ var _event_trigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event/trigger */ "../column-editing/node_modules/domtastic/src/event/trigger.js");
/* harmony import */ var _event_ready__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event/ready */ "../column-editing/node_modules/domtastic/src/event/ready.js");
/* harmony import */ var _noconflict__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./noconflict */ "../column-editing/node_modules/domtastic/src/noconflict.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selector/index */ "../column-editing/node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selector/closest */ "../column-editing/node_modules/domtastic/src/selector/closest.js");
/* harmony import */ var _selector_extra__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selector/extra */ "../column-editing/node_modules/domtastic/src/selector/extra.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./type */ "../column-editing/node_modules/domtastic/src/type.js");
/**
 * @module API
 */



const api = {};
let $ = {};

// Import modules to build up the API




















if(typeof _selector_index__WEBPACK_IMPORTED_MODULE_15__ !== 'undefined') {
  $ = _selector_index__WEBPACK_IMPORTED_MODULE_15__["$"];
  $.matches = _selector_index__WEBPACK_IMPORTED_MODULE_15__["matches"];
  api.find = _selector_index__WEBPACK_IMPORTED_MODULE_15__["find"];
}

Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])($, _dom_contains__WEBPACK_IMPORTED_MODULE_7__, _noconflict__WEBPACK_IMPORTED_MODULE_14__, _type__WEBPACK_IMPORTED_MODULE_18__);
Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(api, _array__WEBPACK_IMPORTED_MODULE_1__, _css__WEBPACK_IMPORTED_MODULE_3__, _dom_attr__WEBPACK_IMPORTED_MODULE_5__, _dom_index__WEBPACK_IMPORTED_MODULE_4__, _dom_class__WEBPACK_IMPORTED_MODULE_6__, _dom_data__WEBPACK_IMPORTED_MODULE_8__, _dom_extra__WEBPACK_IMPORTED_MODULE_9__, _dom_html__WEBPACK_IMPORTED_MODULE_10__, _event_index__WEBPACK_IMPORTED_MODULE_11__, _event_trigger__WEBPACK_IMPORTED_MODULE_12__, _event_ready__WEBPACK_IMPORTED_MODULE_13__, _selector_closest__WEBPACK_IMPORTED_MODULE_16__, _selector_extra__WEBPACK_IMPORTED_MODULE_17__);

$.fn = api;

// Version

$.version = '__VERSION__';

// Util

$.extend = _util__WEBPACK_IMPORTED_MODULE_0__["extend"];

// Provide base class to extend from

if(typeof _baseClass__WEBPACK_IMPORTED_MODULE_2__["default"] !== 'undefined') {
  $.BaseClass = Object(_baseClass__WEBPACK_IMPORTED_MODULE_2__["default"])($.fn);
}

// Export interface

/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/noconflict.js":
/*!******************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/noconflict.js ***!
  \******************************************************************/
/*! exports provided: noConflict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noConflict", function() { return noConflict; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module noConflict
 */



/*
 * Save the previous value of the global `$` variable, so that it can be restored later on.
 * @private
 */

const previousLib = _util__WEBPACK_IMPORTED_MODULE_0__["win"].$;

/**
 * In case another library sets the global `$` variable before DOMtastic does,
 * this method can be used to return the global `$` to that other library.
 *
 * @return {Object} Reference to DOMtastic.
 * @example
 *     var domtastic = $.noConflict();
 */

const noConflict = function() {
  _util__WEBPACK_IMPORTED_MODULE_0__["win"].$ = previousLib;
  return this;
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/selector/closest.js":
/*!************************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/selector/closest.js ***!
  \************************************************************************/
/*! exports provided: closest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../column-editing/node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module closest
 */




/**
 * Return the closest element matching the selector (starting by itself) for each element in the collection.
 *
 * @param {String} selector Filter
 * @param {Object} [context] If provided, matching elements must be a descendant of this element
 * @return {Object} New wrapped collection (containing zero or one element)
 * @chainable
 * @example
 *     $('.selector').closest('.container');
 */

const closest = (() => {

  const closest = function(selector, context) {
    const nodes = [];
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["each"])(this, node => {
      while(node && node !== context) {
        if(Object(_index__WEBPACK_IMPORTED_MODULE_0__["matches"])(node, selector)) {
          nodes.push(node);
          break;
        }
        node = node.parentElement;
      }
    });
    return Object(_index__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniq"])(nodes));
  };

  return typeof Element === 'undefined' || !Element.prototype.closest ? closest : function(selector, context) {
    if(!context) {
      const nodes = [];
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["each"])(this, node => {
        const n = node.closest(selector);
        if(n) {
          nodes.push(n);
        }
      });
      return Object(_index__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniq"])(nodes));
    } else {
      return closest.call(this, selector, context);
    }
  };
})();


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/selector/extra.js":
/*!**********************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/selector/extra.js ***!
  \**********************************************************************/
/*! exports provided: children, concat, contents, eq, first, get, parent, siblings, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contents", function() { return contents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "../column-editing/node_modules/domtastic/src/selector/index.js");
/**
 * @module Selector (extra)
 */




/**
 * Return children of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').children();
 *     $('.selector').children('.filter');
 */

const children = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(element.children) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(element.children, child => {
        if(!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(child, selector))) {
          nodes.push(child);
        }
      });
    }
  });
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Add the elements of a wrapped collection to another.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The extended wrapped collection
 * @example
 *     $('.items').concat($('.more-items));
 *     $('.items').concat('.more-items);
 *     $('.items').concat('<div>more</div>');
 */

const concat = function(selector) {
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(selector), element => {
    if([].indexOf.call(this, element) === -1) {
      [].push.call(this, element);
    }
  });
  return this;
};

/**
 * Return child nodes of each element in the collection, including text and comment nodes.
 *
 * @return {Object} New wrapped collection
 * @example
 *     $('.selector').contents();
 */

const contents = function() {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => nodes.push.apply(nodes, Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element.childNodes)));
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Return a collection containing only the one at the specified index.
 *
 * @param {Number} index
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').eq(1)
 *     // The second item; result is the same as doing $($('.items')[1]);
 */

const eq = function(index) {
  return slice.call(this, index, index + 1);
};

/**
 * Return a collection containing only the first item.
 *
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').first()
 *     // The first item; result is the same as doing $($('.items')[0]);
 */

const first = function() {
  return slice.call(this, 0, 1);
};

/**
 * Return the DOM element at the specified index.
 *
 * @param {Number} index
 * @return {Node} Element at the specified index
 * @example
 *     $('.items').get(1)
 *     // The second element; result is the same as doing $('.items')[1];
 */

const get = function(index) {
  return this[index];
};

/**
 * Return the parent elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').parent();
 *     $('.selector').parent('.filter');
 */

const parent = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(element.parentNode, selector))) {
      nodes.push(element.parentNode);
    }
  });
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').siblings();
 *     $('.selector').siblings('.filter');
 */

const siblings = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(element.parentNode.children, sibling => {
    if(sibling !== element && (!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(sibling, selector)))) {
      nodes.push(sibling);
    }
  }));
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Create a new, sliced collection.
 *
 * @param {Number} start
 * @param {Number} end
 * @return {Object} New wrapped collection
 * @example
 *     $('.items').slice(1, 3)
 *     // New wrapped collection containing the second, third, and fourth element.
 */

const slice = function(start, end) { // eslint-disable-line no-unused-vars
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])([].slice.apply(this, arguments));
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/selector/index.js":
/*!**********************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/selector/index.js ***!
  \**********************************************************************/
/*! exports provided: $, find, matches, DOMtastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMtastic", function() { return DOMtastic; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../column-editing/node_modules/domtastic/src/util.js");
/**
 * @module Selector
 */



let isPrototypeSet = false;

const reFragment = /^\s*<(\w+|!)[^>]*>/;
const reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
const reSimpleSelector = /^[.#]?[\w-]*$/;

/*
 * Versatile wrapper for `querySelectorAll`.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @param {String|Node|NodeList} context=document The context for the selector to query elements.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     var $items = $(.items');
 * @example
 *     var $element = $(domElement);
 * @example
 *     var $list = $(nodeList, document.body);
 * @example
 *     var $element = $('<p>evergreen</p>');
 */

const domtastic = function domtastic(selector, context = document) {

  let collection;

  if(!selector) {

    collection = document.querySelectorAll(null);

  } else if(selector instanceof DOMtastic) {

    return selector;

  } else if(typeof selector !== 'string') {

    collection = selector.nodeType || selector === window ? [selector] : selector;

  } else if(reFragment.test(selector)) {

    collection = createFragment(selector);

  } else {

    context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;

    collection = querySelector(selector, context);

  }

  return wrap(collection);

};

const $ = domtastic;

/*
 * Find descendants matching the provided `selector` for each element in the collection.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The wrapped collection
 * @example
 *     $('.selector').find('.deep').$('.deepest');
 */

const find = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, node => Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(querySelector(selector, node), child => {
    if(nodes.indexOf(child) === -1) {
      nodes.push(child);
    }
  }));
  return $(nodes);
};

/*
 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
 *
 * @param {Node} element Element to test
 * @param {String} selector Selector to match against element
 * @return {Boolean}
 *
 * @example
 *     $.matches(element, '.match');
 */

const matches = (() => {
  const context = typeof Element !== 'undefined' ? Element.prototype : _util__WEBPACK_IMPORTED_MODULE_0__["win"];
  const _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
  return (element, selector) => _matches.call(element, selector);
})();

/*
 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
 *
 * @private
 * @param {String} selector Query selector.
 * @param {Node} context The context for the selector to query elements.
 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
 */

const querySelector = (selector, context) => {

  const isSimpleSelector = reSimpleSelector.test(selector);

  if(isSimpleSelector) {
    if(selector[0] === '#') {
      const element = (context.getElementById ? context : document).getElementById(selector.slice(1));
      return element ? [element] : [];
    }
    if(selector[0] === '.') {
      return context.getElementsByClassName(selector.slice(1));
    }
    return context.getElementsByTagName(selector);
  }

  return context.querySelectorAll(selector);

};

/*
 * Create DOM fragment from an HTML string
 *
 * @private
 * @param {String} html String representing HTML.
 * @return {NodeList}
 */

const createFragment = html => {

  if(reSingleTag.test(html)) {
    return [document.createElement(RegExp.$1)];
  }

  const elements = [];
  const container = document.createElement('div');
  const children = container.childNodes;

  container.innerHTML = html;

  for(let i = 0, l = children.length; i < l; i++) {
    elements.push(children[i]);
  }

  return elements;
};

/*
 * Calling `$(selector)` returns a wrapped collection of elements.
 *
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 * @return Object) The wrapped collection
 */

const wrap = collection => {

  if(!isPrototypeSet) {
    DOMtastic.prototype = $.fn;
    DOMtastic.prototype.constructor = DOMtastic;
    isPrototypeSet = true;
  }

  return new DOMtastic(collection);
};

/*
 * Constructor for the Object.prototype strategy
 *
 * @constructor
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 */

const DOMtastic = function DOMtastic(collection) {
  let i = 0;
  const length = collection.length;
  for(; i < length;) {
    this[i] = collection[i++];
  }
  this.length = length;
};


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/type.js":
/*!************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/type.js ***!
  \************************************************************/
/*! exports provided: isFunction, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/**
 * @module Type
 */

/*
 * Determine if the argument passed is a Javascript function object.
 *
 * @param {Object} [obj] Object to test whether or not it is a function.
 * @return {boolean}
 * @example
 *     $.isFunction(function(){}); // true
 * @example
 *     $.isFunction({}); // false
 */

const isFunction = obj => typeof obj === 'function';

/*
 * Determine whether the argument is an array.
 *
 * @param {Object} [obj] Object to test whether or not it is an array.
 * @return {boolean}
 * @example
 *     $.isArray([]); // true
 * @example
 *     $.isArray({}); // false
 */

const isArray = Array.isArray;


/***/ }),

/***/ "../column-editing/node_modules/domtastic/src/util.js":
/*!************************************************************!*\
  !*** ../column-editing/node_modules/domtastic/src/util.js ***!
  \************************************************************/
/*! exports provided: win, toArray, each, extend, uniq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/*
 * @module Util
 */

/*
 * Reference to the window object
 * @private
 */

const win = typeof window !== 'undefined' ? window : {};

/**
 * Convert `NodeList` to `Array`.
 *
 * @param {NodeList|Array} collection
 * @return {Array}
 * @private
 */

const toArray = collection => {
  const length = collection.length;
  const result = new Array(length);
  for(let i = 0; i < length; i++) {
    result[i] = collection[i];
  }
  return result;
};

/**
 * Faster alternative to [].forEach method
 *
 * @param {Node|NodeList|Array} collection
 * @param {Function} callback
 * @return {Node|NodeList|Array}
 * @private
 */

const each = (collection, callback, thisArg) => {
  const length = collection.length;
  if(length !== undefined && collection.nodeType === undefined) {
    for(let i = 0; i < length; i++) {
      callback.call(thisArg, collection[i], i, collection);
    }
  } else {
    callback.call(thisArg, collection, 0, collection);
  }
  return collection;
};

/**
 * Assign enumerable properties from source object(s) to target object
 *
 * @method extend
 * @param {Object} target Object to extend
 * @param {Object} [source] Object to extend from
 * @return {Object} Extended object
 * @example
 *     $.extend({a: 1}, {b: 2}); // {a: 1, b: 2}
 * @example
 *     $.extend({a: 1}, {b: 2}, {a: 3}); // {a: 3, b: 2}
 */

const extend = (target, ...sources) => {
  sources.forEach(src => {
    for(let prop in src) {
      target[prop] = src[prop];
    }
  });
  return target;
};

/**
 * Return the collection without duplicates
 *
 * @param collection Collection to remove duplicates from
 * @return {Node|NodeList|Array}
 * @private
 */

const uniq = collection => collection.filter((item, index) => collection.indexOf(item) === index);


/***/ }),

/***/ "../column-editing/node_modules/min-dash/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ../column-editing/node_modules/min-dash/dist/index.esm.js ***!
  \*****************************************************************/
/*! exports provided: flatten, find, findIndex, filter, forEach, without, reduce, every, some, map, keys, size, values, groupBy, uniqueBy, unionBy, sortBy, matchPattern, debounce, throttle, bind, isUndefined, isDefined, isNil, isArray, isObject, isNumber, isFunction, isString, ensureArray, has, assign, pick, omit, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ }),

/***/ "../column-editing/resources/plus-solid.svg":
/*!**************************************************!*\
  !*** ../column-editing/resources/plus-solid.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"plus-circle\" class=\"svg-inline--fa fa-plus-circle fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z\"></path></svg>"

/***/ }),

/***/ "../column-editing/src/components/shared/AddColumnButton.scss":
/*!********************************************************************!*\
  !*** ../column-editing/src/components/shared/AddColumnButton.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../navigation-editing/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../navigation-editing/node_modules/css-loader/dist/cjs.js!../../../../navigation-editing/node_modules/sass-loader/dist/cjs.js!./AddColumnButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/AddColumnButton.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../column-editing/src/components/shared/AddColumnButton.svelte":
/*!**********************************************************************!*\
  !*** ../column-editing/src/components/shared/AddColumnButton.svelte ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _resources_plus_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/plus-solid.svg */ "../column-editing/resources/plus-solid.svg");
/* harmony import */ var _resources_plus_solid_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_plus_solid_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "../column-editing/node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _AddColumnButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddColumnButton.scss */ "../column-editing/src/components/shared/AddColumnButton.scss");
/* harmony import */ var _AddColumnButton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AddColumnButton_scss__WEBPACK_IMPORTED_MODULE_4__);
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/column-editing/src/components/shared/AddColumnButton.svelte generated by Svelte v3.20.1 */







function create_fragment(ctx) {
	let div1;
	let div0;
	let t;
	let html_tag;
	let dispose;

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "fake");
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__["HtmlTag"](_resources_plus_solid_svg__WEBPACK_IMPORTED_MODULE_2___default.a, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "id", /*id*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "new-column-button");
		},
		m(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t);
			html_tag.m(div1);
			if (remount) dispose();

			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div1, "click", function () {
				if (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(/*addHandler*/ ctx[1])) /*addHandler*/ ctx[1].apply(this, arguments);
			});
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (dirty & /*id*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "id", /*id*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const noop = () => {
		
	};

	let addHandler = noop;

	function handleAddInputColumn() {
		addColumn("inputHeaders");
		updateRules("inputCells");
		onUpdateTable(tableData);
	}

	function handleAddOutputColumn() {
		addColumn("outputHeaders");
		updateRules("outputCells");
		onUpdateTable(tableData);
	}

	function updateRules(type) {
		const { rules } = tableData;

		const updatedRules = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["map"])(rules, r => {
			return { ...r, [type]: [...r[type], "-"] };
		});

		$$invalidate(2, tableData = { ...tableData, rules: updatedRules });
	}

	function addColumn(type) {
		$$invalidate(2, tableData = {
			...tableData,
			[type]: [
				...tableData[type],
				{
					idx: type === "inputHeaders"
					? `input-header-${tableData[type].length}`
					: `output-header-${tableData[type].length}`,
					clause: "And",
					expression: "",
					type: ""
				}
			]
		});
	}

	// lifecycle //////////
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(async () => {
		$$invalidate(1, addHandler = id.includes("input")
		? handleAddInputColumn
		: handleAddOutputColumn);
	});

	let { id } = $$props;
	let { tableData = {} } = $$props;
	let { onUpdateTable = noop } = $$props;

	$$self.$set = $$props => {
		if ("id" in $$props) $$invalidate(0, id = $$props.id);
		if ("tableData" in $$props) $$invalidate(2, tableData = $$props.tableData);
		if ("onUpdateTable" in $$props) $$invalidate(3, onUpdateTable = $$props.onUpdateTable);
	};

	return [id, addHandler, tableData, onUpdateTable];
}

class AddColumnButton extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { id: 0, tableData: 2, onUpdateTable: 3 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (AddColumnButton);


/***/ }),

/***/ "../column-editing/src/components/shared/BasicTable.scss":
/*!***************************************************************!*\
  !*** ../column-editing/src/components/shared/BasicTable.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../navigation-editing/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../navigation-editing/node_modules/css-loader/dist/cjs.js!../../../../navigation-editing/node_modules/sass-loader/dist/cjs.js!./BasicTable.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/BasicTable.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../column-editing/src/components/shared/BasicTable.svelte":
/*!*****************************************************************!*\
  !*** ../column-editing/src/components/shared/BasicTable.svelte ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "../column-editing/node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domtastic */ "../column-editing/node_modules/domtastic/src/index.js");
/* harmony import */ var _BasicTable_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BasicTable.scss */ "../column-editing/src/components/shared/BasicTable.scss");
/* harmony import */ var _BasicTable_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BasicTable_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_getHitPolicies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/getHitPolicies */ "../column-editing/src/util/getHitPolicies.js");
/* harmony import */ var _AddColumnButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddColumnButton */ "../column-editing/src/components/shared/AddColumnButton.svelte");
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContextMenu */ "../column-editing/src/components/shared/ContextMenu.svelte");
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/column-editing/src/components/shared/BasicTable.svelte generated by Svelte v3.20.1 */










function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[25] = list[i];
	child_ctx[27] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[28] = list[i];
	child_ctx[27] = i;
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i].idx;
	child_ctx[21] = list[i].inputCells;
	child_ctx[22] = list[i].outputCells;
	child_ctx[24] = i;
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i].idx;
	child_ctx[30] = list[i].clause;
	child_ctx[31] = list[i].expression;
	child_ctx[32] = list[i].type;
	child_ctx[24] = i;
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i].idx;
	child_ctx[30] = list[i].clause;
	child_ctx[31] = list[i].expression;
	child_ctx[32] = list[i].type;
	child_ctx[34] = list[i].smaller;
	child_ctx[24] = i;
	return child_ctx;
}

function get_each_context_5(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[36] = list[i].name;
	return child_ctx;
}

// (258:12) {#each HIT_POLICIES as { name }}
function create_each_block_5(ctx) {
	let option;
	let t_value = /*name*/ ctx[36] + "";
	let t;
	let option_selected_value;
	let option_value_value;

	return {
		c() {
			option = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			option.selected = option_selected_value = /*name*/ ctx[36] === /*tableData*/ ctx[0].hitPolicy;
			option.__value = option_value_value = /*name*/ ctx[36];
			option.value = option.__value;
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, option, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && option_selected_value !== (option_selected_value = /*name*/ ctx[36] === /*tableData*/ ctx[0].hitPolicy)) {
				option.selected = option_selected_value;
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(option);
		}
	};
}

// (282:10) {#if i === tableData.inputHeaders.length - 1}
function create_if_block_3(ctx) {
	let th;

	return {
		c() {
			th = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "class", "empty-cell");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "id", "input-gap");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, th, anchor);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(th);
		}
	};
}

// (269:8) {#each tableData.inputHeaders as { idx, clause, expression, type, smaller }
function create_each_block_4(ctx) {
	let th;
	let span0;
	let t0_value = /*clause*/ ctx[30] + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*expression*/ ctx[31] + "";
	let t2;
	let t3;
	let span1;
	let t4_value = /*type*/ ctx[32] + "";
	let t4;
	let span1_data_size_value;
	let th_data_header_id_value;
	let t5;
	let if_block_anchor;
	let dispose;
	let if_block = /*i*/ ctx[24] === /*tableData*/ ctx[0].inputHeaders.length - 1 && create_if_block_3(ctx);

	return {
		c() {
			th = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t4_value);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "class", "clause");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p, "class", "label");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "type");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "data-size", span1_data_size_value = /*smaller*/ ctx[34] ? "smaller" : "");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "class", "input-header");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "data-header-id", th_data_header_id_value = /*idx*/ ctx[20]);
		},
		m(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, th, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t5, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			if (remount) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(th, "dblclick", /*handleColumnClick*/ ctx[9]),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(th, "contextmenu", Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["prevent_default"])(/*handleOpenContextMenu*/ ctx[12]))
			];
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && t0_value !== (t0_value = /*clause*/ ctx[30] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if (dirty[0] & /*tableData*/ 1 && t2_value !== (t2_value = /*expression*/ ctx[31] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
			if (dirty[0] & /*tableData*/ 1 && t4_value !== (t4_value = /*type*/ ctx[32] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t4, t4_value);

			if (dirty[0] & /*tableData*/ 1 && span1_data_size_value !== (span1_data_size_value = /*smaller*/ ctx[34] ? "smaller" : "")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "data-size", span1_data_size_value);
			}

			if (dirty[0] & /*tableData*/ 1 && th_data_header_id_value !== (th_data_header_id_value = /*idx*/ ctx[20])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "data-header-id", th_data_header_id_value);
			}

			if (/*i*/ ctx[24] === /*tableData*/ ctx[0].inputHeaders.length - 1) {
				if (!if_block) {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(th);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t5);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (297:10) {#if i === tableData.outputHeaders.length - 1}
function create_if_block_2(ctx) {
	let th;

	return {
		c() {
			th = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "class", "empty-cell");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "id", "output-gap");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, th, anchor);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(th);
		}
	};
}

// (287:8) {#each tableData.outputHeaders as { idx, clause, expression, type }
function create_each_block_3(ctx) {
	let th;
	let span0;
	let t0_value = /*clause*/ ctx[30] + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*expression*/ ctx[31] + "";
	let t2;
	let t3;
	let span1;
	let t4_value = /*type*/ ctx[32] + "";
	let t4;
	let th_data_header_id_value;
	let t5;
	let if_block_anchor;
	let dispose;
	let if_block = /*i*/ ctx[24] === /*tableData*/ ctx[0].outputHeaders.length - 1 && create_if_block_2(ctx);

	return {
		c() {
			th = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t4_value);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "class", "clause");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p, "class", "label");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "type");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "class", "output-header output-cell");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "data-header-id", th_data_header_id_value = /*idx*/ ctx[20]);
		},
		m(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, th, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(span1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t5, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			if (remount) dispose();
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(th, "dblclick", /*handleColumnClick*/ ctx[9]);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && t0_value !== (t0_value = /*clause*/ ctx[30] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if (dirty[0] & /*tableData*/ 1 && t2_value !== (t2_value = /*expression*/ ctx[31] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
			if (dirty[0] & /*tableData*/ 1 && t4_value !== (t4_value = /*type*/ ctx[32] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t4, t4_value);

			if (dirty[0] & /*tableData*/ 1 && th_data_header_id_value !== (th_data_header_id_value = /*idx*/ ctx[20])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th, "data-header-id", th_data_header_id_value);
			}

			if (/*i*/ ctx[24] === /*tableData*/ ctx[0].outputHeaders.length - 1) {
				if (!if_block) {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(th);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t5);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			dispose();
		}
	};
}

// (316:12) {#if j === inputCells.length - 1}
function create_if_block_1(ctx) {
	let td;
	let td_class_value;

	return {
		c() {
			td = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "class", td_class_value = "empty-cell  " + (/*i*/ ctx[24] === /*tableData*/ ctx[0].rules.length - 1
			? "last-rule"
			: "") + " ");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, td, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && td_class_value !== (td_class_value = "empty-cell  " + (/*i*/ ctx[24] === /*tableData*/ ctx[0].rules.length - 1
			? "last-rule"
			: "") + " ")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "class", td_class_value);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(td);
		}
	};
}

// (313:10) {#each inputCells as input, j}
function create_each_block_2(ctx) {
	let td;
	let t0_value = /*input*/ ctx[28] + "";
	let t0;
	let td_data_empty_value;
	let t1;
	let if_block_anchor;
	let if_block = /*j*/ ctx[27] === /*inputCells*/ ctx[21].length - 1 && create_if_block_1(ctx);

	return {
		c() {
			td = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "class", "input-cell");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "data-empty", td_data_empty_value = /*input*/ ctx[28] === "-" ? "empty" : "none");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, td, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(td, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && t0_value !== (t0_value = /*input*/ ctx[28] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);

			if (dirty[0] & /*tableData*/ 1 && td_data_empty_value !== (td_data_empty_value = /*input*/ ctx[28] === "-" ? "empty" : "none")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "data-empty", td_data_empty_value);
			}

			if (/*j*/ ctx[27] === /*inputCells*/ ctx[21].length - 1) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(td);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
		}
	};
}

// (323:12) {#if j === outputCells.length - 1}
function create_if_block(ctx) {
	let td;
	let td_class_value;

	return {
		c() {
			td = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "class", td_class_value = "empty-cell  " + (/*i*/ ctx[24] === /*tableData*/ ctx[0].rules.length - 1
			? "last-rule"
			: "") + " ");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, td, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && td_class_value !== (td_class_value = "empty-cell  " + (/*i*/ ctx[24] === /*tableData*/ ctx[0].rules.length - 1
			? "last-rule"
			: "") + " ")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "class", td_class_value);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(td);
		}
	};
}

// (320:10) {#each outputCells as output, j}
function create_each_block_1(ctx) {
	let td;
	let t0_value = /*output*/ ctx[25] + "";
	let t0;
	let t1;
	let if_block_anchor;
	let if_block = /*j*/ ctx[27] === /*outputCells*/ ctx[22].length - 1 && create_if_block(ctx);

	return {
		c() {
			td = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "class", "output-cell");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, td, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(td, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && t0_value !== (t0_value = /*output*/ ctx[25] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);

			if (/*j*/ ctx[27] === /*outputCells*/ ctx[22].length - 1) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(td);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
		}
	};
}

// (310:6) {#each tableData.rules as { idx, inputCells, outputCells }
function create_each_block(ctx) {
	let tr;
	let td0;
	let t0_value = /*idx*/ ctx[20] + "";
	let t0;
	let t1;
	let t2;
	let t3;
	let td1;
	let t4;
	let tr_id_value;
	let each_value_2 = /*inputCells*/ ctx[21];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value_1 = /*outputCells*/ ctx[22];
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
			td0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			td1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td0, "class", "rule");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td1, "class", "annotation-cell");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(tr, "id", tr_id_value = /*idx*/ ctx[20]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, tr, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(td0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t1);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(tr, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t4);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*tableData*/ 1 && t0_value !== (t0_value = /*idx*/ ctx[20] + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);

			if (dirty[0] & /*tableData*/ 1) {
				each_value_2 = /*inputCells*/ ctx[21];
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(tr, t2);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_2.length;
			}

			if (dirty[0] & /*tableData*/ 1) {
				each_value_1 = /*outputCells*/ ctx[22];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, t3);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (dirty[0] & /*tableData*/ 1 && tr_id_value !== (tr_id_value = /*idx*/ ctx[20])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(tr, "id", tr_id_value);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(tr);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks_1, detaching);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let table;
	let thead;
	let tr0;
	let th0;
	let p0;
	let t0_value = /*tableData*/ ctx[0].name + "";
	let t0;
	let t1;
	let span;
	let t2;
	let select;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let t6;
	let tr1;
	let th1;
	let t7;
	let t8;
	let t9;
	let th2;
	let t11;
	let tbody;
	let tr2;
	let td;
	let t12;
	let t13;
	let t14;
	let t15;
	let t16;
	let current;
	let dispose;
	let each_value_5 = _util_getHitPolicies__WEBPACK_IMPORTED_MODULE_5__["default"];
	let each_blocks_3 = [];

	for (let i = 0; i < each_value_5.length; i += 1) {
		each_blocks_3[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
	}

	let each_value_4 = /*tableData*/ ctx[0].inputHeaders;
	let each_blocks_2 = [];

	for (let i = 0; i < each_value_4.length; i += 1) {
		each_blocks_2[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
	}

	let each_value_3 = /*tableData*/ ctx[0].outputHeaders;
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks_1[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	let each_value = /*tableData*/ ctx[0].rules;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const addcolumnbutton0 = new _AddColumnButton__WEBPACK_IMPORTED_MODULE_6__["default"]({
			props: {
				id: "add-input-column",
				tableData: /*tableData*/ ctx[0],
				onUpdateTable: /*updateTableData*/ ctx[7]
			}
		});

	const addcolumnbutton1 = new _AddColumnButton__WEBPACK_IMPORTED_MODULE_6__["default"]({
			props: {
				id: "add-output-column",
				tableData: /*tableData*/ ctx[0],
				onUpdateTable: /*updateTableData*/ ctx[7]
			}
		});

	const contextmenu = new _ContextMenu__WEBPACK_IMPORTED_MODULE_7__["default"]({
			props: {
				context: /*currentContextMenu*/ ctx[3],
				onClose: /*handleCloseContextMenu*/ ctx[13],
				onEditColumn: /*handleEditColumn*/ ctx[8]
			}
		});

	var switch_value = /*editComponent*/ ctx[1];

	function switch_props(ctx) {
		return {
			props: {
				header: /*currentHeader*/ ctx[2],
				onUpdateHeader: /*handleUpdateColumnHeader*/ ctx[10],
				onClose: /*handleCloseEditComponent*/ ctx[11]
			}
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			table = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("table");
			thead = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("thead");
			tr0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
			th0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			select = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].c();
			}

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*explanation*/ ctx[4]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			tr1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
			th1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			th2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			th2.textContent = "Annotations";
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			tbody = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tbody");
			tr2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
			td = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(addcolumnbutton0.$$.fragment);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(addcolumnbutton1.$$.fragment);
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(contextmenu.$$.fragment);
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(switch_instance.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "hp-explanation");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th0, "colspan", /*tableLength*/ ctx[5]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(tr0, "class", "title-row");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th1, "class", "empty-cell");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th2, "class", "annotation-header annotation-cell");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(tr1, "class", "header-row");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "colspan", /*tableLength*/ ctx[5]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(tr2, "class", "empty-line");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "decision-table");
		},
		m(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, table);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(table, thead);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(thead, tr0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr0, th0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, span);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, select);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].m(select, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(th0, p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(thead, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(thead, tr1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr1, th1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr1, t7);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(tr1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr1, t8);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(tr1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr1, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr1, th2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(table, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(table, tbody);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tbody, tr2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr2, td);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tbody, t12);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tbody, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(addcolumnbutton0, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(addcolumnbutton1, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(contextmenu, div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t16);

			if (switch_instance) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, null);
			}

			current = true;
			if (remount) dispose();
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select, "change", /*handleChangeHitPolicy*/ ctx[6]);
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*tableData*/ 1) && t0_value !== (t0_value = /*tableData*/ ctx[0].name + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);

			if (dirty[0] & /*tableData*/ 1) {
				each_value_5 = _util_getHitPolicies__WEBPACK_IMPORTED_MODULE_5__["default"];
				let i;

				for (i = 0; i < each_value_5.length; i += 1) {
					const child_ctx = get_each_context_5(ctx, each_value_5, i);

					if (each_blocks_3[i]) {
						each_blocks_3[i].p(child_ctx, dirty);
					} else {
						each_blocks_3[i] = create_each_block_5(child_ctx);
						each_blocks_3[i].c();
						each_blocks_3[i].m(select, null);
					}
				}

				for (; i < each_blocks_3.length; i += 1) {
					each_blocks_3[i].d(1);
				}

				each_blocks_3.length = each_value_5.length;
			}

			if (!current || dirty[0] & /*explanation*/ 16) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t4, /*explanation*/ ctx[4]);

			if (!current || dirty[0] & /*tableLength*/ 32) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(th0, "colspan", /*tableLength*/ ctx[5]);
			}

			if (dirty[0] & /*tableData, handleColumnClick, handleOpenContextMenu*/ 4609) {
				each_value_4 = /*tableData*/ ctx[0].inputHeaders;
				let i;

				for (i = 0; i < each_value_4.length; i += 1) {
					const child_ctx = get_each_context_4(ctx, each_value_4, i);

					if (each_blocks_2[i]) {
						each_blocks_2[i].p(child_ctx, dirty);
					} else {
						each_blocks_2[i] = create_each_block_4(child_ctx);
						each_blocks_2[i].c();
						each_blocks_2[i].m(tr1, t8);
					}
				}

				for (; i < each_blocks_2.length; i += 1) {
					each_blocks_2[i].d(1);
				}

				each_blocks_2.length = each_value_4.length;
			}

			if (dirty[0] & /*tableData, handleColumnClick*/ 513) {
				each_value_3 = /*tableData*/ ctx[0].outputHeaders;
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_3(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(tr1, t9);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_3.length;
			}

			if (!current || dirty[0] & /*tableLength*/ 32) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td, "colspan", /*tableLength*/ ctx[5]);
			}

			if (dirty[0] & /*tableData*/ 1) {
				each_value = /*tableData*/ ctx[0].rules;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			const addcolumnbutton0_changes = {};
			if (dirty[0] & /*tableData*/ 1) addcolumnbutton0_changes.tableData = /*tableData*/ ctx[0];
			addcolumnbutton0.$set(addcolumnbutton0_changes);
			const addcolumnbutton1_changes = {};
			if (dirty[0] & /*tableData*/ 1) addcolumnbutton1_changes.tableData = /*tableData*/ ctx[0];
			addcolumnbutton1.$set(addcolumnbutton1_changes);
			const contextmenu_changes = {};
			if (dirty[0] & /*currentContextMenu*/ 8) contextmenu_changes.context = /*currentContextMenu*/ ctx[3];
			contextmenu.$set(contextmenu_changes);
			const switch_instance_changes = {};
			if (dirty[0] & /*currentHeader*/ 4) switch_instance_changes.header = /*currentHeader*/ ctx[2];

			if (switch_value !== (switch_value = /*editComponent*/ ctx[1])) {
				if (switch_instance) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
					const old_component = switch_instance;

					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(old_component.$$.fragment, 1, 0, () => {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(old_component, 1);
					});

					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(switch_instance.$$.fragment);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, 1);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(addcolumnbutton0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(addcolumnbutton1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(contextmenu.$$.fragment, local);
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(addcolumnbutton0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(addcolumnbutton1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(contextmenu.$$.fragment, local);
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks_3, detaching);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks_2, detaching);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks_1, detaching);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(addcolumnbutton0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(addcolumnbutton1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(contextmenu);
			if (switch_instance) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(switch_instance);
			dispose();
		}
	};
}

const HOVER_MARKER = "hover";

function initAddColumnBtns() {
	// inputs
	const inputGap = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])("#input-gap");

	let bBox = inputGap[0].getBoundingClientRect();
	const addInputBtn = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])("#add-input-column");
	addInputBtn.css("left", bBox.x - 11 + "px");
	addInputBtn.css("top", bBox.bottom - bBox.top + "px");

	// outputs
	const outputGap = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])("#output-gap");

	bBox = outputGap[0].getBoundingClientRect();
	const addOutputBtn = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])("#add-output-column");
	addOutputBtn.css("left", bBox.x - 11 + "px");
	addOutputBtn.css("top", bBox.bottom - bBox.top + "px");
}

function instance($$self, $$props, $$invalidate) {
	const noop = () => {
		
	};

	const nullHeader = { bBox: {}, data: null };
	const nullContextMenu = { position: {}, data: null };

	// state //////////
	let currentHeader = nullHeader;

	let currentContextMenu = nullContextMenu;

	// lifecycle //////////
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["afterUpdate"])(async () => {
		const { inputHeaders, outputHeaders } = tableData;

		Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(inputHeaders, ({ idx }) => {
			const header = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])(`[data-header-id="${idx}"`);
			initHeaderInteractions(header);
		});

		Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(outputHeaders, ({ idx }) => {
			const header = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])(`[data-header-id="${idx}"`);
			initHeaderInteractions(header);
		});

		initAddColumnBtns();
	});

	// methods //////////
	function handleChangeHitPolicy(event) {
		const { target: { value } } = event;
		$$invalidate(0, tableData.hitPolicy = value, tableData);
	}

	function initHeaderInteractions(header) {
		// do not do anything if not in split screen
		if (onHighlight === noop) {
			return;
		}

		header.addClass("table-header");

		header.on("mouseover", event => {
			event.stopPropagation();
			event.preventDefault();

			if (header.hasClass(HOVER_MARKER)) {
				return;
			}

			header.addClass(HOVER_MARKER);
			onHighlight(header);
		});

		header.on("mouseout", event => {
			event.stopPropagation();
			event.preventDefault();

			if (!header.hasClass(HOVER_MARKER)) {
				return;
			}

			header.removeClass(HOVER_MARKER);
			onHighlight(header);
		});
	}

	function updateTableData(updated) {
		$$invalidate(0, tableData = { ...tableData, ...updated });
	}

	function handleEditColumn(header) {
		const bBox = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])(`[data-header-id="${header.idx}"]`)[0].getBoundingClientRect();
		$$invalidate(2, currentHeader = { data: header, bBox });
	}

	function handleColumnClick(event) {
		const { target } = event;

		if (!target) {
			return;
		}

		const original = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])(target);
		const headerNode = original.closest("th");
		const header = getTableHeader(headerNode.attr("data-header-id"));
		header && handleEditColumn(header);
	}

	function handleUpdateColumnHeader(idx, updated = {}) {
		const { inputHeaders, outputHeaders } = tableData;

		// (1) try to update inputHeaders
		const updatedInputHeaders = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["map"])(inputHeaders, h => {
			if (h.idx === idx) {
				h = { ...h, ...updated };
			}

			return h;
		});

		// (2) try to update outputHeaders
		const updatedOutputHeaders = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["map"])(outputHeaders, h => {
			if (h.idx === idx) {
				h = { ...h, ...updated };
			}

			return h;
		});

		handleCloseEditComponent();

		updateTableData({
			inputHeaders: updatedInputHeaders,
			outputHeaders: updatedOutputHeaders
		});
	}

	function handleCloseEditComponent() {
		$$invalidate(2, currentHeader = nullHeader);
	}

	function handleOpenContextMenu(event) {
		const { target } = event;

		if (!target) {
			return;
		}

		const original = Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])(target);
		const headerNode = original.closest("th");
		const header = getTableHeader(headerNode.attr("data-header-id"));

		$$invalidate(3, currentContextMenu = {
			data: header,
			position: { x: event.pageX, y: event.pageY }
		});
	}

	function handleCloseContextMenu() {
		$$invalidate(3, currentContextMenu = nullContextMenu);
	}

	let { onHighlight = noop } = $$props;
	let { tableData = {} } = $$props;
	let { editComponent } = $$props;

	// helpers //////////
	function getTableHeader(idx) {
		const found = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["find"])(tableData["inputHeaders"], h => h.idx === idx);

		if (found) {
			return found;
		}

		return Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["find"])(tableData["outputHeaders"], h => h.idx === idx);
	}

	$$self.$set = $$props => {
		if ("onHighlight" in $$props) $$invalidate(14, onHighlight = $$props.onHighlight);
		if ("tableData" in $$props) $$invalidate(0, tableData = $$props.tableData);
		if ("editComponent" in $$props) $$invalidate(1, editComponent = $$props.editComponent);
	};

	let explanation;
	let tableLength;

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*tableData*/ 1) {
			$: $$invalidate(4, explanation = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["find"])(_util_getHitPolicies__WEBPACK_IMPORTED_MODULE_5__["default"], hp => hp.name === tableData.hitPolicy).explanation);
		}

		if ($$self.$$.dirty[0] & /*tableData*/ 1) {
			$: $$invalidate(5, tableLength = tableData.inputHeaders.length + tableData.outputHeaders.length + 4);
		}
	};

	return [
		tableData,
		editComponent,
		currentHeader,
		currentContextMenu,
		explanation,
		tableLength,
		handleChangeHitPolicy,
		updateTableData,
		handleEditColumn,
		handleColumnClick,
		handleUpdateColumnHeader,
		handleCloseEditComponent,
		handleOpenContextMenu,
		handleCloseContextMenu,
		onHighlight
	];
}

class BasicTable extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"],
			{
				onHighlight: 14,
				tableData: 0,
				editComponent: 1
			},
			[-1, -1]
		);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (BasicTable);


/***/ }),

/***/ "../column-editing/src/components/shared/ContextMenu.scss":
/*!****************************************************************!*\
  !*** ../column-editing/src/components/shared/ContextMenu.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../navigation-editing/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../navigation-editing/node_modules/css-loader/dist/cjs.js!../../../../navigation-editing/node_modules/sass-loader/dist/cjs.js!./ContextMenu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/ContextMenu.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../column-editing/src/components/shared/ContextMenu.svelte":
/*!******************************************************************!*\
  !*** ../column-editing/src/components/shared/ContextMenu.svelte ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domtastic */ "../column-editing/node_modules/domtastic/src/index.js");
/* harmony import */ var _ContextMenu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu.scss */ "../column-editing/src/components/shared/ContextMenu.scss");
/* harmony import */ var _ContextMenu_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_3__);
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/column-editing/src/components/shared/ContextMenu.svelte generated by Svelte v3.20.1 */






function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i].key;
	child_ctx[9] = list[i].label;
	child_ctx[10] = list[i].action;
	return child_ctx;
}

// (120:4) {#if context.data}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = /*items*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*items*/ 2) {
				each_value = /*items*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(each_1_anchor);
		}
	};
}

// (125:12) {:else}
function create_else_block(ctx) {
	let div;
	let t_value = /*label*/ ctx[9] + "";
	let t;
	let div_id_value;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "item");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "id", div_id_value = "action-" + /*key*/ ctx[8]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

// (123:12) {#if key === 'seperator'}
function create_if_block_1(ctx) {
	let div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "separator");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

// (121:8) {#each items as {key, label, action}}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*key*/ ctx[8] === "seperator") return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if_block.p(ctx, dirty);
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let if_block = /*context*/ ctx[0].data && create_if_block(ctx);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "popup context-menu");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "left", /*context*/ ctx[0].position.x + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "top", /*context*/ ctx[0].position.y + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "display", (/*context*/ ctx[0].data ? "block" : "none") + "\n");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (if_block) if_block.m(div, null);
		},
		p(ctx, [dirty]) {
			if (/*context*/ ctx[0].data) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*context*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "left", /*context*/ ctx[0].position.x + "px");
			}

			if (dirty & /*context*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "top", /*context*/ ctx[0].position.y + "px");
			}

			if (dirty & /*context*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "display", (/*context*/ ctx[0].data ? "block" : "none") + "\n");
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
		}
	};
}

function isInsideMenu(node) {
	return node.closest(".context-menu").length;
}

function instance($$self, $$props, $$invalidate) {
	const noop = () => {
		
	};

	const items = [
		{
			key: "edit",
			label: "Edit Column",
			action: handleEditColumn
		},
		{ key: "separator" },
		{
			key: "cut",
			label: "Cut Column",
			action: noop
		},
		{
			key: "copy",
			label: "Copy Column",
			action: noop
		},
		{
			key: "paste-left",
			label: "Paste Column Left",
			action: noop
		},
		{
			key: "paste-right",
			label: "Paste Column Right",
			action: noop
		},
		{ key: "seperator" },
		{
			key: "new-left",
			label: "Add Column Left",
			action: noop
		},
		{
			key: "new-right",
			label: "Add Column Right",
			action: noop
		},
		{
			key: "remove",
			label: "Remove Column",
			action: noop
		}
	];

	// method //////////
	function handleClickOutside(event) {
		const { target } = event;
		const node = Object(domtastic__WEBPACK_IMPORTED_MODULE_2__["default"])(target);

		if (!isInsideMenu(node)) {
			handleClose();
		}
	}

	function handleClose() {
		onClose();
	}

	function handleEditColumn() {
		onEditColumn(context.data);
	}

	// lifecycle //////////
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["afterUpdate"])(async () => {
		const body = Object(domtastic__WEBPACK_IMPORTED_MODULE_2__["default"])("body");

		if (context.data) {
			body.on("click", handleClickOutside);
		} else {
			body.off("click", handleClickOutside);
		}
	});

	let { context = { position: {}, data: null } } = $$props;
	let { onClose = noop } = $$props;
	let { onEditColumn = noop } = $$props;

	$$self.$set = $$props => {
		if ("context" in $$props) $$invalidate(0, context = $$props.context);
		if ("onClose" in $$props) $$invalidate(2, onClose = $$props.onClose);
		if ("onEditColumn" in $$props) $$invalidate(3, onEditColumn = $$props.onEditColumn);
	};

	return [context, items, onClose, onEditColumn];
}

class ContextMenu extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { context: 0, onClose: 2, onEditColumn: 3 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (ContextMenu);


/***/ }),

/***/ "../column-editing/src/components/variant_A/EditPopup.scss":
/*!*****************************************************************!*\
  !*** ../column-editing/src/components/variant_A/EditPopup.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../navigation-editing/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../navigation-editing/node_modules/css-loader/dist/cjs.js!../../../../navigation-editing/node_modules/sass-loader/dist/cjs.js!./EditPopup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/variant_A/EditPopup.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../column-editing/src/components/variant_A/EditPopup.svelte":
/*!*******************************************************************!*\
  !*** ../column-editing/src/components/variant_A/EditPopup.svelte ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domtastic */ "../column-editing/node_modules/domtastic/src/index.js");
/* harmony import */ var _EditPopup_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditPopup.scss */ "../column-editing/src/components/variant_A/EditPopup.scss");
/* harmony import */ var _EditPopup_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EditPopup_scss__WEBPACK_IMPORTED_MODULE_3__);
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/column-editing/src/components/variant_A/EditPopup.svelte generated by Svelte v3.20.1 */






function create_if_block(ctx) {
	let form;
	let div0;
	let label0;
	let t1;
	let input0;
	let input0_value_value;
	let t2;
	let div1;
	let label1;
	let t4;
	let input1;
	let input1_value_value;
	let t5;
	let input2;
	let dispose;

	return {
		c() {
			form = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("form");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			label0.textContent = "expression";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			label1.textContent = "allowed values";
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label0, "for", "type");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "id", "expression");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "name", "expression");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "type", "text");
			input0.value = input0_value_value = /*header*/ ctx[0].data.expression;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "field expression-field");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label1, "for", "type");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "id", "type");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "name", "name");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "type", "text");
			input1.value = input1_value_value = /*header*/ ctx[0].data.type;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "field type-field");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input2, "type", "submit");
		},
		m(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, form, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, input0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, input1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, input2);
			if (remount) dispose();
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(form, "submit", Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["prevent_default"])(/*handleSubmit*/ ctx[1]));
		},
		p(ctx, dirty) {
			if (dirty & /*header*/ 1 && input0_value_value !== (input0_value_value = /*header*/ ctx[0].data.expression) && input0.value !== input0_value_value) {
				input0.value = input0_value_value;
			}

			if (dirty & /*header*/ 1 && input1_value_value !== (input1_value_value = /*header*/ ctx[0].data.type) && input1.value !== input1_value_value) {
				input1.value = input1_value_value;
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(form);
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div;
	let if_block = /*header*/ ctx[0].data && create_if_block(ctx);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "popup column-header-edit-popup");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "left", /*header*/ ctx[0].bBox.left + 13 + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "top", /*header*/ ctx[0].bBox.bottom - 10 + "px");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "display", (/*header*/ ctx[0].data ? "block" : "none") + "\n");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (if_block) if_block.m(div, null);
		},
		p(ctx, [dirty]) {
			if (/*header*/ ctx[0].data) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*header*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "left", /*header*/ ctx[0].bBox.left + 13 + "px");
			}

			if (dirty & /*header*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "top", /*header*/ ctx[0].bBox.bottom - 10 + "px");
			}

			if (dirty & /*header*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div, "display", (/*header*/ ctx[0].data ? "block" : "none") + "\n");
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
		}
	};
}

function constructBody(form) {
	return {
		expression: form.expression.value,
		type: form.type.value
	};
}

function isInsidePopup(node) {
	return node.closest(".column-header-edit-popup").length;
}

function instance($$self, $$props, $$invalidate) {
	const noop = () => {
		
	};

	function handleSubmit({ target: form }) {
		const updated = constructBody(form);
		onUpdateHeader(header.data.idx, updated);
	}

	function handleClickOutside(event) {
		const { target } = event;
		const node = Object(domtastic__WEBPACK_IMPORTED_MODULE_2__["default"])(target);

		if (!isInsidePopup(node)) {
			handleClose();
		}
	}

	function handleClose() {
		onClose();
	}

	function handleKeydown(event) {
		// ESC
		if (event.which === 27) {
			handleClose();
		}
	}

	// lifecycle //////////
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["afterUpdate"])(async () => {
		const body = Object(domtastic__WEBPACK_IMPORTED_MODULE_2__["default"])("body");

		if (header.data) {
			body.on("click", handleClickOutside);
			body.on("keydown", handleKeydown);
		} else {
			body.off("click", handleClickOutside);
			body.off("keydown", handleKeydown);
		}
	});

	let { header = { bBox: {}, data: null } } = $$props;
	let { onUpdateHeader = noop } = $$props;
	let { onClose = noop } = $$props;

	$$self.$set = $$props => {
		if ("header" in $$props) $$invalidate(0, header = $$props.header);
		if ("onUpdateHeader" in $$props) $$invalidate(2, onUpdateHeader = $$props.onUpdateHeader);
		if ("onClose" in $$props) $$invalidate(3, onClose = $$props.onClose);
	};

	return [header, handleSubmit, onUpdateHeader, onClose];
}

class EditPopup extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { header: 0, onUpdateHeader: 2, onClose: 3 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (EditPopup);


/***/ }),

/***/ "../column-editing/src/components/variant_A/Table_A.svelte":
/*!*****************************************************************!*\
  !*** ../column-editing/src/components/variant_A/Table_A.svelte ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _shared_BasicTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/BasicTable */ "../column-editing/src/components/shared/BasicTable.svelte");
/* harmony import */ var _EditPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditPopup */ "../column-editing/src/components/variant_A/EditPopup.svelte");
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/column-editing/src/components/variant_A/Table_A.svelte generated by Svelte v3.20.1 */





function create_fragment(ctx) {
	let div;
	let current;

	const basictable = new _shared_BasicTable__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				tableData: /*tableData*/ ctx[0],
				editComponent: _EditPopup__WEBPACK_IMPORTED_MODULE_2__["default"]
			}
		});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(basictable.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(basictable, div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const basictable_changes = {};
			if (dirty & /*tableData*/ 1) basictable_changes.tableData = /*tableData*/ ctx[0];
			basictable.$set(basictable_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(basictable.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(basictable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(basictable);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { tableData } = $$props;

	$$self.$set = $$props => {
		if ("tableData" in $$props) $$invalidate(0, tableData = $$props.tableData);
	};

	return [tableData];
}

class Table_A extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { tableData: 0 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Table_A);


/***/ }),

/***/ "../column-editing/src/util/getHitPolicies.js":
/*!****************************************************!*\
  !*** ../column-editing/src/util/getHitPolicies.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  {
    name: 'Unique',
    explanation:
        'No overlap is possible and all rules are disjoint. Only a single rule can be matched'
  },
  {
    name: 'Any',
    explanation: 'Rules may overlap. Their output have to match'
  },
  {
    name: 'Priority',
    explanation:
        'Rules may overlap. The one with the highest priority will be chosen'
  },
  {
    name: 'First',
    explanation: 'Rules may overlap. The first matching rule will be chosen'
  },
  {
    name: 'Collect',
    explanation: 'Collects the values of all matching rules'
  },
  {
    name: 'Collect (Sum)',
    explanation:
        'Collects the values of all matching rules and sums up to a single value'
  },
  {
    name: 'Collect (Max)',
    explanation:
        'Collects the values of all matching rules and uses the highest value'
  },
  {
    name: 'Collect (Min)',
    explanation:
        'Collects the values of all matching rules and uses the lowest value'
  },
  {
    name: 'Collect (Count)',
    explanation:
        'Collects the values of all matching rules and counts the number of them'
  }
]);

/***/ }),

/***/ "../navigation/node_modules/domtastic/src/array.js":
/*!*********************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/array.js ***!
  \*********************************************************/
/*! exports provided: every, filter, forEach, each, indexOf, map, pop, push, reduce, reduceRight, reverse, shift, some, unshift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pop", function() { return pop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shift", function() { return shift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshift", function() { return unshift; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../navigation/node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector/index */ "../navigation/node_modules/domtastic/src/selector/index.js");
/**
 * @module Array
 */




const ArrayProto = Array.prototype;

/**
 * Checks if the given callback returns a true(-ish) value for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Boolean} Whether each element passed the callback check.
 * @example
 *     // Test whether every element in the collection has the "active" attribute
 *     $('.items').every(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const every = ArrayProto.every;

/**
 * Filter the collection by selector or function, and return a new collection with the result.
 *
 * @param {String|Function} selector Selector or function to filter the collection.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} A new wrapped collection
 * @chainable
 * @example
 *     $('.items').filter('.active');
 * @example
 *     $('.items').filter(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const filter = function(selector, thisArg) {
  const callback = typeof selector === 'function' ? selector : element => Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(element, selector);
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(ArrayProto.filter.call(this, callback, thisArg));
};

/**
 * Execute a function for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').forEach(function(element) {
 *         element.style.color = 'evergreen';
 *     );
 */

const forEach = function(callback, thisArg) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, callback, thisArg);
};

const each = forEach;

/**
 * Returns the index of an element in the collection.
 *
 * @param {Node} element
 * @return {Number} The zero-based index, -1 if not found.
 * @example
 *     $('.items').indexOf(element); // 2
 */

const indexOf = ArrayProto.indexOf;

/**
 * Create a new collection by executing the callback for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Array} Collection with the return value of the executed callback for each element.
 * @example
 *     // Create a new array with the attribute value of each element:
 *     $('.items').map(function(element) {
 *         return element.getAttribute('name')
 */

const map = ArrayProto.map;

/**
 * Removes the last element from the collection, and returns that element.
 *
 * @return {Object} The last element from the collection.
 * @example
 *     var lastElement = $('.items').pop();
 */

const pop = ArrayProto.pop;

/**
 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').push(element);
 */

const push = ArrayProto.push;

/**
 * Apply a function against each element in the collection, and this accumulator function has to reduce it
 * to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Calculate the combined height of elements:
 *     $('.items').reduce(function(previousValue, element, index, collection) {
 *         return previousValue + element.clientHeight;
 *     }, 0);
 */

const reduce = ArrayProto.reduce;

/**
 * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
 * to reduce it to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Concatenate the text of elements in reversed order:
 *     $('.items').reduceRight(function(previousValue, element, index, collection) {
 *         return previousValue + element.textContent;
 *     }, '');
 */

const reduceRight = ArrayProto.reduceRight;

/**
 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
 *
 * @return {Object} The wrapped collection, reversed
 * @chainable
 * @example
 *     $('.items').reverse();
 */

const reverse = function() {
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this).reverse());
};

/**
 * Removes the first element from the collection, and returns that element.
 *
 * @return {Object} The first element from the collection.
 * @example
 *     var firstElement = $('.items').shift();
 */

const shift = ArrayProto.shift;

/**
 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @return {Boolean} Whether any element passed the callback check.
 * @example
 *     $('.items').some(function(element) {
 *         return element.hasAttribute('active')
 *     }); // true/false
 */

const some = ArrayProto.some;

/**
 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').unshift(element);
 */

const unshift = ArrayProto.unshift;


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/baseClass.js":
/*!*************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/baseClass.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector/index */ "../navigation/node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module BaseClass
 */




/* harmony default export */ __webpack_exports__["default"] = (function(api) {

  /**
   * Provide subclass for classes or components to extend from.
   * The opposite and successor of plugins (no need to extend `$.fn` anymore, complete control).
   *
   * @return {Class} The class to extend from, including all `$.fn` methods.
   * @example
   *     import { BaseClass } from  'domtastic';
   *
   *     class MyComponent extends BaseClass {
   *         doSomething() {
   *             return this.addClass('.foo');
   *         }
   *     }
   *
   *     let component = new MyComponent('body');
   *     component.doSomething();
   *
   * @example
   *     import $ from  'domtastic';
   *
   *     class MyComponent extends $.BaseClass {
   *         progress(value) {
   *             return this.attr('data-progress', value);
   *         }
   *     }
   *
   *     let component = new MyComponent(document.body);
   *     component.progress('ive').append('<p>enhancement</p>');
   */

  class BaseClass {
    constructor() {
      _selector_index__WEBPACK_IMPORTED_MODULE_0__["DOMtastic"].call(this, Object(_selector_index__WEBPACK_IMPORTED_MODULE_0__["$"])(...arguments));
    }
  }
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(BaseClass.prototype, api);
  return BaseClass;
});


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/css.js":
/*!*******************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/css.js ***!
  \*******************************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module CSS
 */



const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);

const camelize = value => value.replace(/-([\da-z])/gi, (matches, letter) => letter.toUpperCase());

const dasherize = value => value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
 *
 * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
 * @param {String} [value] The value of the style property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').css('padding-left'); // get
 *     $('.item').css('color', '#f00'); // set
 *     $('.item').css({'border-width': '1px', display: 'inline-block'}); // set multiple
 */

const css = function(key, value) {

  let styleProps, prop, val;

  if(typeof key === 'string') {
    key = camelize(key);

    if(typeof value === 'undefined') {
      let element = this.nodeType ? this : this[0];
      if(element) {
        val = element.style[key];
        return isNumeric(val) ? parseFloat(val) : val;
      }
      return undefined;
    }

    styleProps = {};
    styleProps[key] = value;
  } else {
    styleProps = key;
    for(prop in styleProps) {
      val = styleProps[prop];
      delete styleProps[prop];
      styleProps[camelize(prop)] = val;
    }
  }

  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    for(prop in styleProps) {
      if(styleProps[prop] || styleProps[prop] === 0) {
        element.style[prop] = styleProps[prop];
      } else {
        element.style.removeProperty(dasherize(prop));
      }
    }
  });

  return this;
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/dom/attr.js":
/*!************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/dom/attr.js ***!
  \************************************************************/
/*! exports provided: attr, removeAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module Attr
 */



/**
 * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
 *
 * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
 * @param {String} [value] The value of the attribute to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').attr('attrName'); // get
 *     $('.item').attr('attrName', 'attrValue'); // set
 *     $('.item').attr({attr1: 'value1', 'attr-2': 'value2'}); // set multiple
 */

const attr = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element ? element.getAttribute(key) : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(typeof key === 'object') {
      for(let attr in key) {
        element.setAttribute(attr, key[attr]);
      }
    } else {
      element.setAttribute(key, value);
    }
  });
};

/**
 * Remove attribute from each element in the collection.
 *
 * @param {String} key Attribute name
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeAttr('attrName');
 */

const removeAttr = function(key) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.removeAttribute(key));
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/dom/class.js":
/*!*************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/dom/class.js ***!
  \*************************************************************/
/*! exports provided: addClass, removeClass, toggleClass, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module Class
 */



/**
 * Add a class to the element(s)
 *
 * @param {String} value Space-separated class name(s) to add to the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').addClass('bar');
 *     $('.item').addClass('bar foo');
 */

const addClass = function(value) {
  if(value && value.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, 'add'));
  }
  return this;
};

/**
 * Remove a class from the element(s)
 *
 * @param {String} value Space-separated class name(s) to remove from the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeClass('bar');
 *     $('.items').removeClass('bar foo');
 */

const removeClass = function(value) {
  if(value && value.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, 'remove'));
  }
  return this;
};

/**
 * Toggle a class at the element(s)
 *
 * @param {String} value Space-separated class name(s) to toggle at the element(s).
 * @param {Boolean} [state] A Boolean value to determine whether the class should be added or removed.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').toggleClass('bar');
 *     $('.item').toggleClass('bar foo');
 *     $('.item').toggleClass('bar', true);
 */

const toggleClass = function(value, state) {
  if(value && value.length) {
    const action = typeof state === 'boolean' ? state ? 'add' : 'remove' : 'toggle';
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, action));
  }
  return this;
};

/**
 * Check if the element(s) have a class.
 *
 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
 * returns `true` if _any_ of them contains the class name.
 * @return {Boolean} Whether the element's class attribute contains the class name.
 * @example
 *     $('.item').hasClass('bar');
 */

const hasClass = function(value) {
  return (this.nodeType ? [this] : this).some(element => element.classList.contains(value));
};

/**
 * Specialized iteration, applying `fn` of the classList API to each element.
 *
 * @param {String} fnName
 * @param {String} className
 * @private
 */

const _each = function(fnName, className) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.classList[fnName](className));
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/dom/contains.js":
/*!****************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/dom/contains.js ***!
  \****************************************************************/
/*! exports provided: contains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/**
 * @module contains
 */

/**
 * Test whether an element contains another element in the DOM.
 *
 * @param {Element} container The element that may contain the other element.
 * @param {Element} element The element that may be a descendant of the other element.
 * @return {Boolean} Whether the `container` element contains the `element`.
 * @example
 *     $.contains(parentElement, childElement); // true/false
 */

const contains = (container, element) => {
  if(!container || !element || container === element) {
    return false;
  } else if(container.contains) {
    return container.contains(element);
  } else if(container.compareDocumentPosition) {
    return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
  }
  return false;
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/dom/data.js":
/*!************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/dom/data.js ***!
  \************************************************************/
/*! exports provided: data, prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module Data
 */



const isSupportsDataSet = typeof document !== 'undefined' && 'dataset' in document.documentElement;
const DATAKEYPROP = isSupportsDataSet ? 'dataset' : '__DOMTASTIC_DATA__';

const camelize = str => str.replace(/-+(.)?/g, (match, char) => char ? char.toUpperCase() : '');

/**
 * Get data from first element, or set data for each element in the collection.
 *
 * @param {String} key The key for the data to get or set.
 * @param {String} [value] The data to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').data('attrName'); // get
 *     $('.item').data('attrName', {any: 'data'}); // set
 */

const data = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && DATAKEYPROP in element ? element[DATAKEYPROP][camelize(key)] : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!isSupportsDataSet) {
      element[DATAKEYPROP] = element[DATAKEYPROP] || {};
    }

    element[DATAKEYPROP][camelize(key)] = value;
  });
};

/**
 * Get property from first element, or set property on each element in the collection.
 *
 * @param {String} key The name of the property to get or set.
 * @param {String} [value] The value of the property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prop('attrName'); // get
 *     $('.item').prop('attrName', 'attrValue'); // set
 */

const prop = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && element ? element[key] : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element[key] = value);
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/dom/extra.js":
/*!*************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/dom/extra.js ***!
  \*************************************************************/
/*! exports provided: appendTo, empty, remove, replaceWith, text, val */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceWith", function() { return replaceWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "../navigation/node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selector/index */ "../navigation/node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM (extra)
 */





/**
 * Append each element in the collection to the specified element(s).
 *
 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').appendTo(container);
 */

const appendTo = function(element) {
  const context = typeof element === 'string' ? Object(_selector_index__WEBPACK_IMPORTED_MODULE_2__["$"])(element) : element;
  _index__WEBPACK_IMPORTED_MODULE_1__["append"].call(context, this);
  return this;
};

/*
 * Empty each element in the collection.
 *
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').empty();
 */

const empty = function() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.innerHTML = '');
};

/**
 * Remove the collection from the DOM.
 *
 * @return {Array} Array containing the removed elements
 * @example
 *     $('.item').remove();
 */

const remove = function() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

/**
 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
 *
 * @return {Array} Array containing the replaced elements
 */

const replaceWith = function() {
  return _index__WEBPACK_IMPORTED_MODULE_1__["before"].apply(this, arguments).remove();
};

/**
 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').text('New content');
 */

const text = function(value) {

  if(value === undefined) {
    return this[0].textContent;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.textContent = '' + value);
};

/**
 * Get the `value` from the first, or set the `value` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('input.firstName').val('New value');
 */

const val = function(value) {

  if(value === undefined) {
    return this.length > 0 ? this[0].value : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.value = value);
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/dom/html.js":
/*!************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/dom/html.js ***!
  \************************************************************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module HTML
 */



/*
 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
 *
 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').html();
 *     $('.item').html('<span>more</span>');
 */

const html = function(fragment) {

  if(fragment === undefined) {
    const element = this.nodeType ? this : this[0];
    return element ? element.innerHTML : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.innerHTML = fragment);
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/dom/index.js":
/*!*************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/dom/index.js ***!
  \*************************************************************/
/*! exports provided: append, prepend, before, after, clone, _clone, _each */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_clone", function() { return _clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_each", function() { return _each; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/index */ "../navigation/node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM
 */




const forEach = Array.prototype.forEach;

/**
 * Append element(s) to each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to append to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').append('<p>more</p>');
 */

const append = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforeend', element);
    } else {
      if(element instanceof Node) {
        this.appendChild(element);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements, this.appendChild.bind(this));
      }
    }
  } else {
    _each(this, append, element);
  }
  return this;
};

/**
 * Place element(s) at the beginning of each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prepend('<span>start</span>');
 */

const prepend = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterbegin', element);
    } else {
      if(element instanceof Node) {
        this.insertBefore(element, this.firstChild);
      } else {
        let elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements.reverse(), prepend.bind(this));
      }
    }
  } else {
    _each(this, prepend, element);
  }
  return this;
};

/**
 * Place element(s) before each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').before('<p>prefix</p>');
 */

const before = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforebegin', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements, before.bind(this));
      }
    }
  } else {
    _each(this, before, element);
  }
  return this;
};

/**
 * Place element(s) after each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').after('<span>suf</span><span>fix</span>');
 */

const after = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterend', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this.nextSibling);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements.reverse(), after.bind(this));
      }
    }
  } else {
    _each(this, after, element);
  }
  return this;
};

/**
 * Clone a wrapped object.
 *
 * @return {Object} Wrapped collection of cloned nodes.
 * @example
 *     $(element).clone();
 */

const clone = function() {
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(_clone(this));
};

/**
 * Clone an object
 *
 * @param {String|Node|NodeList|Array} element The element(s) to clone.
 * @return {String|Node|NodeList|Array} The cloned element(s)
 * @private
 */

const _clone = element => {
  if(typeof element === 'string') {
    return element;
  } else if(element instanceof Node) {
    return element.cloneNode(true);
  } else if('length' in element) {
    return [].map.call(element, el => el.cloneNode(true));
  }
  return element;
};

/**
 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
 *
 * @param {NodeList|Array} collection
 * @param {Function} fn
 * @param {Node} element
 * @private
 */

const _each = (collection, fn, element) => {
  let l = collection.length;
  while(l--) {
    const elm = l === 0 ? element : _clone(element);
    fn.call(collection[l], elm);
  }
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/event/index.js":
/*!***************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/event/index.js ***!
  \***************************************************************/
/*! exports provided: on, off, one, getHandlers, clearHandlers, proxyHandler, delegateHandler, bind, unbind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "one", function() { return one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandlers", function() { return getHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHandlers", function() { return clearHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyHandler", function() { return proxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateHandler", function() { return delegateHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return unbind; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/closest */ "../navigation/node_modules/domtastic/src/selector/closest.js");
/**
 * @module Events
 */




/**
 * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
 *
 * @param {String} eventNames List of space-separated event types to be added to the element(s)
 * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @param {Boolean} once=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').on('click', callback);
 *     $('.container').on('click focus', '.item', handler);
 */

const on = function(eventNames, selector, handler, useCapture, once) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    eventListener;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    eventListener = proxyHandler(handler);

    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {

      if(selector) {
        eventListener = delegateHandler.bind(element, selector, eventListener);
      }

      if(once) {
        const listener = eventListener;
        eventListener = event => {
          off.call(element, eventNames, selector, handler, useCapture);
          listener.call(element, event);
        };
      }

      element.addEventListener(eventName, eventListener, useCapture || false);

      getHandlers(element).push({
        eventName,
        handler,
        eventListener,
        selector,
        namespace
      });
    });

  }, this);

  return this;
};

/**
 * Shorthand for `removeEventListener`.
 *
 * @param {String} eventNames List of space-separated event types to be removed from the element(s)
 * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').off('click', callback);
 *     $('#my-element').off('myEvent myOtherEvent');
 *     $('.item').off();
 */

const off = function(eventNames = '', selector, handler, useCapture) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    handlers;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {

      handlers = getHandlers(element);

      Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(handlers.filter(item => {
        return (
          (!eventName || item.eventName === eventName) &&
          (!namespace || item.namespace === namespace) &&
          (!handler || item.handler === handler) &&
          (!selector || item.selector === selector)
        );
      }), item => {
        element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
        handlers.splice(handlers.indexOf(item), 1);
      });

      if(!eventName && !namespace && !selector && !handler) {
        clearHandlers(element);
      } else if(handlers.length === 0) {
        clearHandlers(element);
      }

    });

  }, this);

  return this;
};

/**
 * Add event listener and execute the handler at most once per element.
 *
 * @param eventNames
 * @param selector
 * @param handler
 * @param useCapture
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').one('click', callback);
 */

const one = function(eventNames, selector, handler, useCapture) {
  return on.call(this, eventNames, selector, handler, useCapture, 1);
};

/**
 * Get event handlers from an element
 *
 * @private
 * @param {Node} element
 * @return {Array}
 */

const eventKeyProp = '__domtastic_event__';
let id = 1;
let handlers = {};
let unusedKeys = [];

const getHandlers = element => {
  if(!element[eventKeyProp]) {
    element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
  }
  const key = element[eventKeyProp];
  return handlers[key] || (handlers[key] = []);
};

/**
 * Clear event handlers for an element
 *
 * @private
 * @param {Node} element
 */

const clearHandlers = element => {
  const key = element[eventKeyProp];
  if(handlers[key]) {
    handlers[key] = null;
    element[eventKeyProp] = null;
    unusedKeys.push(key);
  }
};

/**
 * Function to create a handler that augments the event object with some extra methods,
 * and executes the callback with the event and the event data (i.e. `event.detail`).
 *
 * @private
 * @param handler Callback to execute as `handler(event, data)`
 * @return {Function}
 */

const proxyHandler = handler => function(event) {
  return handler.call(this, augmentEvent(event));
};

const eventMethods = {
  preventDefault: 'isDefaultPrevented',
  stopImmediatePropagation: 'isImmediatePropagationStopped',
  stopPropagation: 'isPropagationStopped'
};
const returnTrue = () => true;
const returnFalse = () => false;

/**
 * Attempt to augment events and implement something closer to DOM Level 3 Events.
 *
 * @private
 * @param {Object} event
 * @return {Function}
 */

const augmentEvent = event => {
  if(!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
    for(const methodName in eventMethods) {
      (function(methodName, testMethodName, originalMethod) {
        event[methodName] = function() {
          this[testMethodName] = returnTrue;
          return originalMethod && originalMethod.apply(this, arguments);
        };
        event[testMethodName] = returnFalse;
      }(methodName, eventMethods[methodName], event[methodName]));
    }
    if(event._preventDefault) {
      event.preventDefault();
    }
  }
  return event;
};

/**
 * Function to test whether delegated events match the provided `selector` (filter),
 * if the event propagation was stopped, and then actually call the provided event handler.
 * Use `this` instead of `event.currentTarget` on the event object.
 *
 * @private
 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Event} event
 */

const delegateHandler = function(selector, handler, event) {
  const eventTarget = event._target || event.target;
  const currentTarget = _selector_closest__WEBPACK_IMPORTED_MODULE_1__["closest"].call([eventTarget], selector, this)[0];
  if(currentTarget && currentTarget !== this) {
    if(currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
      handler.call(currentTarget, event);
    }
  }
};

const bind = on;
const unbind = off;


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/event/ready.js":
/*!***************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/event/ready.js ***!
  \***************************************************************/
/*! exports provided: ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/**
 * @module Ready
 */

/**
 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
 *
 * @param handler Callback to execute when initial DOM content is loaded.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $(document).ready(callback);
 */

const ready = function(handler) {
  if(/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
  return this;
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/event/trigger.js":
/*!*****************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/event/trigger.js ***!
  \*****************************************************************/
/*! exports provided: trigger, triggerHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerHandler", function() { return triggerHandler; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/contains */ "../navigation/node_modules/domtastic/src/dom/contains.js");
/**
 * @module trigger
 */




const reMouseEvent = /^(mouse(down|up|over|out|enter|leave|move)|contextmenu|(dbl)?click)$/;
const reKeyEvent = /^key(down|press|up)$/;

/**
 * Trigger event at element(s)
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').trigger('anyEventType');
 */

const trigger = function(type, data, {bubbles = true, cancelable = true, preventDefault = false} = {}) {

  const EventConstructor = getEventConstructor(type);
  const event = new EventConstructor(type, {
    bubbles,
    cancelable,
    preventDefault,
    detail: data
  });

  event._preventDefault = preventDefault;

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
      dispatchEvent(element, event);
    } else {
      triggerForPath(element, type, {
        bubbles,
        cancelable,
        preventDefault,
        detail: data
      });
    }
  });
};

const getEventConstructor = type => isSupportsOtherEventConstructors ? (reMouseEvent.test(type) ? MouseEvent : (reKeyEvent.test(type) ? KeyboardEvent : CustomEvent)) : CustomEvent;

/**
 * Trigger event at first element in the collection. Similar to `trigger()`, except:
 *
 * - Event does not bubble
 * - Default event behavior is prevented
 * - Only triggers handler for first matching element
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event
 * @example
 *     $('form').triggerHandler('submit');
 */

const triggerHandler = function(type, data) {
  if(this[0]) {
    trigger.call(this[0], type, data, {
      bubbles: false,
      preventDefault: true
    });
  }
};

/**
 * Check whether the element is attached to or detached from) the document
 *
 * @private
 * @param {Node} element Element to test
 * @return {Boolean}
 */

const isAttachedToDocument = element => {
  if(element === window || element === document) {
    return true;
  }
  return Object(_dom_contains__WEBPACK_IMPORTED_MODULE_1__["contains"])(element.ownerDocument.documentElement, element);
};

/**
 * Dispatch the event at the element and its ancestors.
 * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
 *
 * @private
 * @param {Node} element First element to dispatch the event at
 * @param {String} type Type of the event
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * Will be set to false (but shouldn't matter since events don't bubble anyway).
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 */

const triggerForPath = (element, type, params = {}) => {
  params.bubbles = false;
  const event = new CustomEvent(type, params);
  event._target = element;
  do {
    dispatchEvent(element, event);
  } while(element = element.parentNode); // eslint-disable-line no-cond-assign
};

/**
 * Dispatch event to element, but call direct event methods instead if available
 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
 *
 * @private
 * @param {Node} element Element to dispatch the event at
 * @param {Object} event Event to dispatch
 */

const directEventMethods = ['blur', 'focus', 'select', 'submit'];

const dispatchEvent = (element, event) => {
  if(directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
    element[event.type]();
  } else {
    element.dispatchEvent(event);
  }
};

/**
 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill).
 * Needed to support IE (9, 10, 11) & PhantomJS
 */

(() => {
  const CustomEvent = function(event, params = {
    bubbles: false,
    cancelable: false,
    detail: undefined
  }) {
    let customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return customEvent;
  };

  CustomEvent.prototype = _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent && _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent.prototype;
  _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent = CustomEvent;

})();

/*
 * Are events bubbling in detached DOM trees?
 * @private
 */

const isEventBubblingInDetachedTree = (() =>{
  let isBubbling = false;
  const doc = _util__WEBPACK_IMPORTED_MODULE_0__["win"].document;
  if(doc) {
    const parent = doc.createElement('div');
    const child = parent.cloneNode();
    parent.appendChild(child);
    parent.addEventListener('e', function() {
      isBubbling = true;
    });
    child.dispatchEvent(new CustomEvent('e', {bubbles: true}));
  }
  return isBubbling;
})();

const isSupportsOtherEventConstructors = (() => {
  try {
    new MouseEvent('click');
  } catch(e) {
    return false;
  }
  return true;
})();


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/index.js":
/*!*********************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../navigation/node_modules/domtastic/src/util.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../navigation/node_modules/domtastic/src/array.js");
/* harmony import */ var _baseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseClass */ "../navigation/node_modules/domtastic/src/baseClass.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css */ "../navigation/node_modules/domtastic/src/css.js");
/* harmony import */ var _dom_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/index */ "../navigation/node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _dom_attr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/attr */ "../navigation/node_modules/domtastic/src/dom/attr.js");
/* harmony import */ var _dom_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/class */ "../navigation/node_modules/domtastic/src/dom/class.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/contains */ "../navigation/node_modules/domtastic/src/dom/contains.js");
/* harmony import */ var _dom_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/data */ "../navigation/node_modules/domtastic/src/dom/data.js");
/* harmony import */ var _dom_extra__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/extra */ "../navigation/node_modules/domtastic/src/dom/extra.js");
/* harmony import */ var _dom_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/html */ "../navigation/node_modules/domtastic/src/dom/html.js");
/* harmony import */ var _event_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/index */ "../navigation/node_modules/domtastic/src/event/index.js");
/* harmony import */ var _event_trigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event/trigger */ "../navigation/node_modules/domtastic/src/event/trigger.js");
/* harmony import */ var _event_ready__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event/ready */ "../navigation/node_modules/domtastic/src/event/ready.js");
/* harmony import */ var _noconflict__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./noconflict */ "../navigation/node_modules/domtastic/src/noconflict.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selector/index */ "../navigation/node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selector/closest */ "../navigation/node_modules/domtastic/src/selector/closest.js");
/* harmony import */ var _selector_extra__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selector/extra */ "../navigation/node_modules/domtastic/src/selector/extra.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./type */ "../navigation/node_modules/domtastic/src/type.js");
/**
 * @module API
 */



const api = {};
let $ = {};

// Import modules to build up the API




















if(typeof _selector_index__WEBPACK_IMPORTED_MODULE_15__ !== 'undefined') {
  $ = _selector_index__WEBPACK_IMPORTED_MODULE_15__["$"];
  $.matches = _selector_index__WEBPACK_IMPORTED_MODULE_15__["matches"];
  api.find = _selector_index__WEBPACK_IMPORTED_MODULE_15__["find"];
}

Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])($, _dom_contains__WEBPACK_IMPORTED_MODULE_7__, _noconflict__WEBPACK_IMPORTED_MODULE_14__, _type__WEBPACK_IMPORTED_MODULE_18__);
Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(api, _array__WEBPACK_IMPORTED_MODULE_1__, _css__WEBPACK_IMPORTED_MODULE_3__, _dom_attr__WEBPACK_IMPORTED_MODULE_5__, _dom_index__WEBPACK_IMPORTED_MODULE_4__, _dom_class__WEBPACK_IMPORTED_MODULE_6__, _dom_data__WEBPACK_IMPORTED_MODULE_8__, _dom_extra__WEBPACK_IMPORTED_MODULE_9__, _dom_html__WEBPACK_IMPORTED_MODULE_10__, _event_index__WEBPACK_IMPORTED_MODULE_11__, _event_trigger__WEBPACK_IMPORTED_MODULE_12__, _event_ready__WEBPACK_IMPORTED_MODULE_13__, _selector_closest__WEBPACK_IMPORTED_MODULE_16__, _selector_extra__WEBPACK_IMPORTED_MODULE_17__);

$.fn = api;

// Version

$.version = '__VERSION__';

// Util

$.extend = _util__WEBPACK_IMPORTED_MODULE_0__["extend"];

// Provide base class to extend from

if(typeof _baseClass__WEBPACK_IMPORTED_MODULE_2__["default"] !== 'undefined') {
  $.BaseClass = Object(_baseClass__WEBPACK_IMPORTED_MODULE_2__["default"])($.fn);
}

// Export interface

/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/noconflict.js":
/*!**************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/noconflict.js ***!
  \**************************************************************/
/*! exports provided: noConflict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noConflict", function() { return noConflict; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module noConflict
 */



/*
 * Save the previous value of the global `$` variable, so that it can be restored later on.
 * @private
 */

const previousLib = _util__WEBPACK_IMPORTED_MODULE_0__["win"].$;

/**
 * In case another library sets the global `$` variable before DOMtastic does,
 * this method can be used to return the global `$` to that other library.
 *
 * @return {Object} Reference to DOMtastic.
 * @example
 *     var domtastic = $.noConflict();
 */

const noConflict = function() {
  _util__WEBPACK_IMPORTED_MODULE_0__["win"].$ = previousLib;
  return this;
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/selector/closest.js":
/*!********************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/selector/closest.js ***!
  \********************************************************************/
/*! exports provided: closest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../navigation/node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module closest
 */




/**
 * Return the closest element matching the selector (starting by itself) for each element in the collection.
 *
 * @param {String} selector Filter
 * @param {Object} [context] If provided, matching elements must be a descendant of this element
 * @return {Object} New wrapped collection (containing zero or one element)
 * @chainable
 * @example
 *     $('.selector').closest('.container');
 */

const closest = (() => {

  const closest = function(selector, context) {
    const nodes = [];
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["each"])(this, node => {
      while(node && node !== context) {
        if(Object(_index__WEBPACK_IMPORTED_MODULE_0__["matches"])(node, selector)) {
          nodes.push(node);
          break;
        }
        node = node.parentElement;
      }
    });
    return Object(_index__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniq"])(nodes));
  };

  return typeof Element === 'undefined' || !Element.prototype.closest ? closest : function(selector, context) {
    if(!context) {
      const nodes = [];
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["each"])(this, node => {
        const n = node.closest(selector);
        if(n) {
          nodes.push(n);
        }
      });
      return Object(_index__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniq"])(nodes));
    } else {
      return closest.call(this, selector, context);
    }
  };
})();


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/selector/extra.js":
/*!******************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/selector/extra.js ***!
  \******************************************************************/
/*! exports provided: children, concat, contents, eq, first, get, parent, siblings, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contents", function() { return contents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "../navigation/node_modules/domtastic/src/selector/index.js");
/**
 * @module Selector (extra)
 */




/**
 * Return children of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').children();
 *     $('.selector').children('.filter');
 */

const children = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(element.children) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(element.children, child => {
        if(!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(child, selector))) {
          nodes.push(child);
        }
      });
    }
  });
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Add the elements of a wrapped collection to another.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The extended wrapped collection
 * @example
 *     $('.items').concat($('.more-items));
 *     $('.items').concat('.more-items);
 *     $('.items').concat('<div>more</div>');
 */

const concat = function(selector) {
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(selector), element => {
    if([].indexOf.call(this, element) === -1) {
      [].push.call(this, element);
    }
  });
  return this;
};

/**
 * Return child nodes of each element in the collection, including text and comment nodes.
 *
 * @return {Object} New wrapped collection
 * @example
 *     $('.selector').contents();
 */

const contents = function() {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => nodes.push.apply(nodes, Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element.childNodes)));
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Return a collection containing only the one at the specified index.
 *
 * @param {Number} index
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').eq(1)
 *     // The second item; result is the same as doing $($('.items')[1]);
 */

const eq = function(index) {
  return slice.call(this, index, index + 1);
};

/**
 * Return a collection containing only the first item.
 *
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').first()
 *     // The first item; result is the same as doing $($('.items')[0]);
 */

const first = function() {
  return slice.call(this, 0, 1);
};

/**
 * Return the DOM element at the specified index.
 *
 * @param {Number} index
 * @return {Node} Element at the specified index
 * @example
 *     $('.items').get(1)
 *     // The second element; result is the same as doing $('.items')[1];
 */

const get = function(index) {
  return this[index];
};

/**
 * Return the parent elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').parent();
 *     $('.selector').parent('.filter');
 */

const parent = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(element.parentNode, selector))) {
      nodes.push(element.parentNode);
    }
  });
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').siblings();
 *     $('.selector').siblings('.filter');
 */

const siblings = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(element.parentNode.children, sibling => {
    if(sibling !== element && (!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(sibling, selector)))) {
      nodes.push(sibling);
    }
  }));
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Create a new, sliced collection.
 *
 * @param {Number} start
 * @param {Number} end
 * @return {Object} New wrapped collection
 * @example
 *     $('.items').slice(1, 3)
 *     // New wrapped collection containing the second, third, and fourth element.
 */

const slice = function(start, end) { // eslint-disable-line no-unused-vars
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])([].slice.apply(this, arguments));
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/selector/index.js":
/*!******************************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/selector/index.js ***!
  \******************************************************************/
/*! exports provided: $, find, matches, DOMtastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMtastic", function() { return DOMtastic; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../navigation/node_modules/domtastic/src/util.js");
/**
 * @module Selector
 */



let isPrototypeSet = false;

const reFragment = /^\s*<(\w+|!)[^>]*>/;
const reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
const reSimpleSelector = /^[.#]?[\w-]*$/;

/*
 * Versatile wrapper for `querySelectorAll`.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @param {String|Node|NodeList} context=document The context for the selector to query elements.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     var $items = $(.items');
 * @example
 *     var $element = $(domElement);
 * @example
 *     var $list = $(nodeList, document.body);
 * @example
 *     var $element = $('<p>evergreen</p>');
 */

const domtastic = function domtastic(selector, context = document) {

  let collection;

  if(!selector) {

    collection = document.querySelectorAll(null);

  } else if(selector instanceof DOMtastic) {

    return selector;

  } else if(typeof selector !== 'string') {

    collection = selector.nodeType || selector === window ? [selector] : selector;

  } else if(reFragment.test(selector)) {

    collection = createFragment(selector);

  } else {

    context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;

    collection = querySelector(selector, context);

  }

  return wrap(collection);

};

const $ = domtastic;

/*
 * Find descendants matching the provided `selector` for each element in the collection.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The wrapped collection
 * @example
 *     $('.selector').find('.deep').$('.deepest');
 */

const find = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, node => Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(querySelector(selector, node), child => {
    if(nodes.indexOf(child) === -1) {
      nodes.push(child);
    }
  }));
  return $(nodes);
};

/*
 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
 *
 * @param {Node} element Element to test
 * @param {String} selector Selector to match against element
 * @return {Boolean}
 *
 * @example
 *     $.matches(element, '.match');
 */

const matches = (() => {
  const context = typeof Element !== 'undefined' ? Element.prototype : _util__WEBPACK_IMPORTED_MODULE_0__["win"];
  const _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
  return (element, selector) => _matches.call(element, selector);
})();

/*
 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
 *
 * @private
 * @param {String} selector Query selector.
 * @param {Node} context The context for the selector to query elements.
 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
 */

const querySelector = (selector, context) => {

  const isSimpleSelector = reSimpleSelector.test(selector);

  if(isSimpleSelector) {
    if(selector[0] === '#') {
      const element = (context.getElementById ? context : document).getElementById(selector.slice(1));
      return element ? [element] : [];
    }
    if(selector[0] === '.') {
      return context.getElementsByClassName(selector.slice(1));
    }
    return context.getElementsByTagName(selector);
  }

  return context.querySelectorAll(selector);

};

/*
 * Create DOM fragment from an HTML string
 *
 * @private
 * @param {String} html String representing HTML.
 * @return {NodeList}
 */

const createFragment = html => {

  if(reSingleTag.test(html)) {
    return [document.createElement(RegExp.$1)];
  }

  const elements = [];
  const container = document.createElement('div');
  const children = container.childNodes;

  container.innerHTML = html;

  for(let i = 0, l = children.length; i < l; i++) {
    elements.push(children[i]);
  }

  return elements;
};

/*
 * Calling `$(selector)` returns a wrapped collection of elements.
 *
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 * @return Object) The wrapped collection
 */

const wrap = collection => {

  if(!isPrototypeSet) {
    DOMtastic.prototype = $.fn;
    DOMtastic.prototype.constructor = DOMtastic;
    isPrototypeSet = true;
  }

  return new DOMtastic(collection);
};

/*
 * Constructor for the Object.prototype strategy
 *
 * @constructor
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 */

const DOMtastic = function DOMtastic(collection) {
  let i = 0;
  const length = collection.length;
  for(; i < length;) {
    this[i] = collection[i++];
  }
  this.length = length;
};


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/type.js":
/*!********************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/type.js ***!
  \********************************************************/
/*! exports provided: isFunction, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/**
 * @module Type
 */

/*
 * Determine if the argument passed is a Javascript function object.
 *
 * @param {Object} [obj] Object to test whether or not it is a function.
 * @return {boolean}
 * @example
 *     $.isFunction(function(){}); // true
 * @example
 *     $.isFunction({}); // false
 */

const isFunction = obj => typeof obj === 'function';

/*
 * Determine whether the argument is an array.
 *
 * @param {Object} [obj] Object to test whether or not it is an array.
 * @return {boolean}
 * @example
 *     $.isArray([]); // true
 * @example
 *     $.isArray({}); // false
 */

const isArray = Array.isArray;


/***/ }),

/***/ "../navigation/node_modules/domtastic/src/util.js":
/*!********************************************************!*\
  !*** ../navigation/node_modules/domtastic/src/util.js ***!
  \********************************************************/
/*! exports provided: win, toArray, each, extend, uniq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/*
 * @module Util
 */

/*
 * Reference to the window object
 * @private
 */

const win = typeof window !== 'undefined' ? window : {};

/**
 * Convert `NodeList` to `Array`.
 *
 * @param {NodeList|Array} collection
 * @return {Array}
 * @private
 */

const toArray = collection => {
  const length = collection.length;
  const result = new Array(length);
  for(let i = 0; i < length; i++) {
    result[i] = collection[i];
  }
  return result;
};

/**
 * Faster alternative to [].forEach method
 *
 * @param {Node|NodeList|Array} collection
 * @param {Function} callback
 * @return {Node|NodeList|Array}
 * @private
 */

const each = (collection, callback, thisArg) => {
  const length = collection.length;
  if(length !== undefined && collection.nodeType === undefined) {
    for(let i = 0; i < length; i++) {
      callback.call(thisArg, collection[i], i, collection);
    }
  } else {
    callback.call(thisArg, collection, 0, collection);
  }
  return collection;
};

/**
 * Assign enumerable properties from source object(s) to target object
 *
 * @method extend
 * @param {Object} target Object to extend
 * @param {Object} [source] Object to extend from
 * @return {Object} Extended object
 * @example
 *     $.extend({a: 1}, {b: 2}); // {a: 1, b: 2}
 * @example
 *     $.extend({a: 1}, {b: 2}, {a: 3}); // {a: 3, b: 2}
 */

const extend = (target, ...sources) => {
  sources.forEach(src => {
    for(let prop in src) {
      target[prop] = src[prop];
    }
  });
  return target;
};

/**
 * Return the collection without duplicates
 *
 * @param collection Collection to remove duplicates from
 * @return {Node|NodeList|Array}
 * @private
 */

const uniq = collection => collection.filter((item, index) => collection.indexOf(item) === index);


/***/ }),

/***/ "../navigation/node_modules/min-dash/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ../navigation/node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: flatten, find, findIndex, filter, forEach, without, reduce, every, some, map, keys, size, values, groupBy, uniqueBy, unionBy, sortBy, matchPattern, debounce, throttle, bind, isUndefined, isDefined, isNil, isArray, isObject, isNumber, isFunction, isString, ensureArray, has, assign, pick, omit, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ }),

/***/ "../navigation/resources/diagram.svg":
/*!*******************************************!*\
  !*** ../navigation/resources/diagram.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"140 50 920 650\" version=\"1.1\"><defs><marker id=\"association-start\" viewBox=\"0 0 20 20\" refX=\"1\" refY=\"10\" markerWidth=\"10\" markerHeight=\"10\" orient=\"auto\"><path d=\"M 11 5 L 1 10 L 11 15\" style=\"stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; fill: none; stroke: black;\"></path></marker><marker id=\"association-end\" viewBox=\"0 0 20 20\" refX=\"12\" refY=\"10\" markerWidth=\"10\" markerHeight=\"10\" orient=\"auto\"><path d=\"M 1 5 L 11 10 L 1 15\" style=\"stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; fill: none; stroke: black;\"></path></marker><marker id=\"information-requirement-end\" viewBox=\"0 0 20 20\" refX=\"11\" refY=\"10\" markerWidth=\"20\" markerHeight=\"20\" orient=\"auto\"><path d=\"M 1 5 L 11 10 L 1 15 Z\" style=\"stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1;\"></path></marker><marker id=\"knowledge-requirement-end\" viewBox=\"0 0 20 20\" refX=\"11\" refY=\"10\" markerWidth=\"16\" markerHeight=\"16\" orient=\"auto\"><path d=\"M 1 3 L 11 10 L 1 17\" style=\"stroke-width: 2px; stroke-linecap: round; stroke-dasharray: 10000, 1; fill: none; stroke: black;\"></path></marker><marker id=\"authority-requirement-end\" viewBox=\"0 0 20 20\" refX=\"3\" refY=\"3\" markerWidth=\"18\" markerHeight=\"18\" orient=\"auto\"><circle cx=\"3\" cy=\"3\" r=\"3\" style=\"stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1;\"></circle></marker><marker id=\"information-requirement-highlight-end\" viewBox=\"0 0 20 20\" refX=\"11\" refY=\"10\" markerWidth=\"20\" markerHeight=\"20\" orient=\"auto\"><path d=\"M 1 5 L 11 10 L 1 15 Z\" style=\"stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; fill: #ff2400\"></path></marker></defs><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"Decision_13nychf\" style=\"display: block;\" transform=\"matrix(1 0 0 1 577 60)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"180\" height=\"80\" rx=\"0\" ry=\"0\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"33.96875\" y=\"43.3828125\">Determine Employee</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"180\" height=\"80\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"192\" height=\"92\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"Decision_03absfl\" style=\"display: block;\" transform=\"matrix(1 0 0 1 571 224)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"180\" height=\"80\" rx=\"0\" ry=\"0\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"18.6328125\" y=\"43.3828125\">Employee Suitability Score</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"180\" height=\"80\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"192\" height=\"92\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"InputData_011xp5m\" style=\"display: block;\" transform=\"matrix(1 0 0 1 598 417)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"125\" height=\"45\" rx=\"22\" ry=\"22\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"35.8125\" y=\"25.8828125\">Employee</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"125\" height=\"45\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"137\" height=\"57\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"InputData_0qarm4x\" style=\"display: block;\" transform=\"matrix(1 0 0 1 753 417)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"125\" height=\"45\" rx=\"22\" ry=\"22\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"47.1640625\" y=\"25.875\">Claim</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"125\" height=\"45\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"137\" height=\"57\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"Decision_19jtlzt\" style=\"display: block;\" transform=\"matrix(1 0 0 1 386 400)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"180\" height=\"80\" rx=\"0\" ry=\"0\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"31.6328125\" y=\"43.3828125\">Employee Experience</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"180\" height=\"80\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"192\" height=\"92\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"InputData_1vzqswv\" style=\"display: block;\" transform=\"matrix(1 0 0 1 413 587)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"125\" height=\"45\" rx=\"22\" ry=\"22\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"13.484375\" y=\"25.8828125\">Approval Authority</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"125\" height=\"45\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"137\" height=\"57\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"InputData_13z77r8\" style=\"display: block;\" transform=\"matrix(1 0 0 1 913 417)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"125\" height=\"45\" rx=\"22\" ry=\"22\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"27.8203125\" y=\"25.875\">Open Claims</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"125\" height=\"45\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"137\" height=\"57\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"Decision_11xban0\" style=\"display: block;\" transform=\"matrix(1 0 0 1 156 400)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"180\" height=\"80\" rx=\"0\" ry=\"0\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"25.296875\" y=\"43.3828125\">Employee Skill Approval</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"180\" height=\"80\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"192\" height=\"92\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-shape\" data-element-id=\"InputData_1x2qw0w\" style=\"display: block;\" transform=\"matrix(1 0 0 1 184 586)\"><g class=\"djs-visual\"><rect x=\"0\" y=\"0\" width=\"125\" height=\"45\" rx=\"22\" ry=\"22\" style=\"stroke: black; stroke-width: 2px; fill: white;\"></rect><text class=\"djs-label\" style=\"font-family: Arial, sans-serif; font-size: 12px;\"><tspan x=\"15.140625\" y=\"25.8828125\">Employee Skillset</tspan></text></g><rect class=\"djs-hit djs-hit-all\" x=\"0\" y=\"0\" width=\"125\" height=\"45\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></rect><rect x=\"-6\" y=\"-6\" width=\"137\" height=\"57\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_132\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"667,224 667,141 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"667,224 667,141 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"661\" y=\"135\" width=\"12\" height=\"95\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_133\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"661,417 661,304 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"661,417 661,304 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"655\" y=\"298\" width=\"12\" height=\"125\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_134\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"816,416 696,320 696,304 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"816,416 696,320 696,304 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"690\" y=\"298\" width=\"132\" height=\"124\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_135\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"971,417 726,320 726,304 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"971,417 726,320 726,304 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"720\" y=\"298\" width=\"257\" height=\"125\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_136\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"246,400 596,320 596,304 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"246,400 596,320 596,304 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"240\" y=\"298\" width=\"362\" height=\"108\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_137\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"476,400 626,320 626,304 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"476,400 626,320 626,304 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"470\" y=\"298\" width=\"162\" height=\"108\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_138\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"476,587 476,480 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"476,587 476,480 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"470\" y=\"474\" width=\"12\" height=\"119\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g><g class=\"djs-group\"><g class=\"djs-element djs-connection\" data-element-id=\"connection_139\" style=\"display: block;\"><g class=\"djs-visual\"><polyline points=\"247,586 246,480 \" style=\"fill: none; stroke: black; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round; marker-end: url(&#x27;#information-requirement-end&#x27;);\"></polyline></g><polyline points=\"247,586 246,480 \" class=\"djs-hit djs-hit-stroke\" style=\"fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;\"></polyline><rect x=\"240\" y=\"474\" width=\"13\" height=\"118\" class=\"djs-outline\" style=\"fill: none;\"></rect></g></g></svg>"

/***/ }),

/***/ "../navigation/src/components/DRD.scss":
/*!*********************************************!*\
  !*** ../navigation/src/components/DRD.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../navigation-editing/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../navigation-editing/node_modules/css-loader/dist/cjs.js!../../../navigation-editing/node_modules/sass-loader/dist/cjs.js!./DRD.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../navigation/src/components/DRD.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../navigation/src/components/DRD.svelte":
/*!***********************************************!*\
  !*** ../navigation/src/components/DRD.svelte ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "../navigation/node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domtastic */ "../navigation/node_modules/domtastic/src/index.js");
/* harmony import */ var _util_getElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/getElement */ "../navigation/src/util/getElement.js");
/* harmony import */ var _resources_diagram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/diagram.svg */ "../navigation/resources/diagram.svg");
/* harmony import */ var _resources_diagram_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_diagram_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DRD_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DRD.scss */ "../navigation/src/components/DRD.scss");
/* harmony import */ var _DRD_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DRD_scss__WEBPACK_IMPORTED_MODULE_6__);
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/navigation/src/components/DRD.svelte generated by Svelte v3.20.1 */









function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "diagram");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			div.innerHTML = _resources_diagram_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
		}
	};
}

function isDecision(dataElement) {
	return dataElement.attr("data-element-id").includes("Decision_");
}

function createSVGNode(n, v = {}) {
	n = document.createElementNS("http://www.w3.org/2000/svg", n);

	for (var p in v) {
		n.setAttributeNS(
			null,
			p.replace(/[A-Z]/g, function (m, p, o, s) {
				return "-" + m.toLowerCase();
			}),
			v[p]
		);
	}

	return n;
}

function instance($$self, $$props, $$invalidate) {
	const DATA_ELEMENTS = [
		"Decision_11xban0",
		"Decision_19jtlzt",
		"InputData_011xp5m",
		"InputData_0qarm4x",
		"InputData_13z77r8",
		"Decision_13nychf",
		"Decision_03absfl",
		"InputData_1vzqswv",
		"InputData_1x2qw0w"
	];

	const noop = () => {
		
	};

	// lifecycle //////////
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(async () => {
		const decisionElements = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["filter"])(DATA_ELEMENTS, e => isDecision(Object(_util_getElement__WEBPACK_IMPORTED_MODULE_4__["default"])(e)));

		Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(decisionElements, id => {
			const _decision = Object(_util_getElement__WEBPACK_IMPORTED_MODULE_4__["default"])(id);
			_decision.addClass("decision");
			addTableIcon(_decision);
		});

		if (isSplitScreen()) {
			Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(DATA_ELEMENTS, id => {
				const dataElement = Object(_util_getElement__WEBPACK_IMPORTED_MODULE_4__["default"])(id);
				bindDataInteractions(dataElement);
			});
		} else {
			Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(decisionElements, id => {
				const _decision = Object(_util_getElement__WEBPACK_IMPORTED_MODULE_4__["default"])(id);
				bindDecisionInteractions(_decision);
			});
		}
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["afterUpdate"])(async () => {
		// remove selected from all decisions first
		Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(DATA_ELEMENTS, id => {
			const dataElement = Object(_util_getElement__WEBPACK_IMPORTED_MODULE_4__["default"])(id);
			dataElement.removeClass("selected");
		});

		if (onHighlight !== noop) {
			Object(_util_getElement__WEBPACK_IMPORTED_MODULE_4__["default"])(decision).addClass("selected");
		}
	});

	// methods //////////
	function bindDecisionInteractions(decision) {
		// do not do it on split screen
		if (onHighlight !== noop) {
			return;
		}

		decision.on("mouseover", () => {
			decision.addClass("hover");
		});

		decision.on("mouseout", () => {
			decision.removeClass("hover");
		});

		decision.on("dblclick", event => {
			event.stopPropagation();
			event.preventDefault();
			decision.removeClass("hover");
			decision.addClass("selected");
			onTableChange(decision.attr("data-element-id"));
			onViewSwitch("split-screen");
		});
	}

	function bindDataInteractions(dataElement) {
		// do not do anything if not in split screen
		if (onHighlight === noop) {
			return;
		}

		dataElement.addClass("data-element");

		dataElement.on("mouseover", event => {
			dataElement.addClass("hover");
			onHighlight(dataElement);
		});

		dataElement.on("mouseout", event => {
			dataElement.removeClass("hover");
			onHighlight(dataElement);
		});

		isDecision(dataElement) && dataElement.on("click", event => {
			onTableChange(dataElement.attr("data-element-id"));
		});
	}

	function addTableIcon(decision) {
		const tableIconBox = createSVGNode("g", {
			"pointer-events": "all",
			class: "dt-icon",
			cursor: isSplitScreen() ? "normal" : "pointer"
		});

		const rect = createSVGNode("rect", {
			x: 0,
			y: 0,
			transform: "translate (2, 2)",
			width: 20,
			height: 20,
			fill: isSplitScreen() ? "none" : "#52B415"
		});

		const icon = createSVGNode("path", {
			fill: isSplitScreen() ? "black" : "white",
			transform: "scale (0.025) translate (200, 200)",
			d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"
		});

		!isSplitScreen() && Object(domtastic__WEBPACK_IMPORTED_MODULE_3__["default"])(tableIconBox).on("click", () => {
			onTableChange(decision.attr("data-element-id"));
			onViewSwitch("split-screen");
		});

		tableIconBox.append(rect);
		tableIconBox.append(icon);
		decision.append(tableIconBox);
	}

	let { decision = "Decision_03absfl" } = $$props;
	let { onViewSwitch = noop } = $$props;
	let { onHighlight = noop } = $$props;
	let { onTableChange = noop } = $$props;

	function isSplitScreen() {
		return onHighlight !== noop;
	}

	$$self.$set = $$props => {
		if ("decision" in $$props) $$invalidate(0, decision = $$props.decision);
		if ("onViewSwitch" in $$props) $$invalidate(1, onViewSwitch = $$props.onViewSwitch);
		if ("onHighlight" in $$props) $$invalidate(2, onHighlight = $$props.onHighlight);
		if ("onTableChange" in $$props) $$invalidate(3, onTableChange = $$props.onTableChange);
	};

	return [decision, onViewSwitch, onHighlight, onTableChange];
}

class DRD extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			decision: 0,
			onViewSwitch: 1,
			onHighlight: 2,
			onTableChange: 3
		});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (DRD);


/***/ }),

/***/ "../navigation/src/components/PropertiesModal.scss":
/*!*********************************************************!*\
  !*** ../navigation/src/components/PropertiesModal.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../navigation-editing/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../navigation-editing/node_modules/css-loader/dist/cjs.js!../../../navigation-editing/node_modules/sass-loader/dist/cjs.js!./PropertiesModal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../navigation/src/components/PropertiesModal.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../navigation/src/components/PropertiesModal.svelte":
/*!***********************************************************!*\
  !*** ../navigation/src/components/PropertiesModal.svelte ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _PropertiesModal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertiesModal.scss */ "../navigation/src/components/PropertiesModal.scss");
/* harmony import */ var _PropertiesModal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PropertiesModal_scss__WEBPACK_IMPORTED_MODULE_1__);
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/navigation/src/components/PropertiesModal.svelte generated by Svelte v3.20.1 */




function create_fragment(ctx) {
	let div2;

	return {
		c() {
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			div2.innerHTML = `<div class="modal-overlay" tabindex="-1" data-micromodal-close=""><div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title"><header class="modal-header"><p class="modal-title" id="modal-1-title">
          Decision Properties <code>Decision_03absfl</code></p> 
        <button class="modal-close" aria-label="Close modal" data-micromodal-close=""></button></header> 
      <main class="modal-content" id="modal-1-content"><p>
          Use this <code>properties</code> to execute the Decision on the Camunda Engine. Copy &amp; Paste the following <code>yaml</code> code into a <code>Business Rule Task</code> properties section.
        </p> 
        <pre class="yaml-view"><code>
implementation:
  decisionRef: Decision_03absfl
  binding: latest
  resultVariable: Score
  inputParameters:
    Employee Skillset: string
    Approval Authority: integer
    Employee: complex
    Claim: complex
    Open Claims: integer
          </code></pre></main> 
      <footer class="modal-footer"><button class="btn btn-modal" data-micromodal-close="" aria-label="Close this dialog window">Close</button></footer></div></div>`;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "modal");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "id", "modal-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "aria-hidden", "true");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div2, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div2);
		}
	};
}

class PropertiesModal extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (PropertiesModal);


/***/ }),

/***/ "../navigation/src/components/Wrapper.svelte":
/*!***************************************************!*\
  !*** ../navigation/src/components/Wrapper.svelte ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* Users/niklas.kiefer/bpmn-io/dmn-prototypes/packages/navigation/src/components/Wrapper.svelte generated by Svelte v3.20.1 */


function create_if_block(ctx) {
	let current;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					default_slot.p(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, /*$$scope*/ ctx[4], null), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, /*$$scope*/ ctx[4], dirty, null));
				}
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let div_class_value;
	let div_style_value;
	let current;
	let if_block = /*view*/ ctx[0] === /*activeView*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", div_class_value = "wrapper " + /*className*/ ctx[3]);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "style", div_style_value = "" + (/*style*/ ctx[2] + " display: " + (/*view*/ ctx[0] === /*activeView*/ ctx[1]
			? "block"
			: "none")));
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (if_block) if_block.m(div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*view*/ ctx[0] === /*activeView*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (!current || dirty & /*className*/ 8 && div_class_value !== (div_class_value = "wrapper " + /*className*/ ctx[3])) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", div_class_value);
			}

			if (!current || dirty & /*style, view, activeView*/ 7 && div_style_value !== (div_style_value = "" + (/*style*/ ctx[2] + " display: " + (/*view*/ ctx[0] === /*activeView*/ ctx[1]
			? "block"
			: "none")))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "style", div_style_value);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { view } = $$props;
	let { activeView } = $$props;
	let { style = "" } = $$props;
	let { className = "" } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("view" in $$props) $$invalidate(0, view = $$props.view);
		if ("activeView" in $$props) $$invalidate(1, activeView = $$props.activeView);
		if ("style" in $$props) $$invalidate(2, style = $$props.style);
		if ("className" in $$props) $$invalidate(3, className = $$props.className);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [view, activeView, style, className, $$scope, $$slots];
}

class Wrapper extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			view: 0,
			activeView: 1,
			style: 2,
			className: 3
		});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);


/***/ }),

/***/ "../navigation/src/features/MoveCanvas.js":
/*!************************************************!*\
  !*** ../navigation/src/features/MoveCanvas.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoveCanvas; });
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domtastic */ "../navigation/node_modules/domtastic/src/index.js");


class MoveCanvas {

  constructor(node) {
    this._node = Object(domtastic__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  }

  scrollNode(delta = {}) {

    const {
      x,
      y
    } = delta;

    if (!x || !y) {
      return;
    }

    const diagram = this._node.children();

    const viewbox = diagram.attr('viewBox');

    const split = viewbox.split(' ');

    // transform delta
    const scrollDelta = {
      x: -1 * x * 2,
      y: -1 * y * 2
    };

    const newViewBox = `${parseInt(split[0]) + scrollDelta.x} ${parseInt(split[1]) + scrollDelta.y} ${split[2]} ${split[3]}`;

    diagram.attr('viewBox', newViewBox);
  }

  move(event) {

    if (!this._start) {
      return;
    }

    const position = toPoint(event);

    const lastPosition = this._last || this._start;

    const delta = deltaPos(position, lastPosition);

    this.scrollNode(delta);

    this._last = position;
  }

  zoomDiagram() {
    const diagram = this._node.children();
    diagram.attr('viewBox', '200 50 800 900');
  }

  unbind() {
    this._node.off('mousemove', this.move);
    this._node.removeClass('dragged');
    this._start = null;
    this._last = null;
  }

  init() {
    this._node.on('mousedown', event => {
      this._start = toPoint(event);

      this._node.addClass('dragged');

      this._node.on('mousemove', e => this.move(e));
      this._node.on('mouseup', _ => this.unbind());
    });
  }

}


// helpers //////////

function toPoint(event) {

  if (event.pointers && event.pointers.length) {
    event = event.pointers[0];
  }

  if (event.touches && event.touches.length) {
    event = event.touches[0];
  }

  return event ? {
    x: event.clientX,
    y: event.clientY
  } : null;
}

function deltaPos(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}

/***/ }),

/***/ "../navigation/src/util/getElement.js":
/*!********************************************!*\
  !*** ../navigation/src/util/getElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getElement; });
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domtastic */ "../navigation/node_modules/domtastic/src/index.js");


function getElement(id) {
  return Object(domtastic__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-element-id="${id}"]`);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/AddColumnButton.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/AddColumnButton.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../navigation-editing/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* colors */\n/* font-sizes */\n.new-column-button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n  text-align: center;\n  color: #444;\n  user-select: none; }\n  .new-column-button svg {\n    position: absolute;\n    height: 1rem; }\n  .new-column-button .fake {\n    position: absolute;\n    background: white;\n    margin: 0.25rem 0 0 0.3rem;\n    height: 0.5rem;\n    padding: 0.1rem 0 0 0.5rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/BasicTable.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/BasicTable.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../navigation-editing/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* colors */\n/* font-sizes */\n.decision-table {\n  padding-right: 1rem; }\n  .decision-table table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin: 1rem 0rem 0rem 1rem; }\n    .decision-table table td {\n      font-size: 0.875rem;\n      border-style: solid;\n      border-width: 0.05rem;\n      word-break: normal;\n      border-color: black;\n      min-width: 5rem; }\n    .decision-table table .empty-cell {\n      position: relative;\n      width: 8px;\n      min-width: 0;\n      border-top: none;\n      border-bottom: none;\n      padding: 0;\n      background-color: white; }\n      .decision-table table .empty-cell.last-rule {\n        border-bottom: 0.05rem solid black; }\n    .decision-table table th {\n      font-weight: normal;\n      border: 0.05rem solid black;\n      overflow: hidden;\n      word-break: normal;\n      user-select: none; }\n    .decision-table table thead th {\n      padding: 0.4rem; }\n    .decision-table table thead .title-row {\n      text-align: left;\n      vertical-align: middle; }\n      .decision-table table thead .title-row th {\n        font-size: 1.125rem; }\n        .decision-table table thead .title-row th * {\n          vertical-align: middle;\n          display: inline-block; }\n      .decision-table table thead .title-row p,\n      .decision-table table thead .title-row select {\n        margin: 0.5rem 0.5rem 0.5rem 0.5rem; }\n      .decision-table table thead .title-row select {\n        font-size: 0.8rem;\n        padding: 0.5rem; }\n      .decision-table table thead .title-row span {\n        border-left: 0.125rem solid #bfbfbf;\n        height: 2.2rem; }\n      .decision-table table thead .title-row .hp-explanation {\n        font-size: 0.75rem;\n        margin-left: 0;\n        color: #bfbfbf; }\n    .decision-table table thead .header-row .input-header,\n    .decision-table table thead .header-row .output-header {\n      width: 7rem; }\n    .decision-table table thead .header-row .input-header,\n    .decision-table table thead .header-row .output-header {\n      position: relative; }\n      .decision-table table thead .header-row .input-header .clause,\n      .decision-table table thead .header-row .output-header .clause {\n        position: absolute;\n        left: 0.2rem;\n        top: 0.1rem;\n        margin-bottom: 0.5rem;\n        color: #bfbfbf;\n        font-size: 0.875rem; }\n      .decision-table table thead .header-row .input-header .label,\n      .decision-table table thead .header-row .output-header .label {\n        word-wrap: normal;\n        font-size: 0.875rem;\n        margin: 1rem 0rem 1.5rem 0rem; }\n      .decision-table table thead .header-row .input-header .type,\n      .decision-table table thead .header-row .output-header .type {\n        text-align: right;\n        position: absolute;\n        right: 0.2rem;\n        bottom: 0.1rem;\n        color: #bfbfbf;\n        font-size: 0.625rem;\n        word-wrap: break-word;\n        width: 100%; }\n        .decision-table table thead .header-row .input-header .type[data-size=\"smaller\"],\n        .decision-table table thead .header-row .output-header .type[data-size=\"smaller\"] {\n          font-size: 0.55rem;\n          width: 66%; }\n    .decision-table table thead .header-row .annotation-header {\n      text-align: center;\n      font-size: 0.875rem !important; }\n    .decision-table table tbody td {\n      padding: 0.5rem;\n      font-size: 0.75rem;\n      white-space: nowrap; }\n      .decision-table table tbody td[data-empty=\"empty\"] {\n        text-align: center; }\n    .decision-table table tbody .rule {\n      text-align: right;\n      width: 1rem;\n      min-width: 0; }\n    .decision-table table tbody .empty-line td {\n      height: 2px;\n      padding: 0; }\n    .decision-table table tbody tr:nth-child(2n) {\n      background-color: #f8f8f8; }\n    .decision-table table .table-header.hover {\n      color: #ff2400; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/ContextMenu.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/shared/ContextMenu.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../navigation-editing/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* colors */\n/* font-sizes */\n.context-menu {\n  padding: 0 !important;\n  font-size: 0.75rem; }\n  .context-menu .item {\n    color: #4c4c4c;\n    padding: 0.5rem 1rem 0.5rem 1rem; }\n    .context-menu .item:hover {\n      background: #efefef;\n      cursor: pointer;\n      font: black; }\n  .context-menu .separator {\n    margin: 0 0.5rem 0 0.5rem;\n    border-bottom: 1px solid #cdcdcd;\n    height: 1px;\n    display: block; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/variant_A/EditPopup.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../column-editing/src/components/variant_A/EditPopup.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../navigation-editing/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* colors */\n/* font-sizes */\nform input {\n  border-radius: 3px;\n  border: solid 1px #cdcdcd;\n  background-color: #ffffff;\n  font-size: 0.875rem;\n  padding-left: 8px;\n  color: #4c4c4c;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal; }\n\nform input::placeholder {\n  font-size: 0.875rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: italic;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #909090; }\n\nform input::focus {\n  outline: none;\n  box-shadow: 0 0 0 4px #a2c5ff, 0 0 0 1px #cdcdcd inset;\n  border: solid 1px #1a70ff; }\n\nform label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 0.85rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #909090; }\n\n/* colors */\n/* font-sizes */\n.column-header-edit-popup:before {\n  bottom: 100%;\n  border-bottom: 2rem solid rgba(0, 0, 0, 0.5); }\n\n.column-header-edit-popup:after {\n  bottom: 100%;\n  border-bottom-color: white; }\n\n.column-header-edit-popup::after, .column-header-edit-popup::before {\n  content: \" \";\n  position: absolute;\n  width: 0;\n  border-bottom-width: 10px;\n  border-bottom-style: solid;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent; }\n\n.column-header-edit-popup .field {\n  margin-top: 0.5rem; }\n\n.column-header-edit-popup input[type=\"submit\"] {\n  visibility: hidden;\n  position: fixed;\n  bottom: 0;\n  left: 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../navigation/src/components/DRD.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../navigation/src/components/DRD.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../navigation-editing/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".diagram .decision .djs-hit {\n  pointer-events: all; }\n\n.diagram .decision.selected .djs-visual {\n  visibility: visible;\n  shape-rendering: crispEdges;\n  stroke: #7391C8;\n  stroke-width: 0.02rem;\n  stroke-dasharray: 0.625rem; }\n\n.diagram .decision.hover:not(.selected) .djs-outline {\n  stroke: #ff8888;\n  stroke-width: 0.05rem;\n  stroke-dasharray: 0.625rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../navigation/src/components/PropertiesModal.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!../navigation/src/components/PropertiesModal.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../navigation-editing/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal {\n  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;\n  display: none; }\n  .modal.is-open {\n    display: block; }\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.modal-container {\n  background-color: white;\n  max-width: 31.25rem;\n  max-height: 100vh;\n  border-radius: 0.25rem;\n  box-sizing: border-box;\n  box-shadow: 0 0.05rem 0.25rem rgba(0, 0, 0, 0.3); }\n\n.modal-header {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 3.75rem 1.25rem 1.25rem;\n  background-color: rgba(191, 191, 191, 0.1);\n  font-size: 1rem;\n  border-bottom: 0.05rem solid rgba(191, 191, 191, 0.2); }\n\n.modal-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 1.25;\n  color: #7391C8;\n  box-sizing: border-box; }\n  .modal-title code {\n    color: rgba(115, 145, 200, 0.7); }\n\n.modal-close {\n  background: transparent;\n  border: 0;\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  width: 1.375rem;\n  height: 1.375rem;\n  padding: 0;\n  border: none;\n  border-radius: 0.2rem;\n  background-color: transparent; }\n\n.modal-header .modal-close:before {\n  content: \"\\2715\"; }\n\n.modal-content {\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.8);\n  padding: 0.625rem 2rem 1.25rem 1.25rem;\n  overflow-y: auto;\n  font-size: 0.875rem; }\n  .modal-content .yaml-view {\n    background: rgba(191, 191, 191, 0.1);\n    padding-left: 2rem;\n    border: 0.05rem solid #bfbfbf; }\n\n.modal-footer {\n  padding: 1rem 1.25rem 1rem;\n  border-top: 0.05rem solid rgba(191, 191, 191, 0.2); }\n\n.btn-modal {\n  float: right;\n  margin-bottom: 1.25rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* colors */\n/* font-sizes */\n.popup {\n  display: none;\n  position: absolute;\n  background-color: white;\n  border: 0.05rem solid #dedede;\n  border-radius: 3px;\n  box-sizing: border-box;\n  box-shadow: 0 0.05rem 0.25rem 0 rgba(0, 0, 0, 0.2);\n  padding: 1rem;\n  z-index: 1; }\n\n/* colors */\n/* font-sizes */\n.btn {\n  padding: 0.5rem;\n  border: solid 0.05rem #bfbfbf;\n  border-radius: 0.125rem;\n  font-size: 0.75rem;\n  color: #444;\n  font-weight: bold;\n  cursor: pointer;\n  background: #dedede; }\n  .btn.btn-sticky {\n    border-radius: none;\n    border-right: none; }\n  .btn:hover {\n    background: white; }\n\n.edit-drd {\n  vertical-align: top;\n  margin-top: 0.5rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/NavigationTable.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/NavigationTable.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* colors */\n/* font-sizes */\n.navigation-table {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  height: 100%; }\n  .navigation-table .buttons {\n    padding: 1rem;\n    padding-top: 0.5rem;\n    position: relative;\n    background-color: #dedede;\n    border-bottom: 0.05rem solid #bfbfbf; }\n    .navigation-table .buttons .arrow-expand {\n      position: absolute;\n      bottom: 50%;\n      right: 0;\n      height: 3rem;\n      padding-top: 2rem;\n      padding-bottom: 0.3rem; }\n      .navigation-table .buttons .arrow-expand svg {\n        width: 1rem;\n        color: #444; }\n  .navigation-table .decision-table {\n    border-left: 0.05rem solid #bfbfbf;\n    display: inline-block;\n    vertical-align: middle; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SplitScreen.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SplitScreen.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* colors */\n/* font-sizes */\n.split-screen {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch; }\n  .split-screen .drd-part {\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Old versions of Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */\n    resize: horizontal;\n    overflow: auto;\n    position: relative;\n    width: 25%;\n    overflow: auto;\n    background-color: #efefef;\n    border-bottom: 0.05rem solid #bfbfbf; }\n    .split-screen .drd-part .edit-drd {\n      margin: 1rem 0 0 1rem; }\n    .split-screen .drd-part .collapse {\n      height: 3rem;\n      padding-top: 2rem;\n      padding-bottom: 0.3rem;\n      position: absolute;\n      bottom: 50%;\n      right: 0; }\n      .split-screen .drd-part .collapse svg {\n        width: 1rem;\n        color: #444; }\n    .split-screen .drd-part .drd {\n      padding-top: 1rem;\n      margin: auto; }\n    .split-screen .drd-part .diagram svg {\n      padding: 0; }\n    .split-screen .drd-part .diagram.dragged {\n      cursor: grab; }\n  .split-screen .split {\n    margin-right: 0.5rem;\n    border-left: 0.05rem solid #bfbfbf; }\n  .split-screen .table-part {\n    margin-left: 0.5rem;\n    width: 75%; }\n    .split-screen .table-part .title-row p {\n      color: #7391C8; }\n    .split-screen .table-part .expand svg {\n      height: 1.5rem; }\n  .split-screen th.highlight {\n    background-color: rgba(255, 36, 0, 0.3);\n    color: #ff2400; }\n    .split-screen th.highlight .clause {\n      display: none; }\n    .split-screen th.highlight .type {\n      color: #ff2400 !important;\n      font-weight: normal; }\n  .split-screen .djs-shape.selected .djs-visual * {\n    shape-rendering: auto;\n    stroke-width: 0.05rem;\n    stroke-dasharray: none; }\n  .split-screen .djs-shape.selected .djs-visual rect {\n    stroke: #7391C8 !important;\n    stroke-width: 0.125rem !important;\n    fill: rgba(115, 145, 200, 0.3) !important; }\n  .split-screen .djs-shape.selected .djs-visual text {\n    fill: #7391C8 !important;\n    stroke: none;\n    font-weight: bold; }\n  .split-screen .djs-shape.highlight .djs-visual rect {\n    stroke: #ff2400 !important;\n    stroke-width: 0.125rem !important;\n    fill: rgba(255, 36, 0, 0.3) !important; }\n  .split-screen .djs-shape.highlight .djs-visual text {\n    fill: #ff2400 !important;\n    font-weight: bold; }\n  .split-screen .djs-shape.highlight .dt-icon path {\n    fill: #ff2400; }\n  .split-screen .djs-shape.hover:not(.selected) text {\n    fill: #ff2400 !important; }\n  .split-screen .djs-shape.hover:not(.selected) .djs-outline {\n    shape-rendering: auto;\n    stroke: none; }\n  .split-screen .djs-connection.highlight .djs-visual polyline {\n    stroke: #ff2400 !important;\n    stroke-width: 0.08rem !important;\n    marker-end: url(#information-requirement-highlight-end) !important; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/domtastic/src/array.js":
/*!*********************************************!*\
  !*** ./node_modules/domtastic/src/array.js ***!
  \*********************************************/
/*! exports provided: every, filter, forEach, each, indexOf, map, pop, push, reduce, reduceRight, reverse, shift, some, unshift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pop", function() { return pop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shift", function() { return shift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshift", function() { return unshift; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector/index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module Array
 */




const ArrayProto = Array.prototype;

/**
 * Checks if the given callback returns a true(-ish) value for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Boolean} Whether each element passed the callback check.
 * @example
 *     // Test whether every element in the collection has the "active" attribute
 *     $('.items').every(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const every = ArrayProto.every;

/**
 * Filter the collection by selector or function, and return a new collection with the result.
 *
 * @param {String|Function} selector Selector or function to filter the collection.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} A new wrapped collection
 * @chainable
 * @example
 *     $('.items').filter('.active');
 * @example
 *     $('.items').filter(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

const filter = function(selector, thisArg) {
  const callback = typeof selector === 'function' ? selector : element => Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(element, selector);
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(ArrayProto.filter.call(this, callback, thisArg));
};

/**
 * Execute a function for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').forEach(function(element) {
 *         element.style.color = 'evergreen';
 *     );
 */

const forEach = function(callback, thisArg) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, callback, thisArg);
};

const each = forEach;

/**
 * Returns the index of an element in the collection.
 *
 * @param {Node} element
 * @return {Number} The zero-based index, -1 if not found.
 * @example
 *     $('.items').indexOf(element); // 2
 */

const indexOf = ArrayProto.indexOf;

/**
 * Create a new collection by executing the callback for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Array} Collection with the return value of the executed callback for each element.
 * @example
 *     // Create a new array with the attribute value of each element:
 *     $('.items').map(function(element) {
 *         return element.getAttribute('name')
 */

const map = ArrayProto.map;

/**
 * Removes the last element from the collection, and returns that element.
 *
 * @return {Object} The last element from the collection.
 * @example
 *     var lastElement = $('.items').pop();
 */

const pop = ArrayProto.pop;

/**
 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').push(element);
 */

const push = ArrayProto.push;

/**
 * Apply a function against each element in the collection, and this accumulator function has to reduce it
 * to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Calculate the combined height of elements:
 *     $('.items').reduce(function(previousValue, element, index, collection) {
 *         return previousValue + element.clientHeight;
 *     }, 0);
 */

const reduce = ArrayProto.reduce;

/**
 * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
 * to reduce it to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     // Concatenate the text of elements in reversed order:
 *     $('.items').reduceRight(function(previousValue, element, index, collection) {
 *         return previousValue + element.textContent;
 *     }, '');
 */

const reduceRight = ArrayProto.reduceRight;

/**
 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
 *
 * @return {Object} The wrapped collection, reversed
 * @chainable
 * @example
 *     $('.items').reverse();
 */

const reverse = function() {
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(this).reverse());
};

/**
 * Removes the first element from the collection, and returns that element.
 *
 * @return {Object} The first element from the collection.
 * @example
 *     var firstElement = $('.items').shift();
 */

const shift = ArrayProto.shift;

/**
 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @return {Boolean} Whether any element passed the callback check.
 * @example
 *     $('.items').some(function(element) {
 *         return element.hasAttribute('active')
 *     }); // true/false
 */

const some = ArrayProto.some;

/**
 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').unshift(element);
 */

const unshift = ArrayProto.unshift;


/***/ }),

/***/ "./node_modules/domtastic/src/baseClass.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/baseClass.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector/index */ "./node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/**
 * @module BaseClass
 */




/* harmony default export */ __webpack_exports__["default"] = (function(api) {

  /**
   * Provide subclass for classes or components to extend from.
   * The opposite and successor of plugins (no need to extend `$.fn` anymore, complete control).
   *
   * @return {Class} The class to extend from, including all `$.fn` methods.
   * @example
   *     import { BaseClass } from  'domtastic';
   *
   *     class MyComponent extends BaseClass {
   *         doSomething() {
   *             return this.addClass('.foo');
   *         }
   *     }
   *
   *     let component = new MyComponent('body');
   *     component.doSomething();
   *
   * @example
   *     import $ from  'domtastic';
   *
   *     class MyComponent extends $.BaseClass {
   *         progress(value) {
   *             return this.attr('data-progress', value);
   *         }
   *     }
   *
   *     let component = new MyComponent(document.body);
   *     component.progress('ive').append('<p>enhancement</p>');
   */

  class BaseClass {
    constructor() {
      _selector_index__WEBPACK_IMPORTED_MODULE_0__["DOMtastic"].call(this, Object(_selector_index__WEBPACK_IMPORTED_MODULE_0__["$"])(...arguments));
    }
  }
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(BaseClass.prototype, api);
  return BaseClass;
});


/***/ }),

/***/ "./node_modules/domtastic/src/css.js":
/*!*******************************************!*\
  !*** ./node_modules/domtastic/src/css.js ***!
  \*******************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/**
 * @module CSS
 */



const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);

const camelize = value => value.replace(/-([\da-z])/gi, (matches, letter) => letter.toUpperCase());

const dasherize = value => value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
 *
 * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
 * @param {String} [value] The value of the style property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').css('padding-left'); // get
 *     $('.item').css('color', '#f00'); // set
 *     $('.item').css({'border-width': '1px', display: 'inline-block'}); // set multiple
 */

const css = function(key, value) {

  let styleProps, prop, val;

  if(typeof key === 'string') {
    key = camelize(key);

    if(typeof value === 'undefined') {
      let element = this.nodeType ? this : this[0];
      if(element) {
        val = element.style[key];
        return isNumeric(val) ? parseFloat(val) : val;
      }
      return undefined;
    }

    styleProps = {};
    styleProps[key] = value;
  } else {
    styleProps = key;
    for(prop in styleProps) {
      val = styleProps[prop];
      delete styleProps[prop];
      styleProps[camelize(prop)] = val;
    }
  }

  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    for(prop in styleProps) {
      if(styleProps[prop] || styleProps[prop] === 0) {
        element.style[prop] = styleProps[prop];
      } else {
        element.style.removeProperty(dasherize(prop));
      }
    }
  });

  return this;
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/attr.js":
/*!************************************************!*\
  !*** ./node_modules/domtastic/src/dom/attr.js ***!
  \************************************************/
/*! exports provided: attr, removeAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Attr
 */



/**
 * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
 *
 * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
 * @param {String} [value] The value of the attribute to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').attr('attrName'); // get
 *     $('.item').attr('attrName', 'attrValue'); // set
 *     $('.item').attr({attr1: 'value1', 'attr-2': 'value2'}); // set multiple
 */

const attr = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element ? element.getAttribute(key) : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(typeof key === 'object') {
      for(let attr in key) {
        element.setAttribute(attr, key[attr]);
      }
    } else {
      element.setAttribute(key, value);
    }
  });
};

/**
 * Remove attribute from each element in the collection.
 *
 * @param {String} key Attribute name
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeAttr('attrName');
 */

const removeAttr = function(key) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.removeAttribute(key));
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/class.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/dom/class.js ***!
  \*************************************************/
/*! exports provided: addClass, removeClass, toggleClass, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Class
 */



/**
 * Add a class to the element(s)
 *
 * @param {String} value Space-separated class name(s) to add to the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').addClass('bar');
 *     $('.item').addClass('bar foo');
 */

const addClass = function(value) {
  if(value && value.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, 'add'));
  }
  return this;
};

/**
 * Remove a class from the element(s)
 *
 * @param {String} value Space-separated class name(s) to remove from the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeClass('bar');
 *     $('.items').removeClass('bar foo');
 */

const removeClass = function(value) {
  if(value && value.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, 'remove'));
  }
  return this;
};

/**
 * Toggle a class at the element(s)
 *
 * @param {String} value Space-separated class name(s) to toggle at the element(s).
 * @param {Boolean} [state] A Boolean value to determine whether the class should be added or removed.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').toggleClass('bar');
 *     $('.item').toggleClass('bar foo');
 *     $('.item').toggleClass('bar', true);
 */

const toggleClass = function(value, state) {
  if(value && value.length) {
    const action = typeof state === 'boolean' ? state ? 'add' : 'remove' : 'toggle';
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(value.split(' '), _each.bind(this, action));
  }
  return this;
};

/**
 * Check if the element(s) have a class.
 *
 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
 * returns `true` if _any_ of them contains the class name.
 * @return {Boolean} Whether the element's class attribute contains the class name.
 * @example
 *     $('.item').hasClass('bar');
 */

const hasClass = function(value) {
  return (this.nodeType ? [this] : this).some(element => element.classList.contains(value));
};

/**
 * Specialized iteration, applying `fn` of the classList API to each element.
 *
 * @param {String} fnName
 * @param {String} className
 * @private
 */

const _each = function(fnName, className) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.classList[fnName](className));
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/contains.js":
/*!****************************************************!*\
  !*** ./node_modules/domtastic/src/dom/contains.js ***!
  \****************************************************/
/*! exports provided: contains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/**
 * @module contains
 */

/**
 * Test whether an element contains another element in the DOM.
 *
 * @param {Element} container The element that may contain the other element.
 * @param {Element} element The element that may be a descendant of the other element.
 * @return {Boolean} Whether the `container` element contains the `element`.
 * @example
 *     $.contains(parentElement, childElement); // true/false
 */

const contains = (container, element) => {
  if(!container || !element || container === element) {
    return false;
  } else if(container.contains) {
    return container.contains(element);
  } else if(container.compareDocumentPosition) {
    return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
  }
  return false;
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/data.js":
/*!************************************************!*\
  !*** ./node_modules/domtastic/src/dom/data.js ***!
  \************************************************/
/*! exports provided: data, prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Data
 */



const isSupportsDataSet = typeof document !== 'undefined' && 'dataset' in document.documentElement;
const DATAKEYPROP = isSupportsDataSet ? 'dataset' : '__DOMTASTIC_DATA__';

const camelize = str => str.replace(/-+(.)?/g, (match, char) => char ? char.toUpperCase() : '');

/**
 * Get data from first element, or set data for each element in the collection.
 *
 * @param {String} key The key for the data to get or set.
 * @param {String} [value] The data to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').data('attrName'); // get
 *     $('.item').data('attrName', {any: 'data'}); // set
 */

const data = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && DATAKEYPROP in element ? element[DATAKEYPROP][camelize(key)] : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!isSupportsDataSet) {
      element[DATAKEYPROP] = element[DATAKEYPROP] || {};
    }

    element[DATAKEYPROP][camelize(key)] = value;
  });
};

/**
 * Get property from first element, or set property on each element in the collection.
 *
 * @param {String} key The name of the property to get or set.
 * @param {String} [value] The value of the property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prop('attrName'); // get
 *     $('.item').prop('attrName', 'attrValue'); // set
 */

const prop = function(key, value) {

  if(typeof key === 'string' && typeof value === 'undefined') {
    const element = this.nodeType ? this : this[0];
    return element && element ? element[key] : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element[key] = value);
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/extra.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/dom/extra.js ***!
  \*************************************************/
/*! exports provided: appendTo, empty, remove, replaceWith, text, val */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceWith", function() { return replaceWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selector/index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM (extra)
 */





/**
 * Append each element in the collection to the specified element(s).
 *
 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').appendTo(container);
 */

const appendTo = function(element) {
  const context = typeof element === 'string' ? Object(_selector_index__WEBPACK_IMPORTED_MODULE_2__["$"])(element) : element;
  _index__WEBPACK_IMPORTED_MODULE_1__["append"].call(context, this);
  return this;
};

/*
 * Empty each element in the collection.
 *
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').empty();
 */

const empty = function() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.innerHTML = '');
};

/**
 * Remove the collection from the DOM.
 *
 * @return {Array} Array containing the removed elements
 * @example
 *     $('.item').remove();
 */

const remove = function() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

/**
 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
 *
 * @return {Array} Array containing the replaced elements
 */

const replaceWith = function() {
  return _index__WEBPACK_IMPORTED_MODULE_1__["before"].apply(this, arguments).remove();
};

/**
 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').text('New content');
 */

const text = function(value) {

  if(value === undefined) {
    return this[0].textContent;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.textContent = '' + value);
};

/**
 * Get the `value` from the first, or set the `value` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('input.firstName').val('New value');
 */

const val = function(value) {

  if(value === undefined) {
    return this.length > 0 ? this[0].value : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.value = value);
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/html.js":
/*!************************************************!*\
  !*** ./node_modules/domtastic/src/dom/html.js ***!
  \************************************************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module HTML
 */



/*
 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
 *
 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').html();
 *     $('.item').html('<span>more</span>');
 */

const html = function(fragment) {

  if(fragment === undefined) {
    const element = this.nodeType ? this : this[0];
    return element ? element.innerHTML : undefined;
  }

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => element.innerHTML = fragment);
};


/***/ }),

/***/ "./node_modules/domtastic/src/dom/index.js":
/*!*************************************************!*\
  !*** ./node_modules/domtastic/src/dom/index.js ***!
  \*************************************************/
/*! exports provided: append, prepend, before, after, clone, _clone, _each */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_clone", function() { return _clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_each", function() { return _each; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module DOM
 */




const forEach = Array.prototype.forEach;

/**
 * Append element(s) to each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to append to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').append('<p>more</p>');
 */

const append = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforeend', element);
    } else {
      if(element instanceof Node) {
        this.appendChild(element);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements, this.appendChild.bind(this));
      }
    }
  } else {
    _each(this, append, element);
  }
  return this;
};

/**
 * Place element(s) at the beginning of each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prepend('<span>start</span>');
 */

const prepend = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterbegin', element);
    } else {
      if(element instanceof Node) {
        this.insertBefore(element, this.firstChild);
      } else {
        let elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements.reverse(), prepend.bind(this));
      }
    }
  } else {
    _each(this, prepend, element);
  }
  return this;
};

/**
 * Place element(s) before each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').before('<p>prefix</p>');
 */

const before = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('beforebegin', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements, before.bind(this));
      }
    }
  } else {
    _each(this, before, element);
  }
  return this;
};

/**
 * Place element(s) after each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').after('<span>suf</span><span>fix</span>');
 */

const after = function(element) {
  if(this instanceof Node) {
    if(typeof element === 'string') {
      this.insertAdjacentHTML('afterend', element);
    } else {
      if(element instanceof Node) {
        this.parentNode.insertBefore(element, this.nextSibling);
      } else {
        const elements = element instanceof NodeList ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element) : element;
        forEach.call(elements.reverse(), after.bind(this));
      }
    }
  } else {
    _each(this, after, element);
  }
  return this;
};

/**
 * Clone a wrapped object.
 *
 * @return {Object} Wrapped collection of cloned nodes.
 * @example
 *     $(element).clone();
 */

const clone = function() {
  return Object(_selector_index__WEBPACK_IMPORTED_MODULE_1__["$"])(_clone(this));
};

/**
 * Clone an object
 *
 * @param {String|Node|NodeList|Array} element The element(s) to clone.
 * @return {String|Node|NodeList|Array} The cloned element(s)
 * @private
 */

const _clone = element => {
  if(typeof element === 'string') {
    return element;
  } else if(element instanceof Node) {
    return element.cloneNode(true);
  } else if('length' in element) {
    return [].map.call(element, el => el.cloneNode(true));
  }
  return element;
};

/**
 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
 *
 * @param {NodeList|Array} collection
 * @param {Function} fn
 * @param {Node} element
 * @private
 */

const _each = (collection, fn, element) => {
  let l = collection.length;
  while(l--) {
    const elm = l === 0 ? element : _clone(element);
    fn.call(collection[l], elm);
  }
};


/***/ }),

/***/ "./node_modules/domtastic/src/event/index.js":
/*!***************************************************!*\
  !*** ./node_modules/domtastic/src/event/index.js ***!
  \***************************************************/
/*! exports provided: on, off, one, getHandlers, clearHandlers, proxyHandler, delegateHandler, bind, unbind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "one", function() { return one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandlers", function() { return getHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHandlers", function() { return clearHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyHandler", function() { return proxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateHandler", function() { return delegateHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return unbind; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector/closest */ "./node_modules/domtastic/src/selector/closest.js");
/**
 * @module Events
 */




/**
 * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
 *
 * @param {String} eventNames List of space-separated event types to be added to the element(s)
 * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @param {Boolean} once=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').on('click', callback);
 *     $('.container').on('click focus', '.item', handler);
 */

const on = function(eventNames, selector, handler, useCapture, once) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    eventListener;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    eventListener = proxyHandler(handler);

    Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {

      if(selector) {
        eventListener = delegateHandler.bind(element, selector, eventListener);
      }

      if(once) {
        const listener = eventListener;
        eventListener = event => {
          off.call(element, eventNames, selector, handler, useCapture);
          listener.call(element, event);
        };
      }

      element.addEventListener(eventName, eventListener, useCapture || false);

      getHandlers(element).push({
        eventName,
        handler,
        eventListener,
        selector,
        namespace
      });
    });

  }, this);

  return this;
};

/**
 * Shorthand for `removeEventListener`.
 *
 * @param {String} eventNames List of space-separated event types to be removed from the element(s)
 * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').off('click', callback);
 *     $('#my-element').off('myEvent myOtherEvent');
 *     $('.item').off();
 */

const off = function(eventNames = '', selector, handler, useCapture) {

  if(typeof selector === 'function') {
    handler = selector;
    selector = null;
  }

  let parts,
    namespace,
    handlers;

  eventNames.split(' ').forEach(eventName => {

    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;

    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {

      handlers = getHandlers(element);

      Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(handlers.filter(item => {
        return (
          (!eventName || item.eventName === eventName) &&
          (!namespace || item.namespace === namespace) &&
          (!handler || item.handler === handler) &&
          (!selector || item.selector === selector)
        );
      }), item => {
        element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
        handlers.splice(handlers.indexOf(item), 1);
      });

      if(!eventName && !namespace && !selector && !handler) {
        clearHandlers(element);
      } else if(handlers.length === 0) {
        clearHandlers(element);
      }

    });

  }, this);

  return this;
};

/**
 * Add event listener and execute the handler at most once per element.
 *
 * @param eventNames
 * @param selector
 * @param handler
 * @param useCapture
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').one('click', callback);
 */

const one = function(eventNames, selector, handler, useCapture) {
  return on.call(this, eventNames, selector, handler, useCapture, 1);
};

/**
 * Get event handlers from an element
 *
 * @private
 * @param {Node} element
 * @return {Array}
 */

const eventKeyProp = '__domtastic_event__';
let id = 1;
let handlers = {};
let unusedKeys = [];

const getHandlers = element => {
  if(!element[eventKeyProp]) {
    element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
  }
  const key = element[eventKeyProp];
  return handlers[key] || (handlers[key] = []);
};

/**
 * Clear event handlers for an element
 *
 * @private
 * @param {Node} element
 */

const clearHandlers = element => {
  const key = element[eventKeyProp];
  if(handlers[key]) {
    handlers[key] = null;
    element[eventKeyProp] = null;
    unusedKeys.push(key);
  }
};

/**
 * Function to create a handler that augments the event object with some extra methods,
 * and executes the callback with the event and the event data (i.e. `event.detail`).
 *
 * @private
 * @param handler Callback to execute as `handler(event, data)`
 * @return {Function}
 */

const proxyHandler = handler => function(event) {
  return handler.call(this, augmentEvent(event));
};

const eventMethods = {
  preventDefault: 'isDefaultPrevented',
  stopImmediatePropagation: 'isImmediatePropagationStopped',
  stopPropagation: 'isPropagationStopped'
};
const returnTrue = () => true;
const returnFalse = () => false;

/**
 * Attempt to augment events and implement something closer to DOM Level 3 Events.
 *
 * @private
 * @param {Object} event
 * @return {Function}
 */

const augmentEvent = event => {
  if(!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
    for(const methodName in eventMethods) {
      (function(methodName, testMethodName, originalMethod) {
        event[methodName] = function() {
          this[testMethodName] = returnTrue;
          return originalMethod && originalMethod.apply(this, arguments);
        };
        event[testMethodName] = returnFalse;
      }(methodName, eventMethods[methodName], event[methodName]));
    }
    if(event._preventDefault) {
      event.preventDefault();
    }
  }
  return event;
};

/**
 * Function to test whether delegated events match the provided `selector` (filter),
 * if the event propagation was stopped, and then actually call the provided event handler.
 * Use `this` instead of `event.currentTarget` on the event object.
 *
 * @private
 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Event} event
 */

const delegateHandler = function(selector, handler, event) {
  const eventTarget = event._target || event.target;
  const currentTarget = _selector_closest__WEBPACK_IMPORTED_MODULE_1__["closest"].call([eventTarget], selector, this)[0];
  if(currentTarget && currentTarget !== this) {
    if(currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
      handler.call(currentTarget, event);
    }
  }
};

const bind = on;
const unbind = off;


/***/ }),

/***/ "./node_modules/domtastic/src/event/ready.js":
/*!***************************************************!*\
  !*** ./node_modules/domtastic/src/event/ready.js ***!
  \***************************************************/
/*! exports provided: ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/**
 * @module Ready
 */

/**
 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
 *
 * @param handler Callback to execute when initial DOM content is loaded.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $(document).ready(callback);
 */

const ready = function(handler) {
  if(/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
  return this;
};


/***/ }),

/***/ "./node_modules/domtastic/src/event/trigger.js":
/*!*****************************************************!*\
  !*** ./node_modules/domtastic/src/event/trigger.js ***!
  \*****************************************************/
/*! exports provided: trigger, triggerHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerHandler", function() { return triggerHandler; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/contains */ "./node_modules/domtastic/src/dom/contains.js");
/**
 * @module trigger
 */




const reMouseEvent = /^(mouse(down|up|over|out|enter|leave|move)|contextmenu|(dbl)?click)$/;
const reKeyEvent = /^key(down|press|up)$/;

/**
 * Trigger event at element(s)
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').trigger('anyEventType');
 */

const trigger = function(type, data, {bubbles = true, cancelable = true, preventDefault = false} = {}) {

  const EventConstructor = getEventConstructor(type);
  const event = new EventConstructor(type, {
    bubbles,
    cancelable,
    preventDefault,
    detail: data
  });

  event._preventDefault = preventDefault;

  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
      dispatchEvent(element, event);
    } else {
      triggerForPath(element, type, {
        bubbles,
        cancelable,
        preventDefault,
        detail: data
      });
    }
  });
};

const getEventConstructor = type => isSupportsOtherEventConstructors ? (reMouseEvent.test(type) ? MouseEvent : (reKeyEvent.test(type) ? KeyboardEvent : CustomEvent)) : CustomEvent;

/**
 * Trigger event at first element in the collection. Similar to `trigger()`, except:
 *
 * - Event does not bubble
 * - Default event behavior is prevented
 * - Only triggers handler for first matching element
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event
 * @example
 *     $('form').triggerHandler('submit');
 */

const triggerHandler = function(type, data) {
  if(this[0]) {
    trigger.call(this[0], type, data, {
      bubbles: false,
      preventDefault: true
    });
  }
};

/**
 * Check whether the element is attached to or detached from) the document
 *
 * @private
 * @param {Node} element Element to test
 * @return {Boolean}
 */

const isAttachedToDocument = element => {
  if(element === window || element === document) {
    return true;
  }
  return Object(_dom_contains__WEBPACK_IMPORTED_MODULE_1__["contains"])(element.ownerDocument.documentElement, element);
};

/**
 * Dispatch the event at the element and its ancestors.
 * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
 *
 * @private
 * @param {Node} element First element to dispatch the event at
 * @param {String} type Type of the event
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * Will be set to false (but shouldn't matter since events don't bubble anyway).
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 */

const triggerForPath = (element, type, params = {}) => {
  params.bubbles = false;
  const event = new CustomEvent(type, params);
  event._target = element;
  do {
    dispatchEvent(element, event);
  } while(element = element.parentNode); // eslint-disable-line no-cond-assign
};

/**
 * Dispatch event to element, but call direct event methods instead if available
 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
 *
 * @private
 * @param {Node} element Element to dispatch the event at
 * @param {Object} event Event to dispatch
 */

const directEventMethods = ['blur', 'focus', 'select', 'submit'];

const dispatchEvent = (element, event) => {
  if(directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
    element[event.type]();
  } else {
    element.dispatchEvent(event);
  }
};

/**
 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill).
 * Needed to support IE (9, 10, 11) & PhantomJS
 */

(() => {
  const CustomEvent = function(event, params = {
    bubbles: false,
    cancelable: false,
    detail: undefined
  }) {
    let customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return customEvent;
  };

  CustomEvent.prototype = _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent && _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent.prototype;
  _util__WEBPACK_IMPORTED_MODULE_0__["win"].CustomEvent = CustomEvent;

})();

/*
 * Are events bubbling in detached DOM trees?
 * @private
 */

const isEventBubblingInDetachedTree = (() =>{
  let isBubbling = false;
  const doc = _util__WEBPACK_IMPORTED_MODULE_0__["win"].document;
  if(doc) {
    const parent = doc.createElement('div');
    const child = parent.cloneNode();
    parent.appendChild(child);
    parent.addEventListener('e', function() {
      isBubbling = true;
    });
    child.dispatchEvent(new CustomEvent('e', {bubbles: true}));
  }
  return isBubbling;
})();

const isSupportsOtherEventConstructors = (() => {
  try {
    new MouseEvent('click');
  } catch(e) {
    return false;
  }
  return true;
})();


/***/ }),

/***/ "./node_modules/domtastic/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/domtastic/src/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/domtastic/src/array.js");
/* harmony import */ var _baseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseClass */ "./node_modules/domtastic/src/baseClass.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css */ "./node_modules/domtastic/src/css.js");
/* harmony import */ var _dom_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/index */ "./node_modules/domtastic/src/dom/index.js");
/* harmony import */ var _dom_attr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/attr */ "./node_modules/domtastic/src/dom/attr.js");
/* harmony import */ var _dom_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/class */ "./node_modules/domtastic/src/dom/class.js");
/* harmony import */ var _dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/contains */ "./node_modules/domtastic/src/dom/contains.js");
/* harmony import */ var _dom_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/data */ "./node_modules/domtastic/src/dom/data.js");
/* harmony import */ var _dom_extra__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/extra */ "./node_modules/domtastic/src/dom/extra.js");
/* harmony import */ var _dom_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/html */ "./node_modules/domtastic/src/dom/html.js");
/* harmony import */ var _event_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/index */ "./node_modules/domtastic/src/event/index.js");
/* harmony import */ var _event_trigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event/trigger */ "./node_modules/domtastic/src/event/trigger.js");
/* harmony import */ var _event_ready__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event/ready */ "./node_modules/domtastic/src/event/ready.js");
/* harmony import */ var _noconflict__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./noconflict */ "./node_modules/domtastic/src/noconflict.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selector/index */ "./node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _selector_closest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selector/closest */ "./node_modules/domtastic/src/selector/closest.js");
/* harmony import */ var _selector_extra__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selector/extra */ "./node_modules/domtastic/src/selector/extra.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./type */ "./node_modules/domtastic/src/type.js");
/**
 * @module API
 */



const api = {};
let $ = {};

// Import modules to build up the API




















if(typeof _selector_index__WEBPACK_IMPORTED_MODULE_15__ !== 'undefined') {
  $ = _selector_index__WEBPACK_IMPORTED_MODULE_15__["$"];
  $.matches = _selector_index__WEBPACK_IMPORTED_MODULE_15__["matches"];
  api.find = _selector_index__WEBPACK_IMPORTED_MODULE_15__["find"];
}

Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])($, _dom_contains__WEBPACK_IMPORTED_MODULE_7__, _noconflict__WEBPACK_IMPORTED_MODULE_14__, _type__WEBPACK_IMPORTED_MODULE_18__);
Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(api, _array__WEBPACK_IMPORTED_MODULE_1__, _css__WEBPACK_IMPORTED_MODULE_3__, _dom_attr__WEBPACK_IMPORTED_MODULE_5__, _dom_index__WEBPACK_IMPORTED_MODULE_4__, _dom_class__WEBPACK_IMPORTED_MODULE_6__, _dom_data__WEBPACK_IMPORTED_MODULE_8__, _dom_extra__WEBPACK_IMPORTED_MODULE_9__, _dom_html__WEBPACK_IMPORTED_MODULE_10__, _event_index__WEBPACK_IMPORTED_MODULE_11__, _event_trigger__WEBPACK_IMPORTED_MODULE_12__, _event_ready__WEBPACK_IMPORTED_MODULE_13__, _selector_closest__WEBPACK_IMPORTED_MODULE_16__, _selector_extra__WEBPACK_IMPORTED_MODULE_17__);

$.fn = api;

// Version

$.version = '__VERSION__';

// Util

$.extend = _util__WEBPACK_IMPORTED_MODULE_0__["extend"];

// Provide base class to extend from

if(typeof _baseClass__WEBPACK_IMPORTED_MODULE_2__["default"] !== 'undefined') {
  $.BaseClass = Object(_baseClass__WEBPACK_IMPORTED_MODULE_2__["default"])($.fn);
}

// Export interface

/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ "./node_modules/domtastic/src/noconflict.js":
/*!**************************************************!*\
  !*** ./node_modules/domtastic/src/noconflict.js ***!
  \**************************************************/
/*! exports provided: noConflict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noConflict", function() { return noConflict; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/domtastic/src/util.js");
/**
 * @module noConflict
 */



/*
 * Save the previous value of the global `$` variable, so that it can be restored later on.
 * @private
 */

const previousLib = _util__WEBPACK_IMPORTED_MODULE_0__["win"].$;

/**
 * In case another library sets the global `$` variable before DOMtastic does,
 * this method can be used to return the global `$` to that other library.
 *
 * @return {Object} Reference to DOMtastic.
 * @example
 *     var domtastic = $.noConflict();
 */

const noConflict = function() {
  _util__WEBPACK_IMPORTED_MODULE_0__["win"].$ = previousLib;
  return this;
};


/***/ }),

/***/ "./node_modules/domtastic/src/selector/closest.js":
/*!********************************************************!*\
  !*** ./node_modules/domtastic/src/selector/closest.js ***!
  \********************************************************/
/*! exports provided: closest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/domtastic/src/selector/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module closest
 */




/**
 * Return the closest element matching the selector (starting by itself) for each element in the collection.
 *
 * @param {String} selector Filter
 * @param {Object} [context] If provided, matching elements must be a descendant of this element
 * @return {Object} New wrapped collection (containing zero or one element)
 * @chainable
 * @example
 *     $('.selector').closest('.container');
 */

const closest = (() => {

  const closest = function(selector, context) {
    const nodes = [];
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["each"])(this, node => {
      while(node && node !== context) {
        if(Object(_index__WEBPACK_IMPORTED_MODULE_0__["matches"])(node, selector)) {
          nodes.push(node);
          break;
        }
        node = node.parentElement;
      }
    });
    return Object(_index__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniq"])(nodes));
  };

  return typeof Element === 'undefined' || !Element.prototype.closest ? closest : function(selector, context) {
    if(!context) {
      const nodes = [];
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["each"])(this, node => {
        const n = node.closest(selector);
        if(n) {
          nodes.push(n);
        }
      });
      return Object(_index__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["uniq"])(nodes));
    } else {
      return closest.call(this, selector, context);
    }
  };
})();


/***/ }),

/***/ "./node_modules/domtastic/src/selector/extra.js":
/*!******************************************************!*\
  !*** ./node_modules/domtastic/src/selector/extra.js ***!
  \******************************************************/
/*! exports provided: children, concat, contents, eq, first, get, parent, siblings, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contents", function() { return contents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/domtastic/src/selector/index.js");
/**
 * @module Selector (extra)
 */




/**
 * Return children of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').children();
 *     $('.selector').children('.filter');
 */

const children = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(element.children) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(element.children, child => {
        if(!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(child, selector))) {
          nodes.push(child);
        }
      });
    }
  });
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Add the elements of a wrapped collection to another.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The extended wrapped collection
 * @example
 *     $('.items').concat($('.more-items));
 *     $('.items').concat('.more-items);
 *     $('.items').concat('<div>more</div>');
 */

const concat = function(selector) {
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(selector), element => {
    if([].indexOf.call(this, element) === -1) {
      [].push.call(this, element);
    }
  });
  return this;
};

/**
 * Return child nodes of each element in the collection, including text and comment nodes.
 *
 * @return {Object} New wrapped collection
 * @example
 *     $('.selector').contents();
 */

const contents = function() {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => nodes.push.apply(nodes, Object(_util__WEBPACK_IMPORTED_MODULE_0__["toArray"])(element.childNodes)));
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Return a collection containing only the one at the specified index.
 *
 * @param {Number} index
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').eq(1)
 *     // The second item; result is the same as doing $($('.items')[1]);
 */

const eq = function(index) {
  return slice.call(this, index, index + 1);
};

/**
 * Return a collection containing only the first item.
 *
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').first()
 *     // The first item; result is the same as doing $($('.items')[0]);
 */

const first = function() {
  return slice.call(this, 0, 1);
};

/**
 * Return the DOM element at the specified index.
 *
 * @param {Number} index
 * @return {Node} Element at the specified index
 * @example
 *     $('.items').get(1)
 *     // The second element; result is the same as doing $('.items')[1];
 */

const get = function(index) {
  return this[index];
};

/**
 * Return the parent elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').parent();
 *     $('.selector').parent('.filter');
 */

const parent = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => {
    if(!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(element.parentNode, selector))) {
      nodes.push(element.parentNode);
    }
  });
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').siblings();
 *     $('.selector').siblings('.filter');
 */

const siblings = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, element => Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(element.parentNode.children, sibling => {
    if(sibling !== element && (!selector || (selector && Object(_index__WEBPACK_IMPORTED_MODULE_1__["matches"])(sibling, selector)))) {
      nodes.push(sibling);
    }
  }));
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])(nodes);
};

/**
 * Create a new, sliced collection.
 *
 * @param {Number} start
 * @param {Number} end
 * @return {Object} New wrapped collection
 * @example
 *     $('.items').slice(1, 3)
 *     // New wrapped collection containing the second, third, and fourth element.
 */

const slice = function(start, end) { // eslint-disable-line no-unused-vars
  return Object(_index__WEBPACK_IMPORTED_MODULE_1__["$"])([].slice.apply(this, arguments));
};


/***/ }),

/***/ "./node_modules/domtastic/src/selector/index.js":
/*!******************************************************!*\
  !*** ./node_modules/domtastic/src/selector/index.js ***!
  \******************************************************/
/*! exports provided: $, find, matches, DOMtastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMtastic", function() { return DOMtastic; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/domtastic/src/util.js");
/**
 * @module Selector
 */



let isPrototypeSet = false;

const reFragment = /^\s*<(\w+|!)[^>]*>/;
const reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
const reSimpleSelector = /^[.#]?[\w-]*$/;

/*
 * Versatile wrapper for `querySelectorAll`.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @param {String|Node|NodeList} context=document The context for the selector to query elements.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     var $items = $(.items');
 * @example
 *     var $element = $(domElement);
 * @example
 *     var $list = $(nodeList, document.body);
 * @example
 *     var $element = $('<p>evergreen</p>');
 */

const domtastic = function domtastic(selector, context = document) {

  let collection;

  if(!selector) {

    collection = document.querySelectorAll(null);

  } else if(selector instanceof DOMtastic) {

    return selector;

  } else if(typeof selector !== 'string') {

    collection = selector.nodeType || selector === window ? [selector] : selector;

  } else if(reFragment.test(selector)) {

    collection = createFragment(selector);

  } else {

    context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;

    collection = querySelector(selector, context);

  }

  return wrap(collection);

};

const $ = domtastic;

/*
 * Find descendants matching the provided `selector` for each element in the collection.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The wrapped collection
 * @example
 *     $('.selector').find('.deep').$('.deepest');
 */

const find = function(selector) {
  const nodes = [];
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(this, node => Object(_util__WEBPACK_IMPORTED_MODULE_0__["each"])(querySelector(selector, node), child => {
    if(nodes.indexOf(child) === -1) {
      nodes.push(child);
    }
  }));
  return $(nodes);
};

/*
 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
 *
 * @param {Node} element Element to test
 * @param {String} selector Selector to match against element
 * @return {Boolean}
 *
 * @example
 *     $.matches(element, '.match');
 */

const matches = (() => {
  const context = typeof Element !== 'undefined' ? Element.prototype : _util__WEBPACK_IMPORTED_MODULE_0__["win"];
  const _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
  return (element, selector) => _matches.call(element, selector);
})();

/*
 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
 *
 * @private
 * @param {String} selector Query selector.
 * @param {Node} context The context for the selector to query elements.
 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
 */

const querySelector = (selector, context) => {

  const isSimpleSelector = reSimpleSelector.test(selector);

  if(isSimpleSelector) {
    if(selector[0] === '#') {
      const element = (context.getElementById ? context : document).getElementById(selector.slice(1));
      return element ? [element] : [];
    }
    if(selector[0] === '.') {
      return context.getElementsByClassName(selector.slice(1));
    }
    return context.getElementsByTagName(selector);
  }

  return context.querySelectorAll(selector);

};

/*
 * Create DOM fragment from an HTML string
 *
 * @private
 * @param {String} html String representing HTML.
 * @return {NodeList}
 */

const createFragment = html => {

  if(reSingleTag.test(html)) {
    return [document.createElement(RegExp.$1)];
  }

  const elements = [];
  const container = document.createElement('div');
  const children = container.childNodes;

  container.innerHTML = html;

  for(let i = 0, l = children.length; i < l; i++) {
    elements.push(children[i]);
  }

  return elements;
};

/*
 * Calling `$(selector)` returns a wrapped collection of elements.
 *
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 * @return Object) The wrapped collection
 */

const wrap = collection => {

  if(!isPrototypeSet) {
    DOMtastic.prototype = $.fn;
    DOMtastic.prototype.constructor = DOMtastic;
    isPrototypeSet = true;
  }

  return new DOMtastic(collection);
};

/*
 * Constructor for the Object.prototype strategy
 *
 * @constructor
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 */

const DOMtastic = function DOMtastic(collection) {
  let i = 0;
  const length = collection.length;
  for(; i < length;) {
    this[i] = collection[i++];
  }
  this.length = length;
};


/***/ }),

/***/ "./node_modules/domtastic/src/type.js":
/*!********************************************!*\
  !*** ./node_modules/domtastic/src/type.js ***!
  \********************************************/
/*! exports provided: isFunction, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/**
 * @module Type
 */

/*
 * Determine if the argument passed is a Javascript function object.
 *
 * @param {Object} [obj] Object to test whether or not it is a function.
 * @return {boolean}
 * @example
 *     $.isFunction(function(){}); // true
 * @example
 *     $.isFunction({}); // false
 */

const isFunction = obj => typeof obj === 'function';

/*
 * Determine whether the argument is an array.
 *
 * @param {Object} [obj] Object to test whether or not it is an array.
 * @return {boolean}
 * @example
 *     $.isArray([]); // true
 * @example
 *     $.isArray({}); // false
 */

const isArray = Array.isArray;


/***/ }),

/***/ "./node_modules/domtastic/src/util.js":
/*!********************************************!*\
  !*** ./node_modules/domtastic/src/util.js ***!
  \********************************************/
/*! exports provided: win, toArray, each, extend, uniq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/*
 * @module Util
 */

/*
 * Reference to the window object
 * @private
 */

const win = typeof window !== 'undefined' ? window : {};

/**
 * Convert `NodeList` to `Array`.
 *
 * @param {NodeList|Array} collection
 * @return {Array}
 * @private
 */

const toArray = collection => {
  const length = collection.length;
  const result = new Array(length);
  for(let i = 0; i < length; i++) {
    result[i] = collection[i];
  }
  return result;
};

/**
 * Faster alternative to [].forEach method
 *
 * @param {Node|NodeList|Array} collection
 * @param {Function} callback
 * @return {Node|NodeList|Array}
 * @private
 */

const each = (collection, callback, thisArg) => {
  const length = collection.length;
  if(length !== undefined && collection.nodeType === undefined) {
    for(let i = 0; i < length; i++) {
      callback.call(thisArg, collection[i], i, collection);
    }
  } else {
    callback.call(thisArg, collection, 0, collection);
  }
  return collection;
};

/**
 * Assign enumerable properties from source object(s) to target object
 *
 * @method extend
 * @param {Object} target Object to extend
 * @param {Object} [source] Object to extend from
 * @return {Object} Extended object
 * @example
 *     $.extend({a: 1}, {b: 2}); // {a: 1, b: 2}
 * @example
 *     $.extend({a: 1}, {b: 2}, {a: 3}); // {a: 3, b: 2}
 */

const extend = (target, ...sources) => {
  sources.forEach(src => {
    for(let prop in src) {
      target[prop] = src[prop];
    }
  });
  return target;
};

/**
 * Return the collection without duplicates
 *
 * @param collection Collection to remove duplicates from
 * @return {Node|NodeList|Array}
 * @private
 */

const uniq = collection => collection.filter((item, index) => collection.indexOf(item) === index);


/***/ }),

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const MicroModal = (() => {

  const FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  class Modal {
    constructor({
      targetModal,
      triggers = [],
      onShow = () => {},
      onClose = () => {},
      openTrigger = 'data-micromodal-trigger',
      closeTrigger = 'data-micromodal-close',
      disableScroll = false,
      disableFocus = false,
      awaitCloseAnimation = false,
      awaitOpenAnimation = false,
      debugMode = false
    }) {
      // Save a reference of the modal
      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode,
        disableScroll,
        openTrigger,
        closeTrigger,
        onShow,
        onClose,
        awaitCloseAnimation,
        awaitOpenAnimation,
        disableFocus // Register click events only if pre binding eventListeners

      };
      if (triggers.length > 0) this.registerTriggers(...triggers); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    registerTriggers(...triggers) {
      triggers.filter(Boolean).forEach(trigger => {
        trigger.addEventListener('click', event => this.showModal(event));
      });
    }

    showModal() {
      this.activeElement = document.activeElement;
      this.modal.setAttribute('aria-hidden', 'false');
      this.modal.classList.add('is-open');
      this.scrollBehaviour('disable');
      this.addEventListeners();

      if (this.config.awaitOpenAnimation) {
        const handler = () => {
          this.modal.removeEventListener('animationend', handler, false);
          this.setFocusToFirstNode();
        };

        this.modal.addEventListener('animationend', handler, false);
      } else {
        this.setFocusToFirstNode();
      }

      this.config.onShow(this.modal, this.activeElement);
    }

    closeModal() {
      const modal = this.modal;
      this.modal.setAttribute('aria-hidden', 'true');
      this.removeEventListeners();
      this.scrollBehaviour('enable');

      if (this.activeElement) {
        this.activeElement.focus();
      }

      this.config.onClose(this.modal);

      if (this.config.awaitCloseAnimation) {
        this.modal.addEventListener('animationend', function handler() {
          modal.classList.remove('is-open');
          modal.removeEventListener('animationend', handler, false);
        }, false);
      } else {
        modal.classList.remove('is-open');
      }
    }

    closeModalById(targetModal) {
      this.modal = document.getElementById(targetModal);
      if (this.modal) this.closeModal();
    }

    scrollBehaviour(toggle) {
      if (!this.config.disableScroll) return;
      const body = document.querySelector('body');

      switch (toggle) {
        case 'enable':
          Object.assign(body.style, {
            overflow: '',
            height: ''
          });
          break;

        case 'disable':
          Object.assign(body.style, {
            overflow: 'hidden',
            height: '100vh'
          });
          break;

        default:
      }
    }

    addEventListeners() {
      this.modal.addEventListener('touchstart', this.onClick);
      this.modal.addEventListener('click', this.onClick);
      document.addEventListener('keydown', this.onKeydown);
    }

    removeEventListeners() {
      this.modal.removeEventListener('touchstart', this.onClick);
      this.modal.removeEventListener('click', this.onClick);
      document.removeEventListener('keydown', this.onKeydown);
    }

    onClick(event) {
      if (event.target.hasAttribute(this.config.closeTrigger)) {
        this.closeModal();
        event.preventDefault();
      }
    }

    onKeydown(event) {
      if (event.keyCode === 27) this.closeModal(event);
      if (event.keyCode === 9) this.maintainFocus(event);
    }

    getFocusableNodes() {
      const nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
      return Array(...nodes);
    }

    setFocusToFirstNode() {
      if (this.config.disableFocus) return;
      const focusableNodes = this.getFocusableNodes();
      if (focusableNodes.length) focusableNodes[0].focus();
    }

    maintainFocus(event) {
      const focusableNodes = this.getFocusableNodes(); // if disableFocus is true

      if (!this.modal.contains(document.activeElement)) {
        focusableNodes[0].focus();
      } else {
        const focusedItemIndex = focusableNodes.indexOf(document.activeElement);

        if (event.shiftKey && focusedItemIndex === 0) {
          focusableNodes[focusableNodes.length - 1].focus();
          event.preventDefault();
        }

        if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
          focusableNodes[0].focus();
          event.preventDefault();
        }
      }
    }

  }
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  let activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  const generateTriggerMap = (triggers, triggerAttr) => {
    const triggerMap = [];
    triggers.forEach(trigger => {
      const targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  const validateModalPresence = id => {
    if (!document.getElementById(id)) {
      console.warn(`MicroModal: \u2757Seems like you have missed %c'${id}'`, 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn(`%cExample:`, 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', `<div class="modal" id="${id}"></div>`);
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  const validateTriggerPresence = triggers => {
    if (triggers.length <= 0) {
      console.warn(`MicroModal: \u2757Please specify at least one %c'micromodal-trigger'`, 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn(`%cExample:`, 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', `<a href="#" data-micromodal-trigger="my-modal"></a>`);
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  const validateArgs = (triggers, triggerMap) => {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) validateModalPresence(id);

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  const init = config => {
    // Create an config object with default openTrigger
    const options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    const triggers = [...document.querySelectorAll(`[${options.openTrigger}]`)]; // Makes a mappings of modals with their trigger nodes

    const triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      let value = triggerMap[key];
      options.targetModal = key;
      options.triggers = [...value];
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  const show = (targetModal, config) => {
    const options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  const close = targetModal => {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init,
    show,
    close
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (MicroModal);


/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: flatten, find, findIndex, filter, forEach, without, reduce, every, some, map, keys, size, values, groupBy, uniqueBy, unionBy, sortBy, matchPattern, debounce, throttle, bind, isUndefined, isDefined, isNil, isArray, isObject, isNumber, isFunction, isString, ensureArray, has, assign, pick, omit, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: SvelteComponent, afterUpdate, beforeUpdate, createEventDispatcher, getContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: HtmlTag, SvelteComponent, SvelteComponentDev, SvelteElement, action_destroyer, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_transform, afterUpdate, append, append_dev, assign, attr, attr_dev, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_component, claim_element, claim_space, claim_text, clear_loops, component_subscribe, compute_rest_props, createEventDispatcher, create_animation, create_bidirectional_transition, create_component, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, dataset_dev, debug, destroy_block, destroy_component, destroy_each, detach, detach_after_dev, detach_before_dev, detach_between_dev, detach_dev, dirty_components, dispatch_dev, each, element, element_is, empty, escape, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getContext, get_binding_group_value, get_current_component, get_slot_changes, get_slot_context, get_spread_object, get_spread_update, get_store_value, globals, group_outros, handle_promise, has_prop, identity, init, insert, insert_dev, intros, invalid_attribute_name_character, is_client, is_function, is_promise, listen, listen_dev, loop, loop_guard, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, prop_dev, query_selector_all, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_data_dev, set_input_type, set_input_value, set_now, set_raf, set_store_value, set_style, set_svg_attributes, space, spread, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, update_keyed_each, validate_component, validate_each_argument, validate_each_keys, validate_slots, validate_store, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action_destroyer", function() { return action_destroyer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_dev", function() { return append_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr_dev", function() { return attr_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_component", function() { return claim_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute_rest_props", function() { return compute_rest_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_component", function() { return create_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset_dev", function() { return dataset_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after_dev", function() { return detach_after_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before_dev", function() { return detach_before_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between_dev", function() { return detach_between_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_dev", function() { return detach_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch_dev", function() { return dispatch_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_object", function() { return get_spread_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has_prop", function() { return has_prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_dev", function() { return insert_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen_dev", function() { return listen_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop_guard", function() { return loop_guard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop_dev", function() { return prop_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query_selector_all", function() { return query_selector_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data_dev", function() { return set_data_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_store_value", function() { return set_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_svg_attributes", function() { return set_svg_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_each_argument", function() { return validate_each_argument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_each_keys", function() { return validate_each_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_slots", function() { return validate_slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value = ret) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for (const k in obj) {
        if (has_prop(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value' || descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group) {
    const value = [];
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.push(group[i].__value);
    }
    return value;
}
function to_number(value) {
    return value === '' ? undefined : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            let j = 0;
            while (j < node.attributes.length) {
                const attribute = node.attributes[j];
                if (attributes[attribute.name]) {
                    j++;
                }
                else {
                    node.removeAttribute(attribute.name);
                }
            }
            return nodes.splice(i, 1)[0];
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = '' + data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function set_data(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}
function set_input_value(input, value) {
    if (value != null || input.value) {
        input.value = value;
    }
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
function add_resize_listener(element, fn) {
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    const object = document.createElement('object');
    object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
    object.setAttribute('aria-hidden', 'true');
    object.type = 'text/html';
    object.tabIndex = -1;
    let win;
    object.onload = () => {
        win = object.contentDocument.defaultView;
        win.addEventListener('resize', fn);
    };
    if (/Trident/.test(navigator.userAgent)) {
        element.appendChild(object);
        object.data = 'about:blank';
    }
    else {
        object.data = 'about:blank';
        element.appendChild(object);
    }
    return {
        cancel: () => {
            win && win.removeEventListener && win.removeEventListener('resize', fn);
            element.removeChild(object);
        }
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor(html, anchor = null) {
        this.e = element('div');
        this.a = anchor;
        this.u(html);
    }
    m(target, anchor = null) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(target, this.n[i], anchor);
        }
        this.t = target;
    }
    u(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    p(html) {
        this.d();
        this.u(html);
        this.m(this.t, this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

const active_docs = new Set();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = node.ownerDocument;
    active_docs.add(doc);
    const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
    const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
    if (!current_rules[name]) {
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        active_docs.forEach(doc => {
            const stylesheet = doc.__svelte_stylesheet;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            doc.__svelte_rules = {};
        });
        active_docs.clear();
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            info.blocks[i] = null;
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}

const globals = (typeof window !== 'undefined' ? window : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next, lookup.has(block.key));
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
            throw new Error(`Cannot have duplicate keys in a keyed each`);
        }
        keys.add(key);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, classes_to_add) {
    const attributes = Object.assign({}, ...args);
    if (classes_to_add) {
        if (attributes.class == null) {
            attributes.class = classes_to_add;
        }
        else {
            attributes.class += ' ' + classes_to_add;
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += " " + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += " " + name;
        }
        else if (value != null) {
            str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
        }
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const prop_values = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, prop_values, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if ($$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    };
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.20.1' }, detail)));
}
function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
    else
        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev("SvelteDOMSetProperty", { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev("SvelteDOMSetDataset", { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data)
        return;
    dispatch_dev("SvelteDOMSetData", { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error(`'target' is a required option`);
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}
function loop_guard(timeout) {
    const start = Date.now();
    return () => {
        if (Date.now() - start > timeout) {
            throw new Error(`Infinite loop detected`);
        }
    };
}




/***/ }),

/***/ "./resources/arrow-collapse.svg":
/*!**************************************!*\
  !*** ./resources/arrow-collapse.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"angle-double-left\" class=\"svg-inline--fa fa-angle-double-left fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z\"></path></svg>"

/***/ }),

/***/ "./resources/arrow-expand.svg":
/*!************************************!*\
  !*** ./resources/arrow-expand.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"angle-double-right\" class=\"svg-inline--fa fa-angle-double-right fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z\"></path></svg>"

/***/ }),

/***/ "./resources/data.js":
/*!***************************!*\
  !*** ./resources/data.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  Decision_03absfl: {
    id: 'Decision_03absfl',
    name: 'Employee Suitability Score',
    hitPolicy: 'Collect (Sum)',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Open Claims',
        type: 'integer'
      },
      {
        idx: 'input-header-1',
        clause: 'And',
        expression: 'Employee.region = Claim.region',
        type: '[true, false]'
      },
      {
        idx: 'input-header-2',
        clause: 'And',
        expression: 'Claim.expenditure',
        type: 'integer'
      },
      {
        idx: 'input-header-3',
        clause: 'And',
        expression: 'Employee Experience',
        type: "['Junior', 'Senior', 'Experienced']",
        smaller: true
      },
      {
        idx: 'input-header-4',
        clause: 'And',
        expression: 'Employee fills skillset',
        type: '[true, false]'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Score',
        type: '[-50..20]'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['<=5', '-', '-', '-', '-'],
        outputCells: ['10']
      },
      {
        idx: 2,
        inputCells: ['>10', '-', '-', "'Junior'", '-'],
        outputCells: ['-25']
      },
      {
        idx: 3,
        inputCells: ['>5', '-', '-', "'Experienced', 'Senior'", '-'],
        outputCells: ['-10']
      },
      {
        idx: 4,
        inputCells: ['-', 'true', '-', '-', '-'],
        outputCells: ['20']
      },
      {
        idx: 5,
        inputCells: ['-', '-', '<1000', "'Junior', 'Experienced'", '-'],
        outputCells: ['0']
      },
      {
        idx: 6,
        inputCells: ['-', '-', '<1000', "'Senior'", '-'],
        outputCells: ['-20']
      },
      {
        idx: 7,
        inputCells: ['-', '-', '[1000..10000]', "'Junior'", '-'],
        outputCells: ['-15']
      },
      {
        idx: 8,
        inputCells: ['-', '-', '>10000', "'Junior'", '-'],
        outputCells: ['-50']
      },
      {
        idx: 9,
        inputCells: ['-', '-', '>10000', "'Experienced'", '-'],
        outputCells: ['-15']
      },
      {
        idx: 10,
        inputCells: ['-', '-', '-', "'Junior'", 'false'],
        outputCells: ['-50']
      },
      {
        idx: 11,
        inputCells: ['-', '-', '-', "'Experienced', 'Senior'", 'false'],
        outputCells: ['-10']
      }
    ],
    bindings: [
      {
        element: 'InputData_0qarm4x',
        connection: 'connection_134',
        headerIdx: ['input-header-1', 'input-header-2']
      },
      {
        element: 'Decision_11xban0',
        connection: 'connection_136',
        headerIdx: ['input-header-4']
      },
      {
        element: 'Decision_19jtlzt',
        connection: 'connection_137',
        headerIdx: ['input-header-3']
      },
      {
        element: 'InputData_011xp5m',
        connection: 'connection_133',
        headerIdx: ['input-header-1']
      },
      {
        element: 'InputData_13z77r8',
        connection: 'connection_135',
        headerIdx: ['input-header-0']
      },
      {
        element: 'Decision_13nychf',
        connection: 'connection_132',
        headerIdx: ['output-header-0']
      }
    ]
  },
  Decision_19jtlzt: {
    id: 'Decision_19jtlzt',
    name: 'Employee Experience',
    hitPolicy: 'Unique',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Approval Authority',
        type: 'integer'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Experience',
        type: 'string'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['<1000'],
        outputCells: ["'Junior'"]
      },
      {
        idx: 2,
        inputCells: ['[1000..10000]'],
        outputCells: ["'Experienced'"]
      },
      {
        idx: 3,
        inputCells: ['[10000..20000]'],
        outputCells: ["'Senior'"]
      },
      {
        idx: 4,
        inputCells: ['>20000'],
        outputCells: ["'Partner'"]
      }
    ],
    bindings: [
      {
        element: 'Decision_03absfl',
        connection: 'connection_137',
        headerIdx: ['output-header-0']
      },
      {
        element: 'InputData_1vzqswv',
        connection: 'connection_138',
        headerIdx: ['input-header-0']
      }
    ]
  },
  Decision_11xban0: {
    id: 'Decision_11xban0',
    name: 'Employee Skill Approval',
    hitPolicy: 'Unique',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Employee Skillset includes Required Skills',
        type: '[true, false]'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Employee fills skills',
        type: '[true, false]'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['true'],
        outputCells: ['true']
      },
      {
        idx: 2,
        inputCells: ['false'],
        outputCells: ['false']
      }
    ],
    bindings: [
      {
        element: 'Decision_03absfl',
        connection: 'connection_137',
        headerIdx: ['output-header-0']
      },
      {
        element: 'InputData_1x2qw0w',
        connection: 'connection_139',
        headerIdx: ['input-header-0']
      }
    ]
  },
  Decision_13nychf: {
    id: 'Decision_13nychf',
    name: 'Determine Employee',
    hitPolicy: 'Unique',
    inputHeaders: [
      {
        idx: 'input-header-0',
        clause: 'When',
        expression: 'Score < 20',
        type: '[true, false]'
      }
    ],
    outputHeaders: [
      {
        idx: 'output-header-0',
        clause: 'Then',
        expression: 'Output',
        type: 'string'
      }
    ],
    rules: [
      {
        idx: 1,
        inputCells: ['true'],
        outputCells: ["'Employee not suitable'"]
      },
      {
        idx: 2,
        inputCells: ['false'],
        outputCells: ["'Employee is suitable'"]
      }
    ],
    bindings: [
      {
        element: 'Decision_03absfl',
        connection: 'connection_132',
        headerIdx: ['input-header-0']
      }
    ]
  }
});


/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/App.svelte":
/*!************************!*\
  !*** ./src/App.svelte ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _navigation_src_components_DRD_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navigation/src/components/DRD.svelte */ "../navigation/src/components/DRD.svelte");
/* harmony import */ var _components_SplitScreen_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SplitScreen.svelte */ "./src/components/SplitScreen.svelte");
/* harmony import */ var _components_NavigationTable_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavigationTable.svelte */ "./src/components/NavigationTable.svelte");
/* harmony import */ var _navigation_src_components_Wrapper_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navigation/src/components/Wrapper.svelte */ "../navigation/src/components/Wrapper.svelte");
/* harmony import */ var _resources_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/data.js */ "./resources/data.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__);
/* src/App.svelte generated by Svelte v3.20.1 */









function create_default_slot_2(ctx) {
	let current;

	const drd = new _navigation_src_components_DRD_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				decision: /*currentTable*/ ctx[1].id,
				onViewSwitch: /*switchView*/ ctx[2],
				onTableChange: /*changeTable*/ ctx[3]
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(drd.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(drd, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const drd_changes = {};
			if (dirty & /*currentTable*/ 2) drd_changes.decision = /*currentTable*/ ctx[1].id;
			drd.$set(drd_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(drd.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(drd.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(drd, detaching);
		}
	};
}

// (49:0) <Wrapper view="split-screen" activeView={view} style="height: 100%;">
function create_default_slot_1(ctx) {
	let current;

	const splitscreen = new _components_SplitScreen_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				onViewSwitch: /*switchView*/ ctx[2],
				tableData: /*currentTable*/ ctx[1],
				onTableChange: /*changeTable*/ ctx[3]
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(splitscreen.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(splitscreen, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const splitscreen_changes = {};
			if (dirty & /*currentTable*/ 2) splitscreen_changes.tableData = /*currentTable*/ ctx[1];
			splitscreen.$set(splitscreen_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(splitscreen.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(splitscreen.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(splitscreen, detaching);
		}
	};
}

// (56:0) <Wrapper view="table" activeView={view} className="table-view" style="height: 100%;">
function create_default_slot(ctx) {
	let current;

	const navigationtable = new _components_NavigationTable_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				onViewSwitch: /*switchView*/ ctx[2],
				tableData: /*currentTable*/ ctx[1]
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(navigationtable.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(navigationtable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navigationtable_changes = {};
			if (dirty & /*currentTable*/ 2) navigationtable_changes.tableData = /*currentTable*/ ctx[1];
			navigationtable.$set(navigationtable_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(navigationtable.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(navigationtable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(navigationtable, detaching);
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let t1;
	let current;

	const wrapper0 = new _navigation_src_components_Wrapper_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				view: "drd",
				activeView: /*view*/ ctx[0],
				style: "width: 60%; margin-left: 5rem;",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	const wrapper1 = new _navigation_src_components_Wrapper_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				view: "split-screen",
				activeView: /*view*/ ctx[0],
				style: "height: 100%;",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	const wrapper2 = new _navigation_src_components_Wrapper_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				view: "table",
				activeView: /*view*/ ctx[0],
				className: "table-view",
				style: "height: 100%;",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(wrapper0.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(wrapper1.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(wrapper2.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(wrapper0, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(wrapper1, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(wrapper2, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const wrapper0_changes = {};
			if (dirty & /*view*/ 1) wrapper0_changes.activeView = /*view*/ ctx[0];

			if (dirty & /*$$scope, currentTable*/ 66) {
				wrapper0_changes.$$scope = { dirty, ctx };
			}

			wrapper0.$set(wrapper0_changes);
			const wrapper1_changes = {};
			if (dirty & /*view*/ 1) wrapper1_changes.activeView = /*view*/ ctx[0];

			if (dirty & /*$$scope, currentTable*/ 66) {
				wrapper1_changes.$$scope = { dirty, ctx };
			}

			wrapper1.$set(wrapper1_changes);
			const wrapper2_changes = {};
			if (dirty & /*view*/ 1) wrapper2_changes.activeView = /*view*/ ctx[0];

			if (dirty & /*$$scope, currentTable*/ 66) {
				wrapper2_changes.$$scope = { dirty, ctx };
			}

			wrapper2.$set(wrapper2_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(wrapper0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(wrapper1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(wrapper2.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(wrapper0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(wrapper1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(wrapper2.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(wrapper0, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(wrapper1, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(wrapper2, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let view = "drd";
	let currentTable = _resources_data_js__WEBPACK_IMPORTED_MODULE_5__["default"]["Decision_03absfl"];
	let expanded = true;

	function updateExpand(isExpanded) {
		expanded = isExpanded;
	}

	function switchView(name) {
		if (name === "table") {
			updateExpand(false);
		}

		if (view === "table" && name === "split-screen") {
			updateExpand(true);
		}

		$$invalidate(0, view = name === "split-screen" && !expanded ? "table" : name);
	}

	function changeTable(tableId) {
		const newTable = _resources_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][tableId];

		if (!newTable || currentTable === newTable) {
			return;
		}

		$$invalidate(1, currentTable = _resources_data_js__WEBPACK_IMPORTED_MODULE_5__["default"][tableId]);
	}

	return [view, currentTable, switchView, changeTable];
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/components/NavigationTable.scss":
/*!*********************************************!*\
  !*** ./src/components/NavigationTable.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./NavigationTable.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/NavigationTable.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/NavigationTable.svelte":
/*!***********************************************!*\
  !*** ./src/components/NavigationTable.svelte ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _column_editing_src_components_variant_A_Table_A__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../column-editing/src/components/variant_A/Table_A */ "../column-editing/src/components/variant_A/Table_A.svelte");
/* harmony import */ var _resources_arrow_expand_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/arrow-expand.svg */ "./resources/arrow-expand.svg");
/* harmony import */ var _resources_arrow_expand_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_arrow_expand_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavigationTable_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationTable.scss */ "./src/components/NavigationTable.scss");
/* harmony import */ var _NavigationTable_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NavigationTable_scss__WEBPACK_IMPORTED_MODULE_3__);
/* src/components/NavigationTable.svelte generated by Svelte v3.20.1 */






function create_fragment(ctx) {
	let div1;
	let div0;
	let span;
	let t0;
	let button;
	let t2;
	let current;
	let dispose;

	const table = new _column_editing_src_components_variant_A_Table_A__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: { tableData: /*tableData*/ ctx[1] }
		});

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			button.textContent = "Edit DRD";
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(table.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span, "class", "arrow-expand btn btn-sticky");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "edit-drd btn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "buttons");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "navigation-table");
		},
		m(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, span);
			span.innerHTML = _resources_arrow_expand_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(table, div1, null);
			current = true;
			if (remount) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(span, "click", /*click_handler*/ ctx[3]),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", /*click_handler_1*/ ctx[4])
			];
		},
		p(ctx, [dirty]) {
			const table_changes = {};
			if (dirty & /*tableData*/ 2) table_changes.tableData = /*tableData*/ ctx[1];
			table.$set(table_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(table.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(table.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(table);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const noop = () => {
		
	};

	let { onViewSwitch = noop } = $$props;
	let { tableData } = $$props;
	const click_handler = () => onViewSwitch("split-screen");
	const click_handler_1 = () => onViewSwitch("drd");

	$$self.$set = $$props => {
		if ("onViewSwitch" in $$props) $$invalidate(0, onViewSwitch = $$props.onViewSwitch);
		if ("tableData" in $$props) $$invalidate(1, tableData = $$props.tableData);
	};

	return [onViewSwitch, tableData, noop, click_handler, click_handler_1];
}

class NavigationTable extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { onViewSwitch: 0, tableData: 1 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (NavigationTable);


/***/ }),

/***/ "./src/components/SplitScreen.scss":
/*!*****************************************!*\
  !*** ./src/components/SplitScreen.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./SplitScreen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/SplitScreen.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/SplitScreen.svelte":
/*!*******************************************!*\
  !*** ./src/components/SplitScreen.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domtastic */ "./node_modules/domtastic/src/index.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* harmony import */ var _navigation_src_components_DRD_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../navigation/src/components/DRD.svelte */ "../navigation/src/components/DRD.svelte");
/* harmony import */ var _navigation_src_components_PropertiesModal_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../navigation/src/components/PropertiesModal.svelte */ "../navigation/src/components/PropertiesModal.svelte");
/* harmony import */ var _column_editing_src_components_variant_A_Table_A__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../column-editing/src/components/variant_A/Table_A */ "../column-editing/src/components/variant_A/Table_A.svelte");
/* harmony import */ var _resources_arrow_collapse_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/arrow-collapse.svg */ "./resources/arrow-collapse.svg");
/* harmony import */ var _resources_arrow_collapse_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_arrow_collapse_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_getElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/getElement */ "./src/util/getElement.js");
/* harmony import */ var _navigation_src_features_MoveCanvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../navigation/src/features/MoveCanvas */ "../navigation/src/features/MoveCanvas.js");
/* harmony import */ var _SplitScreen_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SplitScreen.scss */ "./src/components/SplitScreen.scss");
/* harmony import */ var _SplitScreen_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_SplitScreen_scss__WEBPACK_IMPORTED_MODULE_11__);
/* src/components/SplitScreen.svelte generated by Svelte v3.20.1 */














function create_fragment(ctx) {
	let div5;
	let div2;
	let button;
	let t1;
	let div0;
	let t2;
	let div1;
	let t3;
	let div3;
	let t4;
	let div4;
	let t5;
	let current;
	let dispose;

	const drd = new _navigation_src_components_DRD_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({
			props: {
				onHighlight: /*highlightElements*/ ctx[3],
				onTableChange: /*onTableChange*/ ctx[1],
				decision: /*tableData*/ ctx[2].id
			}
		});

	const table = new _column_editing_src_components_variant_A_Table_A__WEBPACK_IMPORTED_MODULE_7__["default"]({
			props: {
				onHighlight: /*highlightElements*/ ctx[3],
				tableData: /*tableData*/ ctx[2]
			}
		});

	const propertiesmodal = new _navigation_src_components_PropertiesModal_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({});

	return {
		c() {
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			button.textContent = "Edit DRD";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(drd.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(table.$$.fragment);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(propertiesmodal.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "edit-drd btn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "drd");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "collapse btn btn-sticky");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "drd-part");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "split");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "table-part");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div5, "class", "split-screen");
		},
		m(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(drd, div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div1);
			div1.innerHTML = _resources_arrow_collapse_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(table, div4, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(propertiesmodal, div5, null);
			current = true;
			if (remount) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", /*click_handler*/ ctx[8]),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div1, "click", /*click_handler_1*/ ctx[9])
			];
		},
		p(ctx, [dirty]) {
			const drd_changes = {};
			if (dirty & /*onTableChange*/ 2) drd_changes.onTableChange = /*onTableChange*/ ctx[1];
			if (dirty & /*tableData*/ 4) drd_changes.decision = /*tableData*/ ctx[2].id;
			drd.$set(drd_changes);
			const table_changes = {};
			if (dirty & /*tableData*/ 4) table_changes.tableData = /*tableData*/ ctx[2];
			table.$set(table_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(drd.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(table.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(propertiesmodal.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(drd.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(table.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(propertiesmodal.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(drd);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(table);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(propertiesmodal);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

const HIGHLIGHT_MARKER = "highlight";

// methods //////////
function setMarker(node, marker) {
	node.hasClass(marker)
	? node.removeClass(marker)
	: node.addClass(marker);
}

function instance($$self, $$props, $$invalidate) {
	const noop = () => {
		
	};

	function highlightForDrdElement(elementId) {
		const found = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["find"])(dataHeaderBindings, binding => {
			return binding.element === elementId;
		});

		found && Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(found.headerIdx, idx => {
			const header = Object(domtastic__WEBPACK_IMPORTED_MODULE_1__["default"])(`[data-header-id="${idx}"]`);
			setMarker(header, HIGHLIGHT_MARKER);
		});
	}

	function highlightForTableHeader(tableHeaderId) {
		const found = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["filter"])(dataHeaderBindings, binding => {
			return Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["find"])(binding.headerIdx, idx => idx === tableHeaderId);
		});

		if (found.length) {
			const dataElements = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["map"])(found, binding => binding.element);
			const connections = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["map"])(found, binding => binding.connection);

			Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])([...dataElements, ...connections], id => {
				const element = Object(_util_getElement__WEBPACK_IMPORTED_MODULE_9__["default"])(id);
				setMarker(element, HIGHLIGHT_MARKER);
			});
		}
	}

	// handles highlighting + unhighlighting
	function highlightElements(hovered) {
		const elementId = hovered.attr("data-element-id");
		const tableHeaderId = hovered.attr("data-header-id");

		// (1) drd elements
		if (elementId) {
			return highlightForDrdElement(elementId);
		}

		// (2) table headers
		return highlightForTableHeader(tableHeaderId);
	}

	// lifecycle //////////
	Object(svelte__WEBPACK_IMPORTED_MODULE_3__["onMount"])(async () => {
		const moveCanvas = new _navigation_src_features_MoveCanvas__WEBPACK_IMPORTED_MODULE_10__["default"](".diagram");
		moveCanvas.init();
		moveCanvas.zoomDiagram();
		micromodal__WEBPACK_IMPORTED_MODULE_4__["default"].init();
		const emptyCell = Object(domtastic__WEBPACK_IMPORTED_MODULE_1__["default"])(".empty-cell");
		emptyCell.attr("data-micromodal-trigger", "modal-1");

		emptyCell.on("dblclick", () => {
			micromodal__WEBPACK_IMPORTED_MODULE_4__["default"].show("modal-1");
		});
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_3__["afterUpdate"])(async () => {
		// cleanup markers
		Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])([...tableData.outputHeaders, ...tableData.inputHeaders], ({ idx }) => {
			const header = Object(domtastic__WEBPACK_IMPORTED_MODULE_1__["default"])(`[data-header-id="input-header-${idx}"], [data-header-id="output-header-${idx}"]`);
			header.removeClass(HIGHLIGHT_MARKER);
		});
	});

	let { onViewSwitch = noop } = $$props;
	let { onTableChange = noop } = $$props;
	let { tableData = {} } = $$props;
	const click_handler = () => onViewSwitch("drd");
	const click_handler_1 = () => onViewSwitch("table");

	$$self.$set = $$props => {
		if ("onViewSwitch" in $$props) $$invalidate(0, onViewSwitch = $$props.onViewSwitch);
		if ("onTableChange" in $$props) $$invalidate(1, onTableChange = $$props.onTableChange);
		if ("tableData" in $$props) $$invalidate(2, tableData = $$props.tableData);
	};

	let dataHeaderBindings;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*tableData*/ 4) {
			$: dataHeaderBindings = tableData.bindings;
		}
	};

	return [
		onViewSwitch,
		onTableChange,
		tableData,
		highlightElements,
		dataHeaderBindings,
		noop,
		highlightForDrdElement,
		highlightForTableHeader,
		click_handler,
		click_handler_1
	];
}

class SplitScreen extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
			onViewSwitch: 0,
			onTableChange: 1,
			tableData: 2
		});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (SplitScreen);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./src/App.svelte");


const app = new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
  target: document.body
});

window.app = app;

/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ }),

/***/ "./src/util/getElement.js":
/*!********************************!*\
  !*** ./src/util/getElement.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getElement; });
/* harmony import */ var domtastic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domtastic */ "./node_modules/domtastic/src/index.js");


function getElement(id) {
  return Object(domtastic__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-element-id="${id}"]`);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map