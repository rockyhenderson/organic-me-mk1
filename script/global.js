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
  //hamburger fix
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
  //scroll fix