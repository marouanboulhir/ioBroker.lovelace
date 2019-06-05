(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~more-info-dialog~panel-config-automation~panel-config-cloud~panel-kiosk~panel-lovelace~panel~1e6cf785"],{

/***/ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js ***!
  \**********************************************************************************************/
/*! exports provided: IronCheckedElementBehaviorImpl, IronCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehaviorImpl", function() { return IronCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehavior", function() { return IronCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/



/**
 * Use `IronCheckedElementBehavior` to implement a custom element that has a
 * `checked` property, which can be used for validation if the element is also
 * `required`. Element instances implementing this behavior will also be
 * registered for use in an `iron-form` element.
 *
 * @demo demo/index.html
 * @polymerBehavior IronCheckedElementBehavior
 */

var IronCheckedElementBehaviorImpl = {
  properties: {
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: true,
      reflectToAttribute: true
    },

    /* Overriden from IronFormElementBehavior */
    value: {
      type: String,
      value: 'on',
      observer: '_valueChanged'
    }
  },
  observers: ['_requiredChanged(required)'],
  created: function created() {
    // Used by `iron-form` to handle the case that an element with this behavior
    // doesn't have a role of 'checkbox' or 'radio', but should still only be
    // included when the form is serialized if `this.checked === true`.
    this._hasIronCheckedElementBehavior = true;
  },

  /**
   * Returns false if the element is required and not checked, and true
   * otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false or if `checked` is true.
   */
  _getValidity: function _getValidity(_value) {
    return this.disabled || !this.required || this.checked;
  },

  /**
   * Update the aria-required label when `required` is changed.
   */
  _requiredChanged: function _requiredChanged() {
    if (this.required) {
      this.setAttribute('aria-required', 'true');
    } else {
      this.removeAttribute('aria-required');
    }
  },

  /**
   * Fire `iron-changed` when the checked state changes.
   */
  _checkedChanged: function _checkedChanged() {
    this.active = this.checked;
    this.fire('iron-change');
  },

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged: function _valueChanged() {
    if (this.value === undefined || this.value === null) {
      this.value = 'on';
    }
  }
};
/** @polymerBehavior */

var IronCheckedElementBehavior = [_polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"], IronCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js ***!
  \*********************************************************************************/
/*! exports provided: PaperCheckedElementBehaviorImpl, PaperCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehaviorImpl", function() { return PaperCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehavior", function() { return PaperCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-checked-element-behavior/iron-checked-element-behavior.js */ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js");
/* harmony import */ var _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
 * Use `PaperCheckedElementBehavior` to implement a custom element that has a
 * `checked` property similar to `IronCheckedElementBehavior` and is compatible
 * with having a ripple effect.
 * @polymerBehavior PaperCheckedElementBehavior
 */

var PaperCheckedElementBehaviorImpl = {
  /**
   * Synchronizes the element's checked state with its ripple effect.
   */
  _checkedChanged: function _checkedChanged() {
    _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehaviorImpl"]._checkedChanged.call(this);

    if (this.hasRipple()) {
      if (this.checked) {
        this._ripple.setAttribute('checked', '');
      } else {
        this._ripple.removeAttribute('checked');
      }
    }
  },

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged: function _buttonStateChanged() {
    _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._buttonStateChanged.call(this);

    if (this.disabled) {
      return;
    }

    if (this.isAttached) {
      this.checked = this.active;
    }
  }
};
/** @polymerBehavior */

var PaperCheckedElementBehavior = [_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperInkyFocusBehavior"], _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehavior"], PaperCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n    <style>\n      :host {\n        display: inline-block;\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-common-base;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host(:focus) {\n        outline:none;\n      }\n\n      .toggle-bar {\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        border-radius: 8px;\n        pointer-events: none;\n        opacity: 0.4;\n        transition: background-color linear .08s;\n        background-color: var(--paper-toggle-button-unchecked-bar-color, #000000);\n\n        @apply --paper-toggle-button-unchecked-bar;\n      }\n\n      .toggle-button {\n        position: absolute;\n        top: -3px;\n        left: 0;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);\n        transition: -webkit-transform linear .08s, background-color linear .08s;\n        transition: transform linear .08s, background-color linear .08s;\n        will-change: transform;\n        background-color: var(--paper-toggle-button-unchecked-button-color, var(--paper-grey-50));\n\n        @apply --paper-toggle-button-unchecked-button;\n      }\n\n      .toggle-button.dragging {\n        -webkit-transition: none;\n        transition: none;\n      }\n\n      :host([checked]:not([disabled])) .toggle-bar {\n        opacity: 0.5;\n        background-color: var(--paper-toggle-button-checked-bar-color, var(--primary-color));\n\n        @apply --paper-toggle-button-checked-bar;\n      }\n\n      :host([disabled]) .toggle-bar {\n        background-color: #000;\n        opacity: 0.12;\n      }\n\n      :host([checked]) .toggle-button {\n        -webkit-transform: translate(16px, 0);\n        transform: translate(16px, 0);\n      }\n\n      :host([checked]:not([disabled])) .toggle-button {\n        background-color: var(--paper-toggle-button-checked-button-color, var(--primary-color));\n\n        @apply --paper-toggle-button-checked-button;\n      }\n\n      :host([disabled]) .toggle-button {\n        background-color: #bdbdbd;\n        opacity: 1;\n      }\n\n      .toggle-ink {\n        position: absolute;\n        top: -14px;\n        left: -14px;\n        right: auto;\n        bottom: auto;\n        width: 48px;\n        height: 48px;\n        opacity: 0.5;\n        pointer-events: none;\n        color: var(--paper-toggle-button-unchecked-ink-color, var(--primary-text-color));\n\n        @apply --paper-toggle-button-unchecked-ink;\n      }\n\n      :host([checked]) .toggle-ink {\n        color: var(--paper-toggle-button-checked-ink-color, var(--primary-color));\n\n        @apply --paper-toggle-button-checked-ink;\n      }\n\n      .toggle-container {\n        display: inline-block;\n        position: relative;\n        width: 36px;\n        height: 14px;\n        /* The toggle button has an absolute position of -3px; The extra 1px\n        /* accounts for the toggle button shadow box. */\n        margin: 4px 1px;\n      }\n\n      .toggle-label {\n        position: relative;\n        display: inline-block;\n        vertical-align: middle;\n        padding-left: var(--paper-toggle-button-label-spacing, 8px);\n        pointer-events: none;\n        color: var(--paper-toggle-button-label-color, var(--primary-text-color));\n      }\n\n      /* invalid state */\n      :host([invalid]) .toggle-bar {\n        background-color: var(--paper-toggle-button-invalid-bar-color, var(--error-color));\n      }\n\n      :host([invalid]) .toggle-button {\n        background-color: var(--paper-toggle-button-invalid-button-color, var(--error-color));\n      }\n\n      :host([invalid]) .toggle-ink {\n        color: var(--paper-toggle-button-invalid-ink-color, var(--error-color));\n      }\n    </style>\n\n    <div class=\"toggle-container\">\n      <div id=\"toggleBar\" class=\"toggle-bar\"></div>\n      <div id=\"toggleButton\" class=\"toggle-button\"></div>\n    </div>\n\n    <div class=\"toggle-label\"><slot></slot></div>\n\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/










var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"])(_templateObject());
template.setAttribute('strip-whitespace', '');
/**
Material design: [Switch](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-switch)

`paper-toggle-button` provides a ON/OFF switch that user can toggle the state
by tapping or by dragging the switch.

Example:

    <paper-toggle-button></paper-toggle-button>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-toggle-button-unchecked-bar-color` | Slider color when the input is not checked | `#000000`
`--paper-toggle-button-unchecked-button-color` | Button color when the input is not checked | `--paper-grey-50`
`--paper-toggle-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--dark-primary-color`
`--paper-toggle-button-checked-bar-color` | Slider button color when the input is checked | `--primary-color`
`--paper-toggle-button-checked-button-color` | Button color when the input is checked | `--primary-color`
`--paper-toggle-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-toggle-button-invalid-bar-color` | Slider button color when the input is invalid | `--error-color`
`--paper-toggle-button-invalid-button-color` | Button color when the input is invalid | `--error-color`
`--paper-toggle-button-invalid-ink-color` | Selected/focus ripple color when the input is invalid | `--error-color`
`--paper-toggle-button-unchecked-bar` | Mixin applied to the slider when the input is not checked | `{}`
`--paper-toggle-button-unchecked-button` | Mixin applied to the slider button when the input is not checked | `{}`
`--paper-toggle-button-unchecked-ink` | Mixin applied to the ripple when the input is not checked | `{}`
`--paper-toggle-button-checked-bar` | Mixin applied to the slider when the input is checked | `{}`
`--paper-toggle-button-checked-button` | Mixin applied to the slider button when the input is checked | `{}`
`--paper-toggle-button-checked-ink` | Mixin applied to the ripple when the input is checked | `{}`
`--paper-toggle-button-label-color` | Label color | `--primary-text-color`
`--paper-toggle-button-label-spacing` | Spacing between the label and the button | `8px`

This element applies the mixin `--paper-font-common-base` but does not import `paper-styles/typography.html`.
In order to apply the `Roboto` font to this element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-toggle-button
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_6__["Polymer"])({
  _template: template,
  is: 'paper-toggle-button',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperCheckedElementBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'button',
    'aria-pressed': 'false',
    tabindex: 0
  },
  properties: {
    /**
     * Fired when the checked state changes due to user interaction.
     *
     * @event change
     */

    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */
  },
  listeners: {
    track: '_ontrack'
  },
  attached: function attached() {
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_9__["afterNextRender"])(this, function () {
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_7__["setTouchAction"])(this, 'pan-y');
    });
  },
  _ontrack: function _ontrack(event) {
    var track = event.detail;

    if (track.state === 'start') {
      this._trackStart(track);
    } else if (track.state === 'track') {
      this._trackMove(track);
    } else if (track.state === 'end') {
      this._trackEnd(track);
    }
  },
  _trackStart: function _trackStart(track) {
    this._width = this.$.toggleBar.offsetWidth / 2;
    /*
     * keep an track-only check state to keep the dragging behavior smooth
     * while toggling activations
     */

    this._trackChecked = this.checked;
    this.$.toggleButton.classList.add('dragging');
  },
  _trackMove: function _trackMove(track) {
    var dx = track.dx;
    this._x = Math.min(this._width, Math.max(0, this._trackChecked ? this._width + dx : dx));
    this.translate3d(this._x + 'px', 0, 0, this.$.toggleButton);

    this._userActivate(this._x > this._width / 2);
  },
  _trackEnd: function _trackEnd(track) {
    this.$.toggleButton.classList.remove('dragging');
    this.transform('', this.$.toggleButton);
  },
  // customize the element's ripple
  _createRipple: function _createRipple() {
    this._rippleContainer = this.$.toggleButton;

    var ripple = _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperRippleBehavior"]._createRipple();

    ripple.id = 'ink';
    ripple.setAttribute('recenters', '');
    ripple.classList.add('circle', 'toggle-ink');
    return ripple;
  }
});

/***/ }),

/***/ "./node_modules/fecha/src/fecha.js":
/*!*****************************************!*\
  !*** ./node_modules/fecha/src/fecha.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse or format dates
 * @class fecha
 */
var fecha = {};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = '\\d\\d?';
var threeDigits = '\\d{3}';
var fourDigits = '\\d{4}';
var word = '[^\\s]+';
var literal = /\[([^]*?)\]/gm;

var noop = function noop() {};

function regexEscape(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
}

function shorten(arr, sLen) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }

  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};
var formatFlags = {
  D: function D(dateObj) {
    return dateObj.getDate();
  },
  DD: function DD(dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function Do(dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function d(dateObj) {
    return dateObj.getDay();
  },
  dd: function dd(dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function ddd(dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function dddd(dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function M(dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function MM(dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function MMM(dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function MMMM(dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function YY(dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function YYYY(dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function h(dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function hh(dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function H(dateObj) {
    return dateObj.getHours();
  },
  HH: function HH(dateObj) {
    return pad(dateObj.getHours());
  },
  m: function m(dateObj) {
    return dateObj.getMinutes();
  },
  mm: function mm(dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function s(dateObj) {
    return dateObj.getSeconds();
  },
  ss: function ss(dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function S(dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function SS(dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function SSS(dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function a(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function A(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function ZZ(dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};
var parseFlags = {
  D: [twoDigits, function (d, v) {
    d.day = v;
  }],
  Do: [twoDigits + word, function (d, v) {
    d.day = parseInt(v, 10);
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  YY: [twoDigits, function (d, v) {
    var da = new Date(),
        cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  YYYY: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: ['\\d', function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: ['\\d{2}', function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  d: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();

    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
    var parts = (v + '').match(/([+-]|\d\d)/gi),
        minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.dd = parseFlags.d;
parseFlags.dddd = parseFlags.ddd;
parseFlags.DD = parseFlags.D;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a; // Some common format strings

fecha.masks = {
  "default": 'ddd MMM DD YYYY HH:mm:ss',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
};
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */

fecha.format = function (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];
  var literals = []; // Make literals inactive by replacing them with ??

  mask = mask.replace(literal, function ($0, $1) {
    literals.push($1);
    return '@@@';
  }); // Apply formatting rules

  mask = mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  }); // Inline literal values back into the formatted value

  return mask.replace(/@@@/g, function () {
    return literals.shift();
  });
};
/**
 * Parse a date string into an object, changes - into /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @returns {Date|boolean}
 */


fecha.parse = function (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

  if (dateStr.length > 1000) {
    return null;
  }

  var dateInfo = {};
  var parseInfo = [];
  var literals = [];
  format = format.replace(literal, function ($0, $1) {
    literals.push($1);
    return '@@@';
  });
  var newFormat = regexEscape(format).replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      parseInfo.push(info[1]);
      return '(' + info[0] + ')';
    }

    return $0;
  });
  newFormat = newFormat.replace(/@@@/g, function () {
    return literals.shift();
  });
  var matches = dateStr.match(new RegExp(newFormat, 'i'));

  if (!matches) {
    return null;
  }

  for (var i = 1; i < matches.length; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n);
  }

  var today = new Date();

  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;

  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }

  return date;
};

/* harmony default export */ __webpack_exports__["default"] = (fecha);

/***/ })

}]);
//# sourceMappingURL=vendors~more-info-dialog~panel-config-automation~panel-config-cloud~panel-kiosk~panel-lovelace~panel~1e6cf785.chunk.js.map