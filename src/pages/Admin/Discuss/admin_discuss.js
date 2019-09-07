import React, {Component} from 'react';
// import './admin_discuss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios';

class Admin_discuss extends Component {
    constructor() {
        super () 
        this.state = {
            data_discuss: []
        }
    }
    componentDidMount() {
        var Discuss = []
        axios.get("https://showreeldoes-backend.herokuapp.com/v1/discusses").then(response => {
            console.log('ini response',response)
            this.setState({data_discuss: response.data.discusses})
        })

    }
  
    
    linkAddDiscuss() {
        this.props.history.push('/admin/adddiscuss')
    }


    

    render() {
        return(
            <div className="admin_discuss" >

                <AdminSidebar/>
            
                <div className="text_discuss text-center">
                    <h1>Discuss</h1>
                    <hr className="w-100"/>
                </div>
                <div className="col-11 mx-auto">
                    <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x" onClick={() => this.linkAddDiscuss()}/>
                        <table className="table table-striped">
                        <thead>
                            <tr className="bg-dark text-light text-center">
                                <th>NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                            {this.state.data_discuss.map((discuss, i) => {
                                return(
                                <tr key={i}>
                                    <td scoped="row">{i + 1}</td>
                                    <td><p>{discuss.name}</p></td>
                                    <td>{discuss.email}</td>
                                    <td>{discuss.subject}</td>
                                    <td>
                                    <p>{discuss.message}</p>
                                    </td>
                                    <td>
                                    <FontAwesomeIcon icon ="envelope" className="envlope text-center" />
                                    </td>
                                </tr>
                                )
                            })}

        
                            </tbody> 
                        
                    </table>
                
                </div> 
    
            </div>
        )
    }
}

export default Admin_discuss;