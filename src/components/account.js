import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import {
//     increment,
//     decrement,
//     incrementByAmount,
//     decrementByAmount,
// } from "../feature/actions";

//
import {
    inc as increment,
    dec as decrement,
    incByAmt as incrementByAmount,
    decByAmt as decrementByAmount,
} from "../feature/reducer/accountSlice";

import {
    incByAmt as bonusIncrease,
    decByAmt as bonusDecrease,
} from "../feature/reducer/bonusSlice";
//

const Account = () => {
    const [depositValue, setDepositValue] = useState(1);
    const [withdrawValue, setWithdrawValue] = useState(1);

    const amount = useSelector((state) => state.account.amount);
    const points = useSelector((state) => state.bonus.point);
    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(incrementByAmount(depositValue));
        let incVal = depositValue / 100;
        if (depositValue >= 100) {
            return dispatch(bonusIncrease(incVal));
        }
    };

    const handleWithdraw = () => {
        dispatch(decrementByAmount(withdrawValue));
        let decVal = withdrawValue / 100;
        if (withdrawValue >= 100) {
            return dispatch(bonusDecrease(decVal));
        }
    };

    return (
        <div className="border">
            <h3>Account Component</h3>
            <h4>Total Balance: {amount}</h4>
            <h4>Bonus Point: {points}</h4>
            <button
                className="marginRight"
                onClick={() => dispatch(increment())}
            >
                Deposit +
            </button>
            <input
                type="text"
                placeholder="Enter Amount"
                value={depositValue}
                onChange={(e) => setDepositValue(+e.target.value)}
            />
            <button className="marginRight" onClick={handleDeposit}>
                Deposit {depositValue} +
            </button>{" "}
            <button
                className="marginRight"
                onClick={() => dispatch(decrement())}
            >
                Withdraw -
            </button>
            <input
                type="text"
                placeholder="Enter Amount"
                value={withdrawValue}
                onChange={(e) => setWithdrawValue(+e.target.value)}
            />
            <button onClick={handleWithdraw}>Withdraw {withdrawValue} -</button>
        </div>
    );
};

export default Account;
