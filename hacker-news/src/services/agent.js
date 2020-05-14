async function get(url) {
    return fetch(url)
        .then((response) => {
            return response;
        })
        .then((responseData) => {
            return responseData.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error in get", error);
        });
}

export { get };