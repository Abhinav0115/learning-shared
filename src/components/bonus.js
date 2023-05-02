import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import { incrementBonus, decrementBonus } from "../feature/actions";

//
import {
    incBonus as incrementBonus,
    decBonus as decrementBonus,
} from "../feature/reducer/bonusSlice";
//

const Bonus = () => {
    const amount = useSelector((state) => state.account.amount);
    const points = useSelector((state) => state.bonus.points);

    const dispatch = useDispatch();

    return (
        <div className="border">
            <h3>Bonus Component</h3>

            <h4>Total Balance: {amount}</h4>
            <h4>Bonus Point: {points}</h4>

            <button
                className="marginRight"
                onClick={() => dispatch(incrementBonus())}
            >
                Increase +{" "}
            </button>

            <button onClick={() => dispatch(decrementBonus())}>
                Decrease -
            </button>
        </div>
    );
};

export default Bonus;
