const properties = {
    authentication_url: ""
};
const method = "post";

fetch(properties.authentication_url, method)
    .then((response) => {
        console.log(response);
    })
    .catch(err => {
        console.error("Error authenticating", err);
    });
