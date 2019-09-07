import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Admin_deleted from './admin_deleted';
import './admin_table_showreel.css'

class TableShowrel extends Component {
    state ={
        data_showreel: ''
    }

    linkEditShowreel (id) {
        this.props.history.push('/admin/editshowreel/' + id)
    }

    linkAddShowreel () {
        this.props.history.push('/admin/addshowreel')
    }

    modalImg (data) {
        console.log(data)
        this.setState({data_showreel: data})
    }
    render () {
        console.log('props', this.props.showreel)
        return (
            <div>
                <div className="tes"></div>
                <div className="col-11 mx-auto">
                    <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x" onClick={() => this.linkAddShowreel()}/>
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-dark text-light text-center">
                                <th scope="col">NO</th>
                                <th scope="col">Creator</th>
                                <th scope="col">Title</th>
                                <th scope="col">Uploaded File</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.props.showreel.map((showreel, i) => {
                                    return(
                                        <tr key={i}>
                                            <td scope="row">{i + 1}</td>
                                            <td>{showreel.id_student.full_name}</td>
                                            <td>{showreel.title}</td>
                                            <td><button className="btn btn-sm btn-light" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => this.modalImg(showreel.fileUpload)}>Show showreel</button></td>
                                            <td><div>{showreel.description.slice(0, 70)}</div></td>
                                            <td>
                                                <div className="d-flex justify-content-around align-item-center">
                                                    <FontAwesomeIcon icon ="pen" className="text-primary mr-3" onClick={() => this.linkEditShowreel(showreel._id)} />
                                                    <FontAwesomeIcon icon ="trash-alt" className=" text-danger" data-toggle="modal" data-target="#delete" />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                    </table>
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="img-wrapper d-flex justify-content-center align-items-center text-center">
                                <img src={this.state.data_showreel} />
                            </div>
                        </div>
                    </div>
                    <Admin_deleted/>
                </div>
            </div>
        )
    }
}

export default withRouter(TableShowrel);