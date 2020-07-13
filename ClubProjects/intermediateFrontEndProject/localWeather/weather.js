var latitude = "";
var longitude = "";

var weatherURL = "https://fcc-weather-api.glitch.me/";
var weatherApi;

var toggleTemp;
var temperatureUnit = "C";

function toggleTemperature() {

    if (temperatureUnit == "F") {
        fTemp = toggleTemp;
        console.log("Temperature " + fTemp + " C");
        $(".mainTemp").html(fTemp.toFixed(2) + " C");
        temperatureUnit = "C";
    } else {
        fTemp = toggleTemp * 9 / 5 + 32;
        console.log("Temperature " + fTemp + " F");
        $(".mainTemp").html(fTemp.toFixed(2) + " F");
        temperatureUnit = "F";
    }
}



/*
 * Getting the location of the client
 */
navigator.geolocation.getCurrentPosition(function (pos) {
    var coordinates = pos.coords;
    latitude = coordinates.latitude;
    longitude = coordinates.longitude;

    // Preparing the Api to be sent to fetch weather of the client location.
    weatherApi = weatherURL + "api/current?lat=" + latitude + "&lon=" + longitude;
    console.debug(weatherApi);
    var weatherJson;
    $(document).ready(function () {
        $.getJSON(weatherApi, function (data) {
            weatherJson = JSON.stringify(data);

            console.log(latitude + " : " + longitude);


            // Element that stores small-weather icon.
            var img = document.getElementById("small-img");


            // Parse the stringfyd data and then pass it as the imgURL
            let weatherData = JSON.parse(weatherJson);

            // url of small img 
            var imgUrl = weatherData["weather"][0]["icon"];


            /*
             *  weather data fetched
             */
            const temperature = weatherData["main"]["temp"];
            const maxTemp = weatherData["main"]["temp_max"];
            const minTemp = weatherData["main"]["temp_min"];
            const pressure = weatherData["main"]["pressure"];
            const humidity = weatherData["main"]["humidity"];
            const location = weatherData["name"];
            const country = weatherData["sys"]["country"];
            const weatherDescription = weatherData["weather"][0]["description"];
            const windSpeed = weatherData["wind"]["speed"];

            var mainWeather = weatherData["weather"][0]["main"];

            mainWeather = mainWeather.toLowerCase();

            var bgImg = './images/morning.jpg';


            // Background image
            if (mainWeather === "clouds")
                bgImg = "./images/clouds.jpg"
            if (mainWeather === "thunderstorm")
                bgImg = "./images/thunderstorm.jpg"
            if (mainWeather === "clear")
                bgImg = "./images/clearSky.png"
            if (mainWeather === "rain")
                bgImg = "./images/rain.jpg"
            if (mainWeather === "mist" || mainWeather === "haze" || mainWeather === "fog")
                bgImg = "./images/fog.jpg"
            if (mainWeather === "snow")
                bgImg = "./images/cold.jpg"
            if (mainWeather === "smoke")
                bgImg = "./images/smoke.jpg"
            if (mainWeather === "dust")
                bgImg = "./images/dust.jpg"
            if (mainWeather === "tornado")
                bgImg = "./images/tornado.jpg"

            document.getElementsByClassName("bgImg")[0].style.backgroundImage = 'url(' + bgImg + ')';

            toggleTemp = temperature;

            /**
             * Fetching small-img of local weather
             */
            if (imgUrl !== undefined)
                fetch(imgUrl).then(function (respose) {
                    return respose.blob();
                }).then(function (myBlob) {
                    var objectUrl = URL.createObjectURL(myBlob);
                    img.src = objectUrl;
                });



            // $("#json").html(weatherJson); // display the fetched JSON
            $(".mainTemp").html(temperature + " C");
            $(".tMax").html("- " + maxTemp + " C");
            $(".tMin").html("Temperature : " + minTemp + " C");
            $(".pressure").html("Pressure : " + pressure + " Pa");
            $(".humidity").html("Humidity : " + humidity + " mb");
            $(".location").html("Location : " + location + ", " + country);
            $(".weatherDescription").html(weatherDescription.toUpperCase());
            $(".wind").html("Wind Speed : " + windSpeed + " Knot");
        });
    });
});