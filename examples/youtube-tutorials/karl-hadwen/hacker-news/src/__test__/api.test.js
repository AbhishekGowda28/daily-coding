import { singularStory, emptyStory, storyIds } from "../fixture/Story";
import {get } from "../services/agent";
import { getItem, getNewStorieIds } from "../services/api";
import { HackerNewsURL } from "../constants/url";

jest.mock("../services/agent", () => ({
    get: jest.fn(),
}));


describe("Testing API", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe(("Testing getItem"), () => {
        test("Called with url", async() => {
            get.mockImplementation(() => Promise.resolve(singularStory));

            await getItem(1);
            expect(get).toHaveBeenCalledWith(`${HackerNewsURL.ITEM}1.json`);
        });

        test("Number of times called", async() => {
            get.mockImplementation(() => Promise.resolve(singularStory));

            await getItem(1);
            expect(get).toHaveBeenCalledTimes(1);
        });

        test("Test data equality", async() => {
            get.mockImplementation(() => Promise.resolve(singularStory));

            const entity = await getItem(1);
            expect(entity).toEqual(singularStory);
        });

        test("Test when request fails", async() => {
            get.mockImplementation(() => Promise.resolve(emptyStory));

            const entity = await getItem(1);
            expect(entity).toEqual(emptyStory);
        });
        test("Test for null data", async() => {
            get.mockImplementation(() => Promise.resolve(null));

            const entity = await getItem();
            expect(entity).toBeFalsy();
        });
    });

    describe("Testing getNewStorieIds", () => {
        test("Called with new Stories url", async() => {
            get.mockImplementation(() => Promise.resolve(storyIds));

            await getNewStorieIds();
            expect(get).toHaveBeenCalledWith(HackerNewsURL.NEW_STORIES);
        });

        test("New stories called number of times called", async() => {
            get.mockImplementation(() => Promise.resolve(storyIds));

            await getNewStorieIds();
            expect(get).toHaveBeenCalledTimes(1);
        });

        test("Test for data equality of new stories", async() => {
            get.mockImplementation(() => Promise.resolve(storyIds));

            const entity = await getNewStorieIds();
            expect(entity).toEqual(storyIds);
        });

    });

});