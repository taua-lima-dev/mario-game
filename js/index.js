const coinImg1 = document.querySelector(".coin1");
const coinImg2 = document.querySelector(".coin2");
const info = document.querySelector("#info")
const windowDirections = document.querySelector("#window-directions");
const logo = document.querySelector("#logo");
const menu = document.querySelector("#menu");
const title = document.querySelector("#title");
const btnClose = document.querySelector("#btn-close");


const coinSound = document.querySelector("#coinSound");
// const titleSound = document.querySelector("#title-music");

const coinPlay = () => {
  coinSound.play();
};

const HowToPlay = () => {
  coinSound.play();
  windowDirections.classList.remove("hidden")
  logo.classList.add("hidden")
  menu.classList.add("hidden");
  title.classList.add("hidden");
}

const msgClose = () => {
  coinSound.play();
  windowDirections.classList.add("hidden")
  logo.classList.remove("hidden")
  menu.classList.remove("hidden");
  title.classList.remove("hidden");
}

coinImg1.addEventListener("click", coinPlay);
coinImg2.addEventListener("click", coinPlay);
info.addEventListener("click", HowToPlay);
btnClose.addEventListener("click", msgClose)

