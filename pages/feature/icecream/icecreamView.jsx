import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);

    const dispatch = useDispatch();
    const [value, setValue] = useState(1);

    return (
        <div>
            <h2>Number of icecream: {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Buy icecream</button>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
            </div>
            <button onClick={() => dispatch(restocked(value))}>
                Restock icecreams
            </button>
        </div>
    );
};

export default IcecreamView;
