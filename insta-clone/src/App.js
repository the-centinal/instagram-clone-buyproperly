import React from 'react';
import Main from './components/main';
import Individual from './components/individual';
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";
import Practice from './components/practice';
// import Indiposts from './components/indiposts';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< Main />} />
        <Route exact path="/individual" element={< Individual />} />
        <Route  path='/' element={<Practice />} />

      </Routes>
    </Router>
  );
}

export default App;
