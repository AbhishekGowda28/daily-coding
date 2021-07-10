/*
 24/7 streaming 

  url ==>  https://wind-bow.glitch.me/twitch-api/streams/medrybw

*/

var twitchObject = {};

var baseUrl = "https://wind-bow.gomix.me/twitch-api";
var channels = "/channels/";
var streams = "/streams/";
var userNames = ["MEDRYBW", "ESL_SC2", "OGAMINGSC2", "CRETETION", "FREECODECAMP", "STORBECK", "HABATHCX", "ROBOTCALEB", "NOOBS2NINJAS", "NINJA", "SUMMIT1G", "NIGHTBLUE3", "AVAJAIJAI"];
var onlineUsers = [];
var offlineUsers = [];
var collection = document.getElementsByClassName("collection")[0];
var temp = "";

var wantToDisplay = "all";

var buttons = document.getElementsByTagName("button");

var all = buttons[0];
var online = buttons[1];
var offline = buttons[2];

all.addEventListener("click", printAllUsers);
online.addEventListener("click", printOnlineUsers);
offline.addEventListener("click", printOfflineUsers);

getTwitchusers();
setTimeout(printAllUsers, 5000);


function getTwitchusers() {
    for (var uName in userNames) {
        var url = baseUrl + channels + userNames[uName];
        var userName = userNames[uName];
        $.ajax({
            url: url,
            dataType: "jsonp",
            async: true,
            success: function (data) {}
        }).done(function (data) {
            var twitchLink = data["url"];
            var status = data["status"];
            var display_name = data["display_name"];
            var logo = data["logo"];
            var banner = "";
            if (data["video_banner"] != null) {
                banner = data["video_banner"];
            } else if (data["banner"] != null) {
                banner = data["banner"];
            } else if (data["profile_banner"] != null) {
                banner = data["profile_banner"];
            } else {
                banner = logo;
            }
            var data = display_name.toString().toUpperCase();
            twitchObject[data] = {
                display_name: data,
                url: twitchLink,
                status: status,
                logo: logo,
                banner: banner,
                online: false
            };
            getTwitchUserStatus(data);
        }).fail(function (error) {
            console.log(error);
        });
    }
}

function renderUsers(banner, twitchLink, logo, display_name, online, status) {

    if (online) {
        temp +=
            `<div class="user">
        <div class="${display_name}" data-online="${online}">
            <a href="${twitchLink}" target="_blank">
                <img class="logo" src="${logo}" alt="${display_name}" height=50px/>
                <div class="name">${display_name}</div>
                <div class="status">${status}</div>
                <div class="live"></div>
            </a>
        </div>
    </div>`;
    } else {
        temp +=
            `
    <div class="user">
        <div class="${display_name}" data-online="${online}">
            <a href="${twitchLink}" target="_blank">
                <img class="logo" src="${logo}" alt="${display_name}" height=50px/>
                <div class="name">${display_name}</div>
            </a>
        </div>
    </div>
`;
    }
    collection.innerHTML = temp;
}

function getTwitchUserStatus(userName) {
    var url = baseUrl + streams + userName;
    $.ajax({
        url: url,
        dataType: "jsonp",
    }).done(function (data) {
        var user = userName.toString().toUpperCase();
        if (data.stream !== null) {
            twitchObject[user].online = true;
            onlineUsers.push(user);
        } else {
            offlineUsers.push(user);
        }
    }).fail(function (error) {
        console.log(error);
    });
}



function caller(value) {
    if (value === "all")
        displayAllUsers(userNames);
    else if (value === "online")
        displayAllUsers(onlineUsers);
    else displayAllUsers(offlineUsers);
}

function displayAllUsers(array) {
    temp = "";
    collection.innerHTML = temp;

    array.forEach((value) => {
        var banner = twitchObject[value].banner,
            twitchLink = twitchObject[value].url,
            logo = twitchObject[value].logo,
            display_name = twitchObject[value].display_name,
            online = twitchObject[value].online,
            status = twitchObject[value].status;
        renderUsers(banner, twitchLink, logo, display_name, online, status);
    });
}

function printAllUsers() {
    caller("all");
}

function printOnlineUsers() {
    caller("online");
}

function printOfflineUsers() {
    caller("offline");
}