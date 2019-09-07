import React, {Component} from 'react';
import './admin_department.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios'

class AdminDepartment extends Component {
    constructor(){
        super()
        this.state = {
            data_departments:[],
            edit: false,
            data_file: '',
            data_description: ''
        } 
    }

    componentDidMount () {
        this.getData()
    }
    
    getData () {
        axios.get('http://showreeldoes-backend.herokuapp.com/v1/departments').then(response => {
            console.log(response)
            this.setState({data_departments: response.data.departments})
        })
    }

    edit (value, data) {
        console.log('ini value ', value)
        this.setState({

            edit: 1 + value,
            data_description: data.description,
            data_file: data.image
        })
    }
    cancelEdit() {
        this.setState({edit:
             false 
            })
    }

    chooseFile () {
        this.refs.upload.click()
    }

    handleFile (value) {
        console.log(value.target.files[0])
        // this.setState({data_file: URL.createObjectURL(value.target.files[0])})
        // this.setState({data_file: value.target.files[0]})

        var data = {
            cloudImage: [value.target.files[0]]
        }
        var params = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        console.log('masuk axios')
        axios.post('http://showreeldoes-backend.herokuapp.com/v1/upload', data, params).then(res=> {
            console.log(res)
        })
        console.log('keluar')



    }
    handleText (value) {

        this.setState({[value.target.name]: value.target.value})

    }

    save () {
        // console.log('id yang mau didkirim', id)
        let data = {
            image: this.state.data_file,
            description: this.state.data_description
        }

        console.log('DATA YANG AKAN DIKIRiM', data)

        axios.put('http://showreeldoes-backend.herokuapp.com/v1/department' + this.state._id, data).then(res => {
            console.log('respon', res)
            this.state({edit:false})
            this.getData()
        })


    }

    render() {
        return(
            <div className="department-admin">
                <AdminSidebar/>
                <div className="col-11 mx-auto">
                    <div className="content_wrapper">
                        {this.state.data_departments.map((data, i) => {
                            return (
                                <div key={i}>
                                    {i % 2 == 0 ?
                                        <div className="left_card">
                                                <h4>{data.title}</h4>
                                        <div className="left_list"> 


                                                {this.state.edit == i + 1 ?
                                                        <div className="depart_img">
                                                            <img src={this.state.data_file} onClick={()=> this.chooseFile()} />
                                                            <input type="file" className="d-none" ref="upload" onChange={this.handleFile.bind(this)}/>
                                                        </div>
                                                        :
                                                        <div className="depart_img">
                                                            <img src={data.image} />
                                                        </div>
                                                    } 
                                                <div className="left_detail">
                                                    {this.state.edit === i + 1 ?
                                                        <textarea className="form-control" rows="6" onChange={this.handleText.bind(this)} name="data_description" value={this.state.data_description}>{this.state.data_description}</textarea>
                                                        :
                                                        <p>{data.description}</p>
                                                    }
                                                </div>
                                            </div>
                                            {this.state.edit === i + 1 ? 
                                                <div className="text-right col-5 ml-auto d-flex">
                                                    <button className="btn btn-sm btn-outline-info mr-3" onClick={() => this.save(data._id)} >
                                                        <FontAwesomeIcon icon ="save" className="mr-2" />Save
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => this.cancelEdit()}>
                                                        <FontAwesomeIcon icon ="window-close" className="mr-2" />Cancel
                                                    </button>
                                                </div>
                                                :
                                                <div className="icon_edit">
                                                    <FontAwesomeIcon icon ="pencil-alt" className="text-muted" onClick={()=> this.edit(i, data)} />
                                                </div>
                                            }  
                                        </div>
                                        :
                                        <div className="right_card">
                                            <h4 className="text-right">{data.title}</h4>
                                            <div className="right_list">
                                                <div className="right_detail">
                                                    {this.state.edit === i +1 ?
                                                        <textarea className="form-control" rows="6" value={this.state.data_description} onChange={this.handleText.bind(this)} name="data_description">{this.state.data_description}</textarea>
                                                        :
                                                        <p>{data.description}</p>
                                                    }
                                                </div>
                                                {this.state.edit === i+1 ?
                                                    <div className="depart_img">
                                                        <img src={data.image} onClick={()=> this.chooseFile()} />
                                                        <input type="file" className="d-none" ref="upload"  onChange={this.handleFile.bind(this)}/>
                                                    </div>
                                                    :
                                                    <div className="depart_img">
                                                        <img src={data.image} />
                                                    </div>
                                                }
                                            </div>
                                            {this.state.edit === i+1 ? 
                                                <div className="d-flex col-5">
                                                    <button className="btn btn-sm btn-outline-info mr-3" onClick={() => this.save(data._id)}>
                                                        <FontAwesomeIcon icon ="save" className="mr-2" />Save
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => this.cancelEdit(i)}>
                                                        <FontAwesomeIcon icon ="window-close" className="mr-2" />Cancel
                                                    </button>
                                                </div>
                                                :
                                                <div>
                                                    <FontAwesomeIcon icon ="pencil-alt" className="text-muted" onClick={()=> this.edit(i, data)} />
                                                </div>
                                            }
                                        </div>
                                    }

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminDepartment;