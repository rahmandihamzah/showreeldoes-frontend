import React, {Component} from 'react';
import './admin_showreel_programmer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import TableShowrel from '../../../components/Admin/admin_table_showrel';


class Admin_showreel_programmer extends Component {
    render() {
        return(
            <div className="showreel-admin" >
                <AdminSidebar/>
                <div className="text-center my-3">
                    <h1>Showreel Programmer</h1>
                    <hr className="w-100"/>
                </div>
                <div>
                    <TableShowrel />
                </div>
            </div>
    
        )
    }
}

export default Admin_showreel_programmer;