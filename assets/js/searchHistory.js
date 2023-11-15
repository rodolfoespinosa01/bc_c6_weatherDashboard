// Function to create a button for a city
function createCityButton(cityName) {
  var buttonContainer = document.getElementById("buttonContainer");

  var cityButtonContainer = document.createElement("div"); // Create a new container for each button

  var cityButton = document.createElement("button");
  cityButton.className = "cityButton";
  cityButton.innerText = cityName;

  // Add an event listener to the dynamically created button
  cityButton.addEventListener("click", function () {
    // Call the function to get the forecast for the clicked city
    getForecast(cityName);
    getCurrent(cityName);
  });

  cityButtonContainer.appendChild(cityButton);
  buttonContainer.appendChild(cityButtonContainer);
}
