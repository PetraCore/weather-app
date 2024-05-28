(()=>{"use strict";var n={719:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),i=t.n(r),A=t(314),o=t.n(A)()(i());o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"",{version:3,sources:["webpack://./node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n'],sourceRoot:""}]);const a=o},208:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),i=t.n(r),A=t(314),o=t.n(A)()(i());o.push([n.id,'html,\nbody {\n  height: 100vh;\n}\n\nbody {\n  background: rgb(240, 242, 239);\n  background: linear-gradient(\n    0deg,\n    rgba(125, 167, 203, 1) 0%,\n    rgba(166, 204, 238, 1) 35%,\n    rgba(240, 242, 239, 1) 85%\n  );\n  background-attachment: fixed;\n\n  *::selection {\n    background-color: rgb(3, 112, 207);\n    color: rgb(255, 255, 255);\n  }\n\n  font-family: "Frank Ruhl Libre", serif;\n  font-optical-sizing: auto;\n}\n\n.wrapper#app {\n  box-sizing: border-box;\n  height: 100%;\n\n  display: grid;\n  grid-template: min-content 1fr min-content / 1fr;\n}\n\n.header {\n  padding: 30px;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);\n\n  display: grid;\n  grid-template: 1fr / min-content min-content 1fr;\n  gap: 30px;\n  align-items: center;\n\n  & h1 {\n    font-size: 2.2rem;\n    margin: 0;\n  }\n}\n\n.options {\n  display: flex;\n  flex-flow: row-reverse wrap;\n  gap: 15px;\n}\n\n.search-wrapper {\n  width: 400px;\n}\n\n.search-box {\n  box-sizing: border-box;\n  background-color: rgb(255, 255, 255);\n  padding: 8px 15px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5ch;\n\n  &:focus-within {\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);\n  }\n\n  & input,\n  & button {\n    background-color: inherit;\n    box-shadow: none;\n    padding: 0;\n    border-radius: 0;\n    border: none;\n\n    font-size: 1.3em;\n    &:focus-within {\n      box-shadow: none;\n    }\n  }\n\n  & input {\n    &:focus {\n      outline: none;\n    }\n  }\n\n  & button {\n    width: min-content;\n  }\n\n  & button {\n    &:focus {\n      outline-color: rgb(21, 103, 255);\n    }\n    &:hover {\n      cursor: pointer;\n      color: rgb(21, 103, 255);\n    }\n  }\n}\n\n.switch {\n  justify-self: end;\n  width: min-content;\n\n  background-color: rgb(197, 220, 241);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n\n  display: flex;\n  flex-flow: row nowrap;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);\n  }\n\n  & .state {\n    min-width: 30px;\n    height: 30px;\n    padding: 0 5px;\n\n    font-weight: bold;\n    color: rgb(83, 98, 126);\n    user-select: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &.active {\n      background-color: rgb(3, 112, 207);\n      color: rgb(215, 228, 255);\n    }\n  }\n}\n\n.content {\n  padding: 30px;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  justify-items: center;\n}\n\n#weatherContainer {\n  display: grid;\n  & .error-message {\n    font-size: 2rem;\n    font-weight: bold;\n  }\n}\n\n.loading-indicator {\n  align-self: flex-start;\n}\n\n.weather-card {\n  align-self: flex-start;\n  background-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  margin: 80px 0;\n  padding: 30px;\n  border-radius: 20px;\n\n  display: grid;\n  grid-template: 1fr / 1fr;\n  gap: 30px;\n\n  & h1,\n  & h2 {\n    margin: 0;\n  }\n}\n\n.weather-location {\n  & .country {\n    font-weight: normal;\n  }\n}\n\n.weather-highlight {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n\n  & .weather-temperature {\n    font-size: 5rem;\n    justify-content: center;\n\n    & .unit,\n    & .value {\n      font-weight: bold;\n    }\n  }\n}\n\n.weather-temperature {\n  display: grid;\n  grid-template: min-content / repeat(2, min-content);\n\n  & .value {\n    font-size: 1em;\n  }\n  & .unit {\n    font-size: 0.6em;\n  }\n}\n\n.weather-info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  & h2 {\n    font-weight: normal;\n  }\n}\n\n.weather-details {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  gap: 25px;\n}\n\n.detail-card {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.detail-title,\n.detail-value {\n  font-size: 1.3rem;\n}\n\n.detail-value {\n  font-weight: bold;\n  display: flex;\n  &:not(.weather-temperature) {\n    gap: 0.15ch;\n  }\n}\n\n.footer {\n  color: rgb(19, 35, 48);\n  padding: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5ch;\n\n  & a {\n    color: inherit;\n    text-decoration: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5ch;\n\n    &:hover,\n    &:focus {\n      color: rgb(24, 97, 157);\n    }\n  }\n}\n\n@media (max-width: 860px) {\n  .header {\n    grid-template: min-content min-content / min-content 1fr;\n  }\n  .search-wrapper {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    justify-self: center;\n    width: 100%;\n  }\n  .weather-card {\n    margin: 40px 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .logo {\n    justify-self: center;\n  }\n  .header {\n    grid-template: repeat(3, min-content) / 1fr;\n    gap: 20px;\n  }\n  .options {\n    justify-content: center;\n  }\n  .weather-card {\n    margin: 20px 0;\n  }\n  .weather-details {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 420px) {\n  .weather-highlight {\n    flex-direction: column;\n    align-items: center;\n    gap: 0;\n\n    & .weather-temperature {\n      font-size: 4rem;\n    }\n\n    & .weather-info {\n      flex-direction: row;\n      align-items: center;\n    }\n  }\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:['html,\nbody {\n  height: 100vh;\n}\n\nbody {\n  background: rgb(240, 242, 239);\n  background: linear-gradient(\n    0deg,\n    rgba(125, 167, 203, 1) 0%,\n    rgba(166, 204, 238, 1) 35%,\n    rgba(240, 242, 239, 1) 85%\n  );\n  background-attachment: fixed;\n\n  *::selection {\n    background-color: rgb(3, 112, 207);\n    color: rgb(255, 255, 255);\n  }\n\n  font-family: "Frank Ruhl Libre", serif;\n  font-optical-sizing: auto;\n}\n\n.wrapper#app {\n  box-sizing: border-box;\n  height: 100%;\n\n  display: grid;\n  grid-template: min-content 1fr min-content / 1fr;\n}\n\n.header {\n  padding: 30px;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);\n\n  display: grid;\n  grid-template: 1fr / min-content min-content 1fr;\n  gap: 30px;\n  align-items: center;\n\n  & h1 {\n    font-size: 2.2rem;\n    margin: 0;\n  }\n}\n\n.options {\n  display: flex;\n  flex-flow: row-reverse wrap;\n  gap: 15px;\n}\n\n.search-wrapper {\n  width: 400px;\n}\n\n.search-box {\n  box-sizing: border-box;\n  background-color: rgb(255, 255, 255);\n  padding: 8px 15px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5ch;\n\n  &:focus-within {\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);\n  }\n\n  & input,\n  & button {\n    background-color: inherit;\n    box-shadow: none;\n    padding: 0;\n    border-radius: 0;\n    border: none;\n\n    font-size: 1.3em;\n    &:focus-within {\n      box-shadow: none;\n    }\n  }\n\n  & input {\n    &:focus {\n      outline: none;\n    }\n  }\n\n  & button {\n    width: min-content;\n  }\n\n  & button {\n    &:focus {\n      outline-color: rgb(21, 103, 255);\n    }\n    &:hover {\n      cursor: pointer;\n      color: rgb(21, 103, 255);\n    }\n  }\n}\n\n.switch {\n  justify-self: end;\n  width: min-content;\n\n  background-color: rgb(197, 220, 241);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);\n\n  display: flex;\n  flex-flow: row nowrap;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);\n  }\n\n  & .state {\n    min-width: 30px;\n    height: 30px;\n    padding: 0 5px;\n\n    font-weight: bold;\n    color: rgb(83, 98, 126);\n    user-select: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &.active {\n      background-color: rgb(3, 112, 207);\n      color: rgb(215, 228, 255);\n    }\n  }\n}\n\n.content {\n  padding: 30px;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  justify-items: center;\n}\n\n#weatherContainer {\n  display: grid;\n  & .error-message {\n    font-size: 2rem;\n    font-weight: bold;\n  }\n}\n\n.loading-indicator {\n  align-self: flex-start;\n}\n\n.weather-card {\n  align-self: flex-start;\n  background-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  margin: 80px 0;\n  padding: 30px;\n  border-radius: 20px;\n\n  display: grid;\n  grid-template: 1fr / 1fr;\n  gap: 30px;\n\n  & h1,\n  & h2 {\n    margin: 0;\n  }\n}\n\n.weather-location {\n  & .country {\n    font-weight: normal;\n  }\n}\n\n.weather-highlight {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n\n  & .weather-temperature {\n    font-size: 5rem;\n    justify-content: center;\n\n    & .unit,\n    & .value {\n      font-weight: bold;\n    }\n  }\n}\n\n.weather-temperature {\n  display: grid;\n  grid-template: min-content / repeat(2, min-content);\n\n  & .value {\n    font-size: 1em;\n  }\n  & .unit {\n    font-size: 0.6em;\n  }\n}\n\n.weather-info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  & h2 {\n    font-weight: normal;\n  }\n}\n\n.weather-details {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  gap: 25px;\n}\n\n.detail-card {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.detail-title,\n.detail-value {\n  font-size: 1.3rem;\n}\n\n.detail-value {\n  font-weight: bold;\n  display: flex;\n  &:not(.weather-temperature) {\n    gap: 0.15ch;\n  }\n}\n\n.footer {\n  color: rgb(19, 35, 48);\n  padding: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5ch;\n\n  & a {\n    color: inherit;\n    text-decoration: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5ch;\n\n    &:hover,\n    &:focus {\n      color: rgb(24, 97, 157);\n    }\n  }\n}\n\n@media (max-width: 860px) {\n  .header {\n    grid-template: min-content min-content / min-content 1fr;\n  }\n  .search-wrapper {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    justify-self: center;\n    width: 100%;\n  }\n  .weather-card {\n    margin: 40px 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .logo {\n    justify-self: center;\n  }\n  .header {\n    grid-template: repeat(3, min-content) / 1fr;\n    gap: 20px;\n  }\n  .options {\n    justify-content: center;\n  }\n  .weather-card {\n    margin: 20px 0;\n  }\n  .weather-details {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 420px) {\n  .weather-highlight {\n    flex-direction: column;\n    align-items: center;\n    gap: 0;\n\n    & .weather-temperature {\n      font-size: 4rem;\n    }\n\n    & .weather-info {\n      flex-direction: row;\n      align-items: center;\n    }\n  }\n}\n'],sourceRoot:""}]);const a=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,A){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(i," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var A={},o=[],a=0;a<n.length;a++){var s=n[a],c=r.base?s[0]+r.base:s[0],l=A[c]||0,d="".concat(c," ").concat(l);A[c]=l+1;var E=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==E)e[E].references++,e[E].updater(p);else{var h=i(p,r);r.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var A=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<A.length;o++){var a=t(A[o]);e[a].references--}for(var s=r(n,i),c=0;c<A.length;c++){var l=t(A[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}A=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var A=e[r]={id:r,exports:{}};return n[r](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),i=t.n(r),A=t(659),o=t.n(A),a=t(56),s=t.n(a),c=t(540),l=t.n(c),d=t(113),E=t.n(d),p=t(719),h={};h.styleTagTransform=E(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),e()(p.A,h),p.A&&p.A.locals&&p.A.locals;var m=t(208),f={};f.styleTagTransform=E(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;class u{async fetchData(n){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=b0e2ea7c094f42388ff111529241605&q=${n}`,{mode:"cors"}),t=await e.json();if(t.error)throw new Error(t.error.message);return this.processData(t)}processData(n){const e=n.location,t=n.current;return{name:e.name,country:e.country,text:t.condition.text,icon:t.condition.icon,temp_c:t.temp_c,temp_f:t.temp_f,details:{feelslike:{feelslike_c:t.feelslike_c,feelslike_f:t.feelslike_f},humidity:t.humidity,wind:{wind_kph:t.wind_kph,wind_mph:t.wind_mph,wind_dir:t.wind_dir}}}}}const C=t.p+"9ae21b3f6316b36041d5.svg";class g{#n(n){return n.charAt(0).toUpperCase()+n.slice(1)}createWeatherCard(n,e){const t=document.createElement("div");return t.classList.add("weather-card"),t.innerHTML=`\n      <div class="weather-location">\n        <h1 class="city">${n.name}</h2>\n        <h2 class="country">${n.country}</h2>\n      </div>\n      <div class="weather-highlight">\n        <div class="weather-temperature">\n          ${e.pref_celsius?`<span class="value">${n.temp_c}</span><span class="unit">&deg;C</span>`:`<span class="value">${n.temp_f}</span><span class="unit">&deg;F</span>`} \n        </div>\n        <div class="weather-info">\n          <img src=${n.icon}>\n          <h2>${n.text}</h2>\n        </div>\n      </div>\n      </div>\n    `,t.appendChild(this.createWeatherDetails(n,e)),t}createWeatherDetails(n,e){const t=document.createElement("div");return t.classList.add("weather-details"),Object.entries(n.details).forEach((([n,r])=>{const i=document.createElement("div"),A=document.createElement("div"),o=document.createElement("div"),a=document.createElement("span"),s=document.createElement("span");switch(i.classList.add("detail-card"),A.classList.add("detail-title"),o.classList.add("detail-value"),a.classList.add("value"),s.classList.add("unit"),A.innerText="feelslike"===n?"Feels like":this.#n(n),i.appendChild(A),n){case"feelslike":a.textContent=e.pref_celsius?r.feelslike_c:r.feelslike_f;break;case"wind":a.textContent=e.pref_meters?r.wind_kph:r.wind_mph;break;default:a.textContent=r}switch(o.appendChild(a),n){case"feelslike":o.classList.add("weather-temperature"),s.innerHTML="&deg;"+(e.pref_celsius?"C":"F"),o.appendChild(s);break;case"wind":o.classList.add("weather-wind"),s.innerText=e.pref_meters?"km/h ":"mph ",s.innerText+=r.wind_dir,o.appendChild(s);break;case"humidity":s.innerText="%",o.appendChild(s)}i.appendChild(o),t.appendChild(i)})),t}createErrorMessage(n){const e=document.createElement("div");return e.classList.add("error-message"),e.innerText=n,e}createLoadingIndicator(){const n=document.createElement("div");n.classList.add("loading-indicator");const e=document.createElement("img");return e.src=C,n.appendChild(e),n}createSwitchOption(n,e,t,r=!1){const i=document.createElement("div");i.classList.add("switch"),i.id=n,i.tabIndex=0;const A=document.createElement("div");A.classList.add("state"),A.innerHTML=e;const o=document.createElement("div");return o.classList.add("state"),o.innerHTML=t,r?o.classList.add("active"):A.classList.add("active"),i.appendChild(A),i.appendChild(o),i}toggleSwitchOption(n){if(!n.classList.contains("switch"))return void console.error("Provided element does not support toggling! Ignoring request.");const e=n.querySelector(":not(.active)"),t=n.querySelector(".active");return e.classList.add("active"),t.classList.remove("active"),n}}const b=new class{#e=new u;#t=new g;#r=document.querySelector("#weatherContainer");#i={pref_celsius:!0,pref_meters:!0};#A="Brussels";#o=null;clearWeather(){this.#r.innerHTML=""}#a(){const n=this.#t.createLoadingIndicator();this.clearWeather(),this.#r.appendChild(n)}#s(n){const e=this.#t.createErrorMessage(n);this.clearWeather(),this.#r.appendChild(e)}async displayWeather(n){if(""!==n)try{this.#a(),this.#o=await this.#e.fetchData(n);const e=this.#t.createWeatherCard(this.#o,this.#i);this.clearWeather(),this.#r.appendChild(e),localStorage.setItem("lastQuery",n)}catch(n){this.#s(n)}}reloadWeather(){const n=this.#t.createWeatherCard(this.#o,this.#i);this.clearWeather(),this.#r.appendChild(n)}displayOptions(){const n=document.querySelector(".options"),e=this.#t.createSwitchOption("temperatureSwitch","&deg;C","&deg;F",!this.#i.pref_celsius),t=this.#t.createSwitchOption("lengthSwitch","m","mi",!this.#i.pref_meters);e.addEventListener("click",(()=>{this.#t.toggleSwitchOption(e),this.#i.pref_celsius=!this.#i.pref_celsius,this.reloadWeather(),localStorage.setItem("locale",JSON.stringify(this.#i))})),t.addEventListener("click",(()=>{this.#t.toggleSwitchOption(t),this.#i.pref_meters=!this.#i.pref_meters,this.reloadWeather(),localStorage.setItem("locale",JSON.stringify(this.#i))})),n.appendChild(e),n.appendChild(t)}activateSearchBox(){const n=document.querySelector("#search"),e=document.querySelector("#searchButton");n.addEventListener("keydown",(({key:e})=>{"Enter"===e&&this.displayWeather(n.value)})),e.addEventListener("click",(()=>{this.displayWeather(n.value)}))}loadStorage(){const n=JSON.parse(localStorage.getItem("locale")),e=localStorage.getItem("lastQuery");n&&(this.#i=n),e&&(this.#A=e)}async initApp(){this.loadStorage(),this.activateSearchBox(),this.displayOptions(),this.displayWeather(this.#A)}};b.initApp()})()})();
//# sourceMappingURL=main.js.map