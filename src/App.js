import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Procedures from './Procedures'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Go Back to Home</Link>{'  '}
          <Link to="/procedures">See our Procedures</Link>{'  '}
          <Link to="/contact">Contact Us</Link>{' '}
        </nav>
        {/* *exact on home route  */}
       <Route exact path='/' component={Home}/>
       <Route path='/procedures' component={Procedures} />
       {/* needs *exact if it has route within a route
       <Route exact path='/procedures/1' /> */}
       <Route path='/contact' component={Contact} />
      </div> 
    </Router>
  );
}

export default App;
