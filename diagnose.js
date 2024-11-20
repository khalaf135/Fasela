document.getElementById("diagnose-btn").addEventListener("click", () => {
    const symptoms = document.getElementById("symptoms").value.trim();
    const resultSection = document.getElementById("diagnosis-result");
    const resultMessage = document.getElementById("result-message");
  
    if (!symptoms) {
      alert("Please describe the symptoms to get a diagnosis.");
      return;
    }
  
    // Simulate a simple diagnosis
    if (symptoms.toLowerCase().includes("yellow leaves")) {
      resultMessage.textContent = "Your plant might have overwatering issues. Reduce watering frequency.";
    } else if (symptoms.toLowerCase().includes("brown spots")) {
      resultMessage.textContent = "Your plant might be getting too much direct sunlight. Consider moving it.";
    } else {
      resultMessage.textContent = "We're not sure. Try consulting a plant expert!";
    }
  
    resultSection.classList.remove("hidden");
  });