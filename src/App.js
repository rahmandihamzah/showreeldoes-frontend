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
      {/* User Pengunjung */}
        {/* <Route render={() => <Redirect to={{pathname: '/'}} />} /> */}
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/partner" component={Partner} />

      {/* User Student */}
        <Route exact path="/student" component={Login} />
        <Route exact path="/student/upload/:id" component={StudentUpload} />
        <Route exact path="/student/upload-detail" component={StudentUploadDetail} />
        <Route exact path="/student/profile" component={ProfileStudent} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/studentProfile" component={StudentProfile} />
      </div>
    </Router>
  )
}

export default App;
