import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Admin_deleted from './admin_deleted';

class AdminStudent extends Component {
    state = {
        id_delete: ''
    }
    linkEditStudent (data) {
        console.log(data._id)
        this.props.history.push('/admin/editstudent/' + data._id)
    }
    linkAddStudent () {
        this.props.history.push('/admin/addstudent')
    }
    delete(data) {
        console.log(data._id)
        this.setState({id_delete: data._id})
    }
    showShowreel(id) {
        console.log(id._id)
        this.props.history.push('/admin/detailshowreel/' + id._id)
    }
    render () {
        return (
            <div className="col-11 mx-auto">
                <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x text-info" onClick={() => this.linkAddStudent()} />
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-dark text-light text-center">
                                <th>NO</th>
                                <th>Full Name</th>
                                <th>Department</th>
                                <th>Status</th>
                                <th>Gender</th>
                                <th>Birthday</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>User</th>
                                <th>Showreel</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.student.map((stud, i) => {
                                return (
                                    <tr key={i}>
                                        <th scoped="row">{i + 1}</th>
                                        <td>{stud.full_name}</td>
                                        <td>{stud.department}</td>
                                        {stud.status === true ?
                                            <td>Student</td>
                                            :
                                            <td>Graduate</td>
                                        
                                        }
                                        {stud.gender === true ?
                                            <td>Male</td>
                                            :
                                            <td>Female</td>
                                        }
                                        <td>{stud.birthday.slice(0, 10)}</td>
                                        <td>{stud.address}</td>
                                        <td>{stud.email}</td>
                                        <td>{stud.phone}</td>
                                        {stud.id_user ?
                                            <td className="text-info">Account verification</td>
                                            :
                                            <td className="text-danger">Account not verification</td>

                                        }
                                        <td><button className="btn btn-sm btn-light" onClick={()=> this.showShowreel(stud)}>Show Showreel</button></td>
                                        <td>
                                            <div className="d-flex justify-content-around">
                                                <FontAwesomeIcon icon ="pen" className=" text-info"  onClick={() => this.linkEditStudent(stud)}/>
                                                <FontAwesomeIcon icon ="trash-alt" className=" text-danger"  onClick={() => this.delete(stud)} data-toggle="modal" data-target="#delete" />
                                            </div>
                                        </td>
                                    </tr>

                                )
                            })}
                    </tbody>
                </table>
                <Admin_deleted delete={this.state.id_delete} />    
            </div>
        )
    }
}

export default withRouter(AdminStudent);