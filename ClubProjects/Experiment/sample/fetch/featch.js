document.getElementById("btn-text").addEventListener("click", getTextData);
document.getElementById("btn-json").addEventListener("click", getJsonData);


function getTextData() {
    fetch("./sample.txt")
        .then(function (response, reject) {
            if (response.ok) {
                console.log(response);
                return response.text();
            }
        }).then(function (data) {
            var store = document.getElementsByClassName("output");
            store[0].innerHTML = data;
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getJsonData() {
    var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

    fetch(url)
        .then(function (response, reject) {
            console.log(response);
            if (response.ok) {
                return response.json();
            }
            return new Error(response);
        })
        .then(function (data) {
            // console.log(data);
            var output = "<h2>Data</h2>"
            for (prop in data) {
                var contents = "<b>" + prop + "</b><p>" + data[prop] + "</p>";
                console.log(contents);
                output += contents
            }
            document.getElementsByClassName("output")[0].innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}