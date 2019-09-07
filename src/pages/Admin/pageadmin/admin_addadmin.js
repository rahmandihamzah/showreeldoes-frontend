import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';

class Admin_addadmin extends Component {
    render() {
        return(
            <div className="admin_editstudent" >
                <AdminSidebar/>
            <div className="col-11 mx-auto my-3">
                <div className="text-center">
                    <h1>Add admin</h1>
                </div>
                <hr className="w-100" />
                <div className="d-flex border p-3 rounded justify-content-between">
                        <div className="col-12 py-3">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="username" className="col-sm-2 col-form-label">UserName:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="username"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="password"/>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="col btn btn-danger">Add</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Admin_addadmin;