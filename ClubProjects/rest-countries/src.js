const Key = "97bca7c621msh8c0be05f0b9cc41p1e484djsn560ff45e3999";
const host = "restcountries-v1.p.rapidapi.com";
const BaseURL = "https://restcountries-v1.p.rapidapi.com"
const endPoints = {
    all: "all"
};
fetch(`${BaseURL}/${endPoints.all}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": Key,
        "x-rapidapi-host": host
    }
}).
    then(response => {
        response.json().
            then(result => {
                const counties = document.getElementById("counties");
                let countryNames = "";
                result.forEach(country => countryNames += country.name + "\n");
                counties.innerText = countryNames
            });
    }).catch(err => {
        console.error(err);
    });
