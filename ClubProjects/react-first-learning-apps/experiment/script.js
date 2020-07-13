var planets = [],
    vehicles = [],
    token, falconeLocation, falconeBody;



function getPlanets() {
    var planets_url = "https://findfalcone.herokuapp.com/planets";

    fetch(planets_url, {
            method: "GET"
        })
        .then(function (response, reject) {
            console.log(response);
            if (response.ok)
                return response.json();
        }).then(function (data) {
            console.log(data);
            planets = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getVehicles() {
    var vehicles_url = "https://findfalcone.herokuapp.com/vehicles";

    fetch(vehicles_url, {
            method: "GET"
        })
        .then(function (response, reject) {
            console.log(response);
            if (response.ok)
                return response.json();
        }).then(function (data) {
            console.log(data);
            vehicles = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getToken() {
    var token_url = "https://findfalcone.herokuapp.com/token";

    fetch(token_url, {
            method: 'POST',
            headers: {
                'accept': 'application/json'
            }
        })
        .then(function (response, reject) {
            console.log(response);
            if (response.ok)
                return response.json();
        }).then(function (data) {
            console.log(data);
            token = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}


function updateToken() {

    var data = token["token"];

    falconeBody = {
        "token": data,
        "planet_names": ["Donlon", "Enchai", "Jebing", "Sapir"],
        "vehicle_names": ["Space pod", "Space rocket", "Space rocket", "Space rocket"]
    }
}


function findfalcone() {
    var findFalcone_url = "https://findfalcone.herokuapp.com/find";


    updateToken();
    // console.log("falconeBody----", falconeBody);
    // console.log(JSON.stringify(falconeBody));

    fetch(findFalcone_url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(falconeBody)
        }).then(function (response, reject) {
            // console.log(response);
            // console.log(response.json());
            if (response.ok)
                return response.json();
        }).then(function (data) {
            console.log(data.toString());
            falconeLocation = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function callMe(){
    getPlanets();
    getVehicles();
    getToken();
    findfalcone();
}

// falconeLocation.status; 
/*
    status : success            // gives that planet was found in the given input

    status : failure            // the provided input plantes is not found
    
    status : error              // problem in TOKEN generation



*/

function findThePlanetDistance(planetName){
   var planetFound =  planets.filter((elements) => {
        return elements.name === planetName;
    });
    return planetFound[0].distance;
}

function findVehicleSpeed(vehicleName) {
    var vehicleFound = vehicles.filter((elements)=>{
        return elements.name === vehicleName;
    });
    return vehicleFound[0].speed;
}

function timeTaken(planet, vehicle){
    var planetDistance = findThePlanetDistance(planet);
    var vehicleSpeed = findVehicleSpeed(vehicle);
    var time = planetDistance/vehicleSpeed;
    return time.toFixed(0);
}
