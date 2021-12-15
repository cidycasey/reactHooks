import React, { useState } from 'react';
import myContextContent from './createContext';
import Child from './Child';

function Demo4() {
    let [count, setCount] = useState(0);
    let [obj, setObj] = useState({a: 1});

    return (
        <div>
            <span>count {count}</span>
            <button onClick={() => {setCount(count++)}}>click</button>
            <myContextContent.Provider value={[1, 2]}>
                <Child />
            </myContextContent.Provider>
        </div>
    )
}

export default Demo4;