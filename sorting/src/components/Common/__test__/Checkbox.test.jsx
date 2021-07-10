import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import CheckBox from '../Checkbox';

describe("Testing Check Box Component", () => {

    afterEach(cleanup);

    test("Render Checkbox without crash", () => {
        const checkboxProps = {
            checked: false,
            disabled: false,
            label: "Check Box",
            onChange: jest.fn(),
        };
        expect(render(
            <CheckBox {...checkboxProps} />
        )).not.toBeNull();
    });

    test("Checkbox label value", () => {
        const checkboxProps = {
            checked: false,
            disabled: false,
            label: "Check Box",
            onChange: jest.fn(),
        };
        const { queryByLabelText } = render(
            <CheckBox
                checked={checkboxProps.checked}
                disabled={checkboxProps.disabled}
                label={checkboxProps.label}
                onChange={checkboxProps.onChange}
            />
        );
        expect(queryByLabelText(/Check box/i)).toBeTruthy();
    });

    test('Checkbox changes after click', () => {
        const checkboxProps = {
            checked: false,
            disabled: false,
            label: "Check Box",
            onChange: jest.fn(),
        };
        const { getByLabelText } = render(
            <CheckBox
                checked={checkboxProps.checked}
                disabled={checkboxProps.disabled}
                label={checkboxProps.label}
                onChange={checkboxProps.onChange}
            />
        );
        fireEvent.click(getByLabelText(/Check box/i));
        expect(checkboxProps.onChange).toHaveBeenCalledTimes(1);
    });

    test('Checkbox is checked', () => {
        const checkboxProps = {
            checked: true,
            disabled: false,
            label: "Check Box",
            onChange: jest.fn(),
        };
        const { queryByLabelText } = render(
            <CheckBox
                checked={checkboxProps.checked}
                disabled={checkboxProps.disabled}
                label={checkboxProps.label}
                onChange={checkboxProps.onChange}
            />
        );
        expect(queryByLabelText(/Check box/i).checked).toBeTruthy();
    });

    test('Checkbox is disabled', () => {
        const checkboxProps = {
            checked: false,
            disabled: true,
            label: "Check Box",
            onChange: jest.fn(),
        };
        const { queryByLabelText } = render(
            <CheckBox
                checked={checkboxProps.checked}
                disabled={checkboxProps.disabled}
                label={checkboxProps.label}
                onChange={checkboxProps.onChange}
            />
        );
        expect(queryByLabelText(/Check box/i).disabled).toBeTruthy();
    });

    test('Class name of Checkbox when disabled', () => {
        const checkboxProps = {
            checked: false,
            disabled: true,
            label: "Check Box",
            onChange: jest.fn(),
        };
        const { container } = render(
            <CheckBox
                checked={checkboxProps.checked}
                disabled={checkboxProps.disabled}
                label={checkboxProps.label}
                onChange={checkboxProps.onChange}
            />
        );
        const className = container.firstChild.className;
        expect(className).toMatch("checkBox disabled");
    });

    test('Class name of Checkbox when not disabled', () => {
        const checkboxProps = {
            checked: false,
            disabled: false,
            label: "Check Box",
            onChange: jest.fn(),
        };
        const { container } = render(
            <CheckBox
                checked={checkboxProps.checked}
                disabled={checkboxProps.disabled}
                label={checkboxProps.label}
                onChange={checkboxProps.onChange}
            />
        );
        const className = container.firstChild.className;
        expect(className).toMatch("checkBox");
    });

});
