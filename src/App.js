import "./App.css";
import Account from "./components/account";
import Bonus from "./components/bonus";
import User from "./components/user";

import { useSelector } from "react-redux";

function App() {
    const amount = useSelector((state) => state.account.amount);
    const points = useSelector((state) => state.bonus.points);
    const account = useSelector((state) => state.account);
    const user = useSelector((state) => state.user.users);

    return (
        <div className="App">
            <h1>Bank App</h1>
            {account.pending ? (
                <p>loading....</p>
            ) : account.error ? (
                <p>{account.error}</p>
            ) : (
                <h4>Current Amount : {amount} </h4>
            )}
            <h4>Total Bonus : {points}</h4>

            {user.pending ? (
                <p>loading....</p>
            ) : user.error ? (
                "hello"
            ) : (
                <h4>users: {user}</h4>
            )}

            <Account />
            <Bonus />
            <User />
        </div>
    );
}

export default App;
