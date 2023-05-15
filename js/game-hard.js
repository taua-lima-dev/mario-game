const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const ground1 = document.querySelector(".ground-1");
const ground2 = document.querySelector(".ground-2");
const clouds = document.querySelector(".clouds");
const menu = document.querySelector("#menu");
const btnJump = document.querySelector(".controller-1");
const btnJumpPressed = document.querySelector(".controller-2");
const marioGameOver = document.querySelector(".mario-game-over");
const bgGameBlack = document.querySelector(".bg-game-black");
const gameOverMsg = document.querySelector("#game-over-msg");
const bullet0 = document.querySelector(".bullet-0");
const bullet1 = document.querySelector(".bullet-1");
const bullet2 = document.querySelector(".bullet-2");
const bullet3 = document.querySelector(".bullet-3");

const jumpSound = document.querySelector("#jumpSound");
const stageSound = document.querySelector("#stageSound");
const gameOverSound = document.querySelector("#gameOver");

const jumping = () => {
  jumpSound.play();
};

const jump = () => {
  mario.classList.add("jump");
  jumping();
  btnJumpPressed.classList.toggle("hidden");
  btnJump.classList.toggle("hidden");

  mario.src = "../images/mario-top.png";

  setTimeout(() => {
    mario.src = "../images/mario-fly.gif";
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

  const gameOver = pipePosition <= 120 && pipePosition > 0 && marioPosition < 666; // 210 colision

  if (gameOver) {
    
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    bullet0.style.animation = "none";
    bullet0.style.left = `${pipePosition}px`;

    bullet1.style.animation = "none";
    bullet1.style.left = `${pipePosition}px`;

    bullet2.style.animation = "none";
    bullet2.style.left = `${pipePosition}px`;

    bullet3.style.animation = "none";
    bullet3.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    ground1.style.animation = "paused";
    ground2.style.animation = "paused";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.style.display = "none";
    marioGameOver.style.bottom = `${marioPosition}px`;
    marioGameOver.style.display = "block";

    gameOverMsg.classList.remove("hidden");

    setTimeout(() => {
      jumpSound.pause();
      jumpSound.src = "";
    }, 300);

    setTimeout(() => {
      gameOverMsg.classList.add("hidden");
      menu.classList.remove("hidden");
      // marioGameOver.style.display = "none";
    }, 3000);

    bgGameBlack.classList.remove("hidden");

    stageSound.pause();
    gameOverSound.play();

    console.log();

    clearInterval(loop);
    console.log("final do bloco");
  }
}, 10);

btnJump.addEventListener("click", jump);
btnJumpPressed.addEventListener("click", jump);
