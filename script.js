var cityInput = document.getElementById("text");
var buttonSearch = document.getElementById("btn");
var currentCity = document.getElementById("current-city");
var city = document.getElementById("city");
var temperatureCity = document.getElementById("temp");
var windCity = document.getElementById("wind");
var humidityCity = document.getElementById("hum");
var forecastDiv = document.getElementById("forecast");

//Forecast Blocks
var date1 = document.getElementById("date1");
var temp1 = document.getElementById("temp1");
var wind1 = document.getElementById("wind1");
var hum1 = document.getElementById("hum1");

var date2 = document.getElementById("date2");
var temp2 = document.getElementById("temp2");
var wind2 = document.getElementById("wind2");
var hum2 = document.getElementById("hum2");

var date3 = document.getElementById("date3");
var temp3 = document.getElementById("temp3");
var wind3 = document.getElementById("wind3");
var hum3 = document.getElementById("hum3");

var date4 = document.getElementById("date4");
var temp4 = document.getElementById("temp4");
var wind4 = document.getElementById("wind4");
var hum4 = document.getElementById("hum4");

var date5 = document.getElementById("date5");
var temp5 = document.getElementById("temp5");
var wind5 = document.getElementById("wind5");
var hum5 = document.getElementById("hum5");

var momentDate = moment();
console.log(momentDate.format("MMM Do YY")); 
console.log(momentDate)

buttonSearch.addEventListener("click", getCity);

function getCity(){
    var urlPiece1 = "https://api.openweathermap.org/data/2.5/weather?q="
    var urlPiece3 = "&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"
    var completeUrl = urlPiece1+cityInput.value+urlPiece3;
    console.log(completeUrl);
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
        var longitude = weather.coord.lon
        console.log(longitude)
        var latitude = weather.coord.lat
        console.log(latitude)
        forecast(longitude,latitude);
    })
}

function forecast(long,lati){
var urlPiece1 = "https://api.openweathermap.org/data/2.5/onecall?lat="
var piece2 = lati
var lonPiece3 = "&lon="
var piece4 = long
var urlPiece5 =  "&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"

var days = urlPiece1+piece2+lonPiece3+piece4+urlPiece5 
console.log(days)
fetch(days)

    .then(function (response2) {
      console.log(response2)
      return response2.json();
    })
    .then(function(data2){
        var dailyForecast = data2

        var dateone = dailyForecast.daily[1].dt //Starts from 1 because 0 is the current day and you want the next one
        var day = new Date(dateone * 1000) //pass the dt for the specific day and multiply it to the current date, otherwise you get and OLD date(still need to lear about this one) 
        var d = day.toLocaleDateString(); //This method converts the date (not the time) of a Date object into a readable string(need to learn more)
        console.log(day);
        console.log(d);

        var tempone = dailyForecast.daily[1].temp.day
        var windone = dailyForecast.daily[1].wind_speed
        var humone = dailyForecast.daily[1].humidity       
        date1.innerHTML = d
        temp1.innerHTML = tempone
        wind1.innerHTML = windone
        hum1.innerHTML = humone

        /* console.log(dateone) */
        /* console.log(dayname) */
        /* console.log(data2)
        console.log(dailyForecast.daily[0].dt) */

        var dateTwo = dailyForecast.daily[2].dt
        var day = new Date(dateTwo * 1000) //pass the dt for the specific day 
        var d = day.toLocaleDateString();

        var tempTwo = dailyForecast.daily[2].temp.day
        var windTwo = dailyForecast.daily[2].wind_speed
        var humTwo = dailyForecast.daily[2].humidity       
        date2.innerHTML = d
        temp2.innerHTML = tempTwo
        wind2.innerHTML = windTwo
        hum2.innerHTML = humTwo

        var dateThree = dailyForecast.daily[3].dt
        var day = new Date(dateThree * 1000) //pass the dt for the specific day 
        var d = day.toLocaleDateString();
        
        var tempThree = dailyForecast.daily[3].temp.day
        var windThree = dailyForecast.daily[3].wind_speed
        var humThree = dailyForecast.daily[3].humidity       
        date3.innerHTML = d
        temp3.innerHTML = tempThree
        wind3.innerHTML = windThree
        hum3.innerHTML = humThree

        var dateFour = dailyForecast.daily[4].dt
        var day = new Date(dateFour * 1000) //pass the dt for the specific day 
        var d = day.toLocaleDateString();

        var tempFour = dailyForecast.daily[4].temp.day
        var windFour = dailyForecast.daily[4].wind_speed
        var humFour = dailyForecast.daily[4].humidity       
        date4.innerHTML = d
        temp4.innerHTML = tempFour
        wind4.innerHTML = windFour
        hum4.innerHTML = humFour

        var dateFive = dailyForecast.daily[5].dt
        var day = new Date(dateFive * 1000) //pass the dt for the specific day 
        var d = day.toLocaleDateString();

        var tempFive = dailyForecast.daily[5].temp.day
        var windFive = dailyForecast.daily[5].wind_speed
        var humFive = dailyForecast.daily[5].humidity       
        date5.innerHTML = d
        temp5.innerHTML = tempFive
        wind5.innerHTML = windFive
        hum5.innerHTML = humFive
    })


}


/* var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=perth&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"; */
//appid=cb4fca7f765f5e2516d83d3e6b738806

// FORECAST: "https://api.openweathermap.org/data/2.5/onecall?lat=-31.9333&lon=115.8333&units=metric&appid=cb4fca7f765f5e2516d83d3e6b738806"

/* var dayname = new Date(dateone * 1000).toLocaleDateString("en", {
    weekday: "long",
    
}); */
