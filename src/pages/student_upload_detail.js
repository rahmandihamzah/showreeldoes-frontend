import React, { Component } from 'react';
import '../styles/student_upload_detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImagePlaceholder from '../images/1280x720.png'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


import HeaderStudent from '../components/student_header';

class StudentUploadDetail extends Component {


    // componentDidMount() {
    //     console.log( 'kj7ikik', localStorage.getItem('tokenlogin'))
    //     if (! this.props.match.params.id) {
    //         this.props.history.push('/')
    //         console.log('gak boleh masuyk')
    //     } else {
    //         console.log('MASULK')
    //         console.log(this.props.match.params.id)
    //         // axios.get('http://192.168.2.12:5000/v1/student/' + this.props.match.params.id).then(res => {
    //         //     console.log(res)
    //         //     this.setState({ student: res.data.student })
    //         // })
    //     }
    // }
    render() {
        return (
            <div>
                <HeaderStudent />
                {/* File Preview*/}
                <div className="wrap-preview justify-content-center p-lg-5 p-0 ">
                    <div className="preview">
                        <div className="d-flex justify-content-center image-placeholder  col-lg-10 col-12 mx-auto p-0 h-100">
                            <img className="" src={ImagePlaceholder} />
                        </div>
                    </div>
                </div>
                {/* File Preview */}
                {/* Upload Detail */}
                <div className="col-10 mx-auto mt-3 px-4 mb-4">
                    <div className="justify-content-between align-items-center">
                        <Form className="col-lg-6 col-12 p-0 p-lg-3">
                            <FormGroup>
                                <Label for="exampleEmail">Title</Label>
                                <Input type="title" name="title" id="exampleEmail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Description</Label>
                                <Input type="textarea" name="text" id="exampleText" rows="5" />
                            </FormGroup>
                        </Form>
                        <div className="upload-save col-lg-2 ml-auto p-0 p-lg-2">
                            {/* <FontAwesomeIcon icon="cloud-upload-alt" className="fas fa-7x icon-upload" color="grey" /> */}
                            <Button color="danger">Publish</Button>
                        </div>
                    </div>
                </div>
                {/* Upload Detail */}
            </div>
        )
    }
}
export default StudentUploadDetail;