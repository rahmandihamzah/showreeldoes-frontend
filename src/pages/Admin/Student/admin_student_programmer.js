import React, {Component} from 'react';
// import './admin_student_programmer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Judul from '../../../components/judul';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import AdminStudent from '../../../components/Admin/admin_student';
import axios from 'axios'
class Admin_student_programmer extends Component {
    constructor() {
        super()
        this.state = {
            data_programmer: []
        }
    }
    componentDidMount() {
        var depart = []
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/students').then(res => {
            console.log(res.data.students)
            res.data.students.map(student => {
                if(student.department === 'Programmer' || student.department === 'programmer')
                    depart.push(student)
                    this.setState({data_programmer: depart})
                    console.log('hasil', this.state.data_programmer)
            })
        })
    }
    render() {
        return(
            <div className="student-admin">
                <AdminSidebar/>
                <div className="programmer_wrapper" >
                    <div className="text_programmer">
                        <h1>Programmer</h1>
                        <hr className="w-100"/>
                        </div>
                
                    <Judul />
                    <div>
                        <AdminStudent student={this.state.data_programmer} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin_student_programmer;