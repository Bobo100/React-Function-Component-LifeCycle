import React, { useState, useEffect } from 'react';

function Counter() {

    // state for count
    const [count, setCount] = useState(0);

    // mimicking componentDidMount
    useEffect(() => {
        console.log('ComponentDidMount')
    }, []);

    // mimicking componentDidUpdate
    useEffect(() => {
        console.log(`componentDidUpdate: You clicked ${count} times`);
    }, [count]);

    // mimicking componentWillUnmount 
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount');
        }
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;