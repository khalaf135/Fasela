document.addEventListener("DOMContentLoaded", () => {
    const weatherInfo = document.getElementById("weather-info");
    const locationSpan = document.getElementById("location");
  
    // Geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        // OpenWeatherMap API Key
        const apiKey = "3a352c613f77b641505017a22eb55e6c";
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
        try {
          // Fetch data
          const response = await fetch(weatherApiUrl);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const weatherData = await response.json();
  
          // Extract weather data
          const location = weatherData.name; // Location name
          const temp = Math.round(weatherData.main.temp); // Current temperature
          const feelsLike = Math.round(weatherData.main.feels_like); // Feels like temperature
          const humidity = weatherData.main.humidity; // Humidity percentage
          const weatherDesc = weatherData.weather[0].description; // Weather description
          const windSpeed = weatherData.wind.speed; // Wind speed
          const rainChance = weatherData.rain ? `${weatherData.rain["1h"] || 0}%` : "0%"; // Rain percentage
  
          // Update UI
          locationSpan.textContent = location;
          weatherInfo.textContent = `It's ${temp}°C in ${location} with ${weatherDesc}. Feels like ${feelsLike}°C. Humidity: ${humidity}%. Wind: ${windSpeed} m/s.`;
        } catch (error) {
          console.error("Error fetching weather data:", error);
          weatherInfo.textContent = "Unable to fetch weather data.";
        }
      }, (error) => {
        console.error("Geolocation error:", error);
        weatherInfo.textContent = "Unable to retrieve your location.";
      });
    } else {
      weatherInfo.textContent = "Geolocation is not supported by your browser.";
    }
  });