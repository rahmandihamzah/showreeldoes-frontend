import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class Admin_deleted extends Component {
    delete() {
        console.log(this.props.delete)
        axios.delete('https://showreeldoes-backend.herokuapp.com/v1/student/' + this.props.delete).then(res => {
            console.log(res)
            window.location.reload()
        })
        console.log(this.props.delete)
        axios.delete('https://showreeldoes-backend.herokuapp.com/v1/partner/' + this.props.delete).then(res => {
            console.log(res)
            window.location.reload()
        })

    }
    render() {
        return (
            <div>
                <div className="modal fade" id="delete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="text-right p-3">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center p-5">
                                <h5 className="text-danger">Are you sure you want to Delete ?</h5>
                            </div>
                            <div className="modal-footer border-0 col-5 ml-auto">
                                <button type="button" className="btn btn-sm btn-outline-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={()=> this.delete()} data-dismiss="modal">Delete!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin_deleted;