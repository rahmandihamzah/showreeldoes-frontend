import React, { Component } from 'react';
import './admin_pagetable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import Admin_deleted from '../../../components/Admin/admin_deleted';
import Modal from '../../../components/Admin/admin_formAdmin';

class Admin_table extends Component {
    // linkEditAdmin () {
    //     this.props.history.push('/admin/editadmin')
    // }
    // linkAddAdmin () {
    //     this.props.history.push('/admin/addadmin')
    // }
    state = {
        title: ''
    }

    edit() {
        window.$('#modal').modal('show')
        this.setState({ title: 'Edit Admin' })
    }
    add() {
        window.$('#modal').modal('show')
        this.setState({ title: 'Add Admin' })
    }
    render() {
        return (
            <div className="student-admin">
                <AdminSidebar />
                <div>
                    <div className="juduladmin">
                        <h1>Admin</h1>
                    </div>
                    <hr className="w-100" />
                    <div className="col-8 mx-auto p-0">
                        <FontAwesomeIcon icon="plus-circle" className="fas fa-plus-circle fa-2x" onClick={() => this.add()} />
                        <table className="table">
                            <thead className="thead-dark">
                                <tr className="front_table text-center">
                                    <th>NO</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-center">1</th>
                                    <td>loremIpsum</td>
                                    <td>XXXXXXXX</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <FontAwesomeIcon icon="pen" className="pen text-primary" onClick={() => this.edit()} />
                                            <FontAwesomeIcon icon="trash-alt" className="text-danger" data-toggle="modal" data-target="#delete" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal title={this.state.title} />
                <Admin_deleted />
            </div>
        )
    }
}

export default Admin_table;