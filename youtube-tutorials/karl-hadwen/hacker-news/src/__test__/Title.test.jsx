import { render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";

import { Title } from "../components/Title";

describe("Testing Hacker News", () => {
    test("Renders Application", async () => {
        await act(async () => {
            const { getByText } = render(<Title />);
            expect(getByText("Hacker News Stories")).toBeTruthy();
        });
    });
});
