document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.querySelector("#password");
    const emailInput = document.getElementById("email"); // Correctly reference the email field
  
    // Toggle Password Visibility
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePassword.textContent = type === "password" ? "👁️" : "🙈";
    });
  
    // Login Form Submission
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const email = emailInput.value; // Get email value
      const password = passwordInput.value; // Get password value
  
      // Predefined credentials
      const validEmail = "MoznAlshehri@gmail.com";
      const validPassword = "mozn";
  
      if (email === validEmail && password === validPassword) {
        // Redirect to home page
        window.location.href = "home.html";
      } else {
        // Show an error message
        alert("Invalid email or password. Please try again.");
      }
    });
  });