import { ctx, sprite } from "../Main.js";
import { SOUND_FLY, SOUND_HIT } from "./Sound.js";

class Bird {
  constructor({
    x,
    y,
    width,
    height,
    frames,
    radius,
    sprite,
    ctx,
    state,
    canvasH,
    nextLH,
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.frames = frames;
    this.radius = radius;
    this.sprite = sprite;
    this.ctx = ctx;
    this.frameIndex = 1;
    this.state = state;
    this.speed = 0;
    this.gravity = 0.2;
    this.jump = 3;
    this.canvasH = canvasH;
    this.nextLH = nextLH;
  }
  draw() {
    ctx.drawImage(
      sprite,
      this.frames[this.frameIndex].sX,
      this.frames[this.frameIndex].sY,
      this.width,
      this.height,

      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
  }
  update() {
    let period = this.state.current == this.state.gameStart ? 20 : 10;

    if (this.frameIndex % period === 0) {
      this.frameIndex += 1;
    }

    this.frameIndex = this.frameIndex % this.frames.length;

    if (this.state.current == this.state.gameStart) {
      this.y = 172;
      this.x = 40;
      this.speed = 0;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      if (this.y + this.height / 2 >= this.canvasH - this.nextLH) {
        this.y = this.canvasH - this.nextLH - this.height / 2;
        if (this.state.current == this.state.game) {
          this.state.current = this.state.over;
          SOUND_HIT.play();
        }
      }

      if (this.y - this.height / 2 <= 0) {
        this.y = this.height / 2;
        if (this.state.current == this.state.game) {
          this.state.current = this.state.over;
          SOUND_HIT.play();
        }
      }

      if (this.x - this.width / 2 <= 0) {
        this.x = this.width / 2;
        if (this.state.current == this.state.game) {
          this.state.current = this.state.over;
          SOUND_HIT.play();
        }
      }

      if (this.x + this.width / 2 >= this.canvasH) {
        this.x = this.canvasH - this.width / 2;
        if (this.state.current == this.state.game) {
          this.state.current = this.state.over;
          SOUND_HIT.play();
        }
      }
    }

    if (this.speed >= this.jump) {
      this.frameIndex = 1;
    }
  }
  flap() {
    this.speed = -this.jump;
    SOUND_FLY.play()
  }
}

export default Bird;
