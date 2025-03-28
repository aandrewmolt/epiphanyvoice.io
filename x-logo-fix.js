// Add this script to directly modify the DOM after page load
window.addEventListener('DOMContentLoaded', function() {
  // Function to replace X.com text with logo
  function replaceXLogo() {
    // Find all elements with text content "X.com"
    const elements = document.querySelectorAll('p');
    elements.forEach(function(element) {
      if (element.textContent === 'X.com') {
        // Create image element
        const img = document.createElement('img');
        img.src = 'https://framerusercontent.com/images/XhkhDVL49VxrgmzhUu96bjdpk0.png';
        img.alt = 'X logo';
        img.style.height = '20px';
        img.style.width = 'auto';
        
        // Replace text with image
        element.innerHTML = '';
        element.appendChild(img);
      }
    });
    
    // Make X.com links visible
    const xLinks = document.querySelectorAll('.framer-1mv6tsr.framer-fkwdww');
    xLinks.forEach(function(link) {
      link.style.opacity = '1';
      link.style.visibility = 'visible';
      link.style.display = 'block';
    });
    
    const xContainers = document.querySelectorAll('.framer-109s9a9-container');
    xContainers.forEach(function(container) {
      container.style.opacity = '1';
      container.style.visibility = 'visible';
      container.style.display = 'block';
    });
  }
  
  // Run immediately
  replaceXLogo();
  
  // Also run after a delay to catch any dynamic updates
  setTimeout(replaceXLogo, 500);
  setTimeout(replaceXLogo, 1000);
  setTimeout(replaceXLogo, 2000);
});
