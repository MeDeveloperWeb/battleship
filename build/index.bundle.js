/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/spacec/Spacec5.ttf */ "./src/media/spacec/Spacec5.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../media/battleship.jpeg */ "./src/media/battleship.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: fontShip;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

div#content {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	font-family: fontShip, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
header {
	font-size: 5rem;
	text-align: center;
	padding: 2rem 0;

	& > .logo {
		background: rgb(49, 41, 28);
		background: linear-gradient(
			0deg,
			rgba(49, 41, 28, 1) 0%,
			rgba(238, 247, 245, 1) 50%,
			rgba(58, 72, 76, 1) 100%
		);
		-webkit-text-fill-color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
	}
}

@media (max-width: 1000px) {
	header {
		font-size: 4rem;
	}
}

@media (max-width: 600px) {
	header {
		font-size: 3rem;
	}
}

.main-cont {
	width: 100%;
	text-align: center;
	flex: 1;
	margin-top: 25vh;
	position: relative;

	transition: transform 10s ease-in-out;

	& > div {
		transform: translate(0);
		position: absolute;
		transition: transform 0.8s ease-out 5ms;
		width: 100%;
	}
	/* 
	& > div.hide {
		transform: translate(-100%);
	}

	& > div.show {
		transform: translate(0%);
	} */
}

.format-cont {
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	flex-wrap: wrap;
	height: 100%;
	gap: 5rem;
}

.format-cont > button {
	font-size: 2.5rem;
	background-color: rgba(0, 0, 0, 0.2);
	color: #e0e0e0;
	font-family: inherit;
	outline: none;
	border: 0px;
	padding: 1rem 1.5rem;
	border-radius: 10px;
	cursor: pointer;
	max-width: 90vw;

	&:hover {
		transform: scale(1.1);
	}
}

@media (max-width: 1000px) {
	.format-cont button {
		font-size: 2rem;
		padding: 1rem 0.8rem;
	}
}

@media (max-width: 600px) {
	.format-cont button {
		font-size: 2rem;
		padding: 1rem 0.8rem;
	}
}

.player-cont {
	& > h3 {
		padding-bottom: 2rem;
		font-weight: 100;
		font-size: 2rem;
	}

	& > form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		& > input[type='image'] {
			height: 3rem;
			background-color: rgba(0, 0, 0, 0.4);
			padding: 0.5rem 0.8rem;
			border-radius: 100px;
		}
	}
}

div:has(> :is(input[type='text']), label) {
	height: 4rem;
	position: relative;

	& > input[type='text'] {
		height: 90%;
		background-color: rgba(0, 0, 0, 0.2);
		color: #e0e0e0;
		font-size: 1.2rem;
		font-family: inherit;
		width: min(32ch, 98vw);
		outline: none;
		border: 0;
		border-radius: 10px;
		padding: 0.5rem 0.8rem;
		text-align: center;
	}

	& > label {
		position: absolute;
		max-width: max-content;
		max-height: max-content;

		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;

		&:has(+ input:focus),
		&:has(+ input:valid) {
			bottom: auto;
			right: auto;
			left: 1rem;
			top: -0.5rem;
			z-index: 1;
		}
	}
}
`, "",{"version":3,"sources":["webpack://./src/ui/styles.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,4CAAqC;AACtC;;AAEA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,yDAA+C;CAC/C,4BAA4B;CAC5B,sBAAsB;CACtB,wBAAwB;CACxB,iBAAiB;;CAEjB,aAAa;CACb,sBAAsB;CACtB;oDACmD;AACpD;AACA;CACC,eAAe;CACf,kBAAkB;CAClB,eAAe;;CAEf;EACC,2BAA2B;EAC3B;;;;;GAKC;EACD,oCAAoC;EACpC,qBAAqB;EACrB,6BAA6B;CAC9B;AACD;;AAEA;CACC;EACC,eAAe;CAChB;AACD;;AAEA;CACC;EACC,eAAe;CAChB;AACD;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,OAAO;CACP,gBAAgB;CAChB,kBAAkB;;CAElB,qCAAqC;;CAErC;EACC,uBAAuB;EACvB,kBAAkB;EAClB,uCAAuC;EACvC,WAAW;CACZ;CACA;;;;;;;IAOG;AACJ;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,uBAAuB;CACvB,eAAe;CACf,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,oCAAoC;CACpC,cAAc;CACd,oBAAoB;CACpB,aAAa;CACb,WAAW;CACX,oBAAoB;CACpB,mBAAmB;CACnB,eAAe;CACf,eAAe;;CAEf;EACC,qBAAqB;CACtB;AACD;;AAEA;CACC;EACC,eAAe;EACf,oBAAoB;CACrB;AACD;;AAEA;CACC;EACC,eAAe;EACf,oBAAoB;CACrB;AACD;;AAEA;CACC;EACC,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;CAChB;;CAEA;EACC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;;EAET;GACC,YAAY;GACZ,oCAAoC;GACpC,sBAAsB;GACtB,oBAAoB;EACrB;CACD;AACD;;AAEA;CACC,YAAY;CACZ,kBAAkB;;CAElB;EACC,WAAW;EACX,oCAAoC;EACpC,cAAc;EACd,iBAAiB;EACjB,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;CACnB;;CAEA;EACC,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;;EAEvB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,YAAY;;EAEZ;;GAEC,YAAY;GACZ,WAAW;GACX,UAAU;GACV,YAAY;GACZ,UAAU;EACX;CACD;AACD","sourcesContent":["@font-face {\n\tfont-family: fontShip;\n\tsrc: url(../media/spacec/Spacec5.ttf);\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\ndiv#content {\n\tbackground-image: url(../media/battleship.jpeg);\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: 50%;\n\tmin-height: 100vh;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: fontShip, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n\t\t'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\nheader {\n\tfont-size: 5rem;\n\ttext-align: center;\n\tpadding: 2rem 0;\n\n\t& > .logo {\n\t\tbackground: rgb(49, 41, 28);\n\t\tbackground: linear-gradient(\n\t\t\t0deg,\n\t\t\trgba(49, 41, 28, 1) 0%,\n\t\t\trgba(238, 247, 245, 1) 50%,\n\t\t\trgba(58, 72, 76, 1) 100%\n\t\t);\n\t\t-webkit-text-fill-color: transparent;\n\t\tbackground-clip: text;\n\t\t-webkit-background-clip: text;\n\t}\n}\n\n@media (max-width: 1000px) {\n\theader {\n\t\tfont-size: 4rem;\n\t}\n}\n\n@media (max-width: 600px) {\n\theader {\n\t\tfont-size: 3rem;\n\t}\n}\n\n.main-cont {\n\twidth: 100%;\n\ttext-align: center;\n\tflex: 1;\n\tmargin-top: 25vh;\n\tposition: relative;\n\n\ttransition: transform 10s ease-in-out;\n\n\t& > div {\n\t\ttransform: translate(0);\n\t\tposition: absolute;\n\t\ttransition: transform 0.8s ease-out 5ms;\n\t\twidth: 100%;\n\t}\n\t/* \n\t& > div.hide {\n\t\ttransform: translate(-100%);\n\t}\n\n\t& > div.show {\n\t\ttransform: translate(0%);\n\t} */\n}\n\n.format-cont {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: flex-start;\n\tflex-wrap: wrap;\n\theight: 100%;\n\tgap: 5rem;\n}\n\n.format-cont > button {\n\tfont-size: 2.5rem;\n\tbackground-color: rgba(0, 0, 0, 0.2);\n\tcolor: #e0e0e0;\n\tfont-family: inherit;\n\toutline: none;\n\tborder: 0px;\n\tpadding: 1rem 1.5rem;\n\tborder-radius: 10px;\n\tcursor: pointer;\n\tmax-width: 90vw;\n\n\t&:hover {\n\t\ttransform: scale(1.1);\n\t}\n}\n\n@media (max-width: 1000px) {\n\t.format-cont button {\n\t\tfont-size: 2rem;\n\t\tpadding: 1rem 0.8rem;\n\t}\n}\n\n@media (max-width: 600px) {\n\t.format-cont button {\n\t\tfont-size: 2rem;\n\t\tpadding: 1rem 0.8rem;\n\t}\n}\n\n.player-cont {\n\t& > h3 {\n\t\tpadding-bottom: 2rem;\n\t\tfont-weight: 100;\n\t\tfont-size: 2rem;\n\t}\n\n\t& > form {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tgap: 2rem;\n\n\t\t& > input[type='image'] {\n\t\t\theight: 3rem;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.4);\n\t\t\tpadding: 0.5rem 0.8rem;\n\t\t\tborder-radius: 100px;\n\t\t}\n\t}\n}\n\ndiv:has(> :is(input[type='text']), label) {\n\theight: 4rem;\n\tposition: relative;\n\n\t& > input[type='text'] {\n\t\theight: 90%;\n\t\tbackground-color: rgba(0, 0, 0, 0.2);\n\t\tcolor: #e0e0e0;\n\t\tfont-size: 1.2rem;\n\t\tfont-family: inherit;\n\t\twidth: min(32ch, 98vw);\n\t\toutline: none;\n\t\tborder: 0;\n\t\tborder-radius: 10px;\n\t\tpadding: 0.5rem 0.8rem;\n\t\ttext-align: center;\n\t}\n\n\t& > label {\n\t\tposition: absolute;\n\t\tmax-width: max-content;\n\t\tmax-height: max-content;\n\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tmargin: auto;\n\n\t\t&:has(+ input:focus),\n\t\t&:has(+ input:valid) {\n\t\t\tbottom: auto;\n\t\t\tright: auto;\n\t\t\tleft: 1rem;\n\t\t\ttop: -0.5rem;\n\t\t\tz-index: 1;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/ui/styles.css":
/*!***************************!*\
  !*** ./src/ui/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/game/gameBoard.js":
/*!*******************************!*\
  !*** ./src/game/gameBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/game/ship.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/game/utils.js");



class GameBoard {
	#size;

	#board;

	#shipsOnBoard;

	constructor(boardSize) {
		if (typeof boardSize !== 'number' || boardSize < 8)
			throw Error('Invalid Size! Size must be >= 8');

		this.#size = boardSize;

		this.#board = Array.from(Array(boardSize), () =>
			Array.from(Array(boardSize), () => ({
				ship: null,
				hasBeenHit: false
			}))
		);
		// for better efficiency while trying to know if all ships have sunk
		this.#shipsOnBoard = [];
	}

	get size() {
		return this.#size;
	}

	get board() {
		return this.#board;
	}

	placeShip(coordinate, direction, ship) {
		if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isCoordinateValid)(coordinate, this.#size))
			throw Error('Invalid Coordinates!');

		if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isDirectionValid)(direction)) throw Error('Invalid direction!');

		if (!(ship instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"])) throw Error('Invalid Ship!');

		const coordinates = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getAdjacentCoordinates)(
			coordinate,
			direction,
			ship.length
		);

		coordinates.forEach(([x, y]) => {
			// If coordinate is out of bound throw error
			if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isCoordinateValid)([x, y], this.#size))
				throw Error(
					"Invalid Coordinates! Can't expand to the given length."
				);

			// If ship already present in coordinate
			if (this.#board[x][y].ship)
				throw Error('Ship already present in one of the coordinates!');
		});

		coordinates.forEach(([x, y]) => {
			this.#board[x][y] = { ship, hasBeenHit: false };
		});
		this.#shipsOnBoard.push(ship);

		return true;
	}

	receiveAttack(coordinate) {
		if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isCoordinateValid)(coordinate, this.#size))
			throw Error('Invalid Coordinate!');

		if (!this.#board[coordinate[0]][coordinate[1]].ship)
			return {
				hit: false
			};

		const { ship } = this.#board[coordinate[0]][coordinate[1]];
		ship.hit();

		return {
			hit: true,
			ship
		};
	}

	haveAllShipsSunk() {
		return this.#shipsOnBoard.every((ship) => ship.isSunk());
	}
}


/***/ }),

/***/ "./src/game/index.js":
/*!***************************!*\
  !*** ./src/game/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlayers: () => (/* binding */ addPlayers),
/* harmony export */   getGameFormat: () => (/* binding */ getGameFormat),
/* harmony export */   getPlayers: () => (/* binding */ getPlayers),
/* harmony export */   resetPlayers: () => (/* binding */ resetPlayers),
/* harmony export */   setGameFormat: () => (/* binding */ setGameFormat)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/game/player.js");


const players = [];

let gameFormat = '';

function addPlayers(player) {
	if (!(player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["default"])) throw Error('Invalid Player!');
	if (players.length >= 2) throw Error('Maximum number of players reached!');

	players.push(player);
	return players.length;
}

function getPlayers() {
	return players;
}

function resetPlayers() {
	players.length = 0;
}

function setGameFormat(format) {
	if (format !== 'pvp' && format !== 'pvc')
		throw Error('Invalid Game Format!');
	gameFormat = format;
}

function getGameFormat() {
	return gameFormat;
}


/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/game/gameBoard.js");


class Player {
	#name;

	#opponentBoard;

	constructor(name) {
		if (!name || typeof name !== 'string') throw Error('Invalid Name!');

		this.#name = name;
	}

	get name() {
		return this.#name;
	}

	setOpponentBoard(board) {
		if (!(board instanceof _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])) throw Error('Invalid game board!');

		this.#opponentBoard = board;
	}

	get opponentBoard() {
		return this.#opponentBoard;
	}

	attack(coordinate) {
		if (!this.#opponentBoard) throw Error('No opponent board given!');

		this.#opponentBoard.receiveAttack(coordinate);
	}
}


/***/ }),

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
	#length = 0;

	#hits = 0;

	#name = '';

	constructor(len, title = '') {
		if (typeof len !== 'number' || len <= 0) throw Error('Invalid Length!');

		if (typeof title !== 'string') throw Error('Invalid Name!');

		this.#length = len;

		this.#name =
			title || `Ship${this.#length}${Math.floor(Math.random() * 1000)}`;
	}

	get length() {
		return this.#length;
	}

	get name() {
		return this.#name;
	}

	get hits() {
		return this.#hits;
	}

	hit() {
		++this.#hits;
	}

	isSunk() {
		return this.#hits >= this.#length;
	}
}


/***/ }),

/***/ "./src/game/utils.js":
/*!***************************!*\
  !*** ./src/game/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdjacentCoordinates: () => (/* binding */ getAdjacentCoordinates),
/* harmony export */   isCoordinateValid: () => (/* binding */ isCoordinateValid),
/* harmony export */   isDirectionValid: () => (/* binding */ isDirectionValid)
/* harmony export */ });
function isCoordinateValid(coordinate, boardSize) {
	return (
		Array.isArray(coordinate) &&
		coordinate.length === 2 &&
		// X coordinate is a number within bound
		typeof coordinate[0] === 'number' &&
		coordinate[0] >= 0 &&
		coordinate[0] < boardSize &&
		// Y coordinate is a number within bound
		typeof coordinate[1] === 'number' &&
		coordinate[1] >= 0 &&
		coordinate[1] < boardSize
	);
}

function isDirectionValid(direction) {
	return ['left', 'right', 'up', 'down'].includes(direction);
}

function getAdjacentCoordinates(coordinate, direction, count) {
	/* eslint-disable no-nested-ternary */
	const factor =
		direction === 'left'
			? [-1, 0]
			: direction === 'right'
				? [1, 0]
				: direction === 'up'
					? [0, 1]
					: [0, -1];
	/* eslint-disable no-nested-ternary */

	const coordinates = [coordinate];

	for (let i = 0; i <= count; ++i) {
		coordinates.push([
			coordinates[i][0] + factor[0],
			coordinates[i][1] + factor[1]
		]);
	}

	return coordinates;
}


/***/ }),

/***/ "./src/ui/choose-format.js":
/*!*********************************!*\
  !*** ./src/ui/choose-format.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChooseGameFormat)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render */ "./src/ui/utils/render.js");


function Button(text, onClick) {
	const btn = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
		tag: 'button',
		text
	});

	btn.addEventListener('click', onClick);

	return btn;
}

function ChooseGameFormat(afterFn = (value) => value) {
	const pvp = Button('Player V/s Player', () => afterFn('pvp'));
	const pvc = Button('Player V/s AI', () => afterFn('pvc'));

	return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
		tag: 'div',
		classList: ['format-cont'],
		children: [pvp, pvc]
	});
}


/***/ }),

/***/ "./src/ui/game-modes.js":
/*!******************************!*\
  !*** ./src/ui/game-modes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game/index.js");
/* harmony import */ var _game_gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/gameBoard */ "./src/game/gameBoard.js");
/* harmony import */ var _game_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/player */ "./src/game/player.js");
/* harmony import */ var _get_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-player */ "./src/ui/get-player.js");
/* harmony import */ var _set_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-board */ "./src/ui/set-board.js");






function pvp(mainCont) {
	mainCont.replaceChildren(...getPlayer());
}

function pvc() {
	console.log('pvc');
}

function getPlayer() {
	return (0,_get_player__WEBPACK_IMPORTED_MODULE_3__["default"])((name) => {
		const player = new _game_player__WEBPACK_IMPORTED_MODULE_2__["default"](name);
		(0,_game__WEBPACK_IMPORTED_MODULE_0__.addPlayers)(player);
		const board = new _game_gameBoard__WEBPACK_IMPORTED_MODULE_1__["default"](8);
	});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ pvp, pvc });


/***/ }),

/***/ "./src/ui/game.js":
/*!************************!*\
  !*** ./src/ui/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game/index.js");
/* harmony import */ var _choose_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-format */ "./src/ui/choose-format.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/render */ "./src/ui/utils/render.js");
/* harmony import */ var _game_modes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-modes */ "./src/ui/game-modes.js");





const mainCont = (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__["default"])({
	tag: 'div',
	classList: ['main-cont']
});

// function hideAll() {
// 	[...mainCont.children].forEach((el) => {
// 		if (!el.classList.contains('hide')) el.classList.add('hide');
// 		el.classList.remove('show');
// 	});
// }

// function show(el) {
// 	el.classList.remove('hide');
// 	el.classList.add('show');
// }

function Game() {
	const gameFormat = (0,_choose_format__WEBPACK_IMPORTED_MODULE_1__["default"])((format) => {
		(0,_game__WEBPACK_IMPORTED_MODULE_0__.setGameFormat)(format);
		_game_modes__WEBPACK_IMPORTED_MODULE_3__["default"][format](mainCont);
	});

	mainCont.replaceChildren(gameFormat);

	return mainCont;
}


/***/ }),

/***/ "./src/ui/get-player.js":
/*!******************************!*\
  !*** ./src/ui/get-player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetPlayer)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render */ "./src/ui/utils/render.js");
/* harmony import */ var _media_send_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/send.svg */ "./src/media/send.svg");



function GetPlayer(afterFn = () => {}, count = 0) {
	const heading = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
		tag: 'h3',
		text: `Enter player${count ? ` ${count}` : ''}'s name`
	});

	const form = (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
		tag: 'form',
		children: [
			(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
				tag: 'div',
				classList: ['text-input'],
				children: [
					(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
						tag: 'label',
						props: {
							for: 'player'
						},
						text: 'Player Name'
					}),
					(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
						tag: 'input',
						props: {
							type: 'text',
							name: 'name',
							required: true
						},
						id: 'player'
					})
				]
			}),
			(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
				tag: 'input',
				props: {
					type: 'image',
					alt: 'submit',
					src: _media_send_svg__WEBPACK_IMPORTED_MODULE_1__
				}
			})
		]
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = new FormData(form).get('name');
		afterFn(name);
	});

	return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
		tag: 'div',
		classList: ['player-cont'],
		children: [heading, form]
	});
}


/***/ }),

/***/ "./src/ui/header.js":
/*!**************************!*\
  !*** ./src/ui/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render */ "./src/ui/utils/render.js");


function Header() {
	return (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
		tag: 'header',
		children: [
			(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
				tag: 'span',
				classList: ['logo'],
				text: 'BattleShip'
			})
		]
	});
}


/***/ }),

/***/ "./src/ui/set-board.js":
/*!*****************************!*\
  !*** ./src/ui/set-board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetBoard)
/* harmony export */ });
function SetBoard() {}


/***/ }),

/***/ "./src/ui/utils/render.js":
/*!********************************!*\
  !*** ./src/ui/utils/render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ htmlEl)
/* harmony export */ });
/**
 *
 * @param {*} param0
 * @returns {HTMLElement}
 */
function htmlEl({
	tag,
	text = '',
	classList = [],
	id = '',
	children = [],
	props = {}
}) {
	const el = document.createElement(tag);
	el.innerText = text;

	if (classList.length) el.classList.add(...classList);

	if (children.length) {
		children.forEach((child) => el.appendChild(child));
	}

	if (id) el.id = id;

	Object.entries(props).forEach(([key, value]) =>
		el.setAttribute(key, value)
	);

	return el;
}


/***/ }),

/***/ "./src/media/battleship.jpeg":
/*!***********************************!*\
  !*** ./src/media/battleship.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b67c45fdbce587140b82.jpeg";

/***/ }),

/***/ "./src/media/send.svg":
/*!****************************!*\
  !*** ./src/media/send.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa0f3dcc33890c2fc886.svg";

/***/ }),

/***/ "./src/media/spacec/Spacec5.ttf":
/*!**************************************!*\
  !*** ./src/media/spacec/Spacec5.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbdef0514278f8240835.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/game */ "./src/ui/game.js");
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/header */ "./src/ui/header.js");
/* harmony import */ var _ui_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/styles.css */ "./src/ui/styles.css");
/* harmony import */ var _ui_utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/utils/render */ "./src/ui/utils/render.js");





function App() {
	return (0,_ui_utils_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
		tag: 'div',
		id: 'content',
		children: [(0,_ui_header__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_ui_game__WEBPACK_IMPORTED_MODULE_0__["default"])()]
	});
}

document.body.appendChild(App());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw0SEFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxZQUFZLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtB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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDSTtBQUNSO0FBQ2M7O0FBRXZDO0FBQ0EsUUFBUSw0REFBTTtBQUNkO0FBQ0E7QUFDQSxhQUFhLHNEQUFNLElBQUksb0RBQUk7QUFDM0IsRUFBRTtBQUNGOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3N0eWxlcy5jc3M/NGRiYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3V0aWxzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvY2hvb3NlLWZvcm1hdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWUtbW9kZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvZ2V0LXBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3NldC1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3V0aWxzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL3NwYWNlYy9TcGFjZWM1LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2JhdHRsZXNoaXAuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogZm9udFNoaXA7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5kaXYjY29udGVudCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmb250LWZhbWlseTogZm9udFNoaXAsICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLFxuXHRcdCdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuaGVhZGVyIHtcblx0Zm9udC1zaXplOiA1cmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDJyZW0gMDtcblxuXHQmID4gLmxvZ28ge1xuXHRcdGJhY2tncm91bmQ6IHJnYig0OSwgNDEsIDI4KTtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0XHQwZGVnLFxuXHRcdFx0cmdiYSg0OSwgNDEsIDI4LCAxKSAwJSxcblx0XHRcdHJnYmEoMjM4LCAyNDcsIDI0NSwgMSkgNTAlLFxuXHRcdFx0cmdiYSg1OCwgNzIsIDc2LCAxKSAxMDAlXG5cdFx0KTtcblx0XHQtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0YmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHRcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcblx0aGVhZGVyIHtcblx0XHRmb250LXNpemU6IDRyZW07XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdGhlYWRlciB7XG5cdFx0Zm9udC1zaXplOiAzcmVtO1xuXHR9XG59XG5cbi5tYWluLWNvbnQge1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmbGV4OiAxO1xuXHRtYXJnaW4tdG9wOiAyNXZoO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwcyBlYXNlLWluLW91dDtcblxuXHQmID4gZGl2IHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZS1vdXQgNW1zO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC8qIFxuXHQmID4gZGl2LmhpZGUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlKTtcblx0fVxuXG5cdCYgPiBkaXYuc2hvdyB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpO1xuXHR9ICovXG59XG5cbi5mb3JtYXQtY29udCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGdhcDogNXJlbTtcbn1cblxuLmZvcm1hdC1jb250ID4gYnV0dG9uIHtcblx0Zm9udC1zaXplOiAyLjVyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0Y29sb3I6ICNlMGUwZTA7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDBweDtcblx0cGFkZGluZzogMXJlbSAxLjVyZW07XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWF4LXdpZHRoOiA5MHZ3O1xuXG5cdCY6aG92ZXIge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cdC5mb3JtYXQtY29udCBidXR0b24ge1xuXHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0XHRwYWRkaW5nOiAxcmVtIDAuOHJlbTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblx0LmZvcm1hdC1jb250IGJ1dHRvbiB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdHBhZGRpbmc6IDFyZW0gMC44cmVtO1xuXHR9XG59XG5cbi5wbGF5ZXItY29udCB7XG5cdCYgPiBoMyB7XG5cdFx0cGFkZGluZy1ib3R0b206IDJyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0XHRmb250LXNpemU6IDJyZW07XG5cdH1cblxuXHQmID4gZm9ybSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGdhcDogMnJlbTtcblxuXHRcdCYgPiBpbnB1dFt0eXBlPSdpbWFnZSddIHtcblx0XHRcdGhlaWdodDogM3JlbTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcblx0XHRcdHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcblx0XHR9XG5cdH1cbn1cblxuZGl2Omhhcyg+IDppcyhpbnB1dFt0eXBlPSd0ZXh0J10pLCBsYWJlbCkge1xuXHRoZWlnaHQ6IDRyZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHQmID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcblx0XHRoZWlnaHQ6IDkwJTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0Y29sb3I6ICNlMGUwZTA7XG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdFx0d2lkdGg6IG1pbigzMmNoLCA5OHZ3KTtcblx0XHRvdXRsaW5lOiBub25lO1xuXHRcdGJvcmRlcjogMDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0JiA+IGxhYmVsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bWF4LXdpZHRoOiBtYXgtY29udGVudDtcblx0XHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcblxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXG5cdFx0JjpoYXMoKyBpbnB1dDpmb2N1cyksXG5cdFx0JjpoYXMoKyBpbnB1dDp2YWxpZCkge1xuXHRcdFx0Ym90dG9tOiBhdXRvO1xuXHRcdFx0cmlnaHQ6IGF1dG87XG5cdFx0XHRsZWZ0OiAxcmVtO1xuXHRcdFx0dG9wOiAtMC41cmVtO1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHR9XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsNENBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx5REFBK0M7Q0FDL0MsNEJBQTRCO0NBQzVCLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsaUJBQWlCOztDQUVqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCO29EQUNtRDtBQUNwRDtBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixlQUFlOztDQUVmO0VBQ0MsMkJBQTJCO0VBQzNCOzs7OztHQUtDO0VBQ0Qsb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQiw2QkFBNkI7Q0FDOUI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIsa0JBQWtCOztDQUVsQixxQ0FBcUM7O0NBRXJDO0VBQ0MsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsV0FBVztDQUNaO0NBQ0E7Ozs7Ozs7SUFPRztBQUNKOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLFlBQVk7Q0FDWixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsb0NBQW9DO0NBQ3BDLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixlQUFlOztDQUVmO0VBQ0MscUJBQXFCO0NBQ3RCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7Q0FDckI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtFQUNmLG9CQUFvQjtDQUNyQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTOztFQUVUO0dBQ0MsWUFBWTtHQUNaLG9DQUFvQztHQUNwQyxzQkFBc0I7R0FDdEIsb0JBQW9CO0VBQ3JCO0NBQ0Q7QUFDRDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7O0NBRWxCO0VBQ0MsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCOztFQUV2QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7O0VBRVo7O0dBRUMsWUFBWTtHQUNaLFdBQVc7R0FDWCxVQUFVO0dBQ1YsWUFBWTtHQUNaLFVBQVU7RUFDWDtDQUNEO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IGZvbnRTaGlwO1xcblxcdHNyYzogdXJsKC4uL21lZGlhL3NwYWNlYy9TcGFjZWM1LnR0Zik7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vbWVkaWEvYmF0dGxlc2hpcC5qcGVnKTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LWZhbWlseTogZm9udFNoaXAsICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLFxcblxcdFxcdCdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMnJlbSAwO1xcblxcblxcdCYgPiAubG9nbyB7XFxuXFx0XFx0YmFja2dyb3VuZDogcmdiKDQ5LCA0MSwgMjgpO1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHRcXHQwZGVnLFxcblxcdFxcdFxcdHJnYmEoNDksIDQxLCAyOCwgMSkgMCUsXFxuXFx0XFx0XFx0cmdiYSgyMzgsIDI0NywgMjQ1LCAxKSA1MCUsXFxuXFx0XFx0XFx0cmdiYSg1OCwgNzIsIDc2LCAxKSAxMDAlXFxuXFx0XFx0KTtcXG5cXHRcXHQtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0XFx0YmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcblxcdFxcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0Zm9udC1zaXplOiA0cmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0fVxcbn1cXG5cXG4ubWFpbi1jb250IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0ZmxleDogMTtcXG5cXHRtYXJnaW4tdG9wOiAyNXZoO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTBzIGVhc2UtaW4tb3V0O1xcblxcblxcdCYgPiBkaXYge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBlYXNlLW91dCA1bXM7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdC8qIFxcblxcdCYgPiBkaXYuaGlkZSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUpO1xcblxcdH1cXG5cXG5cXHQmID4gZGl2LnNob3cge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcXG5cXHR9ICovXFxufVxcblxcbi5mb3JtYXQtY29udCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGdhcDogNXJlbTtcXG59XFxuXFxuLmZvcm1hdC1jb250ID4gYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRtYXgtd2lkdGg6IDkwdnc7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcdC5mb3JtYXQtY29udCBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRcXHRwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdC5mb3JtYXQtY29udCBidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRcXHRwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXG5cXHR9XFxufVxcblxcbi5wbGF5ZXItY29udCB7XFxuXFx0JiA+IGgzIHtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG5cXHRcXHRmb250LXdlaWdodDogMTAwO1xcblxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHR9XFxuXFxuXFx0JiA+IGZvcm0ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDJyZW07XFxuXFxuXFx0XFx0JiA+IGlucHV0W3R5cGU9J2ltYWdlJ10ge1xcblxcdFxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuXFx0XFx0XFx0cGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxMDBweDtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5kaXY6aGFzKD4gOmlzKGlucHV0W3R5cGU9J3RleHQnXSksIGxhYmVsKSB7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXHQmID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG5cXHRcXHRoZWlnaHQ6IDkwJTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFx0XFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0XFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXFx0XFx0d2lkdGg6IG1pbigzMmNoLCA5OHZ3KTtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdFxcdGJvcmRlcjogMDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdFxcdHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHQmID4gbGFiZWwge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRib3R0b206IDA7XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcblxcdFxcdCY6aGFzKCsgaW5wdXQ6Zm9jdXMpLFxcblxcdFxcdCY6aGFzKCsgaW5wdXQ6dmFsaWQpIHtcXG5cXHRcXHRcXHRib3R0b206IGF1dG87XFxuXFx0XFx0XFx0cmlnaHQ6IGF1dG87XFxuXFx0XFx0XFx0bGVmdDogMXJlbTtcXG5cXHRcXHRcXHR0b3A6IC0wLjVyZW07XFxuXFx0XFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7XG5cdGdldEFkamFjZW50Q29vcmRpbmF0ZXMsXG5cdGlzQ29vcmRpbmF0ZVZhbGlkLFxuXHRpc0RpcmVjdGlvblZhbGlkXG59IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuXHQjc2l6ZTtcblxuXHQjYm9hcmQ7XG5cblx0I3NoaXBzT25Cb2FyZDtcblxuXHRjb25zdHJ1Y3Rvcihib2FyZFNpemUpIHtcblx0XHRpZiAodHlwZW9mIGJvYXJkU2l6ZSAhPT0gJ251bWJlcicgfHwgYm9hcmRTaXplIDwgOClcblx0XHRcdHRocm93IEVycm9yKCdJbnZhbGlkIFNpemUhIFNpemUgbXVzdCBiZSA+PSA4Jyk7XG5cblx0XHR0aGlzLiNzaXplID0gYm9hcmRTaXplO1xuXG5cdFx0dGhpcy4jYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KGJvYXJkU2l6ZSksICgpID0+XG5cdFx0XHRBcnJheS5mcm9tKEFycmF5KGJvYXJkU2l6ZSksICgpID0+ICh7XG5cdFx0XHRcdHNoaXA6IG51bGwsXG5cdFx0XHRcdGhhc0JlZW5IaXQ6IGZhbHNlXG5cdFx0XHR9KSlcblx0XHQpO1xuXHRcdC8vIGZvciBiZXR0ZXIgZWZmaWNpZW5jeSB3aGlsZSB0cnlpbmcgdG8ga25vdyBpZiBhbGwgc2hpcHMgaGF2ZSBzdW5rXG5cdFx0dGhpcy4jc2hpcHNPbkJvYXJkID0gW107XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy4jc2l6ZTtcblx0fVxuXG5cdGdldCBib2FyZCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jYm9hcmQ7XG5cdH1cblxuXHRwbGFjZVNoaXAoY29vcmRpbmF0ZSwgZGlyZWN0aW9uLCBzaGlwKSB7XG5cdFx0aWYgKCFpc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlLCB0aGlzLiNzaXplKSlcblx0XHRcdHRocm93IEVycm9yKCdJbnZhbGlkIENvb3JkaW5hdGVzIScpO1xuXG5cdFx0aWYgKCFpc0RpcmVjdGlvblZhbGlkKGRpcmVjdGlvbikpIHRocm93IEVycm9yKCdJbnZhbGlkIGRpcmVjdGlvbiEnKTtcblxuXHRcdGlmICghKHNoaXAgaW5zdGFuY2VvZiBTaGlwKSkgdGhyb3cgRXJyb3IoJ0ludmFsaWQgU2hpcCEnKTtcblxuXHRcdGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhcblx0XHRcdGNvb3JkaW5hdGUsXG5cdFx0XHRkaXJlY3Rpb24sXG5cdFx0XHRzaGlwLmxlbmd0aFxuXHRcdCk7XG5cblx0XHRjb29yZGluYXRlcy5mb3JFYWNoKChbeCwgeV0pID0+IHtcblx0XHRcdC8vIElmIGNvb3JkaW5hdGUgaXMgb3V0IG9mIGJvdW5kIHRocm93IGVycm9yXG5cdFx0XHRpZiAoIWlzQ29vcmRpbmF0ZVZhbGlkKFt4LCB5XSwgdGhpcy4jc2l6ZSkpXG5cdFx0XHRcdHRocm93IEVycm9yKFxuXHRcdFx0XHRcdFwiSW52YWxpZCBDb29yZGluYXRlcyEgQ2FuJ3QgZXhwYW5kIHRvIHRoZSBnaXZlbiBsZW5ndGguXCJcblx0XHRcdFx0KTtcblxuXHRcdFx0Ly8gSWYgc2hpcCBhbHJlYWR5IHByZXNlbnQgaW4gY29vcmRpbmF0ZVxuXHRcdFx0aWYgKHRoaXMuI2JvYXJkW3hdW3ldLnNoaXApXG5cdFx0XHRcdHRocm93IEVycm9yKCdTaGlwIGFscmVhZHkgcHJlc2VudCBpbiBvbmUgb2YgdGhlIGNvb3JkaW5hdGVzIScpO1xuXHRcdH0pO1xuXG5cdFx0Y29vcmRpbmF0ZXMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG5cdFx0XHR0aGlzLiNib2FyZFt4XVt5XSA9IHsgc2hpcCwgaGFzQmVlbkhpdDogZmFsc2UgfTtcblx0XHR9KTtcblx0XHR0aGlzLiNzaGlwc09uQm9hcmQucHVzaChzaGlwKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG5cdFx0aWYgKCFpc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlLCB0aGlzLiNzaXplKSlcblx0XHRcdHRocm93IEVycm9yKCdJbnZhbGlkIENvb3JkaW5hdGUhJyk7XG5cblx0XHRpZiAoIXRoaXMuI2JvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLnNoaXApXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoaXQ6IGZhbHNlXG5cdFx0XHR9O1xuXG5cdFx0Y29uc3QgeyBzaGlwIH0gPSB0aGlzLiNib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXTtcblx0XHRzaGlwLmhpdCgpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGhpdDogdHJ1ZSxcblx0XHRcdHNoaXBcblx0XHR9O1xuXHR9XG5cblx0aGF2ZUFsbFNoaXBzU3VuaygpIHtcblx0XHRyZXR1cm4gdGhpcy4jc2hpcHNPbkJvYXJkLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblx0fVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IHBsYXllcnMgPSBbXTtcblxubGV0IGdhbWVGb3JtYXQgPSAnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYXllcnMocGxheWVyKSB7XG5cdGlmICghKHBsYXllciBpbnN0YW5jZW9mIFBsYXllcikpIHRocm93IEVycm9yKCdJbnZhbGlkIFBsYXllciEnKTtcblx0aWYgKHBsYXllcnMubGVuZ3RoID49IDIpIHRocm93IEVycm9yKCdNYXhpbXVtIG51bWJlciBvZiBwbGF5ZXJzIHJlYWNoZWQhJyk7XG5cblx0cGxheWVycy5wdXNoKHBsYXllcik7XG5cdHJldHVybiBwbGF5ZXJzLmxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllcnMoKSB7XG5cdHJldHVybiBwbGF5ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQbGF5ZXJzKCkge1xuXHRwbGF5ZXJzLmxlbmd0aCA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRHYW1lRm9ybWF0KGZvcm1hdCkge1xuXHRpZiAoZm9ybWF0ICE9PSAncHZwJyAmJiBmb3JtYXQgIT09ICdwdmMnKVxuXHRcdHRocm93IEVycm9yKCdJbnZhbGlkIEdhbWUgRm9ybWF0IScpO1xuXHRnYW1lRm9ybWF0ID0gZm9ybWF0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZUZvcm1hdCgpIHtcblx0cmV0dXJuIGdhbWVGb3JtYXQ7XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblx0I25hbWU7XG5cblx0I29wcG9uZW50Qm9hcmQ7XG5cblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdGlmICghbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHRocm93IEVycm9yKCdJbnZhbGlkIE5hbWUhJyk7XG5cblx0XHR0aGlzLiNuYW1lID0gbmFtZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLiNuYW1lO1xuXHR9XG5cblx0c2V0T3Bwb25lbnRCb2FyZChib2FyZCkge1xuXHRcdGlmICghKGJvYXJkIGluc3RhbmNlb2YgR2FtZUJvYXJkKSkgdGhyb3cgRXJyb3IoJ0ludmFsaWQgZ2FtZSBib2FyZCEnKTtcblxuXHRcdHRoaXMuI29wcG9uZW50Qm9hcmQgPSBib2FyZDtcblx0fVxuXG5cdGdldCBvcHBvbmVudEJvYXJkKCkge1xuXHRcdHJldHVybiB0aGlzLiNvcHBvbmVudEJvYXJkO1xuXHR9XG5cblx0YXR0YWNrKGNvb3JkaW5hdGUpIHtcblx0XHRpZiAoIXRoaXMuI29wcG9uZW50Qm9hcmQpIHRocm93IEVycm9yKCdObyBvcHBvbmVudCBib2FyZCBnaXZlbiEnKTtcblxuXHRcdHRoaXMuI29wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG5cdCNsZW5ndGggPSAwO1xuXG5cdCNoaXRzID0gMDtcblxuXHQjbmFtZSA9ICcnO1xuXG5cdGNvbnN0cnVjdG9yKGxlbiwgdGl0bGUgPSAnJykge1xuXHRcdGlmICh0eXBlb2YgbGVuICE9PSAnbnVtYmVyJyB8fCBsZW4gPD0gMCkgdGhyb3cgRXJyb3IoJ0ludmFsaWQgTGVuZ3RoIScpO1xuXG5cdFx0aWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycpIHRocm93IEVycm9yKCdJbnZhbGlkIE5hbWUhJyk7XG5cblx0XHR0aGlzLiNsZW5ndGggPSBsZW47XG5cblx0XHR0aGlzLiNuYW1lID1cblx0XHRcdHRpdGxlIHx8IGBTaGlwJHt0aGlzLiNsZW5ndGh9JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gO1xuXHR9XG5cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jbGVuZ3RoO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI25hbWU7XG5cdH1cblxuXHRnZXQgaGl0cygpIHtcblx0XHRyZXR1cm4gdGhpcy4jaGl0cztcblx0fVxuXG5cdGhpdCgpIHtcblx0XHQrK3RoaXMuI2hpdHM7XG5cdH1cblxuXHRpc1N1bmsoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2hpdHMgPj0gdGhpcy4jbGVuZ3RoO1xuXHR9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSwgYm9hcmRTaXplKSB7XG5cdHJldHVybiAoXG5cdFx0QXJyYXkuaXNBcnJheShjb29yZGluYXRlKSAmJlxuXHRcdGNvb3JkaW5hdGUubGVuZ3RoID09PSAyICYmXG5cdFx0Ly8gWCBjb29yZGluYXRlIGlzIGEgbnVtYmVyIHdpdGhpbiBib3VuZFxuXHRcdHR5cGVvZiBjb29yZGluYXRlWzBdID09PSAnbnVtYmVyJyAmJlxuXHRcdGNvb3JkaW5hdGVbMF0gPj0gMCAmJlxuXHRcdGNvb3JkaW5hdGVbMF0gPCBib2FyZFNpemUgJiZcblx0XHQvLyBZIGNvb3JkaW5hdGUgaXMgYSBudW1iZXIgd2l0aGluIGJvdW5kXG5cdFx0dHlwZW9mIGNvb3JkaW5hdGVbMV0gPT09ICdudW1iZXInICYmXG5cdFx0Y29vcmRpbmF0ZVsxXSA+PSAwICYmXG5cdFx0Y29vcmRpbmF0ZVsxXSA8IGJvYXJkU2l6ZVxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3Rpb25WYWxpZChkaXJlY3Rpb24pIHtcblx0cmV0dXJuIFsnbGVmdCcsICdyaWdodCcsICd1cCcsICdkb3duJ10uaW5jbHVkZXMoZGlyZWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkamFjZW50Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZSwgZGlyZWN0aW9uLCBjb3VudCkge1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuXHRjb25zdCBmYWN0b3IgPVxuXHRcdGRpcmVjdGlvbiA9PT0gJ2xlZnQnXG5cdFx0XHQ/IFstMSwgMF1cblx0XHRcdDogZGlyZWN0aW9uID09PSAncmlnaHQnXG5cdFx0XHRcdD8gWzEsIDBdXG5cdFx0XHRcdDogZGlyZWN0aW9uID09PSAndXAnXG5cdFx0XHRcdFx0PyBbMCwgMV1cblx0XHRcdFx0XHQ6IFswLCAtMV07XG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5cblx0Y29uc3QgY29vcmRpbmF0ZXMgPSBbY29vcmRpbmF0ZV07XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gY291bnQ7ICsraSkge1xuXHRcdGNvb3JkaW5hdGVzLnB1c2goW1xuXHRcdFx0Y29vcmRpbmF0ZXNbaV1bMF0gKyBmYWN0b3JbMF0sXG5cdFx0XHRjb29yZGluYXRlc1tpXVsxXSArIGZhY3RvclsxXVxuXHRcdF0pO1xuXHR9XG5cblx0cmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuIiwiaW1wb3J0IGh0bWxFbCBmcm9tICcuL3V0aWxzL3JlbmRlcic7XG5cbmZ1bmN0aW9uIEJ1dHRvbih0ZXh0LCBvbkNsaWNrKSB7XG5cdGNvbnN0IGJ0biA9IGh0bWxFbCh7XG5cdFx0dGFnOiAnYnV0dG9uJyxcblx0XHR0ZXh0XG5cdH0pO1xuXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spO1xuXG5cdHJldHVybiBidG47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob29zZUdhbWVGb3JtYXQoYWZ0ZXJGbiA9ICh2YWx1ZSkgPT4gdmFsdWUpIHtcblx0Y29uc3QgcHZwID0gQnV0dG9uKCdQbGF5ZXIgVi9zIFBsYXllcicsICgpID0+IGFmdGVyRm4oJ3B2cCcpKTtcblx0Y29uc3QgcHZjID0gQnV0dG9uKCdQbGF5ZXIgVi9zIEFJJywgKCkgPT4gYWZ0ZXJGbigncHZjJykpO1xuXG5cdHJldHVybiBodG1sRWwoe1xuXHRcdHRhZzogJ2RpdicsXG5cdFx0Y2xhc3NMaXN0OiBbJ2Zvcm1hdC1jb250J10sXG5cdFx0Y2hpbGRyZW46IFtwdnAsIHB2Y11cblx0fSk7XG59XG4iLCJpbXBvcnQgeyBhZGRQbGF5ZXJzIH0gZnJvbSAnLi4vZ2FtZSc7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4uL2dhbWUvZ2FtZUJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZ2FtZS9wbGF5ZXInO1xuaW1wb3J0IEdldFBsYXllciBmcm9tICcuL2dldC1wbGF5ZXInO1xuaW1wb3J0IFNldEJvYXJkIGZyb20gJy4vc2V0LWJvYXJkJztcblxuZnVuY3Rpb24gcHZwKG1haW5Db250KSB7XG5cdG1haW5Db250LnJlcGxhY2VDaGlsZHJlbiguLi5nZXRQbGF5ZXIoKSk7XG59XG5cbmZ1bmN0aW9uIHB2YygpIHtcblx0Y29uc29sZS5sb2coJ3B2YycpO1xufVxuXG5mdW5jdGlvbiBnZXRQbGF5ZXIoKSB7XG5cdHJldHVybiBHZXRQbGF5ZXIoKG5hbWUpID0+IHtcblx0XHRjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUpO1xuXHRcdGFkZFBsYXllcnMocGxheWVyKTtcblx0XHRjb25zdCBib2FyZCA9IG5ldyBHYW1lQm9hcmQoOCk7XG5cdH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgeyBwdnAsIHB2YyB9O1xuIiwiaW1wb3J0IHsgc2V0R2FtZUZvcm1hdCB9IGZyb20gJy4uL2dhbWUnO1xuaW1wb3J0IENob29zZUdhbWVGb3JtYXQgZnJvbSAnLi9jaG9vc2UtZm9ybWF0JztcbmltcG9ydCBodG1sRWwgZnJvbSAnLi91dGlscy9yZW5kZXInO1xuaW1wb3J0IGdhbWVNb2RlcyBmcm9tICcuL2dhbWUtbW9kZXMnO1xuXG5jb25zdCBtYWluQ29udCA9IGh0bWxFbCh7XG5cdHRhZzogJ2RpdicsXG5cdGNsYXNzTGlzdDogWydtYWluLWNvbnQnXVxufSk7XG5cbi8vIGZ1bmN0aW9uIGhpZGVBbGwoKSB7XG4vLyBcdFsuLi5tYWluQ29udC5jaGlsZHJlbl0uZm9yRWFjaCgoZWwpID0+IHtcbi8vIFx0XHRpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4vLyBcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuLy8gXHR9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc2hvdyhlbCkge1xuLy8gXHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4vLyBcdGVsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcblx0Y29uc3QgZ2FtZUZvcm1hdCA9IENob29zZUdhbWVGb3JtYXQoKGZvcm1hdCkgPT4ge1xuXHRcdHNldEdhbWVGb3JtYXQoZm9ybWF0KTtcblx0XHRnYW1lTW9kZXNbZm9ybWF0XShtYWluQ29udCk7XG5cdH0pO1xuXG5cdG1haW5Db250LnJlcGxhY2VDaGlsZHJlbihnYW1lRm9ybWF0KTtcblxuXHRyZXR1cm4gbWFpbkNvbnQ7XG59XG4iLCJpbXBvcnQgaHRtbEVsIGZyb20gJy4vdXRpbHMvcmVuZGVyJztcbmltcG9ydCBzZW5kIGZyb20gJy4uL21lZGlhL3NlbmQuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0UGxheWVyKGFmdGVyRm4gPSAoKSA9PiB7fSwgY291bnQgPSAwKSB7XG5cdGNvbnN0IGhlYWRpbmcgPSBodG1sRWwoe1xuXHRcdHRhZzogJ2gzJyxcblx0XHR0ZXh0OiBgRW50ZXIgcGxheWVyJHtjb3VudCA/IGAgJHtjb3VudH1gIDogJyd9J3MgbmFtZWBcblx0fSk7XG5cblx0Y29uc3QgZm9ybSA9IGh0bWxFbCh7XG5cdFx0dGFnOiAnZm9ybScsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdGh0bWxFbCh7XG5cdFx0XHRcdHRhZzogJ2RpdicsXG5cdFx0XHRcdGNsYXNzTGlzdDogWyd0ZXh0LWlucHV0J10sXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0aHRtbEVsKHtcblx0XHRcdFx0XHRcdHRhZzogJ2xhYmVsJyxcblx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdGZvcjogJ3BsYXllcidcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0ZXh0OiAnUGxheWVyIE5hbWUnXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0aHRtbEVsKHtcblx0XHRcdFx0XHRcdHRhZzogJ2lucHV0Jyxcblx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ25hbWUnLFxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGlkOiAncGxheWVyJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdF1cblx0XHRcdH0pLFxuXHRcdFx0aHRtbEVsKHtcblx0XHRcdFx0dGFnOiAnaW5wdXQnLFxuXHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0YWx0OiAnc3VibWl0Jyxcblx0XHRcdFx0XHRzcmM6IHNlbmRcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRdXG5cdH0pO1xuXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgbmFtZSA9IG5ldyBGb3JtRGF0YShmb3JtKS5nZXQoJ25hbWUnKTtcblx0XHRhZnRlckZuKG5hbWUpO1xuXHR9KTtcblxuXHRyZXR1cm4gaHRtbEVsKHtcblx0XHR0YWc6ICdkaXYnLFxuXHRcdGNsYXNzTGlzdDogWydwbGF5ZXItY29udCddLFxuXHRcdGNoaWxkcmVuOiBbaGVhZGluZywgZm9ybV1cblx0fSk7XG59XG4iLCJpbXBvcnQgaHRtbEVsIGZyb20gJy4vdXRpbHMvcmVuZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHRyZXR1cm4gaHRtbEVsKHtcblx0XHR0YWc6ICdoZWFkZXInLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRodG1sRWwoe1xuXHRcdFx0XHR0YWc6ICdzcGFuJyxcblx0XHRcdFx0Y2xhc3NMaXN0OiBbJ2xvZ28nXSxcblx0XHRcdFx0dGV4dDogJ0JhdHRsZVNoaXAnXG5cdFx0XHR9KVxuXHRcdF1cblx0fSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXRCb2FyZCgpIHt9XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0geyp9IHBhcmFtMFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBodG1sRWwoe1xuXHR0YWcsXG5cdHRleHQgPSAnJyxcblx0Y2xhc3NMaXN0ID0gW10sXG5cdGlkID0gJycsXG5cdGNoaWxkcmVuID0gW10sXG5cdHByb3BzID0ge31cbn0pIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdGVsLmlubmVyVGV4dCA9IHRleHQ7XG5cblx0aWYgKGNsYXNzTGlzdC5sZW5ndGgpIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcblxuXHRpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0Y2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGVsLmFwcGVuZENoaWxkKGNoaWxkKSk7XG5cdH1cblxuXHRpZiAoaWQpIGVsLmlkID0gaWQ7XG5cblx0T2JqZWN0LmVudHJpZXMocHJvcHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT5cblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcblx0KTtcblxuXHRyZXR1cm4gZWw7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lIGZyb20gJy4vdWkvZ2FtZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vdWkvaGVhZGVyJztcbmltcG9ydCAnLi91aS9zdHlsZXMuY3NzJztcbmltcG9ydCBodG1sRWwgZnJvbSAnLi91aS91dGlscy9yZW5kZXInO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiBodG1sRWwoe1xuXHRcdHRhZzogJ2RpdicsXG5cdFx0aWQ6ICdjb250ZW50Jyxcblx0XHRjaGlsZHJlbjogW0hlYWRlcigpLCBHYW1lKCldXG5cdH0pO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEFwcCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==