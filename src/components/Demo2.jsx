// import React, { Component } from 'react';

// class Demo2 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count: 0
//         };
//     }
//     componentDidMount() {
//         console.log('componentDidMount', this.state.count);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log('componentDidUpdate', this.state.count);
//     }

//     render() {
//         return (<div>
//             <span>You click me {this.state.count} times</span>
//             <button onClick={this.addCount}> click me</button>
//        </div>)
//     }

//     addCount = () => {
//         this.setState({
//             count : this.state.count + 1
//         });
//     }
// }

import React, { useState, useEffect } from 'react';

function Demo2() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect', count);
    })

    return (<div>
            <span>You click me {count} times</span>
            <button onClick={() => {setCount(count++)}}> click me</button>
    </div>);
}

export default Demo2;