import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/students.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DummyPicture from '../images/does-logo.png';
import Slider from 'react-slick';
import axios from 'axios';

class Students extends Component {

    constructor() {
        super();
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('http://192.168.2.11:5000/v1/students')
            .then((response) => {
                // console.log(response.data.students)
                this.setState({
                    students: response.data.students
                })
                console.log(this.state.students)
            })
    }

    linkToProfile(e) {
        console.log(e)
        this.props.history.push('/studentProfile/' + e)
    }

    render() {

        var settings = {
            // dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 4,
            slidesPerRow: 3,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 4,
                        slidesPerRow: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 4,
                        slidesPerRow: 2,
                    }
                },
                {
                    breakpoint: 731,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 4,
                        slidesPerRow: 1,
                    }
                }
            ]
        }

        return (
            <div>
                <Header />
                <div className="text-center d-flex flex-column align-items-center px-auto">
                    <p className="page-title mb-0">STUDENT</p>
                    <hr className="seperate-line mt-0" />
                    <ul className="sub-dept-list d-flex text-center">
                        <li className="px-1 px-md-3">
                            <a href="#3dmodeler-student">3D Modeler</a>
                        </li>
                        <li className="px-1 px-md-3">
                            <a href="#animator-student">Animator</a>
                        </li>
                        <li className="px-1 px-md-3">
                            <a href="#compositor-student">Compositor</a>
                        </li>
                        <li className="px-1 px-md-3">
                            <a href="#programmer-student">Programmer</a>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div id="3dmodeler-student pb-5">
                        <ul className="subdept-title p-0">
                            <li>3D Modeler</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <div className="3dmodeler-student-list">
                            <div className="student-list-container">
                                <Slider {...settings}>
                                    {this.state.students.map((res, i) => {
                                        return (
                                            <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4" key={i}>
                                                <div className="student-detail-space d-flex align-items-center">
                                                    <div className="profile-pic position-relative">
                                                        {/* <img src={require('')} alt=""/> */}
                                                        {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                                    </div>
                                                    <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                        <p className="m-0 pl-2 font-weight-bold">{res.full_name}</p>
                                                        <hr className="m-0 seperate-name-dept" />
                                                        <p className="m-0 pl-2">{res.department}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div id="animator-student">
                        <ul className="subdept-title p-0">
                            <li>Animator</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <div className="animator-student-list">
                            <div className="student-list-container">
                                <Slider {...settings}>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    {/* ------------------------------------------------------------------------------------------------------------------------- */}
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
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
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>


                    <div id="compositor-student">
                        <ul className="subdept-title p-0">
                            <li>Compositor</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <div className="compositor-student-list">
                            <div className="student-list-container">
                                <Slider {...settings}>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ------------------------------------------------------------------------------------------------------------------------- */}
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Compositor</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>


                    <div id="programmer-student">
                        <ul className="subdept-title p-0">
                            <li>Programmer</li>
                            <li className="sum-student">10 Student</li>
                        </ul>
                        <div className="programmer-student-list">
                            <div className="student-list-container">
                                <Slider {...settings}>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ------------------------------------------------------------------------------------------------------------------------- */}
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="student-list-frame mb-4 col-12 col-md-6 col-lg-4">
                                        <div className="student-detail-space d-flex align-items-center">
                                            <div className="profile-pic position-relative">
                                                {/* <img src={require('')} alt=""/> */}
                                                {/* <i className="fas fa-user-circle fa-4x position-absolute pic-absolute"></i> */}
                                            </div>
                                            <div className="name-dept d-flex flex-column justify-content-center" onClick={() => this.linkToProfile("student.id")}>
                                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                                <hr className="m-0 seperate-name-dept" />
                                                <p className="m-0 pl-2">Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Students;