import React, {Component} from 'react';
import './admin_editshowreel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import DummyPicture from '../../../images/showreel2.jpg';
import axios from 'axios';

class Admin_editshowreel extends Component {
    state = {
        data_showrell_id: {},
        creator: '',
        title: '',
        description: '',
        file: '',
        spinner: false,
        id_student: ''
    }
    componentDidMount() {
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/showreel/' + this.props.match.params.id).then(res => {
            console.log(res.data.results)
            this.setState({
                data_showrell_id: res.data.results,
                file: res.data.results.fileUpload,
                creator: res.data.results.id_student.full_name,
                description: res.data.results.description,
                title: res.data.results.title,
                id_student: res.data.results.id_student._id
            })
        })
    }

    handleInput(value) {
        this.setState({[value.target.name]: value.target.value})
    }

    save() {
        let data_showreel = {
            title: this.state.title,
            description: this.state.description,
            fileUpload: this.state.file
        }

        let data_student ={
            full_name: this.state.creator
        }

        console.log(data_showreel, data_student)
        axios.put('https://showreeldoes-backend.herokuapp.com/v1/showreel/' + this.props.match.params.id, data_showreel).then(res=> {
            console.log(res)
            axios.put('https://showreeldoes-backend.herokuapp.com/v1/student/' + this.state.id_student, data_student).then(res=> {
                console.log(res)
                this.props.history.push('/admin/detailshowreel/' + this.state.id_student)
            })
        })
    }

    chooseFile () {
        this.refs.upload.click()
    }
    fileUpload (value) {
        if(value.target.files[0]) {
            console.log(value.target.files[0])
            let file = value.target.files[0]
            let data = new FormData()
            data.append('image', file)
            data.append('nameImage', file)
    
            console.log(data)
            this.setState({spinner: true})
            axios.post('https://showreeldoes-backend.herokuapp.com/v1/upload', data).then(res => {
                console.log(res.data.created.cloudImage[0])
                this.setState({
                    file: res.data.created.cloudImage[0],
                    spinner: false
                })
            })

        }

    }
    render() {
        return(
            <div className="admin_editshowreel" >
                <AdminSidebar/>
                <div className="col-11 mx-auto my-3">
                    <div className="text_editshowreel text-center">
                        <h1 className="font-weight-bold">Edit Showreel</h1>
                        <hr className="w-100" />
                    </div>
                    <div className="table_editshowreel">
                        <div className="picture-showreel text-center" onClick={() => this.chooseFile()}>
                            <input type="file" className="d-none" onChange={this.fileUpload.bind(this)} ref="upload" />
                            {this.state.spinner === true ?
                                <div className="spinner-icon">
                                    <div className="spinner-border text-info" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>

                                </div>
                                :
                                <img src={this.state.file} style={{width: '100%'}} />
                            }
                        </div>
                        <div className="row">
                            <div className="col py-3">
                                <form className="w-50">
                                    <div className="form-group row">
                                        <label htmlFor="creator" className="col-sm-2 col-form-label">Creator</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="creator" value={this.state.creator} onChange={this.handleInput.bind(this)} name="creator" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="tile" value={this.state.title} onChange={this.handleInput.bind(this)} name="title" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" rows="5" id="comment" value={this.state.description} name="description" onChange={this.handleInput.bind(this)}></textarea>
                                        </div>
                                    </div>  
                                </form>
                            </div>
                            <div className="col-2">
                                <div className="my-4 text-center">
                                <input type="file" className="d-none" ref="upload" onChange={this.fileUpload.bind(this)} />
                                    <FontAwesomeIcon icon="cloud-upload-alt" className="text-muted fas fa-8x" onClick={()=> this.chooseFile()}/>
                                </div>
                                <div>
                                    <button type="button" className="col btn btn-danger" onClick={()=> this.save()}>Save Change</button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Admin_editshowreel;