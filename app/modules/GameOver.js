import { ctx, sprite } from "../Main.js";

class GameOver {
  constructor({
    x,
    y,
    w,
    h,
    sX,
    sY,
    sW,
    sH,
    sprite,
    ctx,
    state,
    record,
    value,
  }) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sX = sX;
    this.sY = sY;
    this.sprite = sprite;
    this.ctx = ctx;
    this.state = state;
  }
  draw(record, value) {
    if (this.state.current == this.state.over) {
      ctx.drawImage(
        sprite,
        this.x,
        this.y,
        this.w,
        this.h,
        this.sX,
        this.sY,
        this.w,
        this.h
      );
      this.ctx.fillStyle = "#FFF";
      this.ctx.strokeStyle = "#000";
      this.ctx.font = "800 22px monospace";
      // -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;'
      // this.ctx.shadowColor = "#000"
      // this.ctx.shadowOffsetX = "5px"
      // this.ctx.shadowOffsetY = "5px"
      // this.ctx.shadowBlur = "5px"
      this.ctx.strokeText(value, 225, 215);
      this.ctx.strokeText(record, 225, 255);
      this.ctx.fillText(value, 225, 215);
      this.ctx.fillText(record, 225, 255);
    }
  }
}

export default GameOver;
