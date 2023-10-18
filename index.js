const productBoxContent = document.getElementById('product-box-content-for-js');

function updateContent() {
  if (window.innerWidth < 800) {
    // Load content from a file called "below992Content.html"
    fetch('product-section-content/Bellow992.html')
      .then(response => response.text())
      .then(content => {
        productBoxContent.innerHTML = content;
      })
      .catch(error => console.error('Error loading content:', error));
  } else {
    // Load content from a file called "above992Content.html"
    fetch('product-section-content/Above992.html')
      .then(response => response.text())
      .then(content => {
        productBoxContent.innerHTML = content;
      })
      .catch(error => console.error('Error loading content:', error));
  }
}

// Initial content setup
updateContent();

// Add an event listener to respond to window resize
window.addEventListener('resize', updateContent);
