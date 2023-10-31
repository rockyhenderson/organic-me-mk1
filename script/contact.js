//nav bar fix
function toggleNavbarNavAltMarkup() {
    var navbarNavAltMarkup = document.getElementById("navbarNavAltMarkup");
  
    if (navbarNavAltMarkup.classList.contains("show")) {
      navbar.style.backgroundColor = 'transparent';
      navbarNavAltMarkup.classList.remove("show");
      
    } else {
      navbarNavAltMarkup.classList.add("show");
      navbar.style.backgroundColor = 'white';
    }
  }