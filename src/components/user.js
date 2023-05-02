import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../feature/reducer/userSlice";
import { removeUser } from "../feature/reducer/userSlice";

const User = () => {
    const user = useSelector((state) => state.user.users);
    console.log(user);
    const dispatch = useDispatch();

    return (
        <div className="border">
            <h3>User Component</h3>
            <h4>users: {user}</h4>
            <button
                className="marginRight"
                onClick={() => dispatch(fetchUsers())}
            >
                fetch user
            </button>
            <button onClick={() => dispatch(removeUser())}>Remove user</button>
        </div>
    );
};

export default User;
