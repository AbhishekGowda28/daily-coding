import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../component/header';
import {Link} from 'react-router-dom';


jest.dontMock('../component/header');


describe("Header component", ()=>{
    it("should render without crash",()=>{
        const renderer = new ShallowRenderer();
        // Creating virtual DOM
        renderer.render(<Header />);
        
        //creating instance of virtual DOM
        const headerInstance = renderer.getRenderOutput();

        // console.log(TestUtils.isElement(headerInstance));
        expect(TestUtils.isElement(headerInstance)).toBe(true);
    });

    it("should contain 2 links", () => {
        const testRenderer = TestRenderer.create(<Header />);
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType(Link).length).toBe(2);
    });

});