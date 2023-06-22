import React from 'react';
import {
    Link,
} from 'react-router-dom';

const Screen2 = () => {
    return (
        <div>
            <h1>Screen 2</h1>
            <button>
                <Link to="/screen1">Go to Screen 1</Link>
            </button>
            <br />
            <button>
                <Link to="/screen3">Go to Screen 3</Link>
            </button>
        </div>
    );
};


export default Screen2;