import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import Button from "../Button";

describe("Testing Button Component", () => {
    afterEach(cleanup);

    test("Render without crash when no props are passed", () => {
        expect(<Button />).not.toBeNull();
    });
    test("Render without crash when props are passed", () => {
        const ButtonProps = {
            disabled: false,
            label: "Button",
            onClick: jest.fn()
        };
        expect(<Button {...ButtonProps} />).not.toBeNull();
    });
    test("When disabled", () => {
        const ButtonProps = {
            disabled: true,
            label: "Button",
            onClick: jest.fn()
        };
        const { queryByText } = render(<Button {...ButtonProps} />);
        expect(queryByText(/Button/i).disabled).toBeTruthy();
    });
    test("Label Name", () => {
        const ButtonProps = {
            disabled: false,
            label: "ButtonLabel",
            onClick: jest.fn()
        };
        const { container } = render(<Button {...ButtonProps} />);
        expect(container.firstChild.textContent).toMatch(ButtonProps.label);
    });
    test("When disabled click event not possible", () => {
        const ButtonProps = {
            disabled: true,
            label: "Button",
            onClick: jest.fn()
        };
        const { queryByText } = render(<Button {...ButtonProps} />);
        fireEvent.click(queryByText(/Button/i));
        expect(ButtonProps.onClick).toHaveBeenCalledTimes(0);
    });
    test("Click event triggered", () => {
        const ButtonProps = {
            disabled: false,
            label: "Button",
            onClick: jest.fn()
        };
        const { queryByText } = render(<Button {...ButtonProps} />);
        fireEvent.click(queryByText(/Button/i));
        expect(ButtonProps.onClick).toHaveBeenCalledTimes(1);
    });
});