import React, { useState } from 'react';

function Demo1() {
    const [ count, setCount ] = useState(0);
    return (<div>
        <span>You click me {count} times</span>
        <button onClick={() => {setCount(count + 1)}}> click me</button>
    </div>)
}

export default Demo1;