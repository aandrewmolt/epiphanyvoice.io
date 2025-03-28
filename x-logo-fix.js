// Enhanced script to force X logo to appear and stay visible
(function() {
  // Run immediately when script loads
  function fixXLogo() {
    console.log("Running X logo fix");
    
    // Directly insert X logo in the navigation area
    const navLinks = document.querySelectorAll('.framer-1mv6tsr');
    navLinks.forEach(link => {
      if (link.href && link.href.includes('x.com')) {
        // Force visibility
        link.style.cssText = "opacity: 1 !important; visibility: visible !important; display: block !important;";
        
        // Find containers within this link
        const containers = link.querySelectorAll('*');
        containers.forEach(container => {
          container.style.cssText = "opacity: 1 !important; visibility: visible !important; display: block !important;";
        });
        
        // Find text elements within this link
        const textElements = link.querySelectorAll('p');
        textElements.forEach(element => {
          if (element.textContent === 'X.com') {
            // Create X logo image
            element.innerHTML = '<img src="https://framerusercontent.com/images/XhkhDVL49VxrgmzhUu96bjdpk0.png" alt="X logo" style="height:20px; width:auto;" />';
          }
        });
      }
    });
  }
  
  // Run fix function immediately
  fixXLogo();
  
  // Set up continuous monitoring to ensure the logo stays visible
  function keepChecking() {
    fixXLogo();
    setTimeout(keepChecking, 500); // Check every 500ms indefinitely
  }
  
  // Start continuous monitoring
  keepChecking();
  
  // Also run on DOM content loaded
  document.addEventListener('DOMContentLoaded', fixXLogo);
  
  // And when window loads
  window.addEventListener('load', fixXLogo);
  
  // Set up a MutationObserver to detect DOM changes
  const observer = new MutationObserver(fixXLogo);
  // Start observing once the document body is available
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();
