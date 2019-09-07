import React, {Component} from 'react';
// import './admin_editshowreel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import DummyPicture from '../../../images/showreel2.jpg';
import axios from 'axios';              

class Admin_addshowreel extends Component {
    state = {
       creator: '',
       title: '',
       description: '',
       fileUpload: '',
        pic: false
    }

    componentDidMount() {
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/student/' + this.props.match.params.id).then(res => {
            console.log(res.data.student)
            this.setState({creator: res.data.student.full_name})
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
                this.setState({fileUpload: res.data.created.cloudImage[0]})
                this.setState({pic: false})
    
            })
        }

    }
    handleInput(value) {
        this.setState({[value.target.name]: value.target.value})
    }

    add() {
        let data = {
            // full_name : this.state.full_name,
            title: this.state.title,
            description: this.state.description,
            fileUpload: this.state.fileUpload
        }
        console.log('data yang mau dikirim', data)
        axios.post('https://showreeldoes-backend.herokuapp.com/v1/showreel/' + this.props.match.params.id, data).then(res => {
            console.log(res)
            this.props.history.goBack()
        })
    }

    render() {
        return(
            <div className="admin_editshowreel" >
                <AdminSidebar/>
                <div className="col-11 mx-auto my-3">
                    <div className="text_editshowreel text-center">
                        <h1 className="font-weight-bold">Add Showreel</h1>
                        <hr className="w-100" />
                    </div>
                    <div className="table_editshowreel">
                        <div className="picture-showreel">
                        <input type="file" className="d-none" ref="upload" onChange={this.fileUpload.bind(this)} />
                                <div className="border rounded">
                                    {this.state.pic === true ?
                                        <div className="text-center" style={{marginTop: '15em', marginBottom: '15em'}}>
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            {this.state.fileUpload != '' ?
                                                <img src={this.state.fileUpload} style={{width: '100%'}} />
                                                :
                                                <div className="text-center" style={{marginTop: '15em', marginBottom: '15em'}}>
                                                    <FontAwesomeIcon icon="camera" className="fas fa-8x" onClick={() => this.chooseFile()}/>
                                                    <p>Choose File</p>

                                                </div>
                                            }
                                        </div>
                                    }

                                </div>
                        </div>
                        <div className="row">
                            <div className="col py-3">
                                <form className="w-50">
                                    <div className="form-group row">
                                        <label htmlFor="creator" className="col-sm-2 col-form-label" >Creator</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="creator" name="creator" value={this.state.creator} onChange={this.handleInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="tile" name="title" onChange={this.handleInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" rows="5" id="comment" name="description" onChange={this.handleInput.bind(this)}></textarea>
                                        </div>
                                    </div>  
                                </form>
                            </div>
                            <div className="col-2">
                                <div className="my-4 text-center">
                                <input type="file" className="d-none" ref="upload" onChange={this.fileUpload.bind(this)} />
                                    <FontAwesomeIcon icon="cloud-upload-alt" className="text-muted fas fa-8x" />
                                </div>
                                <div>
                                    <button type="button" className="col btn btn-danger" onClick={()=> this.add()}>Save Change</button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Admin_addshowreel;