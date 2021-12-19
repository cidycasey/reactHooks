import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './context/color';

function Options() {
    const {dispatch} = useContext(ColorContext);
    return (<div>
        <button onClick={() => {dispatch({type: 'UPDATE_COLOR', color: 'red'})}}>red</button>
        <button onClick={() => {dispatch({type: 'UPDATE_COLOR', color: 'green'})}}>green</button>
    </div>)
}

export default Options;