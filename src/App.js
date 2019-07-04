import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost);

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}

export default App;
