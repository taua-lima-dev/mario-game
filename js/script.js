const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const ground1 = document.querySelector(".ground-1");
const ground2 = document.querySelector(".ground-2");
const coinImg1 = document.querySelector(".coin1");
const coinImg2 = document.querySelector(".coin2");

const coinSound = document.querySelector("#coinSound");
const jumpSound = document.querySelector("#jumpSound");
const stageSound = document.querySelector("#stageSound");
const gameOverSound = document.querySelector("#gameOver");

const coinPlay = () => {
  coinSound.play();
};

const jumping = () => {
  jumpSound.play();
};

const jump = () => {
  mario.classList.add("jump");
  jumping();
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const gameOver =
    pipePosition <= 120 && pipePosition > 0 && marioPosition < 130;

  if (gameOver) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    ground1.style.animation = "none";
    ground2.style.animation = "none";

    mario.src = "./images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    setTimeout(() => {
      jumpSound.pause()
      jumpSound.src = "";
    }, 300);

    stageSound.pause()
    gameOverSound.play();

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
coinImg1.addEventListener("click", coinPlay);
coinImg2.addEventListener("click", coinPlay);
