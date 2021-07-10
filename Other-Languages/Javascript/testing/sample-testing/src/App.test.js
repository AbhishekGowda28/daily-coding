// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Unit Testing with Test Driven Testing of <App />', () => {

  /**
   * @returns shallowWrapper
   * @param {*} props 
   * @param {*} state 
   * @description beforeTest method
   */
  const setUp = (props = {}, state = null) => {
    let wrapper = shallow(<App {...props} />);
    if (state) {
      wrapper.setState(state);
    }
    return wrapper;
  }

  /**
   * 
   * @param {ShallowWrapper} wrapper 
   * @param {string} selector 
   */
  const findBySelector = (wrapper, selector) => {
    return wrapper.find(selector);
  }

  test('Renders count text', () => {
    const { getByText, } = render(<App />);
    const linkElement = getByText(/the count is/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Testing for the presence of App className', () => {
    const shallowWrapper = setUp();
    const componentLength = findBySelector(shallowWrapper, '.App').length;
    expect(componentLength).toBe(1);
  });

  test('Renders Button', () => {
    const shallowWrapper = setUp();
    const buttonElement = findBySelector(shallowWrapper, 'button.increment').length;
    expect(buttonElement).toBe(1);
  });


  test('Renders counter', () => {
    const shallowWrapper = setUp();
    const counterText = findBySelector(shallowWrapper, 'h1.counter').length;
    expect(counterText).toBe(1);
  });

  test('Counter starts at 0', () => {
    const component = setUp();
    const initialState = component.state('counter');
    expect(initialState).toBe(0);
  });

  test('Increment counter on click of button', () => {
    const counter = 8;
    const wrapper = setUp(null, { counter });
    const buttonElement = findBySelector(wrapper, 'button.increment');
    buttonElement.simulate('click');
    wrapper.update();
    const countState = wrapper.state('counter');
    expect(countState).toBe(counter + 1);
  });

  test('Decement counter on click of Decrement button', () => {
    const counter = 5;
    const component = setUp(null, { counter });
    const decrementButton = findBySelector(component, 'button.decrement');
    decrementButton.simulate('click');
    component.update();
    const counterState = component.state('counter');
    expect(counterState).toBe(counter - 1);
  });

  test('Not decrementing counter below 0', () => {
    const counter = 0;
    const component = setUp(null, { counter });
    const decrementButton = findBySelector(component, "button.decrement");
    decrementButton.simulate('click');
    component.update();
    const counterState = component.state('counter');
    expect(counterState).toBe(counter);
  });

  test('Show error message on counter 0', () => {
    const counter = 0, errorMsgSelector = "div.error-msg-active";
    const expectedErrorMsg = "Counter cannot go below Zero";

    const component = setUp(null, { counter });
    const decrementButton = findBySelector(component, "button.decrement");
    decrementButton.simulate('click');
    component.update();
    const errorMsg = findBySelector(component, errorMsgSelector).text();
    expect(errorMsg).toBe(expectedErrorMsg);
  });

  test('Clear error message on incrementing counter', () => {
    const counter = 0, errorMsgSelector = "div.error-msg-active";
    const expectedErrorMsg = 0;

    const component = setUp(null, { counter });
    const incrementButton = findBySelector(component, "button.increment");
    incrementButton.simulate('click');
    component.update();
    const errorMsg = findBySelector(component, errorMsgSelector).length;
    expect(errorMsg).toBe(expectedErrorMsg);
  });

});
