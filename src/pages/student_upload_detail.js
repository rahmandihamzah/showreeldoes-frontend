import React, { Component } from 'react';
import '../styles/student_upload_detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import HeaderStudent from '../components/student_header';

class StudentUploadDetail extends Component {
    render() {
        return (
            <div>
                <HeaderStudent />
                {/* File Preview*/}
                <div className="wrap-preview d-flex justify-content-center">
                    <div className="preview p-5">
                        Preview File
                    </div>
                </div>
                {/* File Preview */}
            </div>
        )
    }
}
export default StudentUploadDetail;