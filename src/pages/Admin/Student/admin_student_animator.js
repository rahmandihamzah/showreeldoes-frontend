import React, {Component} from 'react';
// import '../styles/admin_student_animator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Judul from '../../../components/judul';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import AdminStudent from '../../../components/Admin/admin_student';
import axios from 'axios'
class Admin_student_3dmodeler extends Component {
    constructor() {
        super()
        this.state = {
            data_animator: []
        }
    }
    componentDidMount() {
        var depart = []
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/students').then(res => {
            console.log(res.data.students)
            res.data.students.map(student => {
                if(student.department === 'animator' || student.department === 'Animator' || student.department === '')
                    depart.push(student)
                    this.setState({data_animator: depart})
                    console.log('hasil', this.state.data_animator)
            })
        })
    }
    render() {
        return(
            <div className="student-admin">
                <AdminSidebar/>
                <div className="p-0">
                    <div className="my-3" >
                        <div className="text-center">
                            <h1>Animator</h1>
                            <hr className="w-100"/>
                        </div>
                        <Judul />                    
                    </div>
                    <AdminStudent student={this.state.data_animator} />
                </div>
            </div> 
        )
    }
}

export default Admin_student_3dmodeler;