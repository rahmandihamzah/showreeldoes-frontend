import React, { Component } from 'react'

class FormAdmin extends Component {
    render () {
        return (
            <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Username:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="message-text" className="col-form-label">Password:</label>
                            <input type="text" className="form-control" />
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer border-0 col-5 ml-auto">
                        <button type="button" className="btn btn-sm btn-outline-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-info btn-sm">Save</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormAdmin;