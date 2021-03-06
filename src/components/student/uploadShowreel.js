import React, { Component } from 'react';
import '../../styles/student/student_upload_showreel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { config } from '../../config';
import Swal from 'sweetalert2';


// import HeaderStudent from '../../components/student/student_header';

class UploadShowreel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null,
            title: '',
            description: '',
            // upload      : {},
        };
    }

    // UPLOAD
    chooseFile() {
        this.refs.upload.click()
    }
    preview(e) {
        console.log(e.target.files[0])
        if (e.target.files[0]) {
            this.setState({
                file: URL.createObjectURL(e.target.files[0]),
                uploadCancel: true
            })
            this.refs.iconUpload.style.display = "none"
        }
    }
    // imageHandler = event => {
    //     console.log(event.target);
    // }

    // Handle Data input
    handleData(d) {
        console.log(d.target.name)
        console.log(d.target.value)
        this.setState({ [d.target.name]: d.target.value })
        // this.setState({ })
    }
    // UPLOAD DATA and To Profile page
    publish() {
        console.log('Publish')

        // this.props.history.push('/student/profile/' + localStorage.getItem('idStudent'))
        let data = {
            title: this.state.title,
            description: this.state.description,
            file: this.state.file
        }
        let id = localStorage.getItem('idStudent')
        axios.post(config.baseurl + 'showreel/' + id, data).then(
            res => {
                console.log(res)
                // this.props.history.push('/student/profile' + id)
                if (res.showreels += 1) {
                    Swal.fire(
                        'Your Showreeel is Uploaded!',
                        'Success Uploaded',
                        'success'
                    )
                } else {
                    
                    Swal.fire(
                        'Your Showreeel is Uploaded!',
                        'Success Uploaded',
                        'error'
                    )
                }

            })
    }
    // this.props.history.push('/student/profile' + localStorage.getItem('idStudent'))

    // console.log(this.state.title, this.state.description)
    render() {
        return (
            <div>
                {/* File Preview*/}
                <div className="wrap-preview d-flex align-items-center justify-content-center p-0">
                    <div className="d-flex justify-content-center">
                        <input type="file" className="d-none" ref="upload" onChange={this.preview.bind(this)} />
                        <div ref="iconUpload">
                            <FontAwesomeIcon icon="cloud-upload-alt" color="grey" className="fas fa-7x" onClick={() => this.chooseFile()} />
                        </div>
                        {this.state.uploadCancel === true ?
                            <div>
                                <div className="wrapper-image">
                                    <img src={this.state.file} className="file-preview" />
                                    <div className="hover-button d-flex justify-content-center align-items-cente border-danger">
                                        <button className="btn-change p-3 col-lg-3 col-12 rounded border-danger" onClick={() => this.chooseFile()}><FontAwesomeIcon icon="file-image" className="mr-3 fas fa-1x" />Change</button>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
                {/* File Preview */}
                {/* Upload Detail */}
                <div className="col-10 mx-auto mt-3 px-4 mb-4">
                    <div className="justify-content-between align-items-center">
                        <Form
                            className="col-lg-6 col-12 p-0 p-lg-3"
                        // onSubmit={this.submitHandler}
                        >
                            <FormGroup>
                                <Label for="exampleEmail">Title</Label>
                                <Input type="title"
                                    name="title"
                                    onChange={this.handleData.bind(this)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    onChange={this.handleData.bind(this)}
                                    rows="5" />
                            </FormGroup>
                            <Button color="danger" onClick={() => this.publish()}>Publish</Button>
                        </Form>
                        <div className="upload-save col-lg-2 ml-auto p-0 p-lg-2">
                            {/* <FontAwesomeIcon icon="cloud-upload-alt" className="fas fa-7x icon-upload" color="grey" /> */}
                        </div>
                    </div>
                </div>
                {/* Upload Detail */}

            </div>
        )
    }
}
export default UploadShowreel;