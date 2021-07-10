async function get(url) {
    return fetch(url)
        .then((response) => {
            return response;
        })
        .then((responseData) => {
            return responseData.json();
        })
        .then((data) => {
            console.log("data", data);
            return data;
        })
        .catch((error) => {
            console.error(`Error in getting data from ${url}`, error);
        });
}

export { get };