document.addEventListener("DOMContentLoaded", () => {

    const usersUrl = "https://my-json-server.typicode.com/abhishekgowda28/sampledata/users";

    const userListContainer = document.getElementById("users-list");

    async function getUsersList() {
        const users = await fetch(usersUrl);
        const usersList = await users.json();
        return usersList;
    }

    function displayUserList(userDetails) {
        const user = document.createElement("ul");
        user.innerText = userDetails.first_name;
        user.className = "user";
        userListContainer.appendChild(user);
        user.addEventListener("click", (event) => {
            const other = document.getElementsByClassName("active")[0];
            if (other !== undefined) {
                other.className = "user";
            }
            event.currentTarget.className += " active"
            event.stopPropagation();
            let leftPane = document.getElementById("left-pane");
            leftPane.innerHTML = "";
            const userDetailsPane = document.createElement("div");
            userDetailsPane.innerHTML = `<div><span>ID</span>${userDetails.id}</div><div><span> Name </span>${userDetails.first_name} ${userDetails.last_name}</div>`;
            leftPane.appendChild(userDetailsPane);
        });
    }

    function updateUserList() {
        getUsersList().then((users) => {
            users.forEach((userDetails) => {
                displayUserList(userDetails);
            });
        });;
    }

    updateUserList();

});