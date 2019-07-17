import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/students.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DummyPicture from '../images/does-logo.png';
import Slider from 'react-slick';

class Students extends Component {

    linkToProfile(e) {
        console.log(e)
        this.props.history.push('/studentProfile/' + e)
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            slide: 'li',
            slidesToShow: 12,
            slideToScroll: 12
        }

        return (
            <div>
                <Header />
                <div className="text-center d-flex flex-column align-items-center">
                    <p className="page-title mb-0">STUDENT</p>
                    <hr className="seperate-line mt-0" />
                    <ul className="sub-dept-list d-flex text-center p-0">
                        <li className="mr-3">
                            <a href="#3dmodeler-student">3D Modeler</a>
                        </li>
                        <li className="mr-3">
                            <a href="#animator-student">Animator</a>
                        </li>
                        <li className="mr-3">
                            <a href="#compositor-student">Compositor</a>
                        </li>
                        <li className="mr-3">
                            <a href="#programmer-student">Programmer</a>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div id="3dmodeler-student">
                        <ul className="subdept-title p-0">
                            <li>3D Modeler</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <div className="3dmodeler-student-list">
                            <ul className="student-list-container row p-0 justify-content-center">
                                <Slider {...settings}>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">3D Modeler</p>
                                            </div>
                                        </div>
                                    </li>
                                </Slider>
                            </ul>
                        </div>
                    </div>


                    <div id="animator-student">
                        <ul className="subdept-title p-0">
                            <li>Animator</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <Slider {...settings}>
                            <div className="3dmodeler-student-list">
                                <ul className="student-list-container row p-0 justify-content-center">
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="animator-student-list">
                                <ul className="student-list-container row p-0 justify-content-center">
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Animator</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Slider>
                    </div>


                    <div id="compositor-student">
                        <ul className="subdept-title p-0">
                            <li>Compositor</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <Slider {...settings} className='mb-5'>
                            <div className="compositor-student-list">
                                <ul className="student-list-container row p-0 justify-content-center">
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="compositor-student-list">
                                <ul className="student-list-container row p-0 justify-content-center">
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Slider>
                    </div>


                    <div id="programmer-student">
                        <ul className="subdept-title p-0">
                            <li>Programmer</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <Slider {...settings} className="mb-5">
                            <div className="programmer-student-list">
                                <ul className="student-list-container row p-0 justify-content-center">
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="programmer-student-list">
                                <ul className="student-list-container row p-0 justify-content-center">
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="student-list-frame m-2 mb-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center">
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Slider>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Students;