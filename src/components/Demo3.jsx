import React, { useEffect, useState } from 'react';
import {HashRouter, Route, Link, Routes} from 'react-router-dom';
// react-router-dom v6版本

function Index() {
    useEffect(() => {
        console.log('进入首页');
        return () => {
            console.log('离开首页');
        }
    }, []);
    return <div>首页-内容</div>;
}

function List() {
    useEffect(() => {
        console.log('进入列表~');
        return () => {
            console.log('离开列表~')
        }
    }, [])
    return <div>列表-内容</div>;
}

function Demo3() {
    let [ count , setCount ] = useState(0);

    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)

        return ()=>{
            console.log('====================')
        }
    }, [])

    return (
        <div>
            <div>
                <span>You click me {count} times</span>
                <button onClick={() => {setCount(count++)}}> click me</button>
            </div>
            <HashRouter>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Routes>
                    <Route path="/" exact element={<Index/>}></Route>
                    <Route path="/list" element={<List/>}></Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Demo3;