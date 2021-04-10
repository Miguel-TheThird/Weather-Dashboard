var cityInput = document.getElementById("text");
var buttonSearch = document.getElementById("btn");
var currentCity = document.getElementById("current-city");
var city = document.getElementById("city");
var temperatureCity = document.getElementById("temp");
var windCity = document.getElementById("wind");
var humidityCity = document.getElementById("hum");

buttonSearch.addEventListener("click", getCity);

function getCity(){
    var urlPiece1 = "https://api.openweathermap.org/data/2.5/weather?q="
    var urlPiece3 = "&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"
    var completeUrl = urlPiece1+cityInput.value+urlPiece3;
    console.log(cityInput.value)
    getApi(completeUrl);
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


/* var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=perth&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"; */
//appid=cb4fca7f765f5e2516d83d3e6b738806
