var baseUrl = "https://wind-bow.gomix.me/twitch-api";
var users = "/users/";
var channels = "/channels/";
var streams = "/streams/";


var collection = document.getElementsByClassName("collection")[0];

/*
 24/7 streaming 

  url ==>  https://wind-bow.glitch.me/twitch-api/streams/medrybw

*/


var userNames = ["medrybw", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var link = [];
var image = [];
var tName = [];
var checkOnline = false;
var d = "";

for (var uName in userNames) {
    var url = baseUrl + channels + userNames[uName];
    console.log(url);
    $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "jsonp",
            success: function (data) {
                return data;
            }
        })
        .done(function (data) {
            // console.log(data);
            link.push(data["url"]);
            tName.push(data["name"]);
            image.push(data["logo"]);
            // console.log(data["url"]);
            // console.log(data["logo"]);

            var onlineUrl = baseUrl + streams + userNames[uName];
            console.log(onlineUrl);
            $.ajax({
                url: onlineUrl,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "jsonp",
                success: function (datas) {
                    return datas;
                }
            }).done(function (datas) {
                console.log(datas);
                if (datas["stream"] !== null) {
                    checkOnline = true;
                } else {
                    checkOnline = false;
                }

            }).fail(function (error) {
                console.log(error);
            });
            if (checkOnline) {
                alert();
                d += "<div><a href='" + data['url'] + "' target='_blank'><img src='" + data['logo'] + "' alt='" + data['name'] + "' height='50px'/><span>" + data['name'] + "</span><span>Online</span</a></div>"
            } else {
                d += "<div><a href='" + data['url'] + "' target='_blank'><img src='" + data['logo'] + "' alt='" + data['name'] + "' height='50px'/><span>" + data['name'] + "</span></div>"
            };
            collection.innerHTML = d;
        })
        .fail(function (error) {
            console.log(error);
        })
        .always(function () {
            // console.log("This will always be logged.");
        });
}


(function twitchStream() {
    var url = baseUrl + streams + userNames[uName];
    console.log(url);

    $.ajax({
        url: url,
        dataType: "jsonp",
    }).done(function (data) {
        console.log(data);
    }).fail(function (error) {
        console.log(error);
    });
})();