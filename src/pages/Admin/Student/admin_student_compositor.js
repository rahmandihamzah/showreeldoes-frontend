import React, {Component} from 'react';
import './admin_student_compositor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Judul from '../../../components/judul';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import AdminStudent from '../../../components/Admin/admin_student';
import axios from 'axios';
import { withEmit } from "react-emit";



class Admin_student_compositor extends Component {
    constructor() {
        super()
        this.state = {
            data_compositor: []
        }
    }

    componentDidMount() {
        var depart = []
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/students').then(res => {
            console.log(res.data.students)
            res.data.students.map(student => {
                if(student.department === 'compositor' || student.department === 'Compositor')
                    depart.push(student)
                    this.setState({data_compositor: depart})
                    console.log('hasil', this.state.data_compositor)
            })
        })
    }


    render() {
        return(
            <div className="student-admin">
                <AdminSidebar/>
                <div className="p-0">
                    <div className="compositor_wrapper" >
                        <div className="text_compositor">
                            <h1>Compositor</h1>
                            <hr className="w-100"/>
                        </div>
                        <Judul />
                    </div>
                    <div>
                        <AdminStudent student={this.state.data_compositor}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withEmit(Admin_student_compositor);