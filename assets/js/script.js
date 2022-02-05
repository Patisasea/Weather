var lat;
var lon;
var city;
var weather;
var cityLocation;


$(".button").click(function () {
    $(".input")
        .keyup(function () {
            city = $(this).val();
        })
        .keyup();
    console.log(city);
    pullCity();
})

async function pullCity() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b09c26db1fd4f75c2f90565dbd6fb00b`)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            cityLocation = data[0];
            console.log(cityLocation);
        }).then(function(){
            cityCords();
        }).then(function(){
            forcast();
        }).catch(function (error) {

        })
    
}

function cityCords(){
    lat = cityLocation.lat;
    lon = cityLocation.lon;
    console.log(lat + " " + lon)
}

function forcast(){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=b09c26db1fd4f75c2f90565dbd6fb00b`)
    .then(function(response){
        return response.json();
    }).then(function(data){
        weather = data;
        console.log(weather);
    })
}