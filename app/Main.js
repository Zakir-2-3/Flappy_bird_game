import Config from "./modules/Config.js";
import Field from "./modules/Field.js";
import Bird from "./modules/Bird.js";
import Pipes from "./modules/Pipes.js";
import GameOver from "./modules/GameOver.js";
import GameStart from "./modules/GameStart.js";

const config = new Config();
const sprite = new Image();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
sprite.src = "./assets/images/sprite.png";
let frameIndex = 0;
const dx = 2;

const record = parseInt(localStorage.getItem("HiScore")) || 0;

const firstLine = new Field({
  x: config.firstLine.x,
  y: config.firstLine.y,
  width: config.firstLine.width,
  height: config.firstLine.height,
  sX: 0,
  sY: 0,
  sWidth: canvas.width,
  sHeight: canvas.height,
  sprite: sprite,
  ctx: ctx,
});

const nextLine = new Field({
  x: config.nextLine.x,
  y: config.nextLine.y,
  width: config.nextLine.width,
  height: config.nextLine.height,
  sX: 0,
  sY: 0,
  sWidth: canvas.width,
  sHeight: canvas.height,
  sprite: sprite,
  ctx: ctx,
  dx: dx,
  state: config.state,
});

const bird = new Bird({
  x: config.bird.x,
  y: config.bird.y,
  width: config.bird.width,
  height: config.bird.height,
  frames: config.bird.frames,
  radius: config.bird.radius,
  sprite: sprite,
  ctx: ctx,
  frameIndex: frameIndex,
  state: config.state,
  canvasH: canvas.height,
  nextLH: config.nextLine.height,
});

const gameStart = new GameStart({
  x: config.gameStart.x,
  y: config.gameStart.y,
  w: config.gameStart.w,
  h: config.gameStart.h,
  sX: canvas.width / 2 - config.gameStart.w / 2,
  sY: 110,
  sprite: sprite,
  state: config.state,
  ctx: ctx,
});

const gameOver = new GameOver({
  x: config.gameOver.x,
  y: config.gameOver.y,
  w: config.gameOver.w,
  h: config.gameOver.h,
  sX: canvas.width / 2 - config.gameOver.w / 2,
  sY: 120,
  sprite: sprite,
  state: config.state,
  ctx: ctx,
});

const pipes = new Pipes({
  position: config.pipes.position,
  bottom: config.pipes.bottom,
  top: config.pipes.top,
  w: config.pipes.w,
  h: config.pipes.h,
  gap: config.pipes.gap,
  sX: 150,
  maxY: config.pipes.maxY,
  sW: canvas.width,
  frameIndex: frameIndex,
  dx: dx,
  sprite: sprite,
  ctx: ctx,
  state: config.state,
  bird: bird,
  value: 0,
  record: record,
});

document.addEventListener("keydown", (e) => {
  const keyName2 = e.code;
  if (keyName2 == "KeyW" || keyName2 == "Space" || keyName2 == "ArrowUp") {
    e.preventDefault();
    stateSwitch();
  }
});

canvas.addEventListener("click", stateSwitch);

function stateSwitch() {
  switch (config.state.current) {
    case config.state.gameStart:
      config.state.current = config.state.game;
      break;
    case config.state.game:
      bird.flap();
      break;
    case config.state.over:
      config.state.current = config.state.gameStart;
      break;
  }
}

function update() {
  nextLine.update(pipes.value);
  bird.update();
  pipes.update();
}

function loop() {
  ctx.fillStyle = "#4ec0ca";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  firstLine.draw();
  nextLine.draw();
  bird.draw();
  bird.frameIndex++;
  pipes.draw();
  pipes.frameIndex++;
  gameOver.draw(pipes.record, pipes.value);
  gameStart.draw();
  update();
  requestAnimationFrame(loop);
}

loop();

export { ctx, sprite, pipes };
