var inputText = document.getElementsByClassName("text")[0];
var searchBtn = document.getElementsByClassName("btn")[0];
var randomWiki = document.getElementsByClassName("random")[0];
var output = document.getElementsByClassName("output")[0];

searchBtn.addEventListener("click", search);
searchBtn.addEventListener("keypress==13", search);
randomWiki.addEventListener("click", randomWikiArticle);



function search() {
    var searchTerm = inputText.value;

    var url = "https://en.wikipedia.org/w/api.php?";
    var action = "opensearch";
    var search = searchTerm;
    var format = "json";
    var finalUrl = url + "action=" + action + "&search=" + searchTerm + "&format=" + format;

    finalUrl = finalUrl.replace(" ", "%20");

    $.ajax({
            url: finalUrl,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'jsonp',
            success: function (data) {
                console.log(data);
            }
        })
        .done(function (data) {
            var titleNames = data[1];
            var titleDescip = data[2];
            var titleLinks = data[3];
            var ddd = "";
            for (i = 0; i < data[1].length; i++) {
                ddd += "<div class='box'><div class='titleName'><a href=" + data[3][i] + " target='_blank'>" + data[1][i] + "</a></div><div class='titleDesc'>" + data[2][i] + "</div></div><br/><br/>"
                console.log(ddd);
            }
            output.innerHTML = ddd;
        })
        .fail(function (error) {
            console.log(error);
        })
        .always(function () {
            console.log("search complete.");
        });

}

function randomWikiArticle() {
    var link = "https://en.wikipedia.org/wiki/Special:Random";
    window.open(link);
}

// function wikiData() {
//     fetch(url)
//         .then(function (response, reject) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error.msg);
//         })
// }