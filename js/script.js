const mario = document.querySelector('.mario')
const pipe = document.querySelector(".pipe");
const ground1 = document.querySelector('.ground-1')
const ground2 = document.querySelector(".ground-2");

const coinSound = document.querySelector("#coin-sound") /////
const doorSound = document.querySelector("#door-sound") /////

const coinPlay = () => { ///////
  coinSound.play
  return coinPlay
}

const jump = () => {
  mario.classList.add('jump')
  coinPlay() ///////
  setTimeout(()=> {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(()=> {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  const gameOver = pipePosition <= 120 && pipePosition > 0 && marioPosition < 130;
  
  if (gameOver) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    ground1.style.animation = "none";
    ground2.style.animation = "none";    

    mario.src = "./images/mario-game-over.png";
    mario.style.width = "75px"
    mario.style.marginLeft = "50px"

    clearInterval(loop);
  }
}, 10)

document.addEventListener('keydown', jump)