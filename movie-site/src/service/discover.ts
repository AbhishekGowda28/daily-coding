import { DiscoverType } from "../interface/movie";
import { get } from "./agent";

type GetLatestType = {
    url: string;
    pageNumber?: number;
};

async function getLatest(property: GetLatestType): Promise<DiscoverType> {
    const updatedUrl = `${property.url}&page=${property.pageNumber}`;
    return await get(updatedUrl).then(result => result);
}

export { getLatest };

