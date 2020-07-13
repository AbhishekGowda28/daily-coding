import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

import Header from './../component/header';
import Footer from './../component/footer';
import Home from './../component/home';


// Checking for the component to crash
describe("Testing components crashing", () => {
    const div = document.createElement("div");

    it("Header component", () => {
        ReactDOM.render(<Header/> , div);
    });

    it("Footer component", () => {
        ReactDOM.render(<Footer />, div);
    });

    it("Home component", () => {
        ReactDOM.render(<Home />, div);
    });

});
