const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

//initial State
const initialState = {
    loading: false,
    users: [],
    error: "",
};

//action
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//action creator

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};

const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: user,
    };
};

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};

//Reducer

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: "",
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

//define async action creator
const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data.map((user) => [
                    user.id,
                    user.username,
                ]);
                dispatch(fetchUserSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};

//store
const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchUser());
