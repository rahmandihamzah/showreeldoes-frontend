import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import './admin_addstudent.css';
import axios from 'axios';

class Admin_addstudent extends Component {
    state = {
        username: '',
        password: '',
        full_name: '',
        department: '',
        status: '',
        gender: '',
        birthday: '',
        email: '',
        address: '',
        phone: '',
        profile_pic:'',
        pic: false
    }

    chooseFile () {
        this.refs.upload.click()
    }
    fileUpload (value) {
        if(value.target.files[0]) {
            let file = value.target.files[0]
            let data = new FormData()
            data.append('images', file)
            data.append('nameImage', file)
            let params = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.setState({pic: true})
            axios.post('https://showreeldoes-backend.herokuapp.com/v1/upload', data, params).then(res=> {
                console.log(res.data.created.cloudImage[0])
                this.setState({profile_pic: res.data.created.cloudImage[0]})
                this.setState({pic: false})
    
            })
        }

    }

    handleInput(value) {
        this.setState({[value.target.name]: value.target.value})
    }

    add() {
        let gender = ''
        let status = ''
        if(this.state.gender === "Male") {
            gender = true
        }else {
            gender = false
        }
        if(this.state.status === "Student") {
            status = true
        }else {
            status = false
        }
        let data = {
            // username: this.state.username,
            // password: this.state.password,
            full_name: this.state.full_name,
            department: this.state.department,
            status: status,
            gender: gender,
            birthday: this.state.birthday,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
            profile_pic: this.state.profile_pic
        }

        console.log('data yang mau dikirim', data)
        axios.post('https://showreeldoes-backend.herokuapp.com/v1/student', data).then(res => {
            console.log(res)
            this.props.history.goBack()
        })
    }
    
    render() {
        return(
            <div className="admin_editstudent" >
                <AdminSidebar/>
            <div className="col-11 mx-auto my-3">
                <div className="text-center">
                    <h1 className="font-weight-bold">AddNew Student</h1>
                </div>
                <hr className="w-100" />
                <div className="d-flex border p-3 rounded justify-content-between">
                    <div className="col-2">
                        <div className="border p-3 rounded text-center user-image d-flex align-items-center justify-content-center">
                            <input type="file" className="d-none" ref="upload" onChange={this.fileUpload.bind(this)} />
                                {this.state.pic === true ?
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                </div>
                                :
                                <div>
                                    {this.state.profile_pic != '' ?
                                        <img src={this.state.profile_pic} style={{width: '100%'}} />
                                        :
                                        <FontAwesomeIcon icon="user-alt" className="fas fa-6x" onClick={()=> this.chooseFile()} />
                                    }

                                </div>
                                }
                        </div>
                        <p className="text-muted text-center">Click to browse a file</p>
                    </div>
                        <div className="col-9 py-3">
                            <form>
                                {/* <div className="form-group row">
                                    <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="username" name="username" onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                                    <div className="col-sm-10">
                                            <input type="password" className="form-control" id="password" name="password" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div> */}
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-sm-2 col-form-label">Full Name:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="fullname" name="full_name" onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="department" className="col-sm-2 col-form-label">Department:</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="department" onChange={this.handleInput.bind(this)}>
                                            <option>-- Select Department --</option>
                                            <option>Animator</option>
                                            <option>Compositor</option>
                                            <option>Programmer</option>
                                            <option>3D Modeler</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="department" className="col-sm-2 col-form-label">Status:</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="status" onChange={this.handleInput.bind(this)}>
                                            <option>-- Selectv Status --</option>
                                            <option>Student</option>
                                            <option>Graduated</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="department" className="col-sm-2 col-form-label">Gender:</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="gender" onChange={this.handleInput.bind(this)}>
                                            <option>-- Select Gender --</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday:</label>
                                    <div className="col-sm-10">
                                            <input type="date" value="date" className="form-control" value={this.state.birthday} name="birthday" onChange={this.handleInput.bind(this)} />
                                
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                                    <div className="col-sm-10">
                                            <input type="email" className="form-control" name="email" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-sm-2 col-form-label">Adress:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="adress" name="address" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="phone" name="phone" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-danger" onClick={()=> this.add()}>Add Student</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Admin_addstudent;