var appId = "";

// var url = "api.openweathermap.org/data/2.5/weather?lat=13.064&lon=77.64&appid=905501a1aa2f17498593ff42ee138ddd"

var position = null;

var longitude = 13.06;
var latitude = 77.64;

var icon = `http://openweathermap.org/img/w/`



window.navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos);
    longitude = position.coords.longitude.toFixed(2);
    latitude = position.coords.latitude.toFixed(2);
    return position = pos;
});

function getWeatherData() {
    // var url = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`;

    var url = `http://api.openweathermap.org/data/2.5/weather?lat=13.064&lon=77.64&appid=905501a1aa2f17498593ff42ee138ddd`;

    var icon = `http://openweathermap.org/img/w/`


    fetch(url)
        .then((response, reject) => {
            // console.log(response);
            if (response.ok)
                return response.json();
        })
        .then((data) => {
            console.log(data);
            var dataIcon = data.weather[0].icon;
            icon = `${icon}${dataIcon}.png`;
            console.log(icon);
            weatherData = data;
            return data;
        })
        .catch((error) => {
            console.log(error);
        });

}