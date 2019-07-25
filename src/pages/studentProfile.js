import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/studentProfile.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StudentProfile extends Component {

    linkToShowreelDetail(e) {
        console.log(e)
        this.props.history.push('/showreelDetail/' + e)
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
                            <div className="profile-pic position-relative">
                                {/* <img src={DummyPicture} alt="" /> */}
                                <i className="fas fa-user-circle fa-4x icon-user"></i>
                            </div>
                            <div className="name-dept d-flex flex-column justify-content-center">
                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                <hr className="m-0 seperate-name-dept" />
                                <p className="m-0 pl-2">3D Modeler</p>
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
                                <td className="font-weight-bold">Lorem Ipsum</td>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td>:</td>
                                <td className="font-weight-bold">Lorem Ipsum</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>:</td>
                                <td className="font-weight-bold">Student / Graduated</td>
                            </tr>
                            <tr >
                                <td>Gender</td>
                                <td>:</td>
                                <td className="font-weight-bold">Male / Female</td>
                            </tr>
                            <tr>
                                <td>Birthday</td>
                                <td>:</td>
                                <td className="font-weight-bold">January 01, 1994</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td className="font-weight-bold">loremipsum@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td className="font-weight-bold">Jl. Buah-buahan No. 3 Sleman, DIY</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>:</td>
                                <td className="font-weight-bold">08123456789</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <div>
                        <p>Full Name</p>
                        <p>Department</p>
                        <p>Status</p>
                        <p>Gender</p>
                        <p>Birthday</p>
                        <p>Email</p>
                        <p>Address</p>
                        <p>Phone</p>
                    </div>
                    <div className="mx-4">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div className="identity-content font-weight-bold overflow-auto">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Student / Graduated</p>
                        <p>Male / Female</p>
                        <p>January 01, 1994</p>
                        <p>loremipsum@gmail.com</p>
                        <p>Jl. Buah-buahan No. 3 Sleman, DIY</p>
                        <p>08123456789</p>
                    </div> */}
                </div>
                <div className="showreel-profile-list pb-5">
                    <ul className='showreel-container row mx-3 justify-content-start'>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                        <li className='showreel-space col-12 col-md-5 col-xl-2 my-2' onClick={() => this.linkToShowreelDetail("showreel.id")}>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

export default StudentProfile;