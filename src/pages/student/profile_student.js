import React, { Component } from 'react';
import '../../styles/student/profile_student.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap"
import Profile2 from '../../images/man.png'
import StudentHeader from '../../components/student/student_header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from "react-moment";
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class StudentProfile extends Component {

    constructor() {
        super()
        this.state = {
            edit: false,
            hide: true,
            dataStudent: {},
            type: 'password',
            eye: 'eye-slash',
            startDate: new Date(),
            date: '',
            gender: false,
            username: '',
            password: '',
            full_name: '',
            department: '',
            // birthday: '',
            email: '',
            address: '',
            phone: ''
        }
        this.showHide = this.showHide.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }
    // Get Data
    componentDidMount() {
        this.getData ()
        // console.log(this.props.match.params.id)
    }
    getData() {
        axios.get('http://192.168.2.11:5000/v1/student/' + this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.dataStudent(res.data.student)
                this.setDate(res.data.student.birthday)
                this.setState({ render: true })
            });
    }

    // seting format date
    setDate(data) {
        var date = data.slice(0, 10)
        this.setState({ date: moment(date).format('DD-MM-YYYY') })
    }
    handleChange(date) {
        this.setState({ date: moment(date).format('DD-MM-YYYY') });
    }
    // Show Password
    showHide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'password' ? 'input' : 'password'
        })
    }
    // Edit Form
    openEdit() {
        this.setState({
            edit: true
        })
    }
    // close edit form
    closeEdit() {
        this.setState({
            edit: false
        })
    }
    // Gender and Status Changed 
    dataStudent(data) {
        // Gender
        if (data.gender === true) {
            data.gender = 'L'
            this.setState({
                dataStudent: data
            })
        } else {
            data.gender = 'P'
            this.setState({
                dataStudent: data
            })
        }
        // STATUS
        if (data.status === true) {
            data.status = 'Mahasiswa'
            this.setState({
                dataStudent: data
            })
            console.log(this.state.dataStudent)
        } else {
            data.status = "Lulus"
            this.setState({
                dataStudent: data
            })
        }
    }
    // Update data Form Profile
    updateData (id) {
        let data = {
            username    : this.state.username,
            password    : this.state.password,
            full_name   : this.state.full_name,
            department  : this.state.department,
            // birthday: '',
            email       : this.state.email,
            address: this.state.address,
            phone: this.state.phone,
        }
        axios.put('http://192.168.2.11:5000/v1/student/:id', data).then(res => {
            // console.log(res.data)

            this.getData()
        }).catch(error => {

            console.log("errorrrrrrrrr")
        })
    }
    render() {
        return (
            <div>
                <StudentHeader />
                {this.state.render === true ?
                    <div>
                        <div className="wrap-content">
                            {/* ProfileHead */}
                            <div>
                                <ul className="student-list-container row p-0 justify-content-center m-0">
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">

                                                {/* GANTI KETIKA UPLOAD FOTO PROFILE */}
                                                <i className="fas fa-user-circle fa-4x icon-user"></i>
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold" style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.full_name}</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2" style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.department}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Student Profile BOX */}
                            <div className="col-sm-12 col-md-5 col-lg-5 mx-auto mb-5 border border-dark round ">
                                <div className="d-flex px-lg-5 pt-lg-5 p-0  " >
                                    <div className="row justify-content-center">
                                        <div className="col-5 ml-3">
                                            <p>username</p>
                                            <p>password</p>
                                            <br />
                                            <p>Full Name</p>
                                            <p>Department</p>
                                            <p>Status</p>
                                            <p>Gender</p>
                                            <p>Birthday</p>
                                            <p>Email</p>
                                            <p>Address</p>
                                            <p>Phone</p>
                                        </div>
                                        <div className="col-1 mr-3">
                                            <p>:</p>
                                            <p>:</p>
                                            <br />
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                        </div>
                                        <div className="font-weight-bold">
                                            <p>sdfsdfs</p>
                                            <p>sdfsdfs</p>
                                            <br />
                                            <p style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.full_name}</p>
                                            <p style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.department}</p>
                                            <p style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.status}</p>
                                            <p>{this.state.dataStudent.gender}</p>
                                            <p><Moment format="DD/MM/YYYY">{this.state.dataStudent.birthday}</Moment></p>
                                            <p>{this.state.dataStudent.email}</p>
                                            <p>{this.state.dataStudent.address}</p>
                                            <p>{this.state.dataStudent.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Edit Data Profile */}
                                <div className="text-right">
                                    <FontAwesomeIcon icon="pencil-alt" title="Edit Profile" className="m-4 fas fa-2x text-muted" onClick={() => this.openEdit()} />
                                </div>
                            </div>
                        </div>
                        {this.state.edit === true ?
                            <div className="col-lg-5 col-12 mx-auto p-0">
                                <div className="row d-flex justify-content-center m-0 p-0">
                                    <div className="col-12 p-0">
                                        <div className="row">
                                            <div className="image-edit col-lg-3 text-center m-0 p-0">

                                                {/* Mengganti Profile Image */}
                                                <img src={Profile2} />
                                                <label>Click to browse</label>
                                            </div>
                                            <div className="form-edit col-lg-9">
                                                <div className="p-2">
                                                    {/* Useername */}
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">Username</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control name="username" type="name" placeholder="" />
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Password */}
                                                    <Form.Group
                                                        as={Row}
                                                        controlId="formPlaintextPassword">
                                                        <Form.Label  column sm="3">Password</Form.Label>
                                                        <Col sm="9">
                                                            <InputGroup>
                                                                <Input name="password" type={this.state.type} placeholder="username"  />
                                                                <InputGroupAddon addonType="append">
                                                                    <InputGroupText><FontAwesomeIcon icon={this.state.type === 'input' ? 'eye' : 'eye-slash'} onClick={this.showHide} /></InputGroupText>
                                                                </InputGroupAddon>
                                                            </InputGroup>
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Full Name */}
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">Full Name</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control name="full_name" type="name" placeholder={this.state.dataStudent.full_name} onChange={event => this.handleChange(event)} />
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Department */}
                                                    <Form.Group as={Row} >
                                                        <Form.Label column sm="3">Department</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control name="department" type="name" placeholder={this.state.dataStudent.department} />
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Status */}
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">Status</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control name="status" type="name" placeholder={this.state.dataStudent.status} />
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Gender */}
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">Gender</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control name="gender" type="name" placeholder={this.state.dataStudent.gender} />
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Birthday */}
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">Birthday</Form.Label>
                                                        <Col sm="9">
                                                            <DatePicker
                                                                placeholderText={this.state.date}
                                                                onChange={this.handleChange}
                                                                dateFormat="MMMM d, yyyy" className="p-1 col w-100 rounded" />
                                                        </Col>
                                                    </Form.Group>
                                                    {/*Email */}
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">Email</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control type="email" placeholder={this.state.dataStudent.email} />
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Address */}
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">Address</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control type="address" placeholder={this.state.dataStudent.address} />
                                                        </Col>
                                                    </Form.Group>
                                                    {/* Phone */}
                                                    <Form.Group as={Row} >
                                                        <Form.Label column sm="3">Phone</Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control type="number" placeholder={this.state.dataStudent.phone} />
                                                        </Col>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12 text-right ml-auto d-flex justify-content-around p-0">
                                    <Button variant="warning" className="" onClick={() => this.closeEdit()}>Cancel</Button>
                                    <Button variant="danger ml-2" className="" onClick={() => this.updateData()}>Save Change</Button>
                                </div>
                                <div className="mb-5"></div>
                            </div>
                            : null
                        }
                        {this.state.edit === false ?
                            <div className="row justify-content-center mb-4 mt-5 m-0">
                                <div className="add-showreel col-lg-4 m-0 m-lg-0">
                                    <Button variant="danger" className="">Add showreel</Button>
                                </div>
                            </div>
                            : true
                        }
                    </div> : null
                }
            </div>
        )
    }
}

export default StudentProfile;