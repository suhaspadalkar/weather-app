const apiKey = "4538280a6656e14c5c4dad9e6f5f0a0b"; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function checkWeather() {
  try {
    var cityInput = document.getElementById("inputSearch").value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    //my
    console.log(data);

    // Access the weather information from the response
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;
    console.log(city);

    // You can display or work with the weather data as needed
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Description: ${description}`);

    document.querySelector(".city").innerHTML = city;
    document.querySelector(".temp").innerHTML = Math.round(temperature) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
