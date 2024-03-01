import React, { useState } from 'react';

// a function passed as an argument to setState()
// good for safe updates based on a previous state    
//updater fuction - a queue, call the functions in the same order

function MyConponent() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <div>
            <p>count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default MyConponent