// useContext，useReducer实现redux效果

import React, { Component } from 'react';
import { Color } from './context/color';
import Content from './Content';
import Options from './Options';

function Demo6() {
    return (
        <div>
            <Color>
                <Content/>
                <Options/>
            </Color>
        </div>
    )
}

export default Demo6;