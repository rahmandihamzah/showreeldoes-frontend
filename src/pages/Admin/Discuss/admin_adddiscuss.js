import React, {Component} from 'react';
// import './admin_discuss.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Table } from 'react-bootstrap';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios';


class Admin_adddiscuss extends Component {
    state = {
        name:'',
        email:'',
        subject: '',
        message: ''
    }

    // chooseFile () {
    //     this.refs.upload.click()
    // }
    // fileUpload (value) {
    //     if(value.target.files[0]) {
    //         let file = value.target.files[0]
    //         let data = new FormData()
    //         data.append('images', file)
    //         data.append('nameImage', file)
    //         let params = {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //         this.setState({pic: true})
    //         axios.post('https://showreeldoes-backend.herokuapp.com/v1/upload', data, params).then(res=> {
    //             console.log(res.data.created.cloudImage[0])
    //             this.setState({profile_pic: res.data.created.cloudImage[0]})
    //             this.setState({pic: false})
    
    //         })
    //     }

    // }
    
    handleInput(value) {
        this.setState({[value.target.name]: value.target.value})
    }



add() {
    let data = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
    }

    console.log('data yang mau dikirim', data)
    axios.post('https://showreeldoes-backend.herokuapp.com/v1/publishdiscuss',data).then(res => {
        console.log(res)
        this.props.history.goBack()
    })

}
    

    render() {
        return(
            <div className="admin_editstudent" >
                <AdminSidebar/>
            <div className="col-11 mx-auto my-3">
                <div className="text-center">
                    <h1 className="font-weight-bold">Add Discuss</h1>
                </div>
                <hr className="w-100" />
                <div className="d-flex border p-3 rounded justify-content-between">
                        <div className="col-12 py-3">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id='name' name="name" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-2 col-form-label" >Email:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control"  name="email" id="email" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="subject" className="col-sm-2 col-form-label">Subject:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control"  name="subject" id="subject" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="message" className="col-sm-2 col-form-label">Message:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="5" id="message" name="message" onChange={this.handleInput.bind(this)}></textarea>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-danger" onClick={()=> this.add()}>Add Discuss</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Admin_adddiscuss;