import React, { useReducer } from 'react';

function Demo5() {
    let [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;        
            default:
                break;
        }
    }, 0);
    return(<div>
        <div>结果为{count}</div>
        <button onClick={() => {dispatch('add')}}>+</button>
        <button onClick={() => {dispatch('sub')}}>-</button>
    </div>)
}

export default Demo5;