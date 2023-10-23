const cardItems = document.querySelectorAll(".card-item");
const pieItems = document.querySelectorAll(".pie");
let currentIndex = 0;

cardItems[currentIndex].style.display = "block";
pieItems[currentIndex].classList.add("active-pie");

function displayNextCard() {
  cardItems[currentIndex].style.display = "none";
  pieItems[currentIndex].classList.remove("active-pie");

  currentIndex = (currentIndex + 1) % cardItems.length;

  cardItems[currentIndex].style.display = "block";
  pieItems[currentIndex].classList.add("active-pie");
}

function displayNextCardOnClick() {
  displayNextCard();
}

cardItems.forEach((card, index) => {
  card.addEventListener("click", displayNextCardOnClick);
});

pieItems.forEach((pie, index) => {
  pie.addEventListener("click", displayNextCardOnClick);
});
