import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Redirect, HashRouter } from "react-router-dom";
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
import ShowreelDetail from './pages/showreelDetail';

// student
import Login from './pages/login';
import ProfileStudent from './pages/profile_student';
import StudentUpload from './pages/student_upload';
import StudentUploadDetail from './pages/student_upload_detail';

// admin

library.add(faGhost, fas);

function App() {
  return (
    <div>
      <Router>
        {/* pengunjung */}
        <Route exact path="/" component={Home} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/about" component={About} />
        <Route exact path="/partner" component={Partner} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/studentProfile/:id" component={StudentProfile} />
        <Route exact path="/modelerShowreel" component={ModelerShowreel} />
        <Route exact path="/animatorShowreel" component={AnimatorShowreel} />
        <Route exact path="/compositorShowreel" component={CompositorShowreel} />
        <Route exact path="/programmerShowreel" component={ProgrammerShowreel} />
        <Route exact path="/showreelDetail/:id" component={ShowreelDetail} />

        {/* student */}
        <Route exact path="/student" component={Login} />
        <Route exact path="/student/upload/:id" component={StudentUpload} />
        <Route exact path="/student/upload-detail" component={StudentUploadDetail} />
        <Route exact path="/student/profile" component={ProfileStudent} />

        {/* admin */}
      </Router>
    </div>
  )
}

export default App;
