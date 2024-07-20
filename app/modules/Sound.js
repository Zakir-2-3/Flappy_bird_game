const SOUND_FLY = new Audio();
// Local connect
// SOUND_HIT.src = "../../assets/audio/SOUND_FLY.mp3";

// GitHub Pages connect
SOUND_FLY.src =
  "https://github.com/Zakir-2-3/Flappy_bird_game/blob/main/assets/audio/SOUND_FLY.mp3?raw=true";

const SOUND_HIT = new Audio();
// Local connect
// SOUND_HIT.src = "../../assets/audio/SOUND_HIT.mp3";

// GitHub Pages connect
SOUND_HIT.src =
  "https://github.com/Zakir-2-3/Flappy_bird_game/blob/main/assets/audio/SOUND_HIT.mp3?raw=true";

const SOUND_POINT = new Audio();
// Local connect
// SOUND_POINT.src = "../../assets/audio/SOUND_POINT.mp3";

// GitHub Pages connect
SOUND_POINT.src =
  "https://github.com/Zakir-2-3/Flappy_bird_game/blob/main/assets/audio/SOUND_POINT.mp3?raw=true";

const volumeImgBtn = document.getElementById("volumeImgBtn");
const imgVolume = document.getElementById("imgVolume");
const SOUND_BACKGROUND = document.getElementById("audio");

const playSound = "./assets/images/Volume_max.svg";
const pauseSound = "./assets/images/Volume_mute.svg";

volumeImgBtn.addEventListener("click", () => {
  if (SOUND_BACKGROUND.paused == true) {
    SOUND_BACKGROUND.play();
    imgVolume.src = playSound;
  } else {
    SOUND_BACKGROUND.pause();
    imgVolume.src = pauseSound;
  }
});

SOUND_BACKGROUND.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

SOUND_FLY.volume = 0.05;
SOUND_HIT.volume = 0.05;
SOUND_POINT.volume = 0.05;
SOUND_BACKGROUND.volume = 0.15;

export { SOUND_FLY, SOUND_HIT, SOUND_POINT };
