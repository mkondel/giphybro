_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/kEZ":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=n("q1tI"),l=n("i8i4"),p=n("17x9"),d=n("4Wwy").createFocusTrap,v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(s,e);var t,n,r,u=i(s);function s(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=u.call(this,e),n=c(t),o=function(e){t.focusTrapElement=e},(r="setFocusTrapElement")in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,"undefined"!==typeof document&&(t.previouslyFocusedElement=document.activeElement),t}return t=s,(n=[{key:"componentDidMount",value:function(){var e=this.props.focusTrapOptions,t={returnFocusOnDeactivate:!1};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&"returnFocusOnDeactivate"!==n&&(t[n]=e[n]);var r=l.findDOMNode(this.focusTrapElement);this.focusTrap=this.props._createFocusTrap(r,t),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()}},{key:"componentDidUpdate",value:function(e){if(e.active&&!this.props.active){var t={returnFocus:this.props.focusTrapOptions.returnFocusOnDeactivate||!1};this.focusTrap.deactivate(t)}else!e.active&&this.props.active&&this.focusTrap.activate();e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}},{key:"componentWillUnmount",value:function(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus()}},{key:"render",value:function(){var e=this,t=f.Children.only(this.props.children);return f.cloneElement(t,{ref:function(n){e.setFocusTrapElement(n),"function"===typeof t.ref?t.ref(n):t.ref&&(t.ref.current=n)}})}}])&&o(t.prototype,n),r&&o(t,r),s}(f.Component),y="undefined"===typeof Element?Function:Element;v.propTypes={active:p.bool,paused:p.bool,focusTrapOptions:p.shape({onActivate:p.func,onDeactivate:p.func,initialFocus:p.oneOfType([p.instanceOf(y),p.string,p.func]),fallbackFocus:p.oneOfType([p.instanceOf(y),p.string,p.func]),escapeDeactivates:p.bool,clickOutsideDeactivates:p.bool,returnFocusOnDeactivate:p.bool,setReturnFocus:p.oneOfType([p.instanceOf(y),p.string,p.func]),allowOutsideClick:p.oneOfType([p.bool,p.func]),preventScroll:p.bool}),children:p.oneOfType([p.element,p.instanceOf(y)])},v.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:d},e.exports=v},"4Wwy":function(e,t,n){"use strict";n.r(t),n.d(t,"createFocusTrap",(function(){return h}));let r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary"],o=r.join(","),a="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(e,t,n){let r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&a.call(e,o)&&r.unshift(e),r=r.filter(n),r}function u(e){return!(!c(e)||function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;let t=function(e,t){for(let n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}((e.form||e.ownerDocument).querySelectorAll('input[type="radio"][name="'+e.name+'"]'),e.form);return!t||t===e}(e)}(e)||l(e)<0)}function c(e){return!(e.disabled||function(e){return d(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e))}let s=r.concat("iframe").join(",");function f(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,s)&&c(e)}function l(e){let t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t}function p(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function d(e){return"INPUT"===e.tagName}var v,y=function(){var e=[];return{activateTrap:function(t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)},deactivateTrap:function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}}}();function h(e,t){var n=document,r="string"===typeof e?n.querySelector(e):e,o={returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,...t},a={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},c={activate:function(e){if(a.active)return;k(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=n.activeElement;var t=e&&e.onActivate?e.onActivate:o.onActivate;t&&t();return d(),c},deactivate:s,pause:function(){if(a.paused||!a.active)return;a.paused=!0,h()},unpause:function(){if(!a.paused||!a.active)return;a.paused=!1,k(),d()}};return c;function s(e){if(a.active){clearTimeout(v),h(),a.active=!1,a.paused=!1,y.deactivateTrap(c);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:o.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:o.returnFocusOnDeactivate)&&m((function(){T(function(e){var t=b("setReturnFocus");return t||e}(a.nodeFocusedBeforeActivation))})),c}}function d(){if(a.active)return y.activateTrap(c),v=o.delayInitialFocus?m((function(){T(g())})):T(g()),n.addEventListener("focusin",O,!0),n.addEventListener("mousedown",w,{capture:!0,passive:!1}),n.addEventListener("touchstart",w,{capture:!0,passive:!1}),n.addEventListener("click",E,{capture:!0,passive:!1}),n.addEventListener("keydown",_,{capture:!0,passive:!1}),c}function h(){if(a.active)return n.removeEventListener("focusin",O,!0),n.removeEventListener("mousedown",w,!0),n.removeEventListener("touchstart",w,!0),n.removeEventListener("click",E,!0),n.removeEventListener("keydown",_,!0),c}function b(e){var t=o[e],r=t;if(!t)return null;if("string"===typeof t&&!(r=n.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"===typeof t&&!(r=t()))throw new Error("`"+e+"` did not return a node");return r}function g(){var e;if(!(e=null!==b("initialFocus")?b("initialFocus"):r.contains(n.activeElement)?n.activeElement:a.firstTabbableNode||b("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return e}function w(e){r.contains(e.target)||(o.clickOutsideDeactivates?s({returnFocus:!f(e.target)}):o.allowOutsideClick&&("boolean"===typeof o.allowOutsideClick?o.allowOutsideClick:o.allowOutsideClick(e))||e.preventDefault())}function O(e){r.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),T(a.mostRecentlyFocusedNode||g()))}function _(e){if(!1!==o.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void s();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(k(),e.shiftKey&&e.target===a.firstTabbableNode)return e.preventDefault(),void T(a.lastTabbableNode);if(!e.shiftKey&&e.target===a.lastTabbableNode)e.preventDefault(),T(a.firstTabbableNode)}(e)}function E(e){o.clickOutsideDeactivates||r.contains(e.target)||o.allowOutsideClick&&("boolean"===typeof o.allowOutsideClick?o.allowOutsideClick:o.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())}function k(){var e=function(e,t){let n=[],r=[];return i(e,(t=t||{}).includeContainer,u).forEach((function(e,t){let o=l(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(p).map(e=>e.node).concat(n)}(r);a.firstTabbableNode=e[0]||g(),a.lastTabbableNode=e[e.length-1]||g()}function T(e){e!==n.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!o.preventScroll}),a.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(e)&&e.select()):T(g()))}}function m(e){return setTimeout(e,0)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var y=v;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=(n("YFqc"),n("yLiY")),c=n.n(u),s=o.a.createElement,f=(c()().publicRuntimeConfig.giphyToken,Object(r.createContext)({})),l=function(e){var t=e.children,n=Object(r.useState)(""),o=n[0],a=n[1],i=Object(r.useState)([]),u=i[0],c=i[1];return s(f.Provider,{value:{keywords:o,results:u,setKeywords:a,setResults:c}},t)},p=f,d=o.a.createElement,v=function(e){var t=e.styles,n=Object(r.useContext)(p).keywords;return d("div",null,d("h1",{className:t.title},n||"what?"))},y=n("/kEZ"),h=n.n(y),m=o.a.createElement,b={left:"100vw",position:"fixed"},g=function(e){e.styles;var t=Object(r.useContext)(p),n=t.keywords,o=t.setKeywords;return m(h.a,null,m("div",null,m("input",{style:b,type:"text",autoFocus:!0,value:"",onChange:function(e){var t=e.target.value;return o(n+t)},onKeyUp:function(e){return function(e,t,n){var r=e.value,o=e.keyCode;switch(console.log("handleInput()",r,o,t),o){case 8:n(t.slice(0,t.length-1));break;case 27:n("");break;default:n(t)}}(e,n,o)}})))},w=n("vRNQ"),O=n.n(w),_=o.a.createElement;function E(){return _("div",{className:O.a.container},_(i.a,null,_("title",null,"Giphy Bro")),_("main",{className:O.a.main},_(l,null,_(g,{styles:O.a}),_(v,{styles:O.a}))))}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),u=n("elyg"),c=n("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],v=(0,c.useRouter)(),y=v&&v.pathname||"/",h=i.default.useMemo((function(){var t=(0,u.resolveHref)(y,e.href);return{href:t,as:e.as?(0,u.resolveHref)(y,e.as):t}}),[y,e.href,e.as]),m=h.href,b=h.as;i.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,u.isLocalURL)(m)&&!l[m+"%"+b])return p(a,(function(){d(v,m,b)}))}),[t,a,m,b,v]);var g=e.children,w=e.replace,O=e.shallow,_=e.scroll;"string"===typeof g&&(g=i.default.createElement("a",null,g));var E=i.Children.only(g),k={ref:function(e){e&&s(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,m,b,w,O,_)}};return t&&(k.onMouseEnter=function(e){(0,u.isLocalURL)(m)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(v,m,b,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(k.href=(0,u.addBasePath)(b)),i.default.cloneElement(E,k)};t.default=v},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yLiY:function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}}},[["vlRD",0,2,1]]]);