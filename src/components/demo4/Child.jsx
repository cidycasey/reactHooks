import React, { useContext } from 'react';
import myContextContent from './createContext';

function Child() {
    const count = useContext(myContextContent);
    return (
        <div>{ count }</div>
    );
}

export default Child;