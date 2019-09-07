import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios';

class Admin_editpartner extends Component {
    state = {
        data_partner: {},
        name: '',
        institution: '',
        testimoni: '',
        pic:false
    }
    componentDidMount() {
        let id = this.props.match.params.id
        axios.get("https://showreeldoes-backend.herokuapp.com/v1/partner/" + id).then(response => {
            this.setState({
                data_partner: response.data.partner,
                name: response.data.partner.partner_name,
                institution: response.data.partner.partner_institution,
                testimoni: response.data.partner.testimoni
            })
        })
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
    edit(id ) {
        let data = {
            testimoni: this.state.testimoni,
            partner_name: this.state.name,
            partner_institution: this.state.institution,
            partner_pic: this.state.parner_pic
        }
        console.log('data yang mau dikirim sesuai yang diedit', data)

        axios.put('https://showreeldoes-backend.herokuapp.com/v1/partner/' + id, data).then(res => {
            console.log('data udah didkirim ini resppon ya', res)
            this.props.history.push('/admin/adminpartner')
        })
    }

    render() {
        return(
            <div className="admin_editstudent" >
                <AdminSidebar/>
            <div className="col-11 mx-auto my-3">
                <div className="text-center">
                    <h1 className="font-weight-bold">Edit Patner</h1>
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
                                <img src={this.state.partner_pic} className="w-100"/>
                            }
                        </div>
                        <p className="text-muted text-center">Click to browse a file</p>
                    </div>
                        <div className="col-9 py-3">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="username" value={this.state.name} onChange={this.handleInput.bind(this)} name="name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="institution" className="col-sm-2 col-form-label">Institution:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="password" value={this.state.institution} onChange={this.handleInput.bind(this)} name="institution"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="testimoni" className="col-sm-2 col-form-label">Testimoni:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="5" id="comment" value={this.state.testimoni} onChange={this.handleInput.bind(this)} name="testimoni"></textarea>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-danger" onClick={() => this.edit(this.state.data_partner._id)}>Edit Partner</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Admin_editpartner;