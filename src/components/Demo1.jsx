import React, { useState } from 'react';

// function Demo1() {
//     const [ count, setCount ] = useState(0);
//     return (<div>
//         <span>You click me {count} times</span>
//         <button onClick={() => {setCount(count + 1)}}> click me</button>
//     </div>)
// }

function Demo1() {
    const [age, setAge] = useState(24);
    const [gender, setGender] = useState('female');
    const [job, setJob] = useState('programer');
    return (<div>
        I am {age} years old, and I am {gender}.
        My job is {job}.
    </div>)
}


export default Demo1;