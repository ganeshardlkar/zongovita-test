import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Screen1 from './Pages/Screen1';
import Screen2 from './Pages/Screen2';
import Screen3 from './Pages/Screen3';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen1" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
      </Routes>
    </Router>
  );
};

export default App;