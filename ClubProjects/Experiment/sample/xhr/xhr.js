var xhr = new XMLHttpRequest();
var textFile = "./sample.txt";
var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
var data = null;

var textBtn = document.getElementById("btn-text");
var jsonBtn = document.getElementById("btn-json");
var outputBox = document.getElementsByClassName("output")[0];

textBtn.addEventListener("click", fetchTextData);
jsonBtn.addEventListener("click", fetchJsonData);


function fetchTextData() {
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            data = xhr.responseText;
            console.log("data fetched");
            outputBox.innerHTML = data;
        }
    }
    xhr.open("GET", textFile);
    xhr.send();
}

function fetchJsonData() {
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            data = xhr.responseText;
            console.log(JSON.parse(data));
            console.log("data fetched");
            outputBox.innerHTML = data;
        }
    }
    xhr.open("GET", url);
    xhr.send();
}