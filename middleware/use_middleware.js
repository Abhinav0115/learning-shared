

const createStore = require("redux").createStore;
const applyMiddleware = require("redux").applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//Action
const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";

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

//Initial State
const initialState = {
    numOfCakes: 10,
};

// Reducer
const reducer = (state = initialState, action) => {
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

// Store

//creating store
const store = createStore(reducer, applyMiddleware(logger));

//Accessing the state
console.log("Initial State", store.getState());

//Subscribe to the store
const unsubscribe = store.subscribe(() => {});

//Dispatching Action
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(restockCake(2));

// unsubscribe from the store
unsubscribe();
