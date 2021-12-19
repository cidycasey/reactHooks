import React, { useContext } from 'react';
import { ColorContext } from './context/color';

function Content() {
    const { color } = useContext(ColorContext);
    return(<div>
        <div style={{color: color}}>color is {color}</div>
    </div>)
}

export default Content;