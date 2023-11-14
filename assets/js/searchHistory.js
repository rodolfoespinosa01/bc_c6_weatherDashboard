// Function to create a button for a city
function createCityButton(cityName) {
  var buttonContainer = document.getElementById("buttonContainer");

  var cityButton = document.createElement("button");
  cityButton.className = "cityButton";
  cityButton.innerText = cityName;

  // Add an event listener to the dynamically created button
  cityButton.addEventListener("click", function () {
    // Call the function to get the forecast for the clicked city
    getForecast(cityName);
    getCurrent;
  });

  buttonContainer.appendChild(cityButton);
}

// Function to handle the city search
function searchCity() {
  var cityInput = document.getElementById("cityInput");
  var cityName = cityInput.value;

  // Call the function to create a button for the searched city
  createCityButton(cityName);
}

// Add an event listener to the "Search" button
document.getElementById("searchButton").addEventListener("click", searchCity);
