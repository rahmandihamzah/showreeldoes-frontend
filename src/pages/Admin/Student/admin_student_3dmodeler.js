import React, {Component} from 'react';
// import './admin_student_3dmodeler.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Judul from '../../../components/judul';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import AdminStudent from '../../../components/Admin/admin_student';
import axios from 'axios';
class Admin_student_3dmodeler extends Component {
    constructor() {
        super()
        this.state = {
            data_modeler: []
        }
    }
    componentDidMount() {
        var depart = []
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/students').then(res => {
            console.log(res.data.students)
            res.data.students.map(student => {
                if(student.department === '3D Modeler')
                    depart.push(student)
                    this.setState({data_modeler: depart})
                    console.log('hasil', this.state.data_modeler)
            })
        })
    }
    render() {
        return(
            <div className="student-admin">
                <AdminSidebar/>
                <div>
                    <div className="text_partner">
                        <h1>3D Modeler</h1>
                        <hr className="w-100"/>
                    </div>
                    <Judul />
                    <div>
                        <AdminStudent student={this.state.data_modeler} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin_student_3dmodeler;