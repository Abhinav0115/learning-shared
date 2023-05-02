const store = require("./store/store");
const counterActions = require("./feature/counterSlice").counterActions;

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState());
});

store.dispatch(counterActions.increment(5));
store.dispatch(counterActions.increment(10));
store.dispatch(counterActions.decrement());

unsubscribe();
