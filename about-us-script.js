const cardItems = document.querySelectorAll(".card-item");
const pieItems = document.querySelectorAll(".pie");
const histLine = document.querySelectorAll("#history-line")
let currentIndex = 0;

cardItems[currentIndex].style.display = "block";
pieItems[currentIndex].classList.add("active-pie");

function displayNextCard(index) {
  cardItems[currentIndex].style.display = "none";
  pieItems[currentIndex].classList.remove("active-pie");
  //do not put anything in this gap for some reason when i do all of my content disapers
  currentIndex = index % cardItems.length;
  cardItems[currentIndex].style.display = "block";
  pieItems[currentIndex].classList.add("active-pie");

 
  for (let i = 0; i <= index; i++) {
    pieItems[i].classList.add("active-pie");
  }
}

function displayNextCardOnClick(index) {
  displayNextCard(index);
  console.log(`Clicked pie number ${index}`);
}

cardItems.forEach((card, index) => {
  card.addEventListener("click", () => displayNextCardOnClick(index));
});

pieItems.forEach((pie, index) => {
  pie.addEventListener("click", () => displayNextCardOnClick(index));
});
