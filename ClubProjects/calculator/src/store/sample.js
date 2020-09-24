import { createStore } from "redux";

function calculator(state, action) {
    switch (action.operation) {
        case "add": {
            console.log("Adding");
            return state.a + state.b;
        }
        case "sub": {
            console.log("Substract");
            return state.a - state.b;
        }
        case "mul": {
            console.log("Multiply");
            return state.a * state.b;
        }
        case "div": {
            console.log("Divide");
            return state.a / state.b;
        }
        default: {
            console.log("Invalid Action");
            return state;
        }
    }
}

export const calculatorStore = createStore(calculator);