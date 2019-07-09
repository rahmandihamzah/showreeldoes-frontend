import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/students.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Students extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="text-center d-flex flex-column align-items-center">
                    <p className="page-title mb-0">STUDENT</p>
                    <hr className="seperate-line mt-0" />
                    <ul className="sub-dept-list d-flex text-center p-0">
                        <li className="mr-3">
                            <Link>3D Modeler</Link>
                        </li>
                        <li className="mr-3">
                            <Link>Animator</Link>
                        </li>
                        <li className="mr-3">
                            <Link>Compositor</Link>
                        </li>
                        <li className="mr-3">
                            <Link>Compositor</Link>
                        </li>
                    </ul>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Students;