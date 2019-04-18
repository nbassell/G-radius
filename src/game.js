import Player from './player';
import Background from './background';
import KeyHandler from './key_handler';
import Column from './column';
import Virus from './virus';
import EmptySection from './empty_section';
import Util from './util';

export default class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new Player(ctx);
    this.keyHandler = new KeyHandler(this.player);
    this.background = new Background(ctx);
    this.play = this.play.bind(this);
    this.columnCollisionCheck = this.columnCollisionCheck.bind(this);
    this.bulletCollisionCheck = this.bulletCollisionCheck.bind(this);
    this.virusPlayerCheck = this.virusPlayerCheck.bind(this);
    this.virusWallCheck = this.virusWallCheck.bind(this);
    this.addKeyListeners = this.addKeyListeners.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.isRestarted = this.isRestarted.bind(this);
    this.bullets = [];
    this.columns = [];
    this.viruses = [];
    this.timer = 0;
    this.score = document.getElementById('score');
    this.play_again = document.getElementsByClassName("play-again-btn")[0];
    this.start_btn = document.getElementsByClassName("start-btn")[0];
    this.instructions = document.getElementsByClassName("instruction")[0];
    this.score.innerHTML = '0';
    this.dead = false;
  }

  start() {
    this.addKeyListeners();
    this.printInstructions();
  }
  
  restartGame(e) {
    this.start_btn.classList.add('hide');
    // this.instructions.classList.remove('hide');
    this.background.drawBackground();
    this.bullets = [];
    this.columns = [];
    this.viruses = [];
    this.timer = 0;
    this.state = {
      paused: false,
    };
    this.player.pos.x = 500;
    this.player.pos.y = 220;
    this.player.xVel = 4;
    this.player.xYel = 6;
    this.dead = false;
    this.play_again.classList.add('hide');
    this.score.innerHTML = '0';
    window.removeEventListener('keydown', this.isRestarted);
    this.play();
  }

  updateScore() {
    this.score.innerHTML = parseInt(this.score.innerHTML) + 1;
  }


  addKeyListeners() {
    this.play_again.addEventListener('click', this.restartGame);
    this.start_btn.addEventListener('click', this.restartGame);
    window.addEventListener('keydown', this.isRestarted);
  }

  printInstructions(){
    let line0 = "Control Drix with the arrow keys as you move up the artery!";
    let line1 = "Use the spacebar to shoot Good Cholesterol at the plaque buildup.";
    let line2 = "Beware of the indestructable viruses!";
    let line3 = "Click the button or press enter to begin";
    // this.context.fillStyle = "rgba(0, 0, 0, 0.4)";
    // this.context.fillRect(0, 0, this.width, this.height);
    this.ctx.font = "bold 16px Luckiest Guy";
    this.ctx.fillStyle = 'black';
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(line0, this.width / 2, (this.height / 3)-20);
    this.ctx.font = "16px Luckiest Guy";
    this.ctx.fillText(" ", this.width / 2, (this.height / 3));
    this.ctx.fillText(line1, this.width / 2, (this.height / 3) + 20);
    this.ctx.fillText(line2, this.width / 2, (this.height / 3) + 40);
    this.ctx.fillText(line3, this.width / 2, (this.height / 3) + 60);
  }

  isRestarted(e) {
    if (e.keyCode === 13) {
      this.restartGame();
    }
  }
// 
  togglePause() {
    this.paused = false ? this.paused = true : this.paused = false;
  }

  spawnColumn() {
    if (this.timer % 180 === 0) {
      this.columns.push(new Column(this.ctx));
    }
  }

  spawnVirus() {
    if (this.timer % 180 === 60 && this.timer > 800) {
      this.viruses.push(new Virus(this.ctx));
    }
  }

  columnCollisionCheck() {
    this.columns.forEach((column) => {
      column.sections.forEach((section) => {
        if (Util.isCollided(this.player, section)) {
          this.gameOver();
        }
      });
    })
  }

  bulletCollisionCheck() {
    this.columns.forEach((column, i) => {
      column.sections.forEach((section, j) => {
        this.player.bullets.forEach((bullet, k) => {
          if (Util.isCollided(bullet, section)) {
            if (section.health) {
              section.health -= 1;
              if (section.health <= 0) {
                this.columns[i].sections[j] = new EmptySection;
              }
            }
            this.player.bullets.splice(k, 1);
          }
        })
      })
    })
  }

  virusPlayerCheck() {
    this.viruses.forEach((virus) => {
      if (Util.isCollided(this.player, virus)) {
        this.gameOver();
      }
    })
  }

  virusWallCheck() {
    this.columns.forEach((column) => {
      this.viruses.forEach((virus) => {
        if (Util.isCollidedLeft(virus, column) && virus.xVel < 0) {
          virus.xVel = Math.abs(virus.xVel);
        }
        if (Util.isCollidedRight(virus, column) && virus.xVel > 0) {
          virus.xVel = Math.abs(virus.xVel) * -1;
        }
        if ((virus.pos.x + virus.size.x >= 1000) && virus.xVel > 0) {
          virus.xVel = Math.abs(virus.xVel) * -1;
        }
        if (virus.pos.y <= 0) {
          virus.yVel = Math.abs(virus.yVel);
        }
        if ((virus.pos.y + virus.size.y) >= 499) {
          virus.yVel = Math.abs(virus.yVel) * -1;
        }
      })
    })
  }

  columnOutCheck() {
    this.columns.forEach((column, i) => {
      if (column.pos.x + column.size.x < 0) {
        this.columns.splice(i, 1);
      }
    })
  }

  virusOutCheck() {
    this.viruses.forEach((virus, i) => {
      if (virus.pos.x + virus.size.x < 0 || virus.pos.y + virus.size.y < 0
        || virus.pos.y > 1000) {
        this.viruses.splice(i, 1);
      }
    })
  }

  gameOver() {
    this.addKeyListeners();
    this.dead = true;
  }

  showMessage(message) {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    this.ctx.fillRect(0, 0, 1000, 500);
    this.ctx.font = "50px Luckiest Guy";
    this.ctx.fillStyle = "bisque";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(message, 500, 250)
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
    this.update();
    this.render();
    if (!this.dead) {
      this.requestAnimFrame()(this.play.bind(this));
    } else {
      this.showMessage(`Game Over!  Final Score: ${this.score.innerHTML}`);
      this.play_again.classList.remove('hide');
    }
  }

  update() {
    this.timer++;
    this.updateScore();
    this.spawnColumn();
    this.spawnVirus();
    this.columnCollisionCheck();
    this.bulletCollisionCheck();
    this.virusWallCheck();
    this.virusPlayerCheck();
    this.columnOutCheck();
    this.virusOutCheck();
  }


  render() {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.player.updatePos();
    this.bullets.forEach((bullet) => {
      bullet.drawBullet();
    });
    this.columns.forEach((column) => {
      column.drawColumn();
    });
    this.viruses.forEach((virus) => {
      virus.drawVirus();
    })
  }
}