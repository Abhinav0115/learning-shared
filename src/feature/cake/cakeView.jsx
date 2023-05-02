import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();

    const [value, setValue] = useState(1);

    return (
        <div>
            <h2>Number of cakes: {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Buy 1 cake</button>
            <button onClick={() => dispatch(restocked(1))}>
                Restock 1 cakes
            </button>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
            </div>
            <button onClick={() => dispatch(restocked(value))}>
                Restock {value} cakes
            </button>
        </div>
    );
};

export default CakeView;
