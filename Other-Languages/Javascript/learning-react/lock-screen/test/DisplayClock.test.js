import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DisplayClock from '../Components/LockScreen';

configure({ adapter: new Adapter() });

describe("Test suite for DisplayClock", () => {
    let mountDisplayClock;
    const displayClock = () => {
        if (!mountDisplayClock) {
            mountDisplayClock = mount(<DisplayClock />);
        }
        return mountDisplayClock;
    };

    beforeEach(() => {
        mountDisplayClock = undefined;
    });

    it("Always render div", () => {
        const div = displayClock().find("div");
        expect(div.length).toBeGreaterThan(0);
    });

    it("Display time snapshot", () => {
        const time = displayClock().find('div.time').text();
        expect(time).toMatchSnapshot();
    });
});