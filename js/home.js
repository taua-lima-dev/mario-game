const coinImg1 = document.querySelector(".coin1");
const coinImg2 = document.querySelector(".coin2");

const coinSound = document.querySelector("#coinSound");
// const titleSound = document.querySelector("#title-music");

const coinPlay = () => {
  coinSound.play();
};

coinImg1.addEventListener("click", coinPlay);
coinImg2.addEventListener("click", coinPlay);

