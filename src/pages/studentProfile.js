import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/studentProfile.css';
import axios from 'axios';
import Moment from 'react-moment';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StudentProfile extends Component {

    constructor() {
        super()
        this.state = {
            studentById: [],
            studentShowreel: []
        }
    }

    linkToShowreelDetail(e) {
        console.log(e)
        this.props.history.push('/showreelDetail/' + e)
    }

    componentDidMount() {
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/student/' + this.props.match.params.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    studentById: response.data.student,
                    studentShowreel: response.data.student.showreels
                })
                console.log(this.state.studentById)
                console.log(this.state.studentShowreel)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="text-center d-flex flex-column align-items-center">
                    <p className="page-title mb-0">STUDENT</p>
                    <hr className="seperate-line m-0" />
                    <p className='subtitle'>PROFILE</p>
                </div>
                <ul className="student-list-container col-11 col-md-6 col-lg-4 col-xl-3 mx-auto justify-content-center">
                    <li className="student-list-frame m-2 mb-4">
                        <div className="student-detail-space d-flex align-items-center">
                            <div className="profile-pic-atprofile position-relative">
                                {this.state.studentById.profile_pic != null ?
                                    <img className="thepic" src={this.state.studentById.profile_pic} alt="" />
                                    :
                                    <i className="fas fa-poo fa-3x icon-user"></i>
                                }
                            </div>
                            <div className="name-dept d-flex flex-column justify-content-center">
                                <p className="m-0 pl-2 font-weight-bold">{this.state.studentById.full_name}</p>
                                <hr className="m-0 seperate-name-dept" />
                                <p className="m-0 pl-2">{this.state.studentById.department}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="student-identity-area d-flex flex-column col-12 col-md-7 mx-auto mb-5 justify-content-md-center align-items-md-center">
                    <table className="table table-borderless mx-auto">
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td>:</td>
                                <td className="font-weight-bold">{this.state.studentById.full_name}</td>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td>:</td>
                                <td className="font-weight-bold">{this.state.studentById.department}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>:</td>
                                {this.state.studentById.status == true ?
                                    <td className="font-weight-bold">
                                        Student
                                    </td>
                                    :
                                    <td className="font-weight-bold">
                                        Graduated
                                    </td>
                                }

                            </tr>
                            <tr >
                                <td>Gender</td>
                                <td>:</td>
                                {this.state.studentById.gender == true ?
                                    <td className="font-weight-bold">
                                        Male
                                </td>
                                    :
                                    <td className="font-weight-bold">
                                        Female
                                </td>
                                }
                            </tr>
                            <tr>
                                <td>Birthday</td>
                                <td>:</td>
                                < td className="font-weight-bold student-bithday">
                                    <Moment format="YYYY/MM/DD">
                                        {this.state.studentById.birthday}
                                    </Moment>
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td className="font-weight-bold">{this.state.studentById.email}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td className="font-weight-bold">{this.state.studentById.address}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>:</td>
                                <td className="font-weight-bold">{this.state.studentById.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="showreel-profile-list pb-5">
                    <ul className='showreel-container row mx-3 justify-content-start'>
                        {/* {this.state.studentById.showreels.map((res, i) => {
                            return (
                            )
                        })} */}

                        {this.state.studentShowreel.map((res, i) => {
                            return (
                                <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail(res._id)} key={i}>
                                    <div className='showreel-frame'>
                                        <div className='showreel-thumbnail'>
                                            {res.fileUpload.includes("image") == true ?
                                                <img src={res.fileUpload} alt="" className="img-thumbnail" />
                                                :
                                                <video src={res.fileUpload} className="video-thumbnail"></video>
                                            }
                                        </div>
                                        <div className='showreel-resp'>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <Footer />
            </div >
        )
    }
}

export default StudentProfile;