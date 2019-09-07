import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios';

class Admin_addpartner extends Component {
    state = {
        partner_name: '',
        partner_institution: '',
        image: '',
        testimoni:'',
        profile_pic:'',
        pic: false
    }
    

    chooseFile () {
        this.refs.upload.click()
    }
    fileUpload (value) {
        if(value.target.files[0]) {
            let file = value.target.files[0]
            let data = new FormData()
            data.append('images', file)
            data.append('nameImage', file)
            let params = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.setState({pic: true})
            axios.post('https://showreeldoes-backend.herokuapp.com/v1/upload', data, params).then(res=> {
                console.log(res.data.created.cloudImage[0])
                this.setState({profile_pic: res.data.created.cloudImage[0]})
                this.setState({pic: false})
    
            })
        }

    }
    handleInput(value) {
        this.setState({[value.target.name]: value.target.value})
    }


    add() {

        let data = {
            testimoni: this.state.testimoni,
            partner_name: this.state.partner_name,
            partner_institution: this.state.partner_institution,
            profile_pic: this.state.profile_pic  
        }

        console.log('data yang mau dikirim', data)
        axios.post('https://showreeldoes-backend.herokuapp.com/v1/partner', data).then(res => {
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
                    <h1 className="font-weight-bold">AddNew Patner</h1>
                </div>
                <hr className="w-100" />
                <div className="d-flex border p-3 rounded justify-content-between">
                    <div className="col-2">
                        <div className="border p-3 rounded text-center user-image d-flex align-items-center justify-content-center">
                            
                            <input type="file" className="d-none" ref="upload" onChange={this.fileUpload.bind(this)} />
                                {this.state.pic === true ?
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                </div>
                                :
                                <div>
                                    {this.state.profile_pic != '' ?
                                        <img src={this.state.profile_pic} style={{width: '100%'}} />
                                        :
                                        <FontAwesomeIcon icon="user-alt" className="fas fa-6x" onClick={()=> this.chooseFile()} />
                                    }

                                </div>
                                }
                        </div>
                        <p className="text-muted text-center">Click to browse a file</p>
                    </div>
                        <div className="col-9 py-3">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">partner name:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="name" name="partner_name" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="institution" className="col-sm-2 col-form-label">partner institution:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="institution" name="partner_institution" onChange={this.handleInput.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="testimoni" className="col-sm-2 col-form-label">Testimoni:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="5" id="testimoni" name="testimoni" onChange={this.handleInput.bind(this)}></textarea>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-danger" onClick={()=> this.add()}>Add Student</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Admin_addpartner;