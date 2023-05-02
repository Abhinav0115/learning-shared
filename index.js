import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

//initial state
const initnialState = {
    counter: 0,
    user: [],
};

//action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCBYAMT = "INCBYAMT";
const FETCHDATA = "FETCHDATA";

const store = createStore(
    reducer,
    applyMiddleware(logger.default, thunk.default)
);

//action creators
async function INITUSER(dispatch, getState) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: FETCHDATA,
        payload: res.data.map((user) => user.name),
    });
}

function INCREMENTS() {
    return {
        type: INCREMENT,
    };
}

function DECREMENTS() {
    return {
        type: DECREMENT,
    };
}

function INCBYAMTS(amt = 1) {
    return {
        type: INCBYAMT,
        payload: amt,
    };
}

//reducer
function reducer(state = initnialState, action) {
    switch (action.type) {
        case FETCHDATA:
            return {
                ...state,
                users: action.payload,
            };

        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case INCBYAMT:
            return {
                ...state,
                counter: state.counter + action.payload,
            };

        default:
            return state;
    }
}

//dispatch
console.log(store.getState());
store.dispatch(INCREMENTS());
console.log(store.getState());
store.dispatch(DECREMENTS());
console.log(store.getState());
// store.dispatch(INCBYAMTS(5));
// console.log(store.getState());

console.log("initial state", store.getState());

store.dispatch(INITUSER);

setTimeout(() => {
    console.log("---------END-------");
}, 2000);
