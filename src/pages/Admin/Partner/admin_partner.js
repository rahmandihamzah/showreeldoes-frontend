import React, {Component} from 'react';
import './admin_partner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import {withRouter} from 'react-router-dom';
import Admin_deleted from '../../../components/Admin/admin_deleted';
import axios from 'axios';

class Admin_partner extends Component {
    constructor() {
        super() 
        this.state = {
            data_partner: []
        }
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
    componentDidMount() {
        var partner = []
        axios.get("https://showreeldoes-backend.herokuapp.com/v1/partners").then(response => {
            console.log('ini response',response)
            this.setState({data_partner: response.data.partners})
        })

    }
    linkEditPartner (data) {
        // console.log(data)
        this.props.history.push('/admin/editpartner/' + data)
    }
    linkAddPartner() {
        this.props.history.push('/admin/addpartner')
    }
    // delete() {
    //     console.log(this.props.delete)
    //     axios.delete('https://showreeldoes-backend.herokuapp.com/v1/partner/' + this.props.delete).then(res => {
    //         console.log(res)
    //         window.location.reload()
    //     })

    // }
    delete(data) {
        console.log(data._id)
        this.setState({id_delete: data._id})
    }

    render() {
        return(
            <div className="admin_partner" >
                        <AdminSidebar/>
                <div className="text_partner">
                    <h1>Partner</h1>
                    <hr className="w-100"/>
                </div>
                <div className="col-11 mx-auto ">
                    <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x" onClick={() => this.linkAddPartner()}/>
                        <table className="table table-striped">
                        <thead>
                            <tr className="bg-dark text-light text-center">
                                <th>NO</th>
                                <th>Name</th>
                                <th>Institution</th>
                                <th>Image</th>
                                <th>Testimoni</th>
                                <th>Action</th>
                            </tr>
                        </thead> 
                    <tbody>
                            {this.state.data_partner.map((partner, i) => {
                                return(
                                    <tr key={i}>
                                        <td scoped="row">{i + 1}</td>
                                        <td>{partner.partner_name}</td>
                                        <td>{partner.partner_institution}</td>
                                        <td>img.jpg</td>
                                        <td>{partner.testimoni}</td>
                                        <td>
                                            <div className="d-flex justify-content-around">
                                                <FontAwesomeIcon icon ="pen" className="text-primary" onClick={() => this.linkEditPartner(partner._id)} />
                                                <FontAwesomeIcon icon ="trash-alt" className=" text-danger"  onClick={() => this.delete(partner)} data-toggle="modal" data-target="#delete"   />
                                            </div>
                                        </td>
                                    </tr>

                                )
                            })}
                    </tbody>  
                        
                    </table>
                    <Admin_deleted delete={this.state.id_delete}/>
                </div>
            </div>
        )
    }
}

export default Admin_partner;