import React, { Component } from 'react';
import '../styles/student_profile.css'

import StudentHeader from '../components/student_header'
import ProfileHead from '../components/profile_head';

class StudentProfile extends Component {
    render() {
        return (
            <div>
                <StudentHeader />
                {/* <ProfileHead /> */}
                <div className="text-center d-flex flex-column align-items-center">
                    <p className="page-title mb-0">STUDENT</p>
                    <hr className="seperate-line m-0" />
                    <p className='subtitle'>PROFILE</p>
                </div>
                <ul className="student-list-container row p-0 justify-content-center">
                    <li className="student-list-frame m-2 mb-4">
                        <div className="student-detail-space d-flex align-items-center">
                            <div className="profile-pic position-relative">
                                {/* <img src={DummyPicture} alt="" /> */}
                                <i className="fas fa-user-circle fa-4x icon-user"></i>
                            </div>
                            <div onClick={() => this.linkToProfile('78678677896676')} className="name-dept d-flex flex-column justify-content-center">
                                <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                <hr className="m-0 seperate-name-dept" />
                                <p className="m-0 pl-2">3D Modeler</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="student-identity-area d-flex col-6 mx-auto p-5 mb-5">
                    <div>
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
                    <div className="font-weight-bold">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Student / Graduated</p>
                        <p>Male / Female</p>
                        <p>January 01, 1994</p>
                        <p>loremipsum@gmail.com</p>
                        <p>Jl. Buah-buahan No. 3 Sleman, DIY</p>
                        <p>08123456789</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentProfile;