import { render, waitForElement, act, cleanup } from "@testing-library/react";
import React from "react";

import { multipleStoryIds, singularStory } from "../fixture/Story";
import {get } from "../services/agent";
import { StoriesContainer } from "../components/StoriesContainer";

jest.mock("../services/api", () => ({
    get: jest.fn(),
}));

beforeEach(cleanup);

test("Testing Story Container", async() => {

});