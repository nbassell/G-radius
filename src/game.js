import Player from './player';
import Background from './background';
// import Bullet from './bullet';
// import Column from './column';
// import Target from './target';
// import KeyHandler from './key_handler';

export default class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new Player(ctx);
    this.background = new Background(ctx);
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
    this.paused = false ? this.paused = true : this.paused = false;
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