import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/home';
import About from './pages/about';
import Department from './pages/department';
import Students from './pages/students';
import DashboardAdmin from './pages/Admin/Dashboard/admin_dashboard';
import Admin_department from './pages/Admin/Department/admin_department';
import Admin_student_3dmodeler from './pages/Admin/Student/admin_student_3dmodeler';
import Admin_student_animator from './pages/Admin/Student/admin_student_animator';
import Admin_student_compositor from './pages/Admin/Student/admin_student_compositor';
import Admin_student_programmer from './pages/Admin/Student/admin_student_programmer';
import Admin_showreel_3dmodeler from './pages/Admin/Showrel/admin_showreel_3dmodeler';
import Admin_showreel_programmer from './pages/Admin/Showrel/admin_showreel_programmer';
import Admin_showreel_compositor from './pages/Admin/Showrel/admin_showree_compositor';
import Admin_showreel_animator from './pages/Admin/Showrel/admin_showreel_animator';
import Admin_partner from './pages/Admin/Partner/admin_partner';
import Admin_discuss from './pages/Admin/Discuss/admin_discuss';
import Admin_editStudent from './pages/Admin/Student/admin_editstudent';
import Admin_addshowreel from './pages/Admin/Showrel/admin_addshowreel';
import Admin_editshowreel from './pages/Admin/Showrel/admin_editshowreel';
import Admin_addstudent from './pages/Admin/Student/admin_addstudent';
import Admin_addadmin from './pages/Admin/pageadmin/admin_addadmin';
import Admin_table from './pages/Admin/pageadmin/admin_pagetable';
import Admin_addpartner from './pages/Admin/Partner/admin_addpartner';
import Admin_editpartner from './pages/Admin/Partner/admin_editpartner';
import Admin_adddiscuss from './pages/Admin/Discuss/admin_adddiscuss';
import Admin_login from './pages/Admin/Log In/admin_login';
import Admin_Detail_Showreel from './pages/Admin/detail_showreel/detail_showreel';

library.add(faGhost, fas);

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/department" component={Department} />
        <Route path="/students" component={Students} />
        <Route path="/admin/dashboard" component={DashboardAdmin} />
        <Route path="/admin/department" component={Admin_department} />
        <Route path="/admin/student3dmodeler" component={Admin_student_3dmodeler}/>
        <Route path="/admin/studentanimator" component={Admin_student_animator}/>
        <Route path="/admin/studentcompositor" component={Admin_student_compositor}/>
        <Route path="/admin/studentprogrammer" component={Admin_student_programmer}/>
        <Route path="/admin/showreel3dmodeler" component={Admin_showreel_3dmodeler}/>
        <Route path="/admin/showreelprogrammer" component={Admin_showreel_programmer}/>
        <Route path="/admin/showreelcompositor" component={Admin_showreel_compositor}/>
        <Route path="/admin/showreelanimator" component={Admin_showreel_animator}/>
        <Route path="/admin/discuss" component={Admin_discuss}/>
        <Route path="/admin/adminpartner" component={Admin_partner}/>
        <Route path="/admin/editshowreel/:id" component={Admin_editshowreel}/>
        <Route path="/admin/editstudent/:id" component={Admin_editStudent}/>
        <Route path="/admin/addshowreel/:id" component={Admin_addshowreel}/>
        <Route path="/admin/addstudent" component={Admin_addstudent}/>
        <Route path="/admin/addadmin" component={Admin_addadmin}/>
        <Route path="/admin/listadmin" component={Admin_table}/>
        <Route path="/admin/addpartner" component={Admin_addpartner}/>
        <Route path="/admin/editpartner/:id" component={Admin_editpartner}/>
        <Route path="/admin/adddiscuss/" component={Admin_adddiscuss}/>
        <Route exact path="/admin" component={Admin_login}/>
        <Route path="/admin/detailshowreel/:id" component={Admin_Detail_Showreel} />
      </div>
    </Router>
  )
}

export default App;
