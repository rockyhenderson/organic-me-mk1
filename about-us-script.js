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
const fillerPie = document.getElementById("filler-pie");
const pieZero = document.querySelector(".pie-zero");
const lineZero = document.querySelector(".line-zero");
const firstSlide = document.querySelector(".card-1");




// History Bar JS
cardItems[currentIndex].style.display = "block";

function displayNextCard(index) {
  document.querySelector(".card-1").style.display = "none";
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
fillerPie.addEventListener("click", function () {

  document.querySelector(".pie-zero").classList.remove("active-pie");
  document.querySelector(".line-zero").classList.remove("active-line");
  document.querySelector(".pie-1").classList.remove("active-pie");
  document.querySelector(".pie-2").classList.remove("active-pie");
  document.querySelector(".pie-3").classList.remove("active-pie");
  document.querySelector(".pie-4").classList.remove("active-pie");
  document.querySelector(".pie-5").classList.remove("active-pie");
  document.querySelector(".pie-6").classList.remove("active-pie");
  document.querySelector(".pie-7").classList.remove("active-pie");
  document.querySelector(".pie-8").classList.remove("active-pie");
  document.querySelector(".line-1").classList.remove("active-line");
  document.querySelector(".line-2").classList.remove("active-line");
  document.querySelector(".line-3").classList.remove("active-line");
  document.querySelector(".line-4").classList.remove("active-line");
  document.querySelector(".line-5").classList.remove("active-line");
  document.querySelector(".line-6").classList.remove("active-line");
  document.querySelector(".line-7").classList.remove("active-line");
  document.querySelector(".line-8").classList.remove("active-line");
  document.querySelector(".card-1").style.display = "block";
  document.querySelector(".card-2").style.display = "none";
  document.querySelector(".card-3").style.display = "none";
  document.querySelector(".card-4").style.display = "none";
  document.querySelector(".card-5").style.display = "none";
  document.querySelector(".card-6").style.display = "none";
  document.querySelector(".card-7").style.display = "none";
  document.querySelector(".card-8").style.display = "none";
  document.querySelector(".card-9").style.display = "none";
});
//Hisotry bar end here

//ACORDIAN
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function toggleRotateImage1() {
  var img = document.getElementById("down-arrow-1");

  if (img) {
      var currentRotation = img.style.transform;

      if (currentRotation === "" || currentRotation === "rotate(0deg)") {
          img.style.transition = "transform 0.5s";
          img.style.transform = "rotate(180deg)";
      } else if (currentRotation === "rotate(180deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(0deg)";
      }
  } else {
      console.log("Image with id 'down-arrow' not found.");
  }
}
function toggleRotateImage2() {
  var img = document.getElementById("down-arrow-2");

  if (img) {
      var currentRotation = img.style.transform;

      if (currentRotation === "" || currentRotation === "rotate(0deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(180deg)";
      } else if (currentRotation === "rotate(180deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(0deg)";
      }
  } else {
      console.log("Image with id 'down-arrow' not found.");
  }
}
function toggleRotateImage3() {
  var img = document.getElementById("down-arrow-3");

  if (img) {
      var currentRotation = img.style.transform;

      if (currentRotation === "" || currentRotation === "rotate(0deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(180deg)";
      } else if (currentRotation === "rotate(180deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(0deg)";
      }
  } else {
      console.log("Image with id 'down-arrow' not found.");
  }
}
function toggleRotateImage4() {
  var img = document.getElementById("down-arrow-4");

  if (img) {
      var currentRotation = img.style.transform;

      if (currentRotation === "" || currentRotation === "rotate(0deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(180deg)";
      } else if (currentRotation === "rotate(180deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(0deg)";
      }
  } else {
      console.log("Image with id 'down-arrow' not found.");
  }
}
function toggleRotateImage5() {
  var img = document.getElementById("down-arrow-5");

  if (img) {
      var currentRotation = img.style.transform;

      if (currentRotation === "" || currentRotation === "rotate(0deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(180deg)";
      } else if (currentRotation === "rotate(180deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(0deg)";
      }
  } else {
      console.log("Image with id 'down-arrow' not found.");
  }
}
function toggleRotateImage6() {
  var img = document.getElementById("down-arrow-6");

  if (img) {
      var currentRotation = img.style.transform;

      if (currentRotation === "" || currentRotation === "rotate(0deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(180deg)";
      } else if (currentRotation === "rotate(180deg)") {
          img.style.transition = "transform 0.5s"; 
          img.style.transform = "rotate(0deg)";
      }
  } else {
      console.log("Image with id 'down-arrow' not found.");
  }
}
//ACCORDAIN 

//navbar scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'white';
    navbar.style.border = '1px lightgrey solid'
  } else {
    navbar.style.backgroundColor = ''; 
    navbar.style.border = 'none'
  }
});

//navbarscroll end
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
function toggleNavbarNavAltMarkup() {
  var navbarNavAltMarkup = document.getElementById("navbarNavAltMarkup");

  if (navbarNavAltMarkup.classList.contains("show")) {
    navbarNavAltMarkup.classList.remove("show");
  } else {
    navbarNavAltMarkup.classList.add("show");
  }
}

