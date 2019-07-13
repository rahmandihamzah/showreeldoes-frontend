import React, { Component } from 'react';
import '../styles/student_upload.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderStudent from '../components/student_header';
import axios from 'axios';
import {withRouter, Redirect} from 'react-router-dom'


class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student: {},
        }
    }
    linkPage(e) {
        console.log(e)
    }
    upload() {
        this.refs.upload.click()
    }
    componentDidMount() {
        console.log( 'kj7ikik', localStorage.getItem('tokenlogin'))
        if (! this.props.match.params.id) {
            this.props.history.push('/')
            console.log('gak boleh masuyk')
        } else {
            console.log('MASULK')
            console.log(this.props.match.params.id)
            axios.get('http://192.168.2.12:5000/v1/student/' + this.props.match.params.id).then(res => {
                console.log(res)
                this.setState({ student: res.data.student })
                localStorage.setItem('student', JSON.stringify(res.data.student))
            })
        }
    }

    render() {
        return (
            <div>
                <HeaderStudent />
                <h2 className="show-them-reel d-flex justify-content-center">Show them you reel!</h2>
                {/* Upload File */}
                <div className="p-4 wrap">
                    <div className="file-upload d-flex justify-content-center align-items-center col-sm-12 col-md-12 col-xl-8 col-lg-8 mx-auto">
                        <div className="input-form ">
                            <input type="file" className="input-file" ref='upload' />
                            <FontAwesomeIcon icon="cloud-upload-alt" className="fas fa-7x" color="grey" onClick={() => this.upload()} />
                            <p>Click to browse a file</p>
                            {/* <div id="dynamic" className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>
                                <span id="current-progress"></span>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Upload File */}
            </div>
        )
    }
}

export default withRouter(Upload);