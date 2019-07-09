import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons'


import Home from './pages/home';
import About from './pages/about';
import Department from './pages/department';
import Students from './pages/students';


library.add(faGhost);

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/department" component={Department} />
        <Route path="/students" component={Students} />
      </div>
    </Router>
  )
}

export default App;
