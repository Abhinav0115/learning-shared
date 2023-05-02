/*
nested state update without using any external library.
but this is little bit complex to understand.
so to make it more easy to understand and use we use external library called "immer"
we import {produce} from immer

produce take two arguments first is state and second is a callback function which take draft as argument.
draft is the copy of state.
we can update the draft and return it.

we return produce in reducer function.

*/

import { createStore } from "redux";
import { produce } from "immer";

const initialState = {
    name: "John",
    age: 30,
    address: {
        street: "13 Main St",
        city: "Anytown",
        state: "CA",
    },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (street) => {
    return {
        type: UPDATE_STREET,
        payload: street,
    };
};
/*
//method 1
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STREET:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload,
                },
            };
        default:
            return state;
    }
};

*/

//method 2
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STREET:
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            });
        default:
            return state;
    }
};

const store = createStore(Reducer);

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState());
});

store.dispatch(updateStreet("456 Main St"));
unsubscribe();
