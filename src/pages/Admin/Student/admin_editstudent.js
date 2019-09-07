import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios'
class Admin_editstudent extends Component {
    constructor() {
        super()
        this.state = {
            data_student: {},
            data_user: {},
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
            profile_pic: '',
            id: '',
            checked: '',
            pic: false
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/student/' + this.props.match.params.id).then(res => {
            console.log(res.data.student)
            let status;
            let gender;
            if(res.data.student.id_user) {
                this.setState({
                    username: res.data.student.id_user.username,
                    password: res.data.student.id_user.password,
                    checked: true
                });
            }else {
                this.setState({checked: false})
            }
            if(res.data.student.gender === true) {
                gender = 'Male'
            }else {
                gender = "Female"
            }
            if(res.data.student.status === true) {
                status = 'Student'
            }else {
                status = "Graduated"
            }

            this.setState({
                id: res.data.student._id,
                full_name: res.data.student.full_name,
                department: res.data.student.department,
                status: status,
                gender: gender,
                birthday: res.data.student.birthday.slice(0, 10),
                email: res.data.student.email,
                address: res.data.student.address,
                phone: res.data.student.phone,
                profile_pic: res.data.student.profile_pic


            })
            console.log(this.state.status, this.state.gender)
        })
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

    edit() {
        let status;
        let gender;
        if(this.state.gender === 'Male') {
            gender = true
        }else {
            gender = false
        }
        if(this.state.status === 'Student') {
            status = true
        }else {
            status = false
        }
        let data = {
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

        console.log(data)
        axios.put('https://showreeldoes-backend.herokuapp.com/v1/student/' + this.state.id, data).then(res => {
            console.log('res put student', res)
            this.props.history.goBack()
        });
        
        if(this.state.checked === false){
            if(this.state.username != '' && this.state.password != '') {
                let data_user = {
                    username: this.state.username,
                    password: this.state.password,
                }
                axios.post('https://showreeldoes-backend.herokuapp.com/v1/user/' + this.state.id, data_user).then(res => {
                    console.log('res set user id',res)
                });
            }
        }
    }

    render() {
        return(
            <div className="admin_editstudent" >
                <AdminSidebar/>
                <div className="col-11 mx-auto my-3">
                <div className="text-center">
                    <h1 className="font-weight-bold">Edit New Student Identity</h1>
                </div>
                <hr className="w-100" />
                <div className="d-flex border p-3 rounded justify-content-between">
                    <div className="col-2">
                        <div className="border p-3 rounded text-center user-image d-flex align-items-center justify-content-center" onClick={()=> this.chooseFile()}>
                            <input type="file" className="d-none" ref="upload" onChange={this.fileUpload.bind(this)} />
                            {this.state.pic === true ?
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                :
                                <img src={this.state.profile_pic} className="w-100"/>
                            }
                        </div>
                        <p className="text-muted text-center">Click to browse a file</p>
                    </div>
                        <div className="col-9 py-3">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                                    <div className="col-sm-10">
                                            <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-sm-2 col-form-label">Full Name:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="fullname" name="full_name"  onChange={this.handleInput.bind(this)} value={this.state.full_name}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="department" className="col-sm-2 col-form-label">Department:</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="department" onChange={this.handleInput.bind(this)} value={this.state.department}>
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
                                        <select className="form-control" name="status" onChange={this.handleInput.bind(this)} value={this.state.status}>
                                            <option>Student</option>
                                            <option>Graduated</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="department" className="col-sm-2 col-form-label">Gender:</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleInput.bind(this)}>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday:</label>
                                    <div className="col-sm-10">
                                            <input type="date" className="form-control" name="birthday" value={this.state.birthday} onChange={this.handleInput.bind(this)} />
                                
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                                    <div className="col-sm-10">
                                            <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-sm-2 col-form-label">Adress:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="adress" name="address" value={this.state.address} onChange={this.handleInput.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
                                    <div className="col-sm-10">
                                            <input type="number" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-danger" onClick={()=> this.edit()}>Edit Student</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Admin_editstudent;