import React, { Component } from 'react'
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class detail_Showreel extends Component {
    constructor() {
        super() 
        this.state = {
            data_showreel: []
        }
    }
    componentDidMount () {
        this.getData()
    }
    getData() {
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/student/' + this.props.match.params.id).then(res => {
            console.log(res.data.student.showreels)
            // this.state.data_showreel({data_showreel: res.data.showreels})
            this.setState({
                data_showreel: res.data.student.showreels
            })
        })
        
    }
    
    delete(id) {
        console.log(id)
        axios.delete('https://showreeldoes-backend.herokuapp.com/v1/showreel/' + id).then(res => {
            console.log(res)
            this.getData()
        })
    }
    edit(id) {
        console.log(id)
        this.props.history.push('/admin/editshowreel/' + id)
    }
    addShowreel() {
        this.props.history.push('/admin/addshowreel/' + this.props.match.params.id)
    }
    render () {
        console.log('props', this.props.showreel)
        return (
            <div>
                <AdminSidebar/>
                <div className="p-0">
                    <div className="my-3" >
                        <div className="text-center">
                            <h1>Detail Showreel</h1>
                            <hr className="w-100"/>
                        </div>
                        <div className="col-11 text-center mx-auto">
                            <div className="text-left py-3 d-flex mb-3">
                                <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x mr-2 text-info" onClick={()=> this.addShowreel()} />
                                <p className="m-0 align-self-center font-weight-bold" onClick={()=> this.addShowreel()}>Add Showreel</p>
                            </div>
                            <div className="row p-3">
                                {this.state.data_showreel.map((showreel, i)=> {
                                    return (
                                    <div key={i} className="col-2 border shadow-sm mr-2 mb-2">
                                        <div className="d-flex justify-content-center text-center" style={{overflow: 'hidden', height:"170px"}}>
                                            <img src={showreel.fileUpload} style={{width: '100%'}} />
                                        </div>
                                        <div>
                                            <p>{showreel.title}</p>
                                        </div>
                                        <div className="d-flex p-3">
                                            <button className="btn btn-sm btn-outline-info mr-2" onClick={()=> this.edit(showreel._id)}>Edit</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={()=> this.delete(showreel._id)}>Delete</button>
                                        </div>
                                    </div>
                                        
                                    )
                                })}

                            </div>
                        </div>                    
                    </div>
                </div>
            </div>

        )
    }
}

export default detail_Showreel;