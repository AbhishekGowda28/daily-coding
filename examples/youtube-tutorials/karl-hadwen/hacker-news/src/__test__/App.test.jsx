import { render, waitForElement, act, cleanup, } from "@testing-library/react";
import React from "react";

import { App } from "../App";
import { storyIds, singularStory } from "../fixture/Story";
import { getItem, getNewStorieIds } from "../services/api";

jest.mock("../services/api", () => ({
    getItem: jest.fn(),
    getNewStorieIds: jest.fn(),
}));

beforeEach(cleanup);

test("Renders Application", async () => {
    getItem.mockImplementation(() => { return Promise.resolve(singularStory) });
    getNewStorieIds.mockImplementation(() => { return Promise.resolve(storyIds) });

    await act(async () => {
        const { queryByTestId } = render(<App />);
        await waitForElement(() => [
            expect(queryByTestId("story-author").textContent).toEqual("Author: Abhishek Gowda"),
        ]);
    });
});
