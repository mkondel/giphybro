_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"/kEZ":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=n("q1tI"),f=n("i8i4"),p=n("17x9"),d=n("4Wwy").createFocusTrap,h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(c,e);var t,n,r,u=a(c);function c(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=u.call(this,e),n=s(t),o=function(e){t.focusTrapElement=e},(r="setFocusTrapElement")in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,"undefined"!==typeof document&&(t.previouslyFocusedElement=document.activeElement),t}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this.props.focusTrapOptions,t={returnFocusOnDeactivate:!1};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&"returnFocusOnDeactivate"!==n&&(t[n]=e[n]);var r=f.findDOMNode(this.focusTrapElement);this.focusTrap=this.props._createFocusTrap(r,t),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()}},{key:"componentDidUpdate",value:function(e){if(e.active&&!this.props.active){var t={returnFocus:this.props.focusTrapOptions.returnFocusOnDeactivate||!1};this.focusTrap.deactivate(t)}else!e.active&&this.props.active&&this.focusTrap.activate();e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}},{key:"componentWillUnmount",value:function(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus()}},{key:"render",value:function(){var e=this,t=l.Children.only(this.props.children);return l.cloneElement(t,{ref:function(n){e.setFocusTrapElement(n),"function"===typeof t.ref?t.ref(n):t.ref&&(t.ref.current=n)}})}}])&&o(t.prototype,n),r&&o(t,r),c}(l.Component),v="undefined"===typeof Element?Function:Element;h.propTypes={active:p.bool,paused:p.bool,focusTrapOptions:p.shape({onActivate:p.func,onDeactivate:p.func,initialFocus:p.oneOfType([p.instanceOf(v),p.string,p.func]),fallbackFocus:p.oneOfType([p.instanceOf(v),p.string,p.func]),escapeDeactivates:p.bool,clickOutsideDeactivates:p.bool,returnFocusOnDeactivate:p.bool,setReturnFocus:p.oneOfType([p.instanceOf(v),p.string,p.func]),allowOutsideClick:p.oneOfType([p.bool,p.func]),preventScroll:p.bool}),children:p.oneOfType([p.element,p.instanceOf(v)])},h.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:d},e.exports=h},"4Wwy":function(e,t,n){"use strict";n.r(t),n.d(t,"createFocusTrap",(function(){return y}));let r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary"],o=r.join(","),i="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(e,t,n){let r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&i.call(e,o)&&r.unshift(e),r=r.filter(n),r}function u(e){return!(!s(e)||function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;let t=function(e,t){for(let n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}((e.form||e.ownerDocument).querySelectorAll('input[type="radio"][name="'+e.name+'"]'),e.form);return!t||t===e}(e)}(e)||f(e)<0)}function s(e){return!(e.disabled||function(e){return d(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e))}let c=r.concat("iframe").join(",");function l(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,c)&&s(e)}function f(e){let t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t}function p(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function d(e){return"INPUT"===e.tagName}var h,v=function(){var e=[];return{activateTrap:function(t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)},deactivateTrap:function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}}}();function y(e,t){var n=document,r="string"===typeof e?n.querySelector(e):e,o={returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,...t},i={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},s={activate:function(e){if(i.active)return;_(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=n.activeElement;var t=e&&e.onActivate?e.onActivate:o.onActivate;t&&t();return d(),s},deactivate:c,pause:function(){if(i.paused||!i.active)return;i.paused=!0,y()},unpause:function(){if(!i.paused||!i.active)return;i.paused=!1,_(),d()}};return s;function c(e){if(i.active){clearTimeout(h),y(),i.active=!1,i.paused=!1,v.deactivateTrap(s);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:o.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:o.returnFocusOnDeactivate)&&m((function(){S(function(e){var t=b("setReturnFocus");return t||e}(i.nodeFocusedBeforeActivation))})),s}}function d(){if(i.active)return v.activateTrap(s),h=o.delayInitialFocus?m((function(){S(g())})):S(g()),n.addEventListener("focusin",O,!0),n.addEventListener("mousedown",w,{capture:!0,passive:!1}),n.addEventListener("touchstart",w,{capture:!0,passive:!1}),n.addEventListener("click",k,{capture:!0,passive:!1}),n.addEventListener("keydown",E,{capture:!0,passive:!1}),s}function y(){if(i.active)return n.removeEventListener("focusin",O,!0),n.removeEventListener("mousedown",w,!0),n.removeEventListener("touchstart",w,!0),n.removeEventListener("click",k,!0),n.removeEventListener("keydown",E,!0),s}function b(e){var t=o[e],r=t;if(!t)return null;if("string"===typeof t&&!(r=n.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"===typeof t&&!(r=t()))throw new Error("`"+e+"` did not return a node");return r}function g(){var e;if(!(e=null!==b("initialFocus")?b("initialFocus"):r.contains(n.activeElement)?n.activeElement:i.firstTabbableNode||b("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return e}function w(e){r.contains(e.target)||(o.clickOutsideDeactivates?c({returnFocus:!l(e.target)}):o.allowOutsideClick&&("boolean"===typeof o.allowOutsideClick?o.allowOutsideClick:o.allowOutsideClick(e))||e.preventDefault())}function O(e){r.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),S(i.mostRecentlyFocusedNode||g()))}function E(e){if(!1!==o.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void c();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(_(),e.shiftKey&&e.target===i.firstTabbableNode)return e.preventDefault(),void S(i.lastTabbableNode);if(!e.shiftKey&&e.target===i.lastTabbableNode)e.preventDefault(),S(i.firstTabbableNode)}(e)}function k(e){o.clickOutsideDeactivates||r.contains(e.target)||o.allowOutsideClick&&("boolean"===typeof o.allowOutsideClick?o.allowOutsideClick:o.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())}function _(){var e=function(e,t){let n=[],r=[];return a(e,(t=t||{}).includeContainer,u).forEach((function(e,t){let o=f(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(p).map(e=>e.node).concat(n)}(r);i.firstTabbableNode=e[0]||g(),i.lastTabbableNode=e[e.length-1]||g()}function S(e){e!==n.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(e)&&e.select()):S(g()))}}function m(e){return setTimeout(e,0)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var c=p[u];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=o.props[c],f=r[c]||new Set;f.has(l)?i=!1:(f.add(l),r[c]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},"K/ea":function(e,t,n){e.exports={container:"styles_container__1_WuM",main:"styles_main__2Z1qn",results:"styles_results__2vkRi",loading:"styles_loading__vfWYE"}},LSTS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),i=u(o),a=u(n("17x9"));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.scrollListener=n.scrollListener.bind(n),n.eventListenerOptions=n.eventListenerOptions.bind(n),n.mousewheelListener=n.mousewheelListener.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(n){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,n=this.getParentElement(e),r=void 0;if(this.props.useWindow){var o=document.documentElement||document.body.parentNode||document.body,i=void 0!==t.pageYOffset?t.pageYOffset:o.scrollTop;r=this.props.isReverse?i:this.calculateOffset(e,i)}else r=this.props.isReverse?n.scrollTop:e.scrollHeight-n.scrollTop-n.clientHeight;r<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=n.scrollHeight,this.beforeScrollTop=n.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),n=t.children,r=t.element,o=t.hasMore,a=(t.initialLoad,t.isReverse),u=t.loader,s=(t.loadMore,t.pageStart,t.ref),c=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));c.ref=function(t){e.scrollComponent=t,s&&s(t)};var l=[n];return o&&(u?a?l.unshift(u):l.push(u):this.defaultLoader&&(a?l.unshift(this.defaultLoader):l.push(this.defaultLoader))),i.default.createElement(r,c,l)}}]),t}(o.Component);s.propTypes={children:a.default.node.isRequired,element:a.default.node,hasMore:a.default.bool,initialLoad:a.default.bool,isReverse:a.default.bool,loader:a.default.node,loadMore:a.default.func.isRequired,pageStart:a.default.number,ref:a.default.func,getScrollParent:a.default.func,threshold:a.default.number,useCapture:a.default.bool,useWindow:a.default.bool},s.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=s,e.exports=t.default},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i);n("YFqc");function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n("o0o1"),l=n.n(c);function f(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,u,"next",e)}function u(e){f(i,r,o,a,u,"throw",e)}a(void 0)}))}}var d=n("yLiY"),h=n.n(d),v=o.a.createElement,y=h()().publicRuntimeConfig.giphyToken,m=Object(r.createContext)({}),b=function(e){var t=e.children,n=Object(r.useState)(""),o=n[0],i=n[1],a=Object(r.useState)([]),u=a[0],c=a[1],f=Object(r.useState)(0),d=f[0],h=f[1],b=function(){var e=p(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{mode:"cors"});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=p(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,r=n.data,c(0===d?r:[].concat(s(u),s(r)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){g("https://api.giphy.com/v1/gifs/trending?limit=".concat(50,"&api_key=").concat(y,"&offset=").concat(d))},O=function(){g("https://api.giphy.com/v1/gifs/search?limit=".concat(50,"&api_key=").concat(y,"&offset=").concat(d,"&q=").concat(o))};return Object(r.useEffect)(w,[]),Object(r.useEffect)(""===o?w:O,[o]),Object(r.useEffect)((function(){""===o?w():O()}),[d]),v(m.Provider,{value:{keywords:o,results:u,setKeywords:i,setResults:c,nextPage:function(){return h(d+50)},setOffset:h}},t)},g=m,w=n("RotF"),O=n.n(w),E=o.a.createElement,k=function(e){var t=e.styles,n=Object(r.useContext)(g),o=n.results,i=n.nextPage;return E("div",null,E(O.a,{className:t.results,pageStart:0,loadMore:i,hasMore:!0,initialLoad:!1},o&&o.map((function(e){e.title,e.bitly_url;var n=e.images,r=n.original.mp4,o=n.fixed_height,i=o.url,a=o.width,u=o.height;return E("div",{key:r,className:t.loading,style:{width:"".concat(a,"px"),height:"".concat(u,"px")}},E("a",{href:r,target:"_blank",rel:"noopener noreferrer"},E("img",{src:i})))}))))},_=n("/kEZ"),S=n.n(_),T=o.a.createElement,C=function(e){e.styles;var t=Object(r.useContext)(g),n=t.keywords,o=t.setKeywords,i=t.setOffset;return T(S.a,{focusTrapOptions:{escapeDeactivates:!1,allowOutsideClick:!0}},T("div",null,T("h1",null,n||"what?"),T("input",{style:{left:"100vw",position:"fixed"},type:"text",autoFocus:!0,value:"",onChange:function(e){var t=e.target.value;return o(String(n+t).trim())},onKeyUp:function(e){var t=e.value,r=e.keyCode;switch(console.log("handleInput()",t,r,n),i(0),window.scrollTo(0,0),r){case 8:o(n.slice(0,n.length-1));break;case 27:o("");break;default:o(n)}}})))},L=n("K/ea"),M=n.n(L),P=o.a.createElement;function x(){return P("div",{className:M.a.container},P(a.a,null,P("title",null,"Giphy Bro")),P("main",{className:M.a.main},P(b,null,P(C,{styles:M.a}),P(k,{styles:M.a}))))}},RotF:function(e,t,n){e.exports=n("LSTS")},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),u=n("a1gu"),s=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){a(n,e);var t=c(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i,a=o(n("q1tI")),u=n("elyg"),s=n("nOHt"),c=new Map,l=window.IntersectionObserver,f={};var p=function(e,t){var n=i||(l?i=new l((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=a.default.useState(),o=r(n,2),i=o[0],c=o[1],h=(0,s.useRouter)(),v=h&&h.pathname||"/",y=a.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href);return{href:t,as:e.as?(0,u.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),m=y.href,b=y.as;a.default.useEffect((function(){if(t&&l&&i&&i.tagName&&(0,u.isLocalURL)(m)&&!f[m+"%"+b])return p(i,(function(){d(h,m,b)}))}),[t,i,m,b,h]);var g=e.children,w=e.replace,O=e.shallow,E=e.scroll;"string"===typeof g&&(g=a.default.createElement("a",null,g));var k=a.Children.only(g),_={ref:function(e){e&&c(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,b,w,O,E)}};return t&&(_.onMouseEnter=function(e){(0,u.isLocalURL)(m)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),d(h,m,b,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(_.href=(0,u.addBasePath)(b)),a.default.cloneElement(k,_)};t.default=h},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yLiY:function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}}},[["vlRD",0,2,1]]]);