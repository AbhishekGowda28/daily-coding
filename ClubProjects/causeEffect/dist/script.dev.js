"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var usersUrl = "https://randomuser.me/api/?results=10";
  var userListContainer = document.getElementById("users-list");

  function getUsersList() {
    var users, usersList;
    return regeneratorRuntime.async(function getUsersList$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch(usersUrl));

          case 2:
            users = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(users.json());

          case 5:
            usersList = _context.sent;
            return _context.abrupt("return", usersList);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function displayUserList(userDetails) {
    var user = document.createElement("ul");
    user.innerText = userDetails.name.first;
    user.className = "user";
    userListContainer.appendChild(user);
    user.addEventListener("click", function (event) {
      var other = document.getElementsByClassName("active")[0];

      if (other !== undefined) {
        other.className = "user";
      }

      event.currentTarget.className += " active";
      event.stopPropagation();
      var leftPane = document.getElementById("left-pane");
      leftPane.innerHTML = "";
      var userDetailsPane = document.createElement("div");
      userDetailsPane.innerHTML = "<div><img src=\"".concat(userDetails.picture.large, "\" alt=\"").concat(userDetails.name.first, " ").concat(userDetails.name.last, "\"/><span class=\"userName\">").concat(userDetails.name.first, " ").concat(userDetails.name.last, "</span></div>");
      leftPane.appendChild(userDetailsPane);
    });
  }

  function updateUserList() {
    getUsersList().then(function (users) {
      users.results.forEach(function (userDetails) {
        displayUserList(userDetails);
      });
    });
    ;
  }

  updateUserList();
});