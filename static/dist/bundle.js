/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Starting point of UI, ties modules together through dependency injections
	 */

	var Model = __webpack_require__(1),
	    Http = __webpack_require__(2),
	    Renderer = __webpack_require__(3),
	    Controller = __webpack_require__(11);

	var model = new Model(),
	    http = new Http(),
	    controller = new Controller({
	    button: '[data-roll-button]'
	}),
	    renderer = new Renderer({
	    content: '[data-content]',
	    resultText: '[data-result-text]',
	    images: ['[data-image-1]', '[data-image-2]', '[data-image-3]'],
	    buttonImage: '[data-button-image]',
	    bonusArea: '[data-bonus]'
	});

	http.model = model;
	model.renderer = renderer;
	model.http = http;
	controller.http = http;
	controller.renderer = renderer;

	renderer.reset();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = ModelService;

	/**
	 * UI model service for handling server data
	 * @returns {ModelService}
	 * @constructor
	 */
	function ModelService() {
	    if (!(this instanceof ModelService)) {
	        return new ModelService();
	    }

	    var ctx = this;

	    this.renderer = null;
	    this.service = null;

	    this.model = null;

	    this.updateModel = function (newModel) {
	        this.model = newModel;

	        if (this.model.isBonusAllowed) {
	            setTimeout(function (_) {
	                return ctx.http.getNewValues();
	            }, 5000);
	        }

	        this.renderer.render(this.model);
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = HttpService;

	/**
	 * UI service for handling http requests
	 * @returns {HttpService}
	 * @constructor
	 */
	function HttpService() {
	    if (!(this instanceof HttpService)) {
	        return new HttpService();
	    }

	    var ctx = this,
	        reqN = 0;

	    this.model = null;

	    this.getNewValues = function () {
	        var request = new XMLHttpRequest();
	        request.onreadystatechange = function () {

	            if (request.readyState === 4 && request.status === 200) {
	                var data = JSON.parse(request.responseText);
	                ctx.model.updateModel(data);
	            } else if (request.readyState === 4 && request.status !== 200) {
	                console.log("Status " + request.status + ": " + request.responseText);
	            }
	        };
	        request.open("GET", '/api/roll?reqN=' + reqN++, true);
	        request.send(null);
	    };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = RendererService;

	/**
	 * UI service for rendering dynamic UI
	 * @param selectors
	 * @returns {RendererService}
	 * @constructor
	 */
	function RendererService(selectors) {
	    if (!(this instanceof RendererService)) {
	        return new RendererService();
	    }

	    var IMAGES = {
	        button: __webpack_require__(4),
	        image0: __webpack_require__(5),
	        image1: __webpack_require__(6),
	        image2: __webpack_require__(7),
	        image3: __webpack_require__(8),
	        image4: __webpack_require__(9),
	        image5: __webpack_require__(10)
	    };

	    var $content = document.querySelector(selectors.content),
	        $text = document.querySelector(selectors.resultText),
	        $images = selectors.images.map(function (sel) {
	        return document.querySelector(sel);
	    }),
	        $buttonImage = document.querySelector(selectors.buttonImage),
	        $bonus = document.querySelector(selectors.bonusArea);

	    this.render = function (newModel) {
	        $images.forEach(function (img) {
	            return img.classList.remove('hidden');
	        });
	        newModel.values.forEach(function (val, i) {
	            return $images[i].src = IMAGES['image' + val];
	        });

	        $text.innerText = newModel.text;

	        toggleClass($bonus, !newModel.isBonusAllowed, 'hidden');

	        if (!newModel.isBonusAllowed) {
	            this.toggleLoadingState(false);
	        }
	    };

	    this.reset = function () {
	        $images.forEach(function (img) {
	            return img.classList.add('hidden');
	        });
	        $bonus.classList.add('hidden');
	        $buttonImage.src = IMAGES.button;
	        this.toggleLoadingState(false);
	    };

	    this.toggleLoadingState = function (flag) {
	        toggleClass($content, flag, 'loading');
	    };

	    function toggleClass(el, flag, className) {
	        el.classList[flag ? 'add' : 'remove'](className);
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7a945f9d84e6064612bf74624f2393a9.png";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1c773db95b0ab3bfb9758055e6297a58.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4fb0cf50b1e00f2b683f36fa0d6a3c4b.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ec1dbc2d5c7056c1eb9518df44edd06e.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "49b8e4fb0fa9e3d442fc9d3a5f04bd54.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cfa309454db954423911a7a924f44f72.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4742de52257751c6ae6cf5f9a61d1ddd.png";

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = ControllerService;

	/**
	 * UI service for handling user controls
	 * @param selectors
	 * @returns {ControllerService}
	 * @constructor
	 */
	function ControllerService(selectors) {
	    if (!(this instanceof ControllerService)) {
	        return new ControllerService();
	    }

	    var ctx = this,
	        $button = document.querySelector(selectors.button);

	    this.http = null;
	    this.renderer = null;

	    $button.addEventListener('click', function (event) {
	        event.preventDefault();

	        ctx.renderer.toggleLoadingState(true);

	        ctx.http.getNewValues();
	    });
	}

/***/ }
/******/ ]);