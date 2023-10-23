const cardItems = document.querySelectorAll(".card-item");
const pieItems = document.querySelectorAll(".pie");
const historyLines = document.querySelectorAll(".history-line");
let currentIndex = 0;

cardItems[currentIndex].style.display = "block";

updateHistoryElements(currentIndex);

function displayNextCard(index) {
  cardItems[currentIndex].style.display = "none";
  pieItems[currentIndex].classList.remove("active-pie");
  updateHistoryElements(currentIndex, index);

  currentIndex = index;
  currentIndex = index % cardItems.length; //its not updating the index
  console.log(`displayNextCard called with index: ${index}`);
  cardItems[currentIndex].style.display = "block";
  pieItems[currentIndex].classList.add("active-pie");
  updateHistoryElements(currentIndex, index);
}

  

  


  
  
  

function updateHistoryElements(prevIndex, newIndex) {
  for (let i = 0; i < historyLines.length; i++) {
    if (i <= prevIndex && i <= newIndex) {
      historyLines[i].classList.add("active-line");
    } else {
      historyLines[i].classList.remove("active-line");
    }
  }
  
  for (let i = 0; i < pieItems.length; i++) {
    if (i <= prevIndex && i <= newIndex) {
      pieItems[i].classList.add("active-pie");
    } else {
      pieItems[i].classList.remove("active-pie");
    }
  }
}

cardItems.forEach((card, index) => {
  card.addEventListener("click", () => displayNextCard(index));
});

pieItems.forEach((pie, index) => {
  pie.addEventListener("click", () => displayNextCard(index));
});


cardItems.forEach((card, index) => {
  card.addEventListener("click", () => {
    console.log(`Card clicked: ${index}`);
    displayNextCard(index);
  });
});

