import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/department.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class Department extends Component {

    constructor() {
        super();
        this.state = {
            dataDepartment: [],
            animator: [],
            programmer: []
        }
    }

    componentDidMount() {
        axios.get('http://192.168.2.11:5000/v1/departments')
            .then((response) => {
                // console.log(response.data.departments)
                // console.log(response.data.departments[0])
                this.setState({
                    dataDepartment: response.data.departments,
                    animator: response.data.departments[0],
                    programmer: response.data.departments[1]
                })
                // console.log(this.state.dataDepartment)
                console.log(this.state.animator)
                console.log(this.state.programmer)
            })
    }

    render() {
        return (
            <div>
                <Header />

                <div className="page-title text-center">
                    DEPARTMENT
                </div>
                {this.state.dataDepartment.map((res, i) => {
                    return (
                        <div key={i}>
                            {res.title == "Programmer" ?
                                <div className="dept-desc-container d-flex flex-column flex-md-row justify-content-center align-items-center px-4">
                                    <div className="image-area m-3 col-12 col-md-7">
                                        <img src={res.image} className="image-dept" alt="image-3dmodeller" />
                                    </div>
                                    <div className="description-area col-md-5 col-12">
                                        <p className="dept-desc">
                                            {res.description}
                                        </p>
                                        <Link to="/modelerShowreel">
                                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">3D Modeler Showreel</button>
                                        </Link>
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                    )
                })}
                {this.state.dataDepartment.map((res, i) => {
                    return (
                        <div key={i}>
                            {res.title == "Animator" ?
                                <div className="dept-desc-container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center px-4">
                                    <div className="description-area col-md-5 d-flex flex-column align-items-end col-12">
                                        <p className="dept-desc">
                                            {res.description}
                                        </p>
                                        <Link to="/animatorShowreel">
                                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Animator Showreel</button>
                                        </Link>
                                    </div>
                                    <div className="image-area m-3 col-12 col-md-7">
                                        <img src={res.image} className="image-dept" alt="image-animator" />
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                    )
                })}
                {this.state.dataDepartment.map((res, i) => {
                    return (
                        <div key={i}>
                            {res.title == "Programmer" ?
                                <div className="dept-desc-container d-flex flex-column flex-md-row justify-content-center align-items-center px-4">
                                    <div className="image-area m-3 col-12 col-md-7">
                                        <img src={res.image} className="image-dept" alt="image-compositor" />
                                    </div>
                                    <div className="description-area col-md-5 col-12">
                                        <p className="dept-desc">
                                            {res.description}
                                        </p>
                                        <Link to="/compositorShowreel">
                                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Compositor Showreel</button>
                                        </Link>
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                    )
                })}
                {this.state.dataDepartment.map((res, i) => {
                    return (
                        <div key={i}>
                            {res.title == "Programmer" ?
                                <div className="dept-desc-container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center px-4">
                                    <div className="description-area col-md-5 d-flex flex-column align-items-end col-12">
                                        <p className="dept-desc">
                                            {res.description}
                                        </p>
                                        <Link to="/programmershowreel">
                                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Programmer Showreel</button>
                                        </Link>
                                    </div>
                                    <div className="image-area m-3 col-12 col-md-7">
                                        <img src={res.image} className="image-dept" alt="image-programmer" />
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                    )
                })}
                <Footer />
            </div>
        )
    }
}

export default Department;