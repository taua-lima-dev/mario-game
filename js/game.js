const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const ground1 = document.querySelector(".ground-1");
const ground2 = document.querySelector(".ground-2");
const clouds = document.querySelector(".clouds");
const menu = document.querySelector(".hidden");
const btnJump = document.querySelector(".button-jump");
const marioGameOver = document.querySelector(".mario-game-over");

const jumpSound = document.querySelector("#jumpSound");
const stageSound = document.querySelector("#stageSound");
const gameOverSound = document.querySelector("#gameOver");

const jumping = () => {
  jumpSound.play();
};

const jump = () => {
  mario.classList.add("jump");
  jumping();

  mario.src = "./images/mario-top.png";

  setTimeout(() => {
    mario.src = "./images/mario-fly.gif";
  }, 300);

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const cloudsPosition = clouds.offsetLeft;
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  const gameOver =
    pipePosition <= 120 && pipePosition > 0 && marioPosition < 130;

  if (gameOver) {
    btnJump.style.display = "none";

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    ground1.style.animation = "none";
    ground2.style.animation = "none";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.style.display = "none";
    marioGameOver.style.bottom = `${marioPosition}px`;
    marioGameOver.style.display = "block";

    setTimeout(() => {
      jumpSound.pause();
      jumpSound.src = "";
    }, 300);

    setTimeout(() => {
      menu.style.display = "block";
      marioGameOver.style.display = "none";
    }, 3000);

    stageSound.pause();
    gameOverSound.play();

    console.log();

    clearInterval(loop);
    console.log("final do bloco");
  }
}, 10);

btnJump.addEventListener("click", jump);
