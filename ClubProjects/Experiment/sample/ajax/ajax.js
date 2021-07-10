var btn = document.getElementsByTagName("button")[0];
var output = document.getElementsByTagName("textarea")[0];
var header = document.getElementsByTagName("h1")[0];

btn.addEventListener("click", fetchData);


/*

function fetchData() {
    // var url = "http://api.open-notify.org/astros.json";
    var searchTerm = "data";
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search" + searchTerm + "&format=json&callback=?";
    var jdata = "";
    $.ajax({
        url : url,
        type : 'GET',
        contentType : "application/json; charset=utf-8",
        async : false,
        dataType : "json",
        success: function(data, status, jqXHR){
            console.log(data);
        }
        })
        .done(function (data) {
            console.log(data);
        })
        .fail(function (error) {
            console.log(error);
        })
        .always(function () {
            console.log("This will always be logged.");
        });
}
*/

///*
function fetchData() {
    var url = "http://api.open-notify.org/astros.json";
    var jdata = "";
    fetch(url)
        .then(function (request, reject) {
            console.log(request);
            if (request.ok) {
                return request.json(); 
                // request does not provide the data
                // to get data use request.json() or request.text()
                // request is like header, we have to use json() or text() to featch data. 
            }
        })
        .then(function (data) {
            console.log(data);
            header.innerText = "Number of people in space are "+data["number"]+".";
            for (prop in data["people"]) {
                console.log(data["people"][prop]);

                var d = data["people"][prop];
                for (dd in d) {
                    jdata += dd + " : " + d[dd] + " \n";
                }
            }
            output.innerText = jdata;
        })
        .catch(function (error) {
            output.value = error;
            console.log(error);
        });
    output.innerHTML = jdata;
}

//*/