import { DiscoverType } from "../interface/movie";

async function discover(url: string): Promise<DiscoverType> {
    return await fetch(url, { method: "get" })
        .then(response => response.json())
        .then((result: DiscoverType) => {
            console.log(`${new Date().toLocaleString()}, result`, result);
            return result;
        }).catch(error => {
            console.trace(error);
            return { page: 0, results: [], total_results: 0, total_pages: 0 };
        });
}

export { discover };
