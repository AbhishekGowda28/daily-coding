import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LockScreen from '../Components/LockScreen';

configure({adapter: new Adapter()});

describe("Test suite for LockScreen", () => {
    let mountLockScreen;
    const lockScreen = () => {
        if (!mountLockScreen) {
            mountLockScreen = mount(<LockScreen />);
        }
        return mountLockScreen;
    };

    beforeEach(() => {
        mountLockScreen = undefined;
    });

    it("Always render div", () => {
        const div = lockScreen().find("div");
        expect(div.length).toBeGreaterThan(0);
    });

    it("Always render 'DisplayClock'", () => {
        const displayClock = lockScreen().find("DisplayClock");
        expect(displayClock.length).toEqual(1);
    });

    it("DisplayClock does not receive any props", () => {
        const displayClock = lockScreen().find('DisplayClock');
        expect(Object.keys(displayClock.props()).length).toBe(0);
    });

    it("UserInfo receives props", () => {
        const userInfo = lockScreen().find('UserInfo');
        expect(Object.keys(userInfo.props()).length).toEqual(1);
    });

});