/*
html
< div id = "map" > < /div>
<!-- Replace the value of the key parameter with your own API key. --> <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap"> </script>


javascript
function initMap() {
    var myLatLng = {
        lat: 0.0,
        lng: 0.0
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}


CSS

* Always set the map height explicitly to define the size of the div * element that contains the map. *
#
map {
    height: 100 % ;
} /* Optional: Makes the sample page fill the window. *
html, body {
    height: 100 % ;margin: 0;padding: 0;
}

*/