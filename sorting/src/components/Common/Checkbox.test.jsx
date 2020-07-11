import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import CheckBox from './Checkbox';

afterEach(cleanup);

it('Checkbox changes after click', () => {
    const d = render(
        <CheckBox
            checked={false}
            disabled={false}
            onChange={jest.fn()}
            label={"Check box"}
        />
    );
    console.log(d);
    const { queryByLabelText, getByLabelText } = d;
    // console.log(queryByLabelText("Check box").checked);
    expect(queryByLabelText(/Check box/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/Check box/i));
    // console.log(getByLabelText(/Check box/i));
    expect(queryByLabelText(/Check box/i).checked).toBeTruthy();
});
