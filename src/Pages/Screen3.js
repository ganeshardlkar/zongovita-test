import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
const Screen3 = () => {
    return (
        <div>
            <h1>Screen 3</h1>
            <button>
                <Link to="/screen1">Go to Screen 1</Link>
            </button>
            <br />
            <button>
                <Link to="/screen2">Go to Screen 2</Link>
            </button>
        </div>
    );
};

export default Screen3;