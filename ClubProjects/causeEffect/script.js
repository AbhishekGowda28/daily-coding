document.addEventListener("DOMContentLoaded", () => {

    const usersUrl = "https://randomuser.me/api/?results=10";

    const userListContainer = document.getElementById("users-list");

    async function getUsersList() {
        const users = await fetch(usersUrl);
        const usersList = await users.json();
        return usersList;
    }

    function displayUserList(userDetails) {

        const user = document.createElement("ul");
        user.innerText = userDetails.name.first;
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
            userDetailsPane.innerHTML = `<div><img src="${userDetails.picture.large}" alt="${userDetails.name.first} ${userDetails.name.last}"/><span class="userName">${userDetails.name.first} ${userDetails.name.last}</span></div><div>
            #${userDetails.location.street.number} ${userDetails.location.street.name},
            ${userDetails.location.city}, ${userDetails.location.state}, ${userDetails.location.country}
            </div>
            <div>
            <span>Telephone : ${userDetails.phone}</span><br/>
            <span>Cell: ${userDetails.cell}</span>
            </div>
            <div> ${userDetails.dob.date}</div>
            `;
            leftPane.appendChild(userDetailsPane);
        });
    }

    function updateUserList() {
        getUsersList().then((users) => {
            users.results.forEach((userDetails) => {
                displayUserList(userDetails);
            });
        });;
    }

    updateUserList();

});