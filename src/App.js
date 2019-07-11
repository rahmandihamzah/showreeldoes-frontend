import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


import Login from './pages/login';
import StudentUpload from './pages/student_upload';
import StudentUploadDetail from './pages/student_upload_detail';
import Home from './pages/home';
import About from './pages/about';
import Department from './pages/department';
import Students from './pages/students';


library.add(faGhost, fas);

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/student/upload" component={StudentUpload} />
        <Route exact path="/student/upload-detail" component={StudentUploadDetail} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/department" component={Department} />
        <Route path="/students" component={Students} />
      </div>
    </Router>
  )
}

export default App;
