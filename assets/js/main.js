var cityInput = document.querySelector("#cityInput");
var APIKey = "356fd7845f0465041cd8fd6125096712";
var searchButton = document.querySelector("#searchButton");
var todaysDate = dayjs().format("M/DD/YYYY");
var plus1Day = dayjs(todaysDate).add(1, "day").format("M/DD/YYYY");
var plus2Days = dayjs(todaysDate).add(2, "day").format("M/DD/YYYY");
var plus3Days = dayjs(todaysDate).add(3, "day").format("M/DD/YYYY");
var plus4Days = dayjs(todaysDate).add(4, "day").format("M/DD/YYYY");
var plus5Days = dayjs(todaysDate).add(5, "day").format("M/DD/YYYY");

function displayCurrent() {}

function displayForecast() {}

function getForecast(city) {
  var fiveDayAPI =
    "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" +
    city +
    "&appid=" +
    APIKey;
  fetch(fiveDayAPI)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var filterByMidDay = data.list.filter(function (day) {
        if (day.dt_txt.split(" ")[1] === "12:00:00") {
          return day;
        }
      });

      // Plus 1 day
      var dateResult = document.getElementById("plus1Day");
      dateResult.innerHTML = "(" + plus1Day + ")";

      var tempResult = document.getElementById("temp1Result");
      tempResult.innerHTML = filterByMidDay[0].main.temp + "&deg;F";

      var windResult = document.getElementById("wind1Result");
      windResult.innerHTML = filterByMidDay[0].wind.speed;

      var humidityResult = document.getElementById("humidity1Result");
      humidityResult.innerHTML = filterByMidDay[0].main.humidity;

      // Plus 2 days
      var dateResult = document.getElementById("plus2Days");
      dateResult.innerHTML = "(" + plus2Days + ")";

      var tempResult = document.getElementById("temp2Result");
      tempResult.innerHTML = filterByMidDay[1].main.temp + "&deg;F";

      var windResult = document.getElementById("wind2Result");
      windResult.innerHTML = filterByMidDay[1].wind.speed;

      var humidityResult = document.getElementById("humidity2Result");
      humidityResult.innerHTML = filterByMidDay[1].main.humidity;

      // Plus 3 days
      var dateResult = document.getElementById("plus3Days");
      dateResult.innerHTML = "(" + plus3Days + ")";

      var tempResult = document.getElementById("temp3Result");
      tempResult.innerHTML = filterByMidDay[2].main.temp + "&deg;F";

      var windResult = document.getElementById("wind3Result");
      windResult.innerHTML = filterByMidDay[2].wind.speed;

      var humidityResult = document.getElementById("humidity3Result");
      humidityResult.innerHTML = filterByMidDay[2].main.humidity;

      // Plus 4 days
      var dateResult = document.getElementById("plus4Days");
      dateResult.innerHTML = "(" + plus4Days + ")";

      var tempResult = document.getElementById("temp4Result");
      tempResult.innerHTML = filterByMidDay[3].main.temp + "&deg;F";

      var windResult = document.getElementById("wind4Result");
      windResult.innerHTML = filterByMidDay[3].wind.speed;

      var humidityResult = document.getElementById("humidity4Result");
      humidityResult.innerHTML = filterByMidDay[3].main.humidity;

      // Plus 5 days
      var dateResult = document.getElementById("plus5Days");
      dateResult.innerHTML = "(" + plus5Days + ")";

      var tempResult = document.getElementById("temp5Result");
      tempResult.innerHTML = filterByMidDay[4].main.temp + "&deg;F";

      var windResult = document.getElementById("wind5Result");
      windResult.innerHTML = filterByMidDay[4].wind.speed;

      var humidityResult = document.getElementById("humidity5Result");
      humidityResult.innerHTML = filterByMidDay[4].main.humidity;

      console.log(filterByMidDay);
    });
}

function getCurrent(city) {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
    city +
    " &appid=" +
    APIKey;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var cityResult = document.getElementById("cityResult");
      cityResult.innerHTML = data.name;

      var dateResult = document.getElementById("todaysDateResult");
      dateResult.innerHTML = "(" + todaysDate + ")";

      var tempResult = document.getElementById("tempResult");
      tempResult.innerHTML = data.main.temp + "&deg;F";

      var windResult = document.getElementById("windResult");
      windResult.innerHTML = data.wind.speed;

      var humidityResult = document.getElementById("humidityResult");
      humidityResult.innerHTML = data.main.humidity;

      console.log(data);
    });
}

function getWeather() {
  var city = cityInput.value;
  getCurrent(city);
  getForecast(city);

  createCityButton(city);

  cityInput.value = "";
}

// Add an event listener to the "Search" button
searchButton.addEventListener("click", getWeather);
