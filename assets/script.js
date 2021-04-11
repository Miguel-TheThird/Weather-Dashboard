var cityInput = document.getElementById("text");
var buttonSearch = document.getElementById("btn");
var currentCity = document.getElementById("current-city");
var city = document.getElementById("city");
var temperatureCity = document.getElementById("temp");
var windCity = document.getElementById("wind");
var humidityCity = document.getElementById("hum");
var forecastDiv = document.getElementById("forecast");

var momentDate = moment();
console.log(momentDate.format("MMM Do YY")); 
console.log(momentDate)

buttonSearch.addEventListener("click", getCity);

function getCity(){
    var urlPiece1 = "https://api.openweathermap.org/data/2.5/weather?q="
    var urlPiece3 = "&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"
    var completeUrl = urlPiece1+cityInput.value+urlPiece3;
    console.log(cityInput.value)
    getApi(completeUrl);
    forecast();
}

function getApi(url) {
    
fetch(url)

    .then(function (response) {
      console.log(response)
      return response.json();
      
    })
    .then(function (data) {
        var weather = data
        city.innerHTML = " " + weather.name
        temperatureCity.innerHTML = " " + weather.main.temp 
        windCity.innerHTML = " " + weather.wind.speed + " km/h"
        humidityCity.innerHTML = " " + weather.main.humidity + "%"
    })
}

function forecast(){
var days = "https://api.openweathermap.org/data/2.5/onecall?lat=-31.9333&lon=115.8333&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"
console.log(days)
fetch(days)

    .then(function (response2) {
      console.log(response2)
      return response2.json();
    })
    .then(function(data2){
        var dailyForecast = data2
        var dateone = dailyForecast.daily[0].dt
        /* var dayname = new Date(dateone * 1000).toLocaleDateString("en", {
            weekday: "long",
        }); */
        
        console.log(dateone)
        /* console.log(dayname) */
        console.log(data2)
        console.log(dailyForecast.daily[0].dt)
    })


}


/* var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=perth&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"; */
//appid=cb4fca7f765f5e2516d83d3e6b738806
