import React, { Component } from 'react';
import '../styles/judul.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Judul extends Component {

    render() {
        return (
            <div>
                <div className="animator_wrapper" >


                <ul>
                    <li>
                        <Link to="/admin/student3dmodeler">3D Modeler</Link>
                    </li>
                    <li>
                        <Link to="/admin/studentcompositor">Compositor</Link>
                    </li>
                    <li>
                        <Link to="/admin/studentanimator">Animator</Link>
                    </li>
                    <li>
                        <Link to="/admin/studentprogrammer">Programmer</Link>
                    </li>
                    
                    
                </ul>
                </div>
            </div>
        )
    }
}

export default Judul;