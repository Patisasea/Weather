var lat;
var long;
var city;
var weather;


$(".button").click(function () {
    $(".input")
        .keyup(function () {
            city = $(this).val();
        })
        .keyup();
    console.log(city);
    pullCity();
})

function pullCity() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b09c26db1fd4f75c2f90565dbd6fb00b`)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            cityLocation(data)
            console.log(data);
        }).catch(function (error) {

        })
}

var cityLocation = function (data) {
    lat = data.child().lat;
    long = data.child().lon;
    console.log(lat + ' ' + long);
}