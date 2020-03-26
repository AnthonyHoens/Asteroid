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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ "./src/gameController.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

 //import { Ammo } from './Ammo'

var game = {
  'canvas': document.querySelector('canvas'),
  'context': null,
  'width': innerWidth,
  'height': innerHeight,
  'ship': _ship__WEBPACK_IMPORTED_MODULE_1__["ship"],
  'gameController': _gameController__WEBPACK_IMPORTED_MODULE_0__["gameController"],
  'ammos': [],
  animate: function animate() {
    var _this = this;

    requestAnimationFrame(function () {
      _this.animate();
    });
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    _ship__WEBPACK_IMPORTED_MODULE_1__["ship"].update(); //Ammo.update()
  },
  init: function init() {
    this.context = this.canvas.getContext('2d');
    this.canvas.width = this.width * 0.999;
    this.canvas.height = this.height * 0.995;
    this.ship.init(this);
    this.gameController.init(this);
    this.animate();
  }
};
game.init();

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/*! exports provided: gameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameController", function() { return gameController; });
var gameController = {
  init: function init() {}
};

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ship", function() { return ship; });
var ship = {
  init: function init(game) {
    var _this = this;

    this.game = game;
    this.x = this.game.canvas.width / 2;
    this.y = this.game.canvas.height / 2;
    this.direction = Math.PI / 30;
    this.speed = 6;
    this.maxSpeed = 10;
    this.acceleration = 0.8;
    window.addEventListener('keydown', function (e) {
      switch (event.key) {
        case 'ArrowRight':
          _this.direction += Math.PI / 30;
          break;

        case 'ArrowLeft':
          _this.direction -= Math.PI / 30;
          break;
      }
    });
  },
  update: function update() {
    this.x += this.speed * Math.cos(this.direction);
    this.y += this.speed * Math.sin(this.direction);

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    if (-this.speed < -this.maxSpeed) {
      this.speed = -this.maxSpeed;
    }

    if (this.x > this.game.canvas.width) {
      this.x = 0;
    }

    if (this.x < 0) {
      this.x = this.game.canvas.width;
    }

    if (this.y > this.game.canvas.height) {
      this.y = 0;
    }

    if (this.y < 0) {
      this.y = this.game.canvas.height;
    }

    this.render();
  },
  render: function render() {
    this.game.context.strokeStyle = '#fff';
    this.game.context.fillStyle = '#fff';
    this.game.context.save();
    this.game.context.translate(this.x, this.y);
    this.game.context.rotate(this.direction);
    this.game.context.beginPath();
    this.game.context.moveTo(0, -7);
    this.game.context.lineTo(15, 0);
    this.game.context.lineTo(0, 7);
    this.game.context.fill();
    this.game.context.closePath();
    this.game.context.stroke();
    this.game.context.restore();
  }
};

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/game.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\2_2AnneeHEPL\multimedia\asteroid\src\game.js */"./src/game.js");


/***/ })

/******/ });