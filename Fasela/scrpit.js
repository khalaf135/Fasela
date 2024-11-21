// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select the animated line
    const line = document.querySelector('.line');
  
    // Start the animation
    line.style.width = '100%'; // Animates the line to full width
  
    // Redirect to the login page after 2 seconds
    setTimeout(() => {
      window.location.href = 'login.html'; // Replace with the correct login page path
    }, 2000); // Match the animation duration
  });