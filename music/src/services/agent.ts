export async function get(url: string) {
    return fetch(url, { method: "get", headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => { return response.json() })
        .then(result => {
            return result;
        }).catch((error: Error) => {
            console.error(`Error in fetching ${url}`, error.name);
            console.error(error.message)
            console.trace(error.stack);
        });
}
