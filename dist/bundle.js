/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.0 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.visible {
  visibility: visible;
}
.collapse {
  visibility: collapse;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.mt-40 {
  margin-top: 10rem;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.h-10 {
  height: 2.5rem;
}
.h-8 {
  height: 2rem;
}
.w-6 {
  width: 1.5rem;
}
.w-6\\/12 {
  width: 50%;
}
.w-8 {
  width: 2rem;
}
.w-full {
  width: 100%;
}
.max-w-sm {
  max-width: 24rem;
}
.border-collapse {
  border-collapse: collapse;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.resize {
  resize: both;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.gap-2 {
  gap: 0.5rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.border {
  border-width: 1px;
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, 1);
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgba(55, 65, 81, 1);
  border-color: rgba(55, 65, 81, var(--tw-border-opacity));
}
.border-slate-100 {
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, 1);
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
}
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(219, 234, 254, 1);
  background-color: rgba(219, 234, 254, var(--tw-bg-opacity));
}
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgba(96, 165, 250, 1);
  background-color: rgba(96, 165, 250, var(--tw-bg-opacity));
}
.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgba(30, 64, 175, 1);
  background-color: rgba(30, 64, 175, var(--tw-bg-opacity));
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgba(31, 41, 55, 1);
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}
.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgba(226, 232, 240, 1);
  background-color: rgba(226, 232, 240, var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.fill-blue-600 {
  fill: #2563eb;
}
.p-10 {
  padding: 2.5rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-6 {
  padding: 1.5rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgba(229, 231, 235, 1);
  color: rgba(229, 231, 235, var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, 1);
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}
.text-green-300 {
  --tw-text-opacity: 1;
  color: rgba(134, 239, 172, 1);
  color: rgba(134, 239, 172, var(--tw-text-opacity));
}
.text-slate-100 {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgba(203, 213, 225, 1);
  color: rgba(203, 213, 225, var(--tw-text-opacity));
}
.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgba(100, 116, 139, 1);
  color: rgba(100, 116, 139, var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.underline {
  text-decoration-line: underline;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.outline-slate-100 {
  outline-color: #f1f5f9;
}
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
}
.ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(147, 197, 253, var(--tw-ring-opacity));
}
.ring-blue-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(96, 165, 250, var(--tw-ring-opacity));
}
.ring-slate-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(100, 116, 139, var(--tw-ring-opacity));
}
.hover\\:bg-blue-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(59, 130, 246, 1);
  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
}
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.hover\\:ring-purple-200:hover {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(233, 213, 255, var(--tw-ring-opacity));
}
.focus\\:ring-white:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));
}
@media (min-width: 640px) {

  .sm\\:flex-row {
    flex-direction: row;
  }
}
@media (min-width: 768px) {

  .md\\:flex-row {
    flex-direction: row;
  }
}
@media (min-width: 1024px) {

  .lg\\:flex-row {
    flex-direction: row;
  }
}
@media (prefers-color-scheme: dark) {

  .dark\\:border-gray-700 {
    --tw-border-opacity: 1;
    border-color: rgba(55, 65, 81, 1);
    border-color: rgba(55, 65, 81, var(--tw-border-opacity));
  }

  .dark\\:bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgba(31, 41, 55, 1);
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
  }

  .dark\\:text-gray-600 {
    --tw-text-opacity: 1;
    color: rgba(75, 85, 99, 1);
    color: rgba(75, 85, 99, var(--tw-text-opacity));
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gemini.ts":
/*!***********************!*\
  !*** ./src/gemini.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ "./node_modules/@google/generative-ai/dist/index.mjs");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner */ "./src/spinner.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var genAi = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI("AIzaSyD9j9ZQ-Sy7_OroQ0c1FZE2J66R2xC5ocA");
var run = function (inputMessage) { return __awaiter(void 0, void 0, void 0, function () {
    var model, prompt, result, response, text, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                model = genAi.getGenerativeModel({ model: "gemini-pro" });
                prompt = inputMessage
                    ? inputMessage
                    : "Wright for me three quotes on life";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                (0,_spinner__WEBPACK_IMPORTED_MODULE_1__["default"])();
                return [4 /*yield*/, model.generateContent("write for me 3 quotes of same lengths of letters with humain emotions , the response must be in an array splitted with # , the quotes must be about this words:".concat(prompt))];
            case 2:
                result = _a.sent();
                return [4 /*yield*/, result.response];
            case 3:
                response = _a.sent();
                return [4 /*yield*/, response.text()];
            case 4:
                text = _a.sent();
                return [2 /*return*/, text];
            case 5:
                error_1 = _a.sent();
                throw new Error(error_1);
            case 6: return [2 /*return*/];
        }
    });
}); };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (run);


/***/ }),

/***/ "./src/input.ts":
/*!**********************!*\
  !*** ./src/input.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inputs)
/* harmony export */ });
function Inputs(params) {
    var homepage;
    var childElement;
    if (!document.getElementById(params.idContainer)) {
        throw new Error("There is no parent component with this id: ".concat(params.idContainer));
    }
    homepage = document.getElementById(params.idContainer);
    if (params.tagName == "input") {
        childElement = "<".concat(params.tagName, " placeholder=\"").concat(params.placeholder, "\" id=\"").concat(params.tagName, "\" class=\"").concat(params.style, "\"/>");
    }
    else {
        childElement = "<".concat(params.tagName, " id=\"").concat(params.name, "\" class=\"").concat(params.style, "\">").concat(params.name, "</").concat(params.tagName, ">");
    }
    homepage.innerHTML += childElement;
}


/***/ }),

/***/ "./src/posts.ts":
/*!**********************!*\
  !*** ./src/posts.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ posts)
/* harmony export */ });
function posts(response, homepage) {
    var val = response.split("#");
    var page = document.getElementById(homepage);
    var quotes = document.getElementById("quotes");
    quotes.innerHTML = "";
    for (var i = 0; i < val.length; i++) {
        if (val[i].length > 10) {
            quotes.innerHTML += "<p class=\"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\">".concat(val[i], "<p>");
        }
    }
}


/***/ }),

/***/ "./src/spinner.ts":
/*!************************!*\
  !*** ./src/spinner.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spinner)
/* harmony export */ });
function spinner() {
    document.getElementById("quotes").innerHTML = "<div role=\"status\">\n    <svg aria-hidden=\"true\" class=\"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600\" viewBox=\"0 0 100 101\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\" fill=\"currentColor\"/>\n        <path d=\"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\" fill=\"currentFill\"/>\n    </svg>\n    <span class=\"sr-only\">Loading...</span>\n</div>";
}


/***/ }),

/***/ "./node_modules/@google/generative-ai/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@google/generative-ai/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockReason: () => (/* binding */ BlockReason),
/* harmony export */   ChatSession: () => (/* binding */ ChatSession),
/* harmony export */   FinishReason: () => (/* binding */ FinishReason),
/* harmony export */   GenerativeModel: () => (/* binding */ GenerativeModel),
/* harmony export */   GoogleGenerativeAI: () => (/* binding */ GoogleGenerativeAI),
/* harmony export */   HarmBlockThreshold: () => (/* binding */ HarmBlockThreshold),
/* harmony export */   HarmCategory: () => (/* binding */ HarmCategory),
/* harmony export */   HarmProbability: () => (/* binding */ HarmProbability),
/* harmony export */   TaskType: () => (/* binding */ TaskType)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
var HarmCategory;
(function (HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshhold above which a prompt or candidate will be blocked.
 * @public
 */
var HarmBlockThreshold;
(function (HarmBlockThreshold) {
    // Threshold is unspecified.
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    // Content with NEGLIGIBLE will be allowed.
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    // Content with NEGLIGIBLE and LOW will be allowed.
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    // All content will be allowed.
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
var HarmProbability;
(function (HarmProbability) {
    // Probability is unspecified.
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    // Content has a negligible chance of being unsafe.
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    // Content has a low chance of being unsafe.
    HarmProbability["LOW"] = "LOW";
    // Content has a medium chance of being unsafe.
    HarmProbability["MEDIUM"] = "MEDIUM";
    // Content has a high chance of being unsafe.
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */
var BlockReason;
(function (BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */
var FinishReason;
(function (FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */
var TaskType;
(function (TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GoogleGenerativeAIError extends Error {
    constructor(message) {
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_URL = "https://generativelanguage.googleapis.com";
const API_VERSION = "v1";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */
const PACKAGE_VERSION = "0.1.3";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function (Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream) {
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
    }
    toString() {
        let url = `${BASE_URL}/${API_VERSION}/models/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */
function getClientHeaders() {
    return `${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`;
}
async function makeRequest(url, body) {
    let response;
    try {
        response = await fetch(url.toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-client": getClientHeaders(),
                "x-goog-api-key": url.apiKey,
            },
            body,
        });
        if (!response.ok) {
            let message = "";
            try {
                const json = await response.json();
                message = json.error.message;
                if (json.error.details) {
                    message += ` ${JSON.stringify(json.error.details)}`;
                }
            }
            catch (e) {
                // ignored
            }
            throw new Error(`[${response.status} ${response.statusText}] ${message}`);
        }
    }
    catch (e) {
        const err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
        throw err;
    }
    return response;
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */
function addHelpers(response) {
    response.text = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning text from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    return response;
}
/**
 * Returns text of first candidate.
 */
function getText(response) {
    var _a, _b, _c, _d;
    if ((_d = (_c = (_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text) {
        return response.candidates[0].content.parts[0].text;
    }
    else {
        return "";
    }
}
const badFinishReasons = [FinishReason.RECITATION, FinishReason.SAFETY];
function hadBadFinishReason(candidate) {
    return (!!candidate.finishReason &&
        badFinishReasons.includes(candidate.finishReason));
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) &&
        response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    }
    else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */
function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", { fatal: true }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2),
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while (true) {
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */
function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start(controller) {
            let currentText = "";
            return pump();
            function pump() {
                return reader.read().then(({ value, done }) => {
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while (match) {
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        }
                        catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                });
            }
        },
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */
function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback,
    };
    for (const response of responses) {
        if (response.candidates) {
            for (const candidate of response.candidates) {
                const i = candidate.index;
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[i]) {
                    aggregatedResponse.candidates[i] = {
                        index: candidate.index,
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[i].citationMetadata =
                    candidate.citationMetadata;
                aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[i].finishMessage =
                    candidate.finishMessage;
                aggregatedResponse.candidates[i].safetyRatings =
                    candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */
                if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[i].content) {
                        aggregatedResponse.candidates[i].content = {
                            role: candidate.content.role || "user",
                            parts: [{ text: "" }],
                        };
                    }
                    for (const part of candidate.content.parts) {
                        if (part.text) {
                            aggregatedResponse.candidates[i].content.parts[0].text +=
                                part.text;
                        }
                    }
                }
            }
        }
    }
    return aggregatedResponse;
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateContentStream(apiKey, model, params) {
    const url = new RequestUrl(model, Task.STREAM_GENERATE_CONTENT, apiKey, 
    /* stream */ true);
    const response = await makeRequest(url, JSON.stringify(params));
    return processStream(response);
}
async function generateContent(apiKey, model, params) {
    const url = new RequestUrl(model, Task.GENERATE_CONTENT, apiKey, 
    /* stream */ false);
    const response = await makeRequest(url, JSON.stringify(params));
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse,
    };
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function formatNewContent(request, role) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [{ text: request }];
    }
    else {
        for (const partOrString of request) {
            if (typeof partOrString === "string") {
                newParts.push({ text: partOrString });
            }
            else {
                newParts.push(partOrString);
            }
        }
    }
    return { role, parts: newParts };
}
function formatGenerateContentInput(params) {
    if (params.contents) {
        return params;
    }
    else {
        const content = formatNewContent(params, "user");
        return { contents: [content] };
    }
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params, "user");
        return { content };
    }
    return params;
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do not log a message for this error.
 */
const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */
class ChatSession {
    constructor(apiKey, model, params) {
        this.model = model;
        this.params = params;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            this._history = params.history.map((content) => {
                if (!content.role) {
                    throw new Error("Missing role for history item: " + JSON.stringify(content));
                }
                return formatNewContent(content.parts, content.role);
            });
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */
    async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}
     */
    async sendMessage(request) {
        var _a, _b;
        await this._sendPromise;
        const newContent = formatNewContent(request, "user");
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            contents: [...this._history, newContent],
        };
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => generateContent(this._apiKey, this.model, generateContentRequest))
            .then((result) => {
            var _a;
            if (result.response.candidates &&
                result.response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({ parts: [], 
                    // Response seems to come back without a role set.
                    role: "model" }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     */
    async sendMessageStream(request) {
        var _a, _b;
        await this._sendPromise;
        const newContent = formatNewContent(request, "user");
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            contents: [...this._history, newContent],
        };
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest);
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => streamPromise)
            // This must be handled to avoid unhandled rejection, but jump
            // to the final catch block with a label to not log this error.
            .catch((_ignored) => {
            throw new Error(SILENT_ERROR);
        })
            .then((streamResult) => streamResult.response)
            .then((response) => {
            if (response.candidates && response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        })
            .catch((e) => {
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function countTokens(apiKey, model, params) {
    const url = new RequestUrl(model, Task.COUNT_TOKENS, apiKey, false);
    const response = await makeRequest(url, JSON.stringify(Object.assign(Object.assign({}, params), { model })));
    return response.json();
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function embedContent(apiKey, model, params) {
    const url = new RequestUrl(model, Task.EMBED_CONTENT, apiKey, false);
    const response = await makeRequest(url, JSON.stringify(params));
    return response.json();
}
async function batchEmbedContents(apiKey, model, params) {
    const url = new RequestUrl(model, Task.BATCH_EMBED_CONTENTS, apiKey, false);
    const requestsWithModel = params.requests.map((request) => {
        return Object.assign(Object.assign({}, request), { model: `models/${model}` });
    });
    const response = await makeRequest(url, JSON.stringify({ requests: requestsWithModel }));
    return response.json();
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class for generative model APIs.
 * @public
 */
class GenerativeModel {
    constructor(apiKey, modelParams) {
        var _a;
        this.apiKey = apiKey;
        if (modelParams.model.startsWith("models/")) {
            this.model = (_a = modelParams.model.split("models/")) === null || _a === void 0 ? void 0 : _a[1];
        }
        else {
            this.model = modelParams.model;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     */
    async generateContent(request) {
        const formattedParams = formatGenerateContentInput(request);
        return generateContent(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings }, formattedParams));
    }
    /**
     * Makes a single streaming call to the model
     * and returns an object containing an iterable stream that iterates
     * over all chunks in the streaming response as well as
     * a promise that returns the final aggregated response.
     */
    async generateContentStream(request) {
        const formattedParams = formatGenerateContentInput(request);
        return generateContentStream(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings }, formattedParams));
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */
    startChat(startChatParams) {
        return new ChatSession(this.apiKey, this.model, startChatParams);
    }
    /**
     * Counts the tokens in the provided request.
     */
    async countTokens(request) {
        const formattedParams = formatGenerateContentInput(request);
        return countTokens(this.apiKey, this.model, formattedParams);
    }
    /**
     * Embeds the provided content.
     */
    async embedContent(request) {
        const formattedParams = formatEmbedContentInput(request);
        return embedContent(this.apiKey, this.model, formattedParams);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     */
    async batchEmbedContents(batchEmbedContentRequest) {
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest);
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Top-level class for this SDK
 * @public
 */
class GoogleGenerativeAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */
    getGenerativeModel(modelParams) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError(`Must provide a model name. ` +
                `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams);
    }
}


//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/input.ts");
/* harmony import */ var _gemini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gemini */ "./src/gemini.ts");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts */ "./src/posts.ts");




var style = "ring-2 ring-slate-500 border border-gray-200 rounded-lg shadow outline outline-slate-100 px-3 h-10 w-6/12 focus:ring-white";
var placeholder = "Share your thoughts, and I'll craft a quote to capture their essence.";
var buttonStyle = "bg-blue-800 text-white p-2 ring-2 ring-blue-300 rounded-lg text-slate-500 hover:bg-blue-500 hover:ring-purple-200 hover:text-white  hover:text-bold";
(0,_input__WEBPACK_IMPORTED_MODULE_1__["default"])({
    idContainer: "homepage",
    tagName: "input",
    placeholder: placeholder,
    style: style,
});
(0,_input__WEBPACK_IMPORTED_MODULE_1__["default"])({
    idContainer: "homepage",
    tagName: "button",
    name: "Submit",
    style: buttonStyle,
});
document.getElementById("Submit").addEventListener("click", function () {
    var inpt = document.getElementById("input");
    var result = (0,_gemini__WEBPACK_IMPORTED_MODULE_2__["default"])(inpt.value);
    result
        .then(function (value) {
        (0,_posts__WEBPACK_IMPORTED_MODULE_3__["default"])(value, "homepage");
    })
        .catch(function (e) { return console.log("This error happend:".concat(e)); });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxL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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNRO0FBQ0Y7QUFDQztBQUU1QixJQUFNLEtBQUssR0FBRyw0SEFBNEgsQ0FBQztBQUMzSSxJQUFNLFdBQVcsR0FBRyx1RUFBdUUsQ0FBQztBQUM1RixJQUFNLFdBQVcsR0FDZixxSkFBcUosQ0FBQztBQUV4SixrREFBTSxDQUFDO0lBQ0wsV0FBVyxFQUFFLFVBQVU7SUFDdkIsT0FBTyxFQUFFLE9BQU87SUFDaEIsV0FBVztJQUNYLEtBQUs7Q0FDTixDQUFDLENBQUM7QUFFSCxrREFBTSxDQUFDO0lBQ0wsV0FBVyxFQUFFLFVBQVU7SUFDdkIsT0FBTyxFQUFFLFFBQVE7SUFDakIsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsV0FBVztDQUNuQixDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMxRCxJQUFNLElBQUksR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVoRSxJQUFNLE1BQU0sR0FBRyxtREFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixNQUFNO1NBQ0gsSUFBSSxDQUFDLFVBQUMsS0FBSztRQUNWLGtEQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxjQUFPLENBQUMsR0FBRyxDQUFDLDZCQUFzQixDQUFDLENBQUUsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdW90ZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3F1b3Rlcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcXVvdGVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcXVvdGVzLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3F1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3F1b3Rlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9xdW90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcXVvdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcXVvdGVzLy4vc3JjL2dlbWluaS50cyIsIndlYnBhY2s6Ly9xdW90ZXMvLi9zcmMvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vcXVvdGVzLy4vc3JjL3Bvc3RzLnRzIiwid2VicGFjazovL3F1b3Rlcy8uL3NyYy9zcGlubmVyLnRzIiwid2VicGFjazovL3F1b3Rlcy8uL25vZGVfbW9kdWxlcy9AZ29vZ2xlL2dlbmVyYXRpdmUtYWkvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vcXVvdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9xdW90ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3F1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3F1b3Rlcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcXVvdGVzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuISB0YWlsd2luZGNzcyB2My40LjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXG4qLy8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5bdHlwZT0nYnV0dG9uJ10sXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItd2lkdGg6IDA7XG59XG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uY29sbGFwc2Uge1xuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDEwcmVtO1xufVxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uY29udGVudHMge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmgtMTAge1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5oLTgge1xuICBoZWlnaHQ6IDJyZW07XG59XG4udy02IHtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cbi53LTZcXFxcLzEyIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi53LTgge1xuICB3aWR0aDogMnJlbTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXgtdy1zbSB7XG4gIG1heC13aWR0aDogMjRyZW07XG59XG4uYm9yZGVyLWNvbGxhcHNlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi50cmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5hbmltYXRlLXNwaW4ge1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuLnJlc2l6ZSB7XG4gIHJlc2l6ZTogYm90aDtcbn1cbi5mbGV4LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLnJvdW5kZWQtZnVsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn1cbi5yb3VuZGVkLWxnIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtc20ge1xuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbn1cbi5ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi5ib3JkZXItZ3JheS0yMDAge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmJvcmRlci1ncmF5LTcwMCB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1NSwgNjUsIDgxLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDU1LCA2NSwgODEsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLXNsYXRlLTEwMCB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYmctYmx1ZS0xMDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAyMzQsIDI1NCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAyMzQsIDI1NCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLWJsdWUtNDAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCAxNjUsIDI1MCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDE2NSwgMjUwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctYmx1ZS04MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDY0LCAxNzUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCA2NCwgMTc1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctZ3JheS04MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDQxLCA1NSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDQxLCA1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTEwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctc2xhdGUtMjAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy13aGl0ZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZmlsbC1ibHVlLTYwMCB7XG4gIGZpbGw6ICMyNTYzZWI7XG59XG4ucC0xMCB7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbn1cbi5wLTIge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4ucC02IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLnB4LTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbn1cbi5weC0zIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuLnRleHQtZ3JheS0yMDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgMSk7XG4gIGNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtZ3JheS02MDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoNzUsIDg1LCA5OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDc1LCA4NSwgOTksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtZ3JlZW4tMzAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDEzNCwgMjM5LCAxNzIsIDEpO1xuICBjb2xvcjogcmdiYSgxMzQsIDIzOSwgMTcyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXNsYXRlLTEwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1zbGF0ZS0zMDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjAzLCAyMTMsIDIyNSwgMSk7XG4gIGNvbG9yOiByZ2JhKDIwMywgMjEzLCAyMjUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtc2xhdGUtNTAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxMzksIDEpO1xuICBjb2xvcjogcmdiYSgxMDAsIDExNiwgMTM5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXdoaXRlIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxuLnNoYWRvdyB7XG4gIC0tdHctc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxcHggM3B4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAxcHggMnB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG59XG4ub3V0bGluZSB7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xufVxuLm91dGxpbmUtc2xhdGUtMTAwIHtcbiAgb3V0bGluZS1jb2xvcjogI2YxZjVmOTtcbn1cbi5yaW5nLTIge1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygycHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpLCB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDJweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvciksIDAgMCByZ2JhKDAsMCwwLDApO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpO1xufVxuLnJpbmctYmx1ZS0zMDAge1xuICAtLXR3LXJpbmctb3BhY2l0eTogMTtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDE0NywgMTk3LCAyNTMsIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xufVxuLnJpbmctYmx1ZS00MDAge1xuICAtLXR3LXJpbmctb3BhY2l0eTogMTtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDk2LCAxNjUsIDI1MCwgdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XG59XG4ucmluZy1zbGF0ZS01MDAge1xuICAtLXR3LXJpbmctb3BhY2l0eTogMTtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxMzksIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xufVxuLmhvdmVyXFxcXDpiZy1ibHVlLTUwMDpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmhvdmVyXFxcXDp0ZXh0LXdoaXRlOmhvdmVyIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5ob3ZlclxcXFw6cmluZy1wdXJwbGUtMjAwOmhvdmVyIHtcbiAgLS10dy1yaW5nLW9wYWNpdHk6IDE7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSgyMzMsIDIxMywgMjU1LCB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcbn1cbi5mb2N1c1xcXFw6cmluZy13aGl0ZTpmb2N1cyB7XG4gIC0tdHctcmluZy1vcGFjaXR5OiAxO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuc21cXFxcOmZsZXgtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAubWRcXFxcOmZsZXgtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgLmxnXFxcXDpmbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG4gIC5kYXJrXFxcXDpib3JkZXItZ3JheS03MDAge1xuICAgIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDU1LCA2NSwgODEsIDEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICB9XG5cbiAgLmRhcmtcXFxcOmJnLWdyYXktODAwIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNDEsIDU1LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA0MSwgNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgfVxuXG4gIC5kYXJrXFxcXDp0ZXh0LWdyYXktNjAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSg3NSwgODUsIDk5LCAxKTtcbiAgICBjb2xvcjogcmdiYSg3NSwgODUsIDk5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7Ozs7O0NBQWM7O0FBQWQ7O0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsOExBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsd0NBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsMEJBQWM7RUFBZCx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1B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bkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDZCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsOEVBQW1CO0VBQW5CLDhGQUFtQjtFQUFuQixtSEFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsMkdBQW1CO0VBQW5CLHlHQUFtQjtFQUFuQiwwTUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFGbkI7RUFBQSxrQkFHQTtFQUhBLHVDQUdBO0VBSEE7QUFHQTtBQUhBO0VBQUEsb0JBR0E7RUFIQSw2QkFHQTtFQUhBO0FBR0E7QUFIQTtFQUFBLG9CQUdBO0VBSEE7QUFHQTtBQUhBO0VBQUEsb0JBR0E7RUFIQTtBQUdBO0FBSEE7O0VBQUE7SUFBQTtFQUdBO0FBQUE7QUFIQTs7RUFBQTtJQUFBO0VBR0E7QUFBQTtBQUhBOztFQUFBO0lBQUE7RUFHQTtBQUFBO0FBSEE7O0VBQUE7SUFBQSxzQkFHQTtJQUhBLGlDQUdBO0lBSEE7RUFHQTs7RUFIQTtJQUFBLGtCQUdBO0lBSEEscUNBR0E7SUFIQTtFQUdBOztFQUhBO0lBQUEsb0JBR0E7SUFIQSwwQkFHQTtJQUhBO0VBR0E7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIjtcbmltcG9ydCBzcGlubmVyIGZyb20gXCIuL3NwaW5uZXJcIjtcblxuY29uc3QgZ2VuQWkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZKTtcblxuY29uc3QgcnVuID0gYXN5bmMgKGlucHV0TWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IG1vZGVsID0gZ2VuQWkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHsgbW9kZWw6IFwiZ2VtaW5pLXByb1wiIH0pO1xuICBjb25zdCBwcm9tcHQgPSBpbnB1dE1lc3NhZ2VcbiAgICA/IGlucHV0TWVzc2FnZVxuICAgIDogXCJXcmlnaHQgZm9yIG1lIHRocmVlIHF1b3RlcyBvbiBsaWZlXCI7XG5cbiAgdHJ5IHtcbiAgICBzcGlubmVyKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KFxuICAgICAgYHdyaXRlIGZvciBtZSAzIHF1b3RlcyBvZiBzYW1lIGxlbmd0aHMgb2YgbGV0dGVycyB3aXRoIGh1bWFpbiBlbW90aW9ucyAsIHRoZSByZXNwb25zZSBtdXN0IGJlIGluIGFuIGFycmF5IHNwbGl0dGVkIHdpdGggIyAsIHRoZSBxdW90ZXMgbXVzdCBiZSBhYm91dCB0aGlzIHdvcmRzOiR7cHJvbXB0fWAsXG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc3VsdC5yZXNwb25zZTtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHJldHVybiB0ZXh0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bjtcbiIsInR5cGUgZWxlbWVudFR5cGUgPSBcImJ1dHRvblwiIHwgXCJpbnB1dFwiO1xuXG5pbnRlcmZhY2UgcGFyYW1zIHtcbiAgaWRDb250YWluZXI6IHN0cmluZztcbiAgdGFnTmFtZTogZWxlbWVudFR5cGU7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBzdHlsZT86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRzKHBhcmFtczogcGFyYW1zKTogdm9pZCB7XG4gIGxldCBob21lcGFnZTogSFRNTEVsZW1lbnQ7XG4gIGxldCBjaGlsZEVsZW1lbnQ6IHN0cmluZztcblxuICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtcy5pZENvbnRhaW5lcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVGhlcmUgaXMgbm8gcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoaXMgaWQ6ICR7cGFyYW1zLmlkQ29udGFpbmVyfWAsXG4gICAgKTtcbiAgfVxuXG4gIGhvbWVwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyYW1zLmlkQ29udGFpbmVyKTtcbiAgaWYgKHBhcmFtcy50YWdOYW1lID09IFwiaW5wdXRcIikge1xuICAgIGNoaWxkRWxlbWVudCA9IGA8JHtwYXJhbXMudGFnTmFtZX0gcGxhY2Vob2xkZXI9XCIke3BhcmFtcy5wbGFjZWhvbGRlcn1cIiBpZD1cIiR7cGFyYW1zLnRhZ05hbWV9XCIgY2xhc3M9XCIke3BhcmFtcy5zdHlsZX1cIi8+YDtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZEVsZW1lbnQgPSBgPCR7cGFyYW1zLnRhZ05hbWV9IGlkPVwiJHtwYXJhbXMubmFtZX1cIiBjbGFzcz1cIiR7cGFyYW1zLnN0eWxlfVwiPiR7cGFyYW1zLm5hbWV9PC8ke3BhcmFtcy50YWdOYW1lfT5gO1xuICB9XG5cbiAgaG9tZXBhZ2UuaW5uZXJIVE1MICs9IGNoaWxkRWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvc3RzKHJlc3BvbnNlOiBzdHJpbmcsIGhvbWVwYWdlOiBzdHJpbmcpIHtcbiAgY29uc3QgdmFsID0gcmVzcG9uc2Uuc3BsaXQoXCIjXCIpO1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9tZXBhZ2UpO1xuICBjb25zdCBxdW90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1b3Rlc1wiKTtcbiAgcXVvdGVzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsW2ldLmxlbmd0aCA+IDEwKSB7XG4gICAgICBxdW90ZXMuaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cIm1heC13LXNtIHAtNiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj4ke3ZhbFtpXX08cD5gO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3Bpbm5lcigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdW90ZXNcIikuaW5uZXJIVE1MID0gYDxkaXYgcm9sZT1cInN0YXR1c1wiPlxuICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpbmxpbmUgdy04IGgtOCB0ZXh0LWdyYXktMjAwIGFuaW1hdGUtc3BpbiBkYXJrOnRleHQtZ3JheS02MDAgZmlsbC1ibHVlLTYwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNOTMuOTY3NiAzOS4wNDA5Qzk2LjM5MyAzOC40MDM4IDk3Ljg2MjQgMzUuOTExNiA5Ny4wMDc5IDMzLjU1MzlDOTUuMjkzMiAyOC44MjI3IDkyLjg3MSAyNC4zNjkyIDg5LjgxNjcgMjAuMzQ4Qzg1Ljg0NTIgMTUuMTE5MiA4MC44ODI2IDEwLjcyMzggNzUuMjEyNCA3LjQxMjg5QzY5LjU0MjIgNC4xMDE5NCA2My4yNzU0IDEuOTQwMjUgNTYuNzY5OCAxLjA1MTI0QzUxLjc2NjYgMC4zNjc1NDEgNDYuNjk3NiAwLjQ0Njg0MyA0MS43MzQ1IDEuMjc4NzNDMzkuMjYxMyAxLjY5MzI4IDM3LjgxMyA0LjE5Nzc4IDM4LjQ1MDEgNi42MjMyNkMzOS4wODczIDkuMDQ4NzQgNDEuNTY5NCAxMC40NzE3IDQ0LjA1MDUgMTAuMTA3MUM0Ny44NTExIDkuNTQ4NTUgNTEuNzE5MSA5LjUyNjg5IDU1LjU0MDIgMTAuMDQ5MUM2MC44NjQyIDEwLjc3NjYgNjUuOTkyOCAxMi41NDU3IDcwLjYzMzEgMTUuMjU1MkM3NS4yNzM1IDE3Ljk2NDggNzkuMzM0NyAyMS41NjE5IDgyLjU4NDkgMjUuODQxQzg0LjkxNzUgMjguOTEyMSA4Ni43OTk3IDMyLjI5MTMgODguMTgxMSAzNS44NzU4Qzg5LjA4MyAzOC4yMTU4IDkxLjU0MjEgMzkuNjc4MSA5My45Njc2IDM5LjA0MDlaXCIgZmlsbD1cImN1cnJlbnRGaWxsXCIvPlxuICAgIDwvc3ZnPlxuICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG48L2Rpdj5gO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogSGFybSBjYXRlZ29yaWVzIHRoYXQgd291bGQgY2F1c2UgcHJvbXB0cyBvciBjYW5kaWRhdGVzIHRvIGJlIGJsb2NrZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBIYXJtQ2F0ZWdvcnk7XG4oZnVuY3Rpb24gKEhhcm1DYXRlZ29yeSkge1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfVU5TUEVDSUZJRURcIl0gPSBcIkhBUk1fQ0FURUdPUllfVU5TUEVDSUZJRURcIjtcbiAgICBIYXJtQ2F0ZWdvcnlbXCJIQVJNX0NBVEVHT1JZX0hBVEVfU1BFRUNIXCJdID0gXCJIQVJNX0NBVEVHT1JZX0hBVEVfU1BFRUNIXCI7XG4gICAgSGFybUNhdGVnb3J5W1wiSEFSTV9DQVRFR09SWV9TRVhVQUxMWV9FWFBMSUNJVFwiXSA9IFwiSEFSTV9DQVRFR09SWV9TRVhVQUxMWV9FWFBMSUNJVFwiO1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfSEFSQVNTTUVOVFwiXSA9IFwiSEFSTV9DQVRFR09SWV9IQVJBU1NNRU5UXCI7XG4gICAgSGFybUNhdGVnb3J5W1wiSEFSTV9DQVRFR09SWV9EQU5HRVJPVVNfQ09OVEVOVFwiXSA9IFwiSEFSTV9DQVRFR09SWV9EQU5HRVJPVVNfQ09OVEVOVFwiO1xufSkoSGFybUNhdGVnb3J5IHx8IChIYXJtQ2F0ZWdvcnkgPSB7fSkpO1xuLyoqXG4gKiBUaHJlc2hob2xkIGFib3ZlIHdoaWNoIGEgcHJvbXB0IG9yIGNhbmRpZGF0ZSB3aWxsIGJlIGJsb2NrZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBIYXJtQmxvY2tUaHJlc2hvbGQ7XG4oZnVuY3Rpb24gKEhhcm1CbG9ja1RocmVzaG9sZCkge1xuICAgIC8vIFRocmVzaG9sZCBpcyB1bnNwZWNpZmllZC5cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJIQVJNX0JMT0NLX1RIUkVTSE9MRF9VTlNQRUNJRklFRFwiXSA9IFwiSEFSTV9CTE9DS19USFJFU0hPTERfVU5TUEVDSUZJRURcIjtcbiAgICAvLyBDb250ZW50IHdpdGggTkVHTElHSUJMRSB3aWxsIGJlIGFsbG93ZWQuXG4gICAgSGFybUJsb2NrVGhyZXNob2xkW1wiQkxPQ0tfTE9XX0FORF9BQk9WRVwiXSA9IFwiQkxPQ0tfTE9XX0FORF9BQk9WRVwiO1xuICAgIC8vIENvbnRlbnQgd2l0aCBORUdMSUdJQkxFIGFuZCBMT1cgd2lsbCBiZSBhbGxvd2VkLlxuICAgIEhhcm1CbG9ja1RocmVzaG9sZFtcIkJMT0NLX01FRElVTV9BTkRfQUJPVkVcIl0gPSBcIkJMT0NLX01FRElVTV9BTkRfQUJPVkVcIjtcbiAgICAvLyBDb250ZW50IHdpdGggTkVHTElHSUJMRSwgTE9XLCBhbmQgTUVESVVNIHdpbGwgYmUgYWxsb3dlZC5cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJCTE9DS19PTkxZX0hJR0hcIl0gPSBcIkJMT0NLX09OTFlfSElHSFwiO1xuICAgIC8vIEFsbCBjb250ZW50IHdpbGwgYmUgYWxsb3dlZC5cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJCTE9DS19OT05FXCJdID0gXCJCTE9DS19OT05FXCI7XG59KShIYXJtQmxvY2tUaHJlc2hvbGQgfHwgKEhhcm1CbG9ja1RocmVzaG9sZCA9IHt9KSk7XG4vKipcbiAqIFByb2JhYmlsaXR5IHRoYXQgYSBwcm9tcHQgb3IgY2FuZGlkYXRlIG1hdGNoZXMgYSBoYXJtIGNhdGVnb3J5LlxuICogQHB1YmxpY1xuICovXG52YXIgSGFybVByb2JhYmlsaXR5O1xuKGZ1bmN0aW9uIChIYXJtUHJvYmFiaWxpdHkpIHtcbiAgICAvLyBQcm9iYWJpbGl0eSBpcyB1bnNwZWNpZmllZC5cbiAgICBIYXJtUHJvYmFiaWxpdHlbXCJIQVJNX1BST0JBQklMSVRZX1VOU1BFQ0lGSUVEXCJdID0gXCJIQVJNX1BST0JBQklMSVRZX1VOU1BFQ0lGSUVEXCI7XG4gICAgLy8gQ29udGVudCBoYXMgYSBuZWdsaWdpYmxlIGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuXG4gICAgSGFybVByb2JhYmlsaXR5W1wiTkVHTElHSUJMRVwiXSA9IFwiTkVHTElHSUJMRVwiO1xuICAgIC8vIENvbnRlbnQgaGFzIGEgbG93IGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuXG4gICAgSGFybVByb2JhYmlsaXR5W1wiTE9XXCJdID0gXCJMT1dcIjtcbiAgICAvLyBDb250ZW50IGhhcyBhIG1lZGl1bSBjaGFuY2Ugb2YgYmVpbmcgdW5zYWZlLlxuICAgIEhhcm1Qcm9iYWJpbGl0eVtcIk1FRElVTVwiXSA9IFwiTUVESVVNXCI7XG4gICAgLy8gQ29udGVudCBoYXMgYSBoaWdoIGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuXG4gICAgSGFybVByb2JhYmlsaXR5W1wiSElHSFwiXSA9IFwiSElHSFwiO1xufSkoSGFybVByb2JhYmlsaXR5IHx8IChIYXJtUHJvYmFiaWxpdHkgPSB7fSkpO1xuLyoqXG4gKiBSZWFzb24gdGhhdCBhIHByb21wdCB3YXMgYmxvY2tlZC5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIEJsb2NrUmVhc29uO1xuKGZ1bmN0aW9uIChCbG9ja1JlYXNvbikge1xuICAgIC8vIEEgYmxvY2tlZCByZWFzb24gd2FzIG5vdCBzcGVjaWZpZWQuXG4gICAgQmxvY2tSZWFzb25bXCJCTE9DS0VEX1JFQVNPTl9VTlNQRUNJRklFRFwiXSA9IFwiQkxPQ0tFRF9SRUFTT05fVU5TUEVDSUZJRURcIjtcbiAgICAvLyBDb250ZW50IHdhcyBibG9ja2VkIGJ5IHNhZmV0eSBzZXR0aW5ncy5cbiAgICBCbG9ja1JlYXNvbltcIlNBRkVUWVwiXSA9IFwiU0FGRVRZXCI7XG4gICAgLy8gQ29udGVudCB3YXMgYmxvY2tlZCwgYnV0IHRoZSByZWFzb24gaXMgdW5jYXRlZ29yaXplZC5cbiAgICBCbG9ja1JlYXNvbltcIk9USEVSXCJdID0gXCJPVEhFUlwiO1xufSkoQmxvY2tSZWFzb24gfHwgKEJsb2NrUmVhc29uID0ge30pKTtcbi8qKlxuICogUmVhc29uIHRoYXQgYSBjYW5kaWRhdGUgZmluaXNoZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBGaW5pc2hSZWFzb247XG4oZnVuY3Rpb24gKEZpbmlzaFJlYXNvbikge1xuICAgIC8vIERlZmF1bHQgdmFsdWUuIFRoaXMgdmFsdWUgaXMgdW51c2VkLlxuICAgIEZpbmlzaFJlYXNvbltcIkZJTklTSF9SRUFTT05fVU5TUEVDSUZJRURcIl0gPSBcIkZJTklTSF9SRUFTT05fVU5TUEVDSUZJRURcIjtcbiAgICAvLyBOYXR1cmFsIHN0b3AgcG9pbnQgb2YgdGhlIG1vZGVsIG9yIHByb3ZpZGVkIHN0b3Agc2VxdWVuY2UuXG4gICAgRmluaXNoUmVhc29uW1wiU1RPUFwiXSA9IFwiU1RPUFwiO1xuICAgIC8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0b2tlbnMgYXMgc3BlY2lmaWVkIGluIHRoZSByZXF1ZXN0IHdhcyByZWFjaGVkLlxuICAgIEZpbmlzaFJlYXNvbltcIk1BWF9UT0tFTlNcIl0gPSBcIk1BWF9UT0tFTlNcIjtcbiAgICAvLyBUaGUgY2FuZGlkYXRlIGNvbnRlbnQgd2FzIGZsYWdnZWQgZm9yIHNhZmV0eSByZWFzb25zLlxuICAgIEZpbmlzaFJlYXNvbltcIlNBRkVUWVwiXSA9IFwiU0FGRVRZXCI7XG4gICAgLy8gVGhlIGNhbmRpZGF0ZSBjb250ZW50IHdhcyBmbGFnZ2VkIGZvciByZWNpdGF0aW9uIHJlYXNvbnMuXG4gICAgRmluaXNoUmVhc29uW1wiUkVDSVRBVElPTlwiXSA9IFwiUkVDSVRBVElPTlwiO1xuICAgIC8vIFVua25vd24gcmVhc29uLlxuICAgIEZpbmlzaFJlYXNvbltcIk9USEVSXCJdID0gXCJPVEhFUlwiO1xufSkoRmluaXNoUmVhc29uIHx8IChGaW5pc2hSZWFzb24gPSB7fSkpO1xuLyoqXG4gKiBUYXNrIHR5cGUgZm9yIGVtYmVkZGluZyBjb250ZW50LlxuICogQHB1YmxpY1xuICovXG52YXIgVGFza1R5cGU7XG4oZnVuY3Rpb24gKFRhc2tUeXBlKSB7XG4gICAgVGFza1R5cGVbXCJUQVNLX1RZUEVfVU5TUEVDSUZJRURcIl0gPSBcIlRBU0tfVFlQRV9VTlNQRUNJRklFRFwiO1xuICAgIFRhc2tUeXBlW1wiUkVUUklFVkFMX1FVRVJZXCJdID0gXCJSRVRSSUVWQUxfUVVFUllcIjtcbiAgICBUYXNrVHlwZVtcIlJFVFJJRVZBTF9ET0NVTUVOVFwiXSA9IFwiUkVUUklFVkFMX0RPQ1VNRU5UXCI7XG4gICAgVGFza1R5cGVbXCJTRU1BTlRJQ19TSU1JTEFSSVRZXCJdID0gXCJTRU1BTlRJQ19TSU1JTEFSSVRZXCI7XG4gICAgVGFza1R5cGVbXCJDTEFTU0lGSUNBVElPTlwiXSA9IFwiQ0xBU1NJRklDQVRJT05cIjtcbiAgICBUYXNrVHlwZVtcIkNMVVNURVJJTkdcIl0gPSBcIkNMVVNURVJJTkdcIjtcbn0pKFRhc2tUeXBlIHx8IChUYXNrVHlwZSA9IHt9KSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jbGFzcyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKGBbR29vZ2xlR2VuZXJhdGl2ZUFJIEVycm9yXTogJHttZXNzYWdlfWApO1xuICAgIH1cbn1cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb21cIjtcbmNvbnN0IEFQSV9WRVJTSU9OID0gXCJ2MVwiO1xuLyoqXG4gKiBXZSBjYW4ndCBgcmVxdWlyZWAgcGFja2FnZS5qc29uIGlmIHRoaXMgcnVucyBvbiB3ZWIuIFdlIHdpbGwgdXNlIHJvbGx1cCB0b1xuICogc3dhcCBpbiB0aGUgdmVyc2lvbiBudW1iZXIgaGVyZSBhdCBidWlsZCB0aW1lLlxuICovXG5jb25zdCBQQUNLQUdFX1ZFUlNJT04gPSBcIjAuMS4zXCI7XG5jb25zdCBQQUNLQUdFX0xPR19IRUFERVIgPSBcImdlbmFpLWpzXCI7XG52YXIgVGFzaztcbihmdW5jdGlvbiAoVGFzaykge1xuICAgIFRhc2tbXCJHRU5FUkFURV9DT05URU5UXCJdID0gXCJnZW5lcmF0ZUNvbnRlbnRcIjtcbiAgICBUYXNrW1wiU1RSRUFNX0dFTkVSQVRFX0NPTlRFTlRcIl0gPSBcInN0cmVhbUdlbmVyYXRlQ29udGVudFwiO1xuICAgIFRhc2tbXCJDT1VOVF9UT0tFTlNcIl0gPSBcImNvdW50VG9rZW5zXCI7XG4gICAgVGFza1tcIkVNQkVEX0NPTlRFTlRcIl0gPSBcImVtYmVkQ29udGVudFwiO1xuICAgIFRhc2tbXCJCQVRDSF9FTUJFRF9DT05URU5UU1wiXSA9IFwiYmF0Y2hFbWJlZENvbnRlbnRzXCI7XG59KShUYXNrIHx8IChUYXNrID0ge30pKTtcbmNsYXNzIFJlcXVlc3RVcmwge1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCB0YXNrLCBhcGlLZXksIHN0cmVhbSkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgICAgICB0aGlzLnN0cmVhbSA9IHN0cmVhbTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCB1cmwgPSBgJHtCQVNFX1VSTH0vJHtBUElfVkVSU0lPTn0vbW9kZWxzLyR7dGhpcy5tb2RlbH06JHt0aGlzLnRhc2t9YDtcbiAgICAgICAgaWYgKHRoaXMuc3RyZWFtKSB7XG4gICAgICAgICAgICB1cmwgKz0gXCI/YWx0PXNzZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxufVxuLyoqXG4gKiBTaW1wbGUsIGJ1dCBtYXkgYmVjb21lIG1vcmUgY29tcGxleCBpZiB3ZSBhZGQgbW9yZSB2ZXJzaW9ucyB0byBsb2cuXG4gKi9cbmZ1bmN0aW9uIGdldENsaWVudEhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIGAke1BBQ0tBR0VfTE9HX0hFQURFUn0vJHtQQUNLQUdFX1ZFUlNJT059YDtcbn1cbmFzeW5jIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHVybCwgYm9keSkge1xuICAgIGxldCByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwieC1nb29nLWFwaS1jbGllbnRcIjogZ2V0Q2xpZW50SGVhZGVycygpLFxuICAgICAgICAgICAgICAgIFwieC1nb29nLWFwaS1rZXlcIjogdXJsLmFwaUtleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBqc29uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKGpzb24uZXJyb3IuZGV0YWlscykge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGAgJHtKU09OLnN0cmluZ2lmeShqc29uLmVycm9yLmRldGFpbHMpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fV0gJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihgRXJyb3IgZmV0Y2hpbmcgZnJvbSAke3VybC50b1N0cmluZygpfTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgIGVyci5zdGFjayA9IGUuc3RhY2s7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBBZGRzIGNvbnZlbmllbmNlIGhlbHBlciBtZXRob2RzIHRvIGEgcmVzcG9uc2Ugb2JqZWN0LCBpbmNsdWRpbmcgc3RyZWFtXG4gKiBjaHVua3MgKGFzIGxvbmcgYXMgZWFjaCBjaHVuayBpcyBhIGNvbXBsZXRlIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlIEpTT04pLlxuICovXG5mdW5jdGlvbiBhZGRIZWxwZXJzKHJlc3BvbnNlKSB7XG4gICAgcmVzcG9uc2UudGV4dCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMgJiYgcmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGlzIHJlc3BvbnNlIGhhZCAke3Jlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RofSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGNhbmRpZGF0ZXMuIFJldHVybmluZyB0ZXh0IGZyb20gdGhlIGZpcnN0IGNhbmRpZGF0ZSBvbmx5LiBgICtcbiAgICAgICAgICAgICAgICAgICAgYEFjY2VzcyByZXNwb25zZS5jYW5kaWRhdGVzIGRpcmVjdGx5IHRvIHVzZSB0aGUgb3RoZXIgY2FuZGlkYXRlcy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYWRCYWRGaW5pc2hSZWFzb24ocmVzcG9uc2UuY2FuZGlkYXRlc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgJHtmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSl9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldFRleHQocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgVGV4dCBub3QgYXZhaWxhYmxlLiAke2Zvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKX1gLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG4vKipcbiAqIFJldHVybnMgdGV4dCBvZiBmaXJzdCBjYW5kaWRhdGUuXG4gKi9cbmZ1bmN0aW9uIGdldFRleHQocmVzcG9uc2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgaWYgKChfZCA9IChfYyA9IChfYiA9IChfYSA9IHJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXS5jb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFydHMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhbmRpZGF0ZXNbMF0uY29udGVudC5wYXJ0c1swXS50ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuY29uc3QgYmFkRmluaXNoUmVhc29ucyA9IFtGaW5pc2hSZWFzb24uUkVDSVRBVElPTiwgRmluaXNoUmVhc29uLlNBRkVUWV07XG5mdW5jdGlvbiBoYWRCYWRGaW5pc2hSZWFzb24oY2FuZGlkYXRlKSB7XG4gICAgcmV0dXJuICghIWNhbmRpZGF0ZS5maW5pc2hSZWFzb24gJiZcbiAgICAgICAgYmFkRmluaXNoUmVhc29ucy5pbmNsdWRlcyhjYW5kaWRhdGUuZmluaXNoUmVhc29uKSk7XG59XG5mdW5jdGlvbiBmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICBpZiAoKCFyZXNwb25zZS5jYW5kaWRhdGVzIHx8IHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSAmJlxuICAgICAgICByZXNwb25zZS5wcm9tcHRGZWVkYmFjaykge1xuICAgICAgICBtZXNzYWdlICs9IFwiUmVzcG9uc2Ugd2FzIGJsb2NrZWRcIjtcbiAgICAgICAgaWYgKChfYSA9IHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmxvY2tSZWFzb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYCBkdWUgdG8gJHtyZXNwb25zZS5wcm9tcHRGZWVkYmFjay5ibG9ja1JlYXNvbn1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoX2IgPSByZXNwb25zZS5wcm9tcHRGZWVkYmFjaykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJsb2NrUmVhc29uTWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgOiAke3Jlc3BvbnNlLnByb21wdEZlZWRiYWNrLmJsb2NrUmVhc29uTWVzc2FnZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKChfYyA9IHJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXSkge1xuICAgICAgICBjb25zdCBmaXJzdENhbmRpZGF0ZSA9IHJlc3BvbnNlLmNhbmRpZGF0ZXNbMF07XG4gICAgICAgIGlmIChoYWRCYWRGaW5pc2hSZWFzb24oZmlyc3RDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGBDYW5kaWRhdGUgd2FzIGJsb2NrZWQgZHVlIHRvICR7Zmlyc3RDYW5kaWRhdGUuZmluaXNoUmVhc29ufWA7XG4gICAgICAgICAgICBpZiAoZmlyc3RDYW5kaWRhdGUuZmluaXNoTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDogJHtmaXJzdENhbmRpZGF0ZS5maW5pc2hNZXNzYWdlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG50eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IHJlc3BvbnNlTGluZVJFID0gL15kYXRhXFw6ICguKikoPzpcXG5cXG58XFxyXFxyfFxcclxcblxcclxcbikvO1xuLyoqXG4gKiBQcm9jZXNzIGEgcmVzcG9uc2UuYm9keSBzdHJlYW0gZnJvbSB0aGUgYmFja2VuZCBhbmQgcmV0dXJuIGFuXG4gKiBpdGVyYXRvciB0aGF0IHByb3ZpZGVzIG9uZSBjb21wbGV0ZSBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZSBhdCBhIHRpbWVcbiAqIGFuZCBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc2luZ2xlIGFnZ3JlZ2F0ZWRcbiAqIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSByZXNwb25zZSAtIFJlc3BvbnNlIGZyb20gYSBmZXRjaCBjYWxsXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NTdHJlYW0ocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnB1dFN0cmVhbSA9IHJlc3BvbnNlLmJvZHkucGlwZVRocm91Z2gobmV3IFRleHREZWNvZGVyU3RyZWFtKFwidXRmOFwiLCB7IGZhdGFsOiB0cnVlIH0pKTtcbiAgICBjb25zdCByZXNwb25zZVN0cmVhbSA9IGdldFJlc3BvbnNlU3RyZWFtKGlucHV0U3RyZWFtKTtcbiAgICBjb25zdCBbc3RyZWFtMSwgc3RyZWFtMl0gPSByZXNwb25zZVN0cmVhbS50ZWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdHJlYW06IGdlbmVyYXRlUmVzcG9uc2VTZXF1ZW5jZShzdHJlYW0xKSxcbiAgICAgICAgcmVzcG9uc2U6IGdldFJlc3BvbnNlUHJvbWlzZShzdHJlYW0yKSxcbiAgICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VQcm9taXNlKHN0cmVhbSkge1xuICAgIGNvbnN0IGFsbFJlc3BvbnNlcyA9IFtdO1xuICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFkZEhlbHBlcnMoYWdncmVnYXRlUmVzcG9uc2VzKGFsbFJlc3BvbnNlcykpO1xuICAgICAgICB9XG4gICAgICAgIGFsbFJlc3BvbnNlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVJlc3BvbnNlU2VxdWVuY2Uoc3RyZWFtKSB7XG4gICAgcmV0dXJuIF9fYXN5bmNHZW5lcmF0b3IodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogZ2VuZXJhdGVSZXNwb25zZVNlcXVlbmNlXzEoKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IHlpZWxkIF9fYXdhaXQocmVhZGVyLnJlYWQoKSk7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgeWllbGQgX19hd2FpdChhZGRIZWxwZXJzKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogUmVhZHMgYSByYXcgc3RyZWFtIGZyb20gdGhlIGZldGNoIHJlc3BvbnNlIGFuZCBqb2luIGluY29tcGxldGVcbiAqIGNodW5rcywgcmV0dXJuaW5nIGEgbmV3IHN0cmVhbSB0aGF0IHByb3ZpZGVzIGEgc2luZ2xlIGNvbXBsZXRlXG4gKiBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZSBpbiBlYWNoIGl0ZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0UmVzcG9uc2VTdHJlYW0oaW5wdXRTdHJlYW0pIHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dFN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgICAgICBzdGFydChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRleHQgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHB1bXAoKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHB1bXAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbigoeyB2YWx1ZSwgZG9uZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lcnJvcihuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2Ugc3RyZWFtXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRleHQgKz0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGN1cnJlbnRUZXh0Lm1hdGNoKHJlc3BvbnNlTGluZVJFKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlZFJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkUmVzcG9uc2UgPSBKU09OLnBhcnNlKG1hdGNoWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lcnJvcihuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoYEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZTogXCIke21hdGNoWzFdfVwiYCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShwYXJzZWRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGV4dCA9IGN1cnJlbnRUZXh0LnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBjdXJyZW50VGV4dC5tYXRjaChyZXNwb25zZUxpbmVSRSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHB1bXAoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyZWFtO1xufVxuLyoqXG4gKiBBZ2dyZWdhdGVzIGFuIGFycmF5IG9mIGBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZWBzIGludG8gYSBzaW5nbGVcbiAqIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlLlxuICovXG5mdW5jdGlvbiBhZ2dyZWdhdGVSZXNwb25zZXMocmVzcG9uc2VzKSB7XG4gICAgY29uc3QgbGFzdFJlc3BvbnNlID0gcmVzcG9uc2VzW3Jlc3BvbnNlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBhZ2dyZWdhdGVkUmVzcG9uc2UgPSB7XG4gICAgICAgIHByb21wdEZlZWRiYWNrOiBsYXN0UmVzcG9uc2UgPT09IG51bGwgfHwgbGFzdFJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXN0UmVzcG9uc2UucHJvbXB0RmVlZGJhY2ssXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHJlc3BvbnNlIG9mIHJlc3BvbnNlcykge1xuICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcmVzcG9uc2UuY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBjYW5kaWRhdGUuaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKCFhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGNhbmRpZGF0ZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gS2VlcCBvdmVyd3JpdGluZywgdGhlIGxhc3Qgb25lIHdpbGwgYmUgZmluYWxcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tpXS5jaXRhdGlvbk1ldGFkYXRhID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmNpdGF0aW9uTWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbaV0uZmluaXNoUmVhc29uID0gY2FuZGlkYXRlLmZpbmlzaFJlYXNvbjtcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tpXS5maW5pc2hNZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmlzaE1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbaV0uc2FmZXR5UmF0aW5ncyA9XG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zYWZldHlSYXRpbmdzO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENhbmRpZGF0ZXMgc2hvdWxkIGFsd2F5cyBoYXZlIGNvbnRlbnQgYW5kIHBhcnRzLCBidXQgdGhpcyBoYW5kbGVzXG4gICAgICAgICAgICAgICAgICogcG9zc2libGUgbWFsZm9ybWVkIHJlc3BvbnNlcy5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlLmNvbnRlbnQgJiYgY2FuZGlkYXRlLmNvbnRlbnQucGFydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tpXS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tpXS5jb250ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IGNhbmRpZGF0ZS5jb250ZW50LnJvbGUgfHwgXCJ1c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHM6IFt7IHRleHQ6IFwiXCIgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFydCBvZiBjYW5kaWRhdGUuY29udGVudC5wYXJ0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2ldLmNvbnRlbnQucGFydHNbMF0udGV4dCArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0LnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRSZXNwb25zZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudFN0cmVhbShhcGlLZXksIG1vZGVsLCBwYXJhbXMpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgUmVxdWVzdFVybChtb2RlbCwgVGFzay5TVFJFQU1fR0VORVJBVEVfQ09OVEVOVCwgYXBpS2V5LCBcbiAgICAvKiBzdHJlYW0gKi8gdHJ1ZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdCh1cmwsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIHJldHVybiBwcm9jZXNzU3RyZWFtKHJlc3BvbnNlKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChhcGlLZXksIG1vZGVsLCBwYXJhbXMpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgUmVxdWVzdFVybChtb2RlbCwgVGFzay5HRU5FUkFURV9DT05URU5ULCBhcGlLZXksIFxuICAgIC8qIHN0cmVhbSAqLyBmYWxzZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdCh1cmwsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBlbmhhbmNlZFJlc3BvbnNlID0gYWRkSGVscGVycyhyZXNwb25zZUpzb24pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3BvbnNlOiBlbmhhbmNlZFJlc3BvbnNlLFxuICAgIH07XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5mdW5jdGlvbiBmb3JtYXROZXdDb250ZW50KHJlcXVlc3QsIHJvbGUpIHtcbiAgICBsZXQgbmV3UGFydHMgPSBbXTtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbmV3UGFydHMgPSBbeyB0ZXh0OiByZXF1ZXN0IH1dO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0T3JTdHJpbmcgb2YgcmVxdWVzdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJ0T3JTdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdQYXJ0cy5wdXNoKHsgdGV4dDogcGFydE9yU3RyaW5nIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UGFydHMucHVzaChwYXJ0T3JTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHJvbGUsIHBhcnRzOiBuZXdQYXJ0cyB9O1xufVxuZnVuY3Rpb24gZm9ybWF0R2VuZXJhdGVDb250ZW50SW5wdXQocGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5jb250ZW50cykge1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZvcm1hdE5ld0NvbnRlbnQocGFyYW1zLCBcInVzZXJcIik7XG4gICAgICAgIHJldHVybiB7IGNvbnRlbnRzOiBbY29udGVudF0gfTtcbiAgICB9XG59XG5mdW5jdGlvbiBmb3JtYXRFbWJlZENvbnRlbnRJbnB1dChwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KHBhcmFtcykpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZvcm1hdE5ld0NvbnRlbnQocGFyYW1zLCBcInVzZXJcIik7XG4gICAgICAgIHJldHVybiB7IGNvbnRlbnQgfTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRG8gbm90IGxvZyBhIG1lc3NhZ2UgZm9yIHRoaXMgZXJyb3IuXG4gKi9cbmNvbnN0IFNJTEVOVF9FUlJPUiA9IFwiU0lMRU5UX0VSUk9SXCI7XG4vKipcbiAqIENoYXRTZXNzaW9uIGNsYXNzIHRoYXQgZW5hYmxlcyBzZW5kaW5nIGNoYXQgbWVzc2FnZXMgYW5kIHN0b3Jlc1xuICogaGlzdG9yeSBvZiBzZW50IGFuZCByZWNlaXZlZCBtZXNzYWdlcyBzbyBmYXIuXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBDaGF0U2Vzc2lvbiB7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5LCBtb2RlbCwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5fc2VuZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5fYXBpS2V5ID0gYXBpS2V5O1xuICAgICAgICBpZiAocGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmhpc3RvcnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkgPSBwYXJhbXMuaGlzdG9yeS5tYXAoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQucm9sZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJvbGUgZm9yIGhpc3RvcnkgaXRlbTogXCIgKyBKU09OLnN0cmluZ2lmeShjb250ZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXROZXdDb250ZW50KGNvbnRlbnQucGFydHMsIGNvbnRlbnQucm9sZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjaGF0IGhpc3Rvcnkgc28gZmFyLiBCbG9ja2VkIHByb21wdHMgYXJlIG5vdCBhZGRlZCB0byBoaXN0b3J5LlxuICAgICAqIEJsb2NrZWQgY2FuZGlkYXRlcyBhcmUgbm90IGFkZGVkIHRvIGhpc3RvcnksIG5vciBhcmUgdGhlIHByb21wdHMgdGhhdFxuICAgICAqIGdlbmVyYXRlZCB0aGVtLlxuICAgICAqL1xuICAgIGFzeW5jIGdldEhpc3RvcnkoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICByZXR1cm4gdGhpcy5faGlzdG9yeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBjaGF0IG1lc3NhZ2UgYW5kIHJlY2VpdmVzIGEgbm9uLXN0cmVhbWluZ1xuICAgICAqIHtAbGluayBHZW5lcmF0ZUNvbnRlbnRSZXN1bHR9XG4gICAgICovXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UocmVxdWVzdCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kUHJvbWlzZTtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGZvcm1hdE5ld0NvbnRlbnQocmVxdWVzdCwgXCJ1c2VyXCIpO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgc2FmZXR5U2V0dGluZ3M6IChfYSA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2FmZXR5U2V0dGluZ3MsXG4gICAgICAgICAgICBnZW5lcmF0aW9uQ29uZmlnOiAoX2IgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdlbmVyYXRpb25Db25maWcsXG4gICAgICAgICAgICBjb250ZW50czogWy4uLnRoaXMuX2hpc3RvcnksIG5ld0NvbnRlbnRdLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgZmluYWxSZXN1bHQ7XG4gICAgICAgIC8vIEFkZCBvbnRvIHRoZSBjaGFpbi5cbiAgICAgICAgdGhpcy5fc2VuZFByb21pc2UgPSB0aGlzLl9zZW5kUHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gZ2VuZXJhdGVDb250ZW50KHRoaXMuX2FwaUtleSwgdGhpcy5tb2RlbCwgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCkpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLmNhbmRpZGF0ZXMgJiZcbiAgICAgICAgICAgICAgICByZXN1bHQucmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29udGVudCA9IE9iamVjdC5hc3NpZ24oeyBwYXJ0czogW10sIFxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNwb25zZSBzZWVtcyB0byBjb21lIGJhY2sgd2l0aG91dCBhIHJvbGUgc2V0LlxuICAgICAgICAgICAgICAgICAgICByb2xlOiBcIm1vZGVsXCIgfSwgKF9hID0gcmVzdWx0LnJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2gocmVzcG9uc2VDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrRXJyb3JNZXNzYWdlID0gZm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzdWx0LnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZW5kTWVzc2FnZSgpIHdhcyB1bnN1Y2Nlc3NmdWwuICR7YmxvY2tFcnJvck1lc3NhZ2V9LiBJbnNwZWN0IHJlc3BvbnNlIG9iamVjdCBmb3IgZGV0YWlscy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICByZXR1cm4gZmluYWxSZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgY2hhdCBtZXNzYWdlIGFuZCByZWNlaXZlcyB0aGUgcmVzcG9uc2UgYXMgYVxuICAgICAqIHtAbGluayBHZW5lcmF0ZUNvbnRlbnRTdHJlYW1SZXN1bHR9IGNvbnRhaW5pbmcgYW4gaXRlcmFibGUgc3RyZWFtXG4gICAgICogYW5kIGEgcmVzcG9uc2UgcHJvbWlzZS5cbiAgICAgKi9cbiAgICBhc3luYyBzZW5kTWVzc2FnZVN0cmVhbShyZXF1ZXN0KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChyZXF1ZXN0LCBcInVzZXJcIik7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlQ29udGVudFJlcXVlc3QgPSB7XG4gICAgICAgICAgICBzYWZldHlTZXR0aW5nczogKF9hID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zYWZldHlTZXR0aW5ncyxcbiAgICAgICAgICAgIGdlbmVyYXRpb25Db25maWc6IChfYiA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2VuZXJhdGlvbkNvbmZpZyxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBbLi4udGhpcy5faGlzdG9yeSwgbmV3Q29udGVudF0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN0cmVhbVByb21pc2UgPSBnZW5lcmF0ZUNvbnRlbnRTdHJlYW0odGhpcy5fYXBpS2V5LCB0aGlzLm1vZGVsLCBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0KTtcbiAgICAgICAgLy8gQWRkIG9udG8gdGhlIGNoYWluLlxuICAgICAgICB0aGlzLl9zZW5kUHJvbWlzZSA9IHRoaXMuX3NlbmRQcm9taXNlXG4gICAgICAgICAgICAudGhlbigoKSA9PiBzdHJlYW1Qcm9taXNlKVxuICAgICAgICAgICAgLy8gVGhpcyBtdXN0IGJlIGhhbmRsZWQgdG8gYXZvaWQgdW5oYW5kbGVkIHJlamVjdGlvbiwgYnV0IGp1bXBcbiAgICAgICAgICAgIC8vIHRvIHRoZSBmaW5hbCBjYXRjaCBibG9jayB3aXRoIGEgbGFiZWwgdG8gbm90IGxvZyB0aGlzIGVycm9yLlxuICAgICAgICAgICAgLmNhdGNoKChfaWdub3JlZCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNJTEVOVF9FUlJPUik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoc3RyZWFtUmVzdWx0KSA9PiBzdHJlYW1SZXN1bHQucmVzcG9uc2UpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzICYmIHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkucHVzaChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZUNvbnRlbnQgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5jYW5kaWRhdGVzWzBdLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIC8vIFJlc3BvbnNlIHNlZW1zIHRvIGNvbWUgYmFjayB3aXRob3V0IGEgcm9sZSBzZXQuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZUNvbnRlbnQucm9sZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNvbnRlbnQucm9sZSA9IFwibW9kZWxcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKHJlc3BvbnNlQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0Vycm9yTWVzc2FnZSA9IGZvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZW5kTWVzc2FnZVN0cmVhbSgpIHdhcyB1bnN1Y2Nlc3NmdWwuICR7YmxvY2tFcnJvck1lc3NhZ2V9LiBJbnNwZWN0IHJlc3BvbnNlIG9iamVjdCBmb3IgZGV0YWlscy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIC8vIEVycm9ycyBpbiBzdHJlYW1Qcm9taXNlIGFyZSBhbHJlYWR5IGNhdGNoYWJsZSBieSB0aGUgdXNlciBhc1xuICAgICAgICAgICAgLy8gc3RyZWFtUHJvbWlzZSBpcyByZXR1cm5lZC5cbiAgICAgICAgICAgIC8vIEF2b2lkIGR1cGxpY2F0aW5nIHRoZSBlcnJvciBtZXNzYWdlIGluIGxvZ3MuXG4gICAgICAgICAgICBpZiAoZS5tZXNzYWdlICE9PSBTSUxFTlRfRVJST1IpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2VycyBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gX3NlbmRQcm9taXNlIHRvIGNhdGNoIGVycm9yc1xuICAgICAgICAgICAgICAgIC8vIGRvd25zdHJlYW0gZnJvbSBzdHJlYW1Qcm9taXNlLCBzbyB0aGV5IHNob3VsZCBub3QgdGhyb3cuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHJlYW1Qcm9taXNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvdW50VG9rZW5zKGFwaUtleSwgbW9kZWwsIHBhcmFtcykge1xuICAgIGNvbnN0IHVybCA9IG5ldyBSZXF1ZXN0VXJsKG1vZGVsLCBUYXNrLkNPVU5UX1RPS0VOUywgYXBpS2V5LCBmYWxzZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdCh1cmwsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKSwgeyBtb2RlbCB9KSkpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5hc3luYyBmdW5jdGlvbiBlbWJlZENvbnRlbnQoYXBpS2V5LCBtb2RlbCwgcGFyYW1zKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFJlcXVlc3RVcmwobW9kZWwsIFRhc2suRU1CRURfQ09OVEVOVCwgYXBpS2V5LCBmYWxzZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdCh1cmwsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5hc3luYyBmdW5jdGlvbiBiYXRjaEVtYmVkQ29udGVudHMoYXBpS2V5LCBtb2RlbCwgcGFyYW1zKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFJlcXVlc3RVcmwobW9kZWwsIFRhc2suQkFUQ0hfRU1CRURfQ09OVEVOVFMsIGFwaUtleSwgZmFsc2UpO1xuICAgIGNvbnN0IHJlcXVlc3RzV2l0aE1vZGVsID0gcGFyYW1zLnJlcXVlc3RzLm1hcCgocmVxdWVzdCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0KSwgeyBtb2RlbDogYG1vZGVscy8ke21vZGVsfWAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdCh1cmwsIEpTT04uc3RyaW5naWZ5KHsgcmVxdWVzdHM6IHJlcXVlc3RzV2l0aE1vZGVsIH0pKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBDbGFzcyBmb3IgZ2VuZXJhdGl2ZSBtb2RlbCBBUElzLlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBHZW5lcmF0aXZlTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKGFwaUtleSwgbW9kZWxQYXJhbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICAgICAgaWYgKG1vZGVsUGFyYW1zLm1vZGVsLnN0YXJ0c1dpdGgoXCJtb2RlbHMvXCIpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gKF9hID0gbW9kZWxQYXJhbXMubW9kZWwuc3BsaXQoXCJtb2RlbHMvXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWxQYXJhbXMubW9kZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uQ29uZmlnID0gbW9kZWxQYXJhbXMuZ2VuZXJhdGlvbkNvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5zYWZldHlTZXR0aW5ncyA9IG1vZGVsUGFyYW1zLnNhZmV0eVNldHRpbmdzIHx8IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIHNpbmdsZSBub24tc3RyZWFtaW5nIGNhbGwgdG8gdGhlIG1vZGVsXG4gICAgICogYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBzaW5nbGUge0BsaW5rIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlfS5cbiAgICAgKi9cbiAgICBhc3luYyBnZW5lcmF0ZUNvbnRlbnQocmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQYXJhbXMgPSBmb3JtYXRHZW5lcmF0ZUNvbnRlbnRJbnB1dChyZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQ29udGVudCh0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgT2JqZWN0LmFzc2lnbih7IGdlbmVyYXRpb25Db25maWc6IHRoaXMuZ2VuZXJhdGlvbkNvbmZpZywgc2FmZXR5U2V0dGluZ3M6IHRoaXMuc2FmZXR5U2V0dGluZ3MgfSwgZm9ybWF0dGVkUGFyYW1zKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgc2luZ2xlIHN0cmVhbWluZyBjYWxsIHRvIHRoZSBtb2RlbFxuICAgICAqIGFuZCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFuIGl0ZXJhYmxlIHN0cmVhbSB0aGF0IGl0ZXJhdGVzXG4gICAgICogb3ZlciBhbGwgY2h1bmtzIGluIHRoZSBzdHJlYW1pbmcgcmVzcG9uc2UgYXMgd2VsbCBhc1xuICAgICAqIGEgcHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIGZpbmFsIGFnZ3JlZ2F0ZWQgcmVzcG9uc2UuXG4gICAgICovXG4gICAgYXN5bmMgZ2VuZXJhdGVDb250ZW50U3RyZWFtKHJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUGFyYW1zID0gZm9ybWF0R2VuZXJhdGVDb250ZW50SW5wdXQocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUNvbnRlbnRTdHJlYW0odGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIE9iamVjdC5hc3NpZ24oeyBnZW5lcmF0aW9uQ29uZmlnOiB0aGlzLmdlbmVyYXRpb25Db25maWcsIHNhZmV0eVNldHRpbmdzOiB0aGlzLnNhZmV0eVNldHRpbmdzIH0sIGZvcm1hdHRlZFBhcmFtcykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbmV3IHtAbGluayBDaGF0U2Vzc2lvbn0gaW5zdGFuY2Ugd2hpY2ggY2FuIGJlIHVzZWQgZm9yXG4gICAgICogbXVsdGktdHVybiBjaGF0cy5cbiAgICAgKi9cbiAgICBzdGFydENoYXQoc3RhcnRDaGF0UGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhdFNlc3Npb24odGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIHN0YXJ0Q2hhdFBhcmFtcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyB0aGUgdG9rZW5zIGluIHRoZSBwcm92aWRlZCByZXF1ZXN0LlxuICAgICAqL1xuICAgIGFzeW5jIGNvdW50VG9rZW5zKHJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUGFyYW1zID0gZm9ybWF0R2VuZXJhdGVDb250ZW50SW5wdXQocmVxdWVzdCk7XG4gICAgICAgIHJldHVybiBjb3VudFRva2Vucyh0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgZm9ybWF0dGVkUGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1iZWRzIHRoZSBwcm92aWRlZCBjb250ZW50LlxuICAgICAqL1xuICAgIGFzeW5jIGVtYmVkQ29udGVudChyZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFBhcmFtcyA9IGZvcm1hdEVtYmVkQ29udGVudElucHV0KHJlcXVlc3QpO1xuICAgICAgICByZXR1cm4gZW1iZWRDb250ZW50KHRoaXMuYXBpS2V5LCB0aGlzLm1vZGVsLCBmb3JtYXR0ZWRQYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWJlZHMgYW4gYXJyYXkgb2Yge0BsaW5rIEVtYmVkQ29udGVudFJlcXVlc3R9cy5cbiAgICAgKi9cbiAgICBhc3luYyBiYXRjaEVtYmVkQ29udGVudHMoYmF0Y2hFbWJlZENvbnRlbnRSZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBiYXRjaEVtYmVkQ29udGVudHModGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIGJhdGNoRW1iZWRDb250ZW50UmVxdWVzdCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBUb3AtbGV2ZWwgY2xhc3MgZm9yIHRoaXMgU0RLXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSSB7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5KSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEge0BsaW5rIEdlbmVyYXRpdmVNb2RlbH0gaW5zdGFuY2UgZm9yIHRoZSBwcm92aWRlZCBtb2RlbCBuYW1lLlxuICAgICAqL1xuICAgIGdldEdlbmVyYXRpdmVNb2RlbChtb2RlbFBhcmFtcykge1xuICAgICAgICBpZiAoIW1vZGVsUGFyYW1zLm1vZGVsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoYE11c3QgcHJvdmlkZSBhIG1vZGVsIG5hbWUuIGAgK1xuICAgICAgICAgICAgICAgIGBFeGFtcGxlOiBnZW5haS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogJ215LW1vZGVsLW5hbWUnIH0pYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmF0aXZlTW9kZWwodGhpcy5hcGlLZXksIG1vZGVsUGFyYW1zKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJsb2NrUmVhc29uLCBDaGF0U2Vzc2lvbiwgRmluaXNoUmVhc29uLCBHZW5lcmF0aXZlTW9kZWwsIEdvb2dsZUdlbmVyYXRpdmVBSSwgSGFybUJsb2NrVGhyZXNob2xkLCBIYXJtQ2F0ZWdvcnksIEhhcm1Qcm9iYWJpbGl0eSwgVGFza1R5cGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgSW5wdXRzIGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgcnVuIGZyb20gXCIuL2dlbWluaVwiO1xuaW1wb3J0IHBvc3RzIGZyb20gXCIuL3Bvc3RzXCI7XG5cbmNvbnN0IHN0eWxlID0gYHJpbmctMiByaW5nLXNsYXRlLTUwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IG91dGxpbmUgb3V0bGluZS1zbGF0ZS0xMDAgcHgtMyBoLTEwIHctNi8xMiBmb2N1czpyaW5nLXdoaXRlYDtcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFNoYXJlIHlvdXIgdGhvdWdodHMsIGFuZCBJJ2xsIGNyYWZ0IGEgcXVvdGUgdG8gY2FwdHVyZSB0aGVpciBlc3NlbmNlLmA7XG5jb25zdCBidXR0b25TdHlsZSA9XG4gIFwiYmctYmx1ZS04MDAgdGV4dC13aGl0ZSBwLTIgcmluZy0yIHJpbmctYmx1ZS0zMDAgcm91bmRlZC1sZyB0ZXh0LXNsYXRlLTUwMCBob3ZlcjpiZy1ibHVlLTUwMCBob3ZlcjpyaW5nLXB1cnBsZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSAgaG92ZXI6dGV4dC1ib2xkXCI7XG5cbklucHV0cyh7XG4gIGlkQ29udGFpbmVyOiBcImhvbWVwYWdlXCIsXG4gIHRhZ05hbWU6IFwiaW5wdXRcIixcbiAgcGxhY2Vob2xkZXIsXG4gIHN0eWxlLFxufSk7XG5cbklucHV0cyh7XG4gIGlkQ29udGFpbmVyOiBcImhvbWVwYWdlXCIsXG4gIHRhZ05hbWU6IFwiYnV0dG9uXCIsXG4gIG5hbWU6IFwiU3VibWl0XCIsXG4gIHN0eWxlOiBidXR0b25TdHlsZSxcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBpbnB0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcblxuICBjb25zdCByZXN1bHQgPSBydW4oaW5wdC52YWx1ZSk7XG4gIHJlc3VsdFxuICAgIC50aGVuKCh2YWx1ZSk6IHZvaWQgPT4ge1xuICAgICAgcG9zdHModmFsdWUsIFwiaG9tZXBhZ2VcIik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGBUaGlzIGVycm9yIGhhcHBlbmQ6JHtlfWApKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==