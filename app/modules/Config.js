class Config {
  firstLine = {
    x: 0,
    y: 30,
    width: 275,
    height: 226,
  };
  nextLine = {
    x: 276,
    y: 0,
    width: 224,
    height: 110,
  };
  bird = {
    x: 50,
    y: 150,
    width: 34,
    height: 26,
    frames: [
      { sX: 276, sY: 112 },
      { sX: 276, sY: 139 },
      { sX: 276, sY: 164 },
      { sX: 276, sY: 139 },
    ],
    radius: 12,
  };
  gameStart = {
    x: 0,
    y: 228,
    w: 174,
    h: 177,
  };
  gameOver = {
    x: 175,
    y: 228,
    w: 225,
    h: 200,
  };
  state = {
    current: 0,
    gameStart: 0,
    game: 1,
    over: 2,
  };
  pipes = {
    position: [],
    bottom: {
      x: 502,
      y: 0,
    },
    top: {
      x: 554,
      y: 0,
    },
    w: 53,
    h: 400,
    gap: 100,
    maxY: -150,
  };
}

export default Config;
