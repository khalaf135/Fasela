// Example: Dynamically greet the user based on the time of day
document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.querySelector("header h1");
    const currentTime = new Date().getHours();
  
    if (currentTime < 12) {
      greeting.textContent = "Good Morning, Admin!";
    } else if (currentTime < 18) {
      greeting.textContent = "Good Afternoon, Admin!";
    } else {
      greeting.textContent = "Good Evening, Admin!";
    }
  });
  
  // Example: Simulate task completion
  const taskLinks = document.querySelectorAll(".card-action");
  
  taskLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Task completed!");
    });
  });