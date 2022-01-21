import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease } from './Features/Count';

const Button = ({ buttonName }) => {

    const dispatch = useDispatch();
    const increaseHandler = () => {
        dispatch(increase())
    }
    const decreaseHandler = () => {
        dispatch(decrease())
    }

    let returnValue;
    if (buttonName === "increase") {
        returnValue = <button
            onClick={increaseHandler}
            name="increase"
        > Increase</button>;
    }
    else {
        returnValue = <button
            onClick={decreaseHandler}
            name="decrease"
        >Decrease</button>
    }
    return returnValue;
};

export default Button;

