import React, { Component } from 'react';
import '../styles/student_profile.css'

import StudentHeader from '../components/student_header'
import ProfileHead from '../components/profile_head';

class StudentProfile extends Component {
    render() {
        return (
            <div>
                <StudentHeader />
                <ProfileHead />
            </div>
        )
    }
}

export default StudentProfile;