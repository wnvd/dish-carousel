const carousel = document.querySelector(".carousel");
const card = document.querySelector(".card");
const descContainer = document.querySelector(".desc");
const slides = document.querySelectorAll(".slide-desc");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");


let degAccu = 0;
let cardNumber = 0;

next.addEventListener('click', () => {
  carousel.style.rotate = `${++degAccu * 90}deg`;

  const firstChild = descContainer.firstElementChild;
  descContainer.removeChild(firstChild);
  descContainer.append(firstChild);

  if (cardNumber < 3) {
    card.style.left = `${++cardNumber * 200}px`;
  } else {
    cardNumber = 0;
    card.style.left = `0px`;
  }
});

prev.addEventListener('click', () => {
  carousel.style.rotate = `${--degAccu * 90}deg`;

  const lastChild = descContainer.lastElementChild;
  descContainer.removeChild(lastChild);
  descContainer.prepend(lastChild);

  if (cardNumber > 0) {
    card.style.left = `${--cardNumber * 200}px`;
  } else {
    cardNumber = 3;
    card.style.left = `600px`;
  }


});
