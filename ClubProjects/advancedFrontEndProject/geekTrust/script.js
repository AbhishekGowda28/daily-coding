// to disable console display
// console.SetOut(TextWriter.Null);


var planets;
var vehicles;
var baseUrl = "https://findfalcone.herokuapp.com/";

function fetchData() {
    getData("planets");
    getData("vehicles");
}

function getData(value) {
    var url = baseUrl + value;
    console.log(url)
    fetch(url)
        .then(function (response, reject) {
            if (response.ok)
                return response.json();
        }).then(function (data) {
            if (value === "planets")
                planets = data;
            else
                vehicles = data;
        })
        .catch((error) => {
            console.log(error);
        });
}


