import Bullet from './bullet';
import { UP, DOWN, LEFT, RIGHT, SPACE } from './key_handler';
import KeyHandler from './key_handler';

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/white-blood-cell.png';

    this.pos = { x: 500, y: 220 };
    this.size = { x: 50, y: 50 };

    this.bullet = [];
    this.fireable = true;
    this.shoot = this.shoot.bind(this);
    this.xVel = 4;
    this.yVel = 6;

    this.playerHurtbox = {
      x: this.pos.x + this.size.x,
      y: this.pos.y + this.size.y,
    }
  }

  drawPlayer() {
    // this.ctx.clearRect(0, 0, 800, 500);
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
    if (SPACE && this.fireable) {
      this.bullet.push(new Bullet({
        ctx: this.ctx,
        x: this.pos.x + 50,
        y: this.pos.y + 15,
        dx: 8,
        dy: 0,
      }));
      this.fireable = false;
      setTimeout(() => { this.fireable = true }, 250);
    }
  }

  updatePos() {
    this.moveUp();
    this.moveDown();
    this.moveLeft();
    this.moveRight();
    this.shoot();
  }

  moveUp() {
    if (UP && this.pos.y > 0) {
      this.pos.y -= this.yVel;
    }
  }

  moveDown() {
    if (DOWN && (this.pos.y + this.size.y) < 498) {
      this.pos.y += this.yVel;
    }
  }

  moveLeft() {
    if (LEFT && this.pos.x > 0) {
      this.pos.x -= this.xVel;
    }
  }

  moveRight() {
    if (RIGHT) {
      this.pos.x += this.xVel;
    } else {
      if (this.pos.x === 0) {
        this.pos.x;
      } else {
        this.pos.x -= this.xVel;
      }
    }
  }
}