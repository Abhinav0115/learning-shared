/*
Multiple Reducers
*/

import { createStore, combineReducers } from "redux";

//Action
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

// Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Buying Cake Action",
    };
}

const restockCake = (qty = 1) => {
    return {
        type: RESTOCK_CAKE,
        info: "Restock Cake Action",
        payload: qty,
    };
};

const buyicecream = (qty = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: qty,
    };
};

const restockicecream = (qty = 1) => {
    return {
        type: RESTOCK_ICECREAM,
        payload: qty,
    };
};

//Initial State
const initialCakeState = {
    numOfCakes: 15,
};
const initialIcecreamState = {
    numOfIcecream: 30,
};

// Reducer
const CakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: // if action type is BUY_CAKE
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        case RESTOCK_CAKE: // if action type is RESTOCK_CAKE
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            };
        default:
            return state;
    }
};

const IcecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: // if action type is BUY_ICECREAM
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - action.payload,
            };
        case RESTOCK_ICECREAM: // if action type is RESTOCK_ICECREAM
            return {
                ...state,
                numOfIcecream: state.numOfIcecream + action.payload,
            };
        default:
            return state;
    }
};

// Store

const RootReducer = combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer,
});

//creating store
const store = createStore(RootReducer);

//Accessing the state
console.log("Initial State", store.getState());

//Subscribe to the store
const unsubscribe = store.subscribe(() => {});

//Dispatching Action
store.dispatch(buyCake());
store.dispatch(buyicecream());
store.dispatch(buyCake());
store.dispatch(buyicecream());

store.dispatch(restockCake(2));
store.dispatch(restockicecream(2));

// unsubscribe from the store
unsubscribe();
