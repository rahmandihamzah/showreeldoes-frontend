import React, {Component} from 'react';
// import './admin_showreel_animator.css';
// import { Table } from 'react-bootstrap';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import TableShowrel from '../../../components/Admin/admin_table_showrel';
import axios from 'axios';

class Admin_showreel_animator extends Component {
    constructor() {
        super() 
        this.state = {
            data_showreel: []
        }
    }
    componentDidMount () {
        var datas = []
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/showreels').then(res => {
            console.log(res)
            res.data.showreels.map(showreel => {
                if(showreel.id_student.department === 'animator' || showreel.id_student.department === 'Animator') {
                    console.log(showreel)
                    datas.push(showreel)
                }
                this.setState({data_showreel: datas})
                console.log('hasil', this.state.data_showreel)
            })
        })
    }
    render() {
        return(
            <div className="showreel-admin" >
                <AdminSidebar/>
                <div className="text-center my-3">
                    <h1>Showreel Animator</h1>
                    <hr className="w-100"/>
                </div>
                <div>
                    <TableShowrel showreel={this.state.data_showreel} />
                </div>
            </div>
        )
    }
}

export default Admin_showreel_animator;