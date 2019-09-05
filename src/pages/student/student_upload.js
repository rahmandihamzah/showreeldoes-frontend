import React, { Component } from 'react';
import '../../styles/student/student_upload.css'

import HeaderStudent from '../../components/student/student_header';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import {config} from '../../config'
import UploadShowreel from '../../components/student/uploadShowreel'

// import { Button } from 'react-bootstrap'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student     : {},
            file        : null,
            uploadCancel: false,
            title       : '',
            description : '',  
        }
        this.previewFile        = this.previewFile.bind(this)
        this.handleDataChange   = this.handleDataChange.bind(this)
    }

    handleDataChange(e) {
        this.setState(state => ({ title: e.target.value}));
        console.log(e.target.value)
    }
    // handleDescriptionChange(e) {
    //     this.setState({ description: e.target.value})
    //     console.log(e.target.value)
    // }

    previewFile(e) {
        if (e.target.files[0]) {
            this.setState({
                file: URL.createObjectURL(e.target.files[0]),
                uploadCancel: true
            })
            this.refs.iconupload.style.display = "none"
        }
    }

    linkPage(e) {
        console.log(e)
    }
    upload() {
        this.refs.upload.click()
    }
    componentDidMount() {
        // console.log('kj7ikik', localStorage.getItem('tokenlogin'))
        axios.get( config.baseurl + 'student/' + this.props.match.params.id).then(res => {
            // console.log('erroorrrrrr', res)
            this.setState({ student: res.data.student })
            localStorage.setItem('student', JSON.stringify(res.data.student))
        })
    }

    render() {
        return (
            <div>
                <HeaderStudent data={this.state.title} />
                <h3 className="show-them-reel d-flex justify-content-center mb-0 text-capitalize">Show them your reel!</h3>
                {/* Upload File */}
                {/* <div className="file-upload">
                    <div className="input-form ">
                        <input type="file" className="input-file" ref='upload' onChange={this.previewFile} />
                        <div ref="iconupload">
                            <FontAwesomeIcon icon="cloud-upload-alt" className="fas fa-7x" color="grey" onClick={() => this.upload()} />
                            <p>Click to browse a file</p>
                        </div>
                    </div>
                </div>
                {this.state.uploadCancel === true ?
                    <div className="text-center wrapper-image col-lg-7 col-12 mx-auto p-0">
                        <img src={this.state.file} className="file-preview" />
                        <div className="d-lg-flex justify-content-around hover-button">
                            <button className="btn-change col-lg-5 col-12 p-3 rounded-pill mb-2 mb-lg-0" onClick={() => this.upload()}><FontAwesomeIcon icon="file-image" className="mr-2" />Change</button>
                            <button className="btn-upload col-lg-5 col-12 p-3 rounded-pill"><FontAwesomeIcon icon="cloud-upload-alt" className="mr-2" />Upload</button>
                        </div>
                    </div>
                    : null
                } */}
                {/* Upload File */}
                <UploadShowreel />
            </div>
        )
    }
}

export default withRouter(Upload);