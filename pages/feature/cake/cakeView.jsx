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
            <button onClick={() => dispatch(ordered())}>Buy cake</button>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
            </div>
            <button onClick={() => dispatch(restocked(value))}>
                Restock cakes
            </button>
        </div>
    );
};

export default CakeView;
