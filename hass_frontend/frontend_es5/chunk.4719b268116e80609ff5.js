/*! For license information please see chunk.4719b268116e80609ff5.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[101,31],{134:function(e,t,n){"use strict";n.r(t);n(82),n(351);t.default=function(e){var t=document.createElement("ha-toast");t.opened=!0,t.text="A new version of the frontend is available.",t.duration=0;var n=document.createElement("mwc-button");n.addEventListener("click",function(){return e.postMessage({type:"skipWaiting"})}),n.style.color="var(--primary-color)",n.style.fontWeight="bold",n.label="reload",t.appendChild(n),document.body.appendChild(t)}},351:function(e,t,n){"use strict";n.r(t);var i=n(91),s=n(84),o=n(6),r=n(4),a=n(5);function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <style>\n      :host {\n        display: block;\n        position: fixed;\n        background-color: var(--paper-toast-background-color, #323232);\n        color: var(--paper-toast-color, #f1f1f1);\n        min-height: 48px;\n        min-width: 288px;\n        padding: 16px 24px;\n        box-sizing: border-box;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n        border-radius: 2px;\n        margin: 12px;\n        font-size: 14px;\n        cursor: default;\n        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\n        transition: transform 0.3s, opacity 0.3s;\n        opacity: 0;\n        -webkit-transform: translateY(100px);\n        transform: translateY(100px);\n        @apply --paper-font-common-base;\n      }\n\n      :host(.capsule) {\n        border-radius: 24px;\n      }\n\n      :host(.fit-bottom) {\n        width: 100%;\n        min-width: 0;\n        border-radius: 0;\n        margin: 0;\n      }\n\n      :host(.paper-toast-open) {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n        transform: translateY(0px);\n      }\n    </style>\n\n    <span id="label">{{text}}</span>\n    <slot></slot>\n']);return c=function(){return e},e}var u=null;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(i){var s=Object.getOwnPropertyDescriptor(i,t);return s.get?s.get.call(n):s.value}})(e,t,n||e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object(o.a)({_template:Object(r.a)(c()),is:"paper-toast",behaviors:[s.a],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){return a.a._warn("`visible` is deprecated, use `opened` instead"),this.opened},get _canAutoClose(){return this.duration>0&&this.duration!==1/0},created:function(){this._autoClose=null,i.a.requestAvailability()},show:function(e){for(var t in"string"==typeof e&&(e={text:e}),e)0===t.indexOf("_")?a.a._warn('The property "'+t+'" is private and was not set.'):t in this?this[t]=e[t]:a.a._warn('The property "'+t+'" is not valid.');this.open()},hide:function(){this.close()},__onTransitionEnd:function(e){e&&e.target===this&&"opacity"===e.propertyName&&(this.opened?this._finishRenderOpened():this._finishRenderClosed())},_openedChanged:function(){null!==this._autoClose&&(this.cancelAsync(this._autoClose),this._autoClose=null),this.opened?(u&&u!==this&&u.close(),u=this,this.fire("iron-announce",{text:this.text}),this._canAutoClose&&(this._autoClose=this.async(this.close,this.duration))):u===this&&(u=null),s.b._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(e){this.positionTarget=e}}),n.d(t,"HaToast",function(){return y});var _=customElements.get("paper-toast"),y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,_),n=t,(i=[{key:"connectedCallback",value:function(){var e=this;h(p(t.prototype),"connectedCallback",this).call(this),this._resizeListener||(this._resizeListener=function(t){return e.classList.toggle("fit-bottom",t.matches)},this._mediaq=window.matchMedia("(max-width: 599px")),this._mediaq.addListener(this._resizeListener),this._resizeListener(this._mediaq)}},{key:"disconnectedCallback",value:function(){h(p(t.prototype),"disconnectedCallback",this).call(this),this._mediaq.removeListener(this._resizeListener)}}])&&d(n.prototype,i),s&&d(n,s),t}();customElements.define("ha-toast",y)},91:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(5);var i=n(6),s=n(4);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n']);return o=function(){return e},e}var r=Object(i.a)({_template:Object(s.a)(o()),is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){r.instance||(r.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async(function(){this._text=e},100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});r.instance=null,r.requestAvailability=function(){r.instance||(r.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(r.instance)}},94:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(5);var i=n(2),s=n(7),o=new Set,r={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():s.i||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(i.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(o.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}}}]);
//# sourceMappingURL=chunk.4719b268116e80609ff5.js.map