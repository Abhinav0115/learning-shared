import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div>
            <h1>List of Users</h1>
            {users.loading && <h5>Loading...</h5>}
            {!users.loading && users.error && <h5>{users.error}</h5>}
            {!users.loading && !users.error && (
                <ul>
                    {users.users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserView;
