export async function get(url: string): Promise<any> {
    return await fetch(url, { method: "get" })
        .then(response => response.json())
        .then((result: any) => {
            return result;
        }).catch(error => {
            console.trace(error);
            throw error;
        });
}