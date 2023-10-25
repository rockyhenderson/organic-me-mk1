const cardItems = document.querySelectorAll(".card-item");
const pieItems = document.querySelectorAll(".pie");
const historyLines = document.querySelectorAll(".history-line");
let currentIndex = 0;

const overlay = document.getElementById('overlay');
const miShowModalButton = document.getElementById('mi-showModalButton');
const miModal = document.getElementById('mi-modal');
const micloseModalButton = document.getElementById('micloseModalButton');
const sarahShowModalButton = document.getElementById('sarah-showModalButton');
const sarahcloseModalButton = document.getElementById('sarahcloseModalButton');
const sarahModal = document.getElementById('sarah-modal');
const michShowModalButton = document.getElementById('mich-showModalButton');
const michModal = document.getElementById('mich-modal');
const michcloseModalButton = document.getElementById('michcloseModalButton');
const olivShowModalButton = document.getElementById('oliv-showModalButton');
const olivModal = document.getElementById('oliv-modal');
const olivcloseModalButton = document.getElementById('olivcloseModalButton');
const markShowModalButton = document.getElementById('mark-showModalButton');
const markModal = document.getElementById('mark-modal');
const markcloseModalButton = document.getElementById('markcloseModalButton');
const johnShowModalButton = document.getElementById('john-showModalButton');
const johnModal = document.getElementById('john-modal');
const johncloseModalButton = document.getElementById('johncloseModalButton');
const rightButtons = document.querySelectorAll('.right-scroll-arrow');
const leftButtons = document.querySelectorAll('.left-scroll-arrow');




// History Bar JS
cardItems[currentIndex].style.display = "block";

function displayNextCard(index) {
  console.log(`INDEX BEFORE UPDATE: ${currentIndex}`);
  cardItems[currentIndex].style.display = "none";
  pieItems[currentIndex].classList.remove("active-pie");
  updateHistoryElements(currentIndex, index);

  currentIndex = (index + 1) % cardItems.length; // Update currentIndex correctly
  console.log(`INDEX AFTER UPDATE: ${currentIndex}`);
  cardItems[currentIndex].style.display = "block";
  pieItems[currentIndex].classList.add("active-pie");
  updateHistoryElements((currentIndex - 1 + cardItems.length) % cardItems.length, currentIndex);
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
//Hisotry bar end here





//modal button js
sarahShowModalButton.addEventListener('click', () => {
    sarahModal.style.display = 'block';
    overlay.style.display = 'block';
});

sarahcloseModalButton.addEventListener('click', () => {
    sarahModal.style.display = 'none';
    overlay.style.display = 'none';
});

michShowModalButton.addEventListener('click', () => {
  michModal.style.display = 'block';
  overlay.style.display = 'block';
});
michcloseModalButton.addEventListener('click', () => {
  michModal.style.display = 'none';
  overlay.style.display = 'none';
});

olivShowModalButton.addEventListener('click', () => {
  olivModal.style.display = 'block';
  overlay.style.display = 'block';
});
olivcloseModalButton.addEventListener('click', () => {
  olivModal.style.display = 'none';
  overlay.style.display = 'none';
});

markShowModalButton.addEventListener('click', () => {
  markModal.style.display = 'block';
  overlay.style.display = 'block';
});
markcloseModalButton.addEventListener('click', () => {
  markModal.style.display = 'none';
  overlay.style.display = 'none';
});

johnShowModalButton.addEventListener('click', () => {
  johnModal.style.display = 'block';
  overlay.style.display = 'block';
});
johncloseModalButton.addEventListener('click', () => {
  johnModal.style.display = 'none';
  overlay.style.display = 'none';
});

miShowModalButton.addEventListener('click', () => {
  miModal.style.display = 'block';
  overlay.style.display = 'block';
});
micloseModalButton.addEventListener('click', () => {
  miModal.style.display = 'none';
  overlay.style.display = 'none';
});
//modal button ends here

//put modal into an array and then scroll thru them with index.





const modals = [sarahModal,michModal, olivModal, markModal, johnModal, miModal];
let modalIndex = 0; 





// show and hide modals
//kill me
function showCurrentModal() {
  $(modals).each(function (index, modal) {
      if (index === modalIndex) {
          console.log(`Value being plugged into the SHOW function is ${modal}`);
          $(modal).show();
      } else {
          console.log(`Value being plugged into the HIDE function is ${modal}`);
          $(modal).hide();
      }
  });
}
leftButtons.forEach(function(button){
  button.addEventListener('click', leftButtonClickHandler);
})
function leftButtonClickHandler(event) {
  // next
  modalIndex = (modalIndex +5 ) % modals.length;
  showCurrentModal();
}

rightButtons.forEach(function(button){
  button.addEventListener('click', rightButtonClickHandler);
})
function rightButtonClickHandler(event) {
  // next
  modalIndex = (modalIndex + 1) % modals.length;
  showCurrentModal();
}