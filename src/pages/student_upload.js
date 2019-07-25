import React, { Component } from 'react';
import '../styles/student_upload.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderStudent from '../components/student_header';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap';


class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student: {},
            file: null,
            uploadCancel: false
        }
        this.previewFile = this.previewFile.bind(this)
    }

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
        console.log('kj7ikik', localStorage.getItem('tokenlogin'))
        axios.get('http://192.168.2.11:5000/v1/student/' + this.props.match.params.id).then(res => {
            console.log('erroorrrrrr', res)
            this.setState({ student: res.data.student })
            localStorage.setItem('student', JSON.stringify(res.data.student))
        })
    }

    render() {
        return (
            <div>
                <HeaderStudent />
                <h2 className="show-them-reel d-flex justify-content-center mb-lg-5 mb-0">Show them your reel!</h2>
                {/* Upload File */}
                <div className="file-upload">
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
                }
                {/* Upload File */}
            </div>
        )
    }
}

export default withRouter(Upload);