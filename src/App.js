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
import Education from './Education'
import Gallery from './Gallery'
import Team from './Team'
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
  const team= [
    "Julia M, MD",
    "Bob, T, MD",
    "Gigi, R, DA",
    "Iris, L, DA"
  ]

  return (
    <Router>
      <div className="App">
        <nav>
          {/* {' '}space to separate from links */}
          <Link to="/">Home</Link>{'  '} 
          <Link to="/procedures">Procedures</Link>{'  '}
          <Link to="/education">Education</Link>{'  '}
          <Link to="/gallery">Gallery</Link>{'  '}
          <Link to="/team">Our Team</Link>{'  '}
          <Link to="/contact">Contact Us</Link>{' '}
        </nav>
        {/* *exact on home route  */}
        <Route exact path='/' component={Home}/>
        <Route path='/procedures' render={()=> <Procedures procedures={procedures}/>} />
       {/* needs *exact if it has route within a route
        <Route exact path='/procedures/1' /> */}
        <Route path='/education' component={Education} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/team' render={()=> <Team team={team}/>} />
        <Route path='/contact' component={Contact} />
        <Route path='/widgets/:id' render={(props)=> <WidgetShow procedures={procedures}{...props}/>}/>
      </div> 
    </Router>
  );
}

export default App;
