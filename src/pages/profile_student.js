import React, { Component } from 'react';
import '../styles/profile_student.css';
import { Button, Form, Row, Col } from 'react-bootstrap';

import Profile2 from '../images/man.png'
import StudentHeader from '../components/student_header'
import ProfileHead from '../components/profile_head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StudentProfile extends Component {

    constructor() {
        super()
        this.state = {
            edit: false,
            hide: true
        }

    }
    openEdit() {
        this.setState({
            edit: true
        })
        // console.log("pencet")
    }

    render() {
        // const data = JSON.parse(localStorage.getItem("student"))
        // if (data.gender === true ) {
        //     data.gender = 'L'
        // } else {
        //     data.gender = 'P'
        // }
        return (
            <div>
                <StudentHeader />
                <div className="wrap-content">
                    {/* ProfileHead */}
                    <div>
                        <ul className="student-list-container row p-0 justify-content-center m-0">
                            <li className="student-list-frame m-2 mb-4">
                                <div className="student-detail-space d-flex align-items-center">
                                    <div className="profile-pic position-relative">
                                        {/* <img src={DummyPicture} alt="" /> */}
                                        <i className="fas fa-user-circle fa-4x icon-user"></i>
                                    </div>
                                    <div onClick={() => this.linkToProfile('78678677896676')} className="name-dept d-flex flex-column justify-content-center">
                                        <p className="m-0 pl-2 font-weight-bold"></p>
                                        <hr className="m-0 seperate-name-dept" />
                                        <p className="m-0 pl-2"></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Student Profile */}
                    <div className="col-lg-5 mx-auto mb-5 border border-dark round col-sm-12 p-0">
                        <div className="d-flex px-lg-5 pt-lg-5  p-0" >
                            {/* <div className="student-identity-area d-flex col-6 mx-auto p-5 mb-5"> */}
                            <div className="row p-4 justify-content-center">
                                <div className="col-4">
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
                                <div className="col-1">
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
                                    <p>sdfsdfs</p>
                                    <p>sdfsdfs</p>
                                    <p>sdfsdfsdf</p>
                                    <p>sdfsdfsdfsdf</p>
                                    <p>sdfsdfsdfsdfsdfsdfsdf</p>
                                    <p>sdfsdfsdf</p>
                                    <p>sdfsdfsdf</p>
                                    <p>sdfsdfsdf</p>
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
                                        <img src={Profile2} />
                                        <label>Click to browse</label>
                                    </div>
                                    <div className="form-edit col-lg-9">
                                        <div className="p-2">
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Username
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="name" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                                <Form.Label column sm="3">
                                                    Password
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="password" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Full Name
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="name" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="3">
                                                    Department
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="name" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Status
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="name" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Gender
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="name" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Birthday
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="date" placeholder="" className="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Email
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="email" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm="3">
                                                    Address
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="address" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="3">
                                                    Phone
                                </Form.Label>
                                                <Col sm="9">
                                                    <Form.Control type="number" placeholder="" />
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 text-right ml-auto p-2 mb-4">
                            <Button variant="danger" className="">Save Change</Button>
                        </div>
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
                {/* Content Profile */}
                <div>
                    {/* Insert the showrell */}
                </div>
            </div>
        )
    }
}

export default StudentProfile;