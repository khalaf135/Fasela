document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Show success popup
    const popup = document.querySelector(".success-popup");
    popup.style.display = "block";
  
    // Close popup on button click
    document.querySelector(".close-btn").addEventListener("click", () => {
      popup.style.display = "none";
    });
  });
  