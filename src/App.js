import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
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
import ProfileStudent from './pages/profile_student';
import StudentProfile from './pages/studentProfile';
import Partner from './pages/partner';


library.add(faGhost, fas);

function App() {
  return (  
    <Router>
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/student/upload/:id" component={StudentUpload} />
        <Route exact path="/student/upload-detail" component={StudentUploadDetail} />
        <Route exact path="/student/profile" component={ProfileStudent} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/department" component={Department} />
        <Route path="/students" component={Students} />
        <Route render={() => <Redirect to={{pathname: '/login'}} />} />
        <Route path="/studentProfile/:id" component={StudentProfile} />
        <Route path="/partner" component={Partner} />
      </div>
    </Router>
  )
}

export default App;
