const store = require("./app/store");

const cakeActions = require("./feature/cake/cakeSlice").cakeActions;
const icecreamActions =
    require("./feature/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./feature/user/userSlice").fetchUsers;

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

//user
store.dispatch(fetchUsers());

// //cake
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// //icecream
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(3));

// unsubscribe();
