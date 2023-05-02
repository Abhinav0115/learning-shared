import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);

    const dispatch = useDispatch();
    const [value, setValue] = useState(1);

    return (
        <div>
            <h2>Number of ice-cream: {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Buy icecream</button>
            <button onClick={() => dispatch(restocked(1))}>
                Restock 1 ice-cream
            </button>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(+e.target.value)}
                />
            </div>
            <button onClick={() => dispatch(restocked(value))}>
                Restock {value} ice-creams
            </button>
        </div>
    );
};

export default IcecreamView;
