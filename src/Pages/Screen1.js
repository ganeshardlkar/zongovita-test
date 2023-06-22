import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Screen1 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>Screen 1</h1>
            <p>Counter: {counter}</p>
            <button>
                <Link to="/screen2">Go to Screen 2</Link>
            </button>
            <br />
            <button>
                <Link to="/screen3">Go to Screen 3</Link>
            </button>
        </div>
    );
};

export default Screen1;