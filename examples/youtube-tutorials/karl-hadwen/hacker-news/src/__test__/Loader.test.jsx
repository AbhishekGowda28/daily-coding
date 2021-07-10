import { render, waitForElement, act, cleanup, } from "@testing-library/react";
import React from "react";

import { App } from "../App";
import { getNewStorieIds } from "../services/api";

jest.mock("../services/api", () => ({
    getNewStorieIds: jest.fn(),
}));

beforeEach(cleanup);

test("Testing Loader", async () => {
    getNewStorieIds.mockImplementation(() => { return Promise.resolve([]) });
    await act(async () => {
        const { queryByTestId } = render(<App />);
        await waitForElement(() => [
            expect(queryByTestId("loader").textContent).toEqual("Loading..."),
        ]);
    });
});
