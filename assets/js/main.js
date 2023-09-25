
var APIKey = "356fd7845f0465041cd8fd6125096712";
var city;

var userInput = document.getElementById("userInput");
var searchButton = document.getElementById("searchButton");

var todaysDate = dayjs().format('M/DD/YYYY');
var plus1Day = dayjs().add(1, 'day').format('M/DD/YYYY');
var plus2Days = dayjs().add(2, 'day').format('M/DD/YYYY');
var plus3Days = dayjs().add(3, 'day').format('M/DD/YYYY');
var plus4Days = dayjs().add(4, 'day').format('M/DD/YYYY');
var plus5Days = dayjs().add(5, 'day').format('M/DD/YYYY');












function getUserInput() {

  // city = userInput.value.trim();

  // if (!city) return;
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=New York" + "&appid=" + APIKey;
  $.get(queryURL).then(function (data) {
    (console.log(data));

    var dtResult = data.dt;
    var timestampMilliseconds = data.dt * 1000;
    var date = new Date(timestampMilliseconds);
    var estTimeZone = -5 * 60 * 60 * 1000;
    date.setTime(date.getTime() + estTimeZone);


    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    console.log(month);



    // Current Date
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

    // Plus one day

    // var cityResult = document.getElementById('city1Result');
    // cityResult.innerHTML = data.name;

    var dateResult = document.getElementById('plus1Day');
    dateResult.innerHTML = plus1Day;

    // var tempResult = document.getElementById('temp1Result');
    // tempResult.innerHTML = data.main.temp + '&deg;F';

    // var windResult = document.getElementById('wind1Result');
    // windResult.innerHTML = data.wind.speed;

    // var humidityResult = document.getElementById('humidity1Result');
    // humidityResult.innerHTML = data.main.humidity;



  });






}
// searchButton.addEventListener('click', getUserInput)
getUserInput();




























