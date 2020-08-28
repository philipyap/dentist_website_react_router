import React from 'react';
import './App.css';
// dom library
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Procedures from './Procedures'
import Contact from './Contact'
import WidgetShow from './WidgetShow'

function App() {
  const procedures= [
    "Deep Cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Implante",
    "Fillings"
  ]

  return (
    <Router>
      <div className="App">
        <nav>
          {/* {' '}space to separate from links */}
          <Link to="/">Go Back to Home</Link>{'  '} 
          <Link to="/procedures">See our Procedures</Link>{'  '}
          <Link to="/contact">Contact Us</Link>{' '}
        </nav>
        {/* *exact on home route  */}
        <Route exact path='/' component={Home}/>
        <Route path='/procedures' render={()=> <Procedures procedures={procedures}/>} />
       {/* needs *exact if it has route within a route
        <Route exact path='/procedures/1' /> */}
        <Route path='/contact' component={Contact} />
        <Route path='/widgets/:id' render={(props)=> <WidgetShow procedures={procedures}{...props}/>}/>
      </div> 
    </Router>
  );
}

export default App;
