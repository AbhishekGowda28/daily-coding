function initMapInstance() {
    // The location of Bengaluru
    let location = { lat: 12.972442, lng: 77.580643 };
    let ZOOM_LEVEL = 7;
    let map_type = "terrain";
    // Other Map_types -> roadmap, satellite, hybrid, terrain
    let map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: ZOOM_LEVEL,
        center: location,
        mapTypeId: map_type,
    });
    let marker = new google.maps.Marker({ position: location, map: map });
}
