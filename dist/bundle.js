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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/g-radius.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var _g_radius__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./g-radius */ "./src/g-radius.js");



class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = './assets/images/bloodstream-bg.jpg'
    this.size = {
      x: 800, y: 500
    };
  }

  drawBackground() {
    this.ctx.clearRect(0, 0, _g_radius__WEBPACK_IMPORTED_MODULE_0__["W"], _g_radius__WEBPACK_IMPORTED_MODULE_0__["H"]);
    this.ctx.drawImage(this.background, 0, 0, this.size.x, this.size.y);
  }
}

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
class Bullet {
  constructor({ctx, x, y, dx, dy}) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/bullet.png'
    this.pos = { x, y, dx, dy };
  }

  drawBullet() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, 20, 20);
  }

  update() {
    this.pos.x += this.pos.dx;
    this.pos.y += this.pos.dy;
  }
}

/***/ }),

/***/ "./src/g-radius.js":
/*!*************************!*\
  !*** ./src/g-radius.js ***!
  \*************************/
/*! exports provided: W, H */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./src/background.js");




const W = 800;
const H = 500;



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = W;
  canvas.height = H;
  const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
  // const player = new Player(ctx);
  // debugger
  const background = new _background__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
  // const keyHandler = new KeyHandler(player);
  // player.drawPlayer();
  background.drawBackground();
  game.play();
  document.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) game.player.shoot();
});
})
// window.game = game;



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");


// import Bullet from './bullet';
// import Column from './column';
// import Target from './target';
// import KeyHandler from './key_handler';

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    this.play = this.play.bind(this);
    this.bullets = [];
    //spawn rate
    //columns
    //score
  }

// newGame = () => {
//   this.game = new Game();
//   this.state = {
//     paused: false,
//   }

//   this.startGame();
// }


  // play() {
  //   this.render();
  //   this.update();
  // }

  update() {
    //wallCollisionCheck
    //columnCollisionCheck
    //columnOutCheck
    //targetDestroyedCheck
    //createColumn
  }
  
  togglePause() {
    this.paused = false ? undefined : this.paused = false;
  }
  
  createColumn() {
    
  }

  targetDestroyedCheck() {

  }

  requestAnimFrame() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 20);
      }
  }

  play() {
    this.render();
    this.requestAnimFrame()(this.play.bind(this));
  }

  render() {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.bullets.forEach((bullet) => {
      bullet.drawBullet();
    })
  }

}

/***/ }),

/***/ "./src/key_handler.js":
/*!****************************!*\
  !*** ./src/key_handler.js ***!
  \****************************/
/*! exports provided: UP, DOWN, LEFT, RIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyHandler; });
const KEYCODE_UP = 38,
      KEYCODE_DOWN = 40,
      KEYCODE_LEFT = 37,
      KEYCODE_RIGHT = 39,
      KEYCODE_SPACE = 32;

let UP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;

class KeyHandler {
  constructor(player) {
    this.player = player;

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    document.onkeydown = this.handleKeyPress;
    document.onkeyup = this.handleKeyUp;
  }

  handleKeyPress(e) {
    e.preventDefault();


    switch (e.keyCode) {
      case KEYCODE_UP:
        UP = true;
        // this.player.moveUp();
        break;
      case KEYCODE_DOWN:
        DOWN = true;
        // this.player.moveDown();
        break;
      case KEYCODE_LEFT:
        LEFT = true;
        // this.player.moveLeft();
        break;
      case KEYCODE_RIGHT:
        RIGHT = true;
        // this.player.moveRight();
        break;
      // case KEYCODE_SPACE:
      //   this.player.shoot();
      //   break;
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case KEYCODE_UP:
        UP = false;
        // this.player.moveUp();
        break;
      case KEYCODE_DOWN:
        DOWN = false;
        // this.player.moveDown();
        break;
      case KEYCODE_LEFT:
        LEFT = false;
        // this.player.moveLeft();
        break;
      case KEYCODE_RIGHT:
        RIGHT = false;
        // this.player.moveRight();
        break;
      // case KEYCODE_SPACE:
      //   this.player.shoot();
      //   break;
    }
  }
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ "./src/bullet.js");
/* harmony import */ var _key_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_handler */ "./src/key_handler.js");
// import KeyHandler from './key_handler'


// import Game from 

//use switch case 38: case 87: etc.

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/white-blood-cell.png';
    this.pos = {
      x: 100, y: 250
    }
    this.size = {
      x: 35, y: 35
    };
    this.bullet = [];
    this.shoot = this.shoot.bind(this);
    // this.fire = [];
    // this.speed = 3;
  }

  drawPlayer() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
    this.bullet.forEach((b, i) => {
      b.drawBullet();
      if (b.pos.x > 800) {
        this.bullet.splice(i, 1);
      } else {
        b.update();
      }
    })
  }

  shoot() {
    this.bullet.push(new _bullet__WEBPACK_IMPORTED_MODULE_0__["default"]({
      ctx: this.ctx,
      x: this.pos.x + 20,
      y: this.pos.y + 5,
      dx: 8,
      dy: 0,
    }))
  }

  moveUp() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["UP"]) {
      this.pos.y += this.speed;
    }
  }

  moveDown() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["DOWN"]) {
      this.pos.y -= this.speed;
    }
  }

  moveLeft() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["LEFT"]) {
      this.pos.x -= this.speed;
    }
  }

  moveRight() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["RIGHT"]) {
      this.pos.x += this.speed;
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map