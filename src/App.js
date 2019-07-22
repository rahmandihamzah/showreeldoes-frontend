import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// pengunjung
import Home from './pages/home';
import About from './pages/about';
import Department from './pages/department';
import Partner from './pages/partner';
import Students from './pages/students';
import StudentProfile from './pages/studentProfile';
import ModelerShowreel from './pages/modelerShowreel';
import AnimatorShowreel from './pages/animatorShowreel';
import CompositorShowreel from './pages/compositorShowreel';
import ProgrammerShowreel from './pages/programmerShowreel';

// student
import Login from './pages/login';
import ProfileStudent from './pages/profile_student';
import StudentUpload from './pages/student_upload';
import StudentUploadDetail from './pages/student_upload_detail';

// admin

library.add(faGhost, fas);

function App() {
  return (  
    <Router>
      <div>
        {/* pengunjung */}
        <Route exact path="/" component={Home} /> 
        <Route path="/about" component={About} />
        <Route path="/department" component={Department} />
        <Route path="/partner" component={Partner} />
        <Route path="/students" component={Students} />
        <Route path="/studentProfile/:id" component={StudentProfile} />
        <Route path="/modelerShowreel" component={ModelerShowreel} />
        <Route path="/animatorShowreel" component={AnimatorShowreel} />
        <Route path="/compositorShowreel" component={CompositorShowreel} />
        <Route path="/programmerShowreel" component={ProgrammerShowreel} />
        
        {/* student */}
        <Route exact path="/student" component={Login} />
        <Route exact path="/student/upload/:id" component={StudentUpload} />
        <Route exact path="/student/upload-detail" component={StudentUploadDetail} />
        <Route exact path="/student/profile" component={ProfileStudent} />
        <Route render={() => <Redirect to={{pathname: '/'}} />} />
        {/* admin */}
      </div>
    </Router>
  )
}

export default App;
