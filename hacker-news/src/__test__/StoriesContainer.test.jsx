import { render, waitForElement, act, cleanup, fireEvent, } from "@testing-library/react";
import React from "react";

import { multipleStoryIds, singularStory } from "../fixture/Story";
import { getItem, getNewStorieIds } from "../services/api";
import { StoriesContainer } from "../components/StoriesContainer";

jest.mock("../services/api", () => ({
    getItem: jest.fn(),
    getNewStorieIds: jest.fn(),
}));

beforeEach(cleanup);

test("Testing Story Container", async () => {
    getItem.mockImplementation(() => { return Promise.resolve(singularStory) });
    getNewStorieIds.mockImplementation(() => { return Promise.resolve(multipleStoryIds) });

    await act(async () => {
        const { getAllByTestId } = render(<StoriesContainer />);
        await waitForElement(() => [
            expect(getAllByTestId("story-author")[0].textContent).toEqual("Author: Abhishek Gowda"),
        ]);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
        fireEvent.scroll(document);
    });
});
