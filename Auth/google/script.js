document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("login-button");
    const googleClientID = "550963546957-8af6kn0flq4bnbmsfvt8go1rp53mdp09.apps.googleusercontent.com";
    const googleClientSecret = "TMyogdCYkTuErmQ0jdszX6R6";
    const authorizeURL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const tokenURL = 'https://www.googleapis.com/oauth2/v4/token';
    const baseURL = "http:localhost:5500";
    button.addEventListener("click", () => {
        console.log("Clicked on login button");
        fetch(authorizeURL, { mode: "no-cors" }).
            then(response => {
                console.log(response.json());
                return response.json();
            }).
            then(result => {
                console.log("Result", result);
            }).
            catch(error => {
                console.error("Error", error);
            });
    });
});