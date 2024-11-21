document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const diagnoseForm = document.getElementById("diagnoseForm");
  const plantNameInput = document.getElementById("plantName");
  const issueInput = document.getElementById("issue");
  const resultSection = document.getElementById("diagnosis-result");
  const resultMessage = document.getElementById("result-message");
  const loadingIndicator = document.createElement("p");

  const OPENAI_API_KEY = "";

  // Add loading indicator
  loadingIndicator.textContent = "Diagnosing, please wait...";
  loadingIndicator.style.display = "none"; // Initially hidden
  resultSection.appendChild(loadingIndicator);

  // Handle form submission
  diagnoseForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get user input values
    const plantName = plantNameInput.value.trim();
    const issue = issueInput.value.trim();

    // Validate input
    if (!plantName || !issue) {
      alert("Please fill in both the plant name and the issue.");
      return;
    }

    // Show loading state
    resultMessage.textContent = ""; // Clear previous results
    loadingIndicator.style.display = "block"; // Show loading indicator
    resultSection.classList.remove("hidden");

    // Prepare the GPT prompt
    const prompt = `I have a plant named "${plantName}" and it's experiencing the following issue: "${issue}". What could be the possible problem?`;

    try {
      // Call OpenAI API
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003", // Update the model if needed
          prompt: prompt,
          max_tokens: 150,
        }),
      });

      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`Failed to fetch diagnosis: ${response.statusText}`);
      }

      const data = await response.json();
      const diagnosis = data.choices[0]?.text?.trim();

      if (diagnosis) {
        // Show the diagnosis result
        resultMessage.textContent = diagnosis;
      } else {
        throw new Error("No diagnosis found. Please try again.");
      }
    } catch (error) {
      // Handle errors
      resultMessage.textContent = `Error: ${error.message}`;
    } finally {
      // Hide loading indicator
      loadingIndicator.style.display = "none";
    }
  });
});