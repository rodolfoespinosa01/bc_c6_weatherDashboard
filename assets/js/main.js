


var cityInput = document.querySelector('#cityInput');
var APIKey = '356fd7845f0465041cd8fd6125096712';
var searchButton = document.querySelector('#searchButton');
var todaysDate = dayjs().format('M/DD/YYYY');

function displayCurrent() {

}

function displayForecast() {

}

function getForecast(city) {
  var fiveDayAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey;
  fetch(fiveDayAPI)
    .then(function (res) {
      return res.json();
    }).then(function (data) {
      var filterByMidDay = data.list.filter(function (day) {
        if (day.dt_txt.split(' ')[1] === '12:00:00') {
          return day;
        }

      }); console.log(filterByMidDay);
    })
}


function getCurrent(city) {

  var url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + " &appid=" + APIKey;

  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {


    var cityResult = document.getElementById('cityResult');
    cityResult.innerHTML = data.name;

    var dateResult = document.getElementById('todaysDateResult');
    dateResult.innerHTML = '(' + todaysDate + ')';

    var tempResult = document.getElementById('tempResult');
    tempResult.innerHTML = data.main.temp + '&deg;F';

    var windResult = document.getElementById('windResult');
    windResult.innerHTML = data.wind.speed;

    var humidityResult = document.getElementById('humidityResult');
    humidityResult.innerHTML = data.main.humidity;

  })
}

function getWeather() {
  var city = cityInput.value;
  getCurrent(city);
  getForecast(city);
}



searchButton.addEventListener('click', getWeather);