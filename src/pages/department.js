import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/department.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Department extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page-title text-center">
                    DEPARTMENT
                </div>
                <div className="dept-desc-container d-flex justify-content-center align-items-center">
                    <div className="image-area m-3"></div>
                    <div className="description-area">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link>
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">3D Modeler Showreel</button>
                        </Link>
                    </div>
                </div>
                <div className="dept-desc-container d-flex justify-content-center align-items-center">
                    <div className="description-area d-flex flex-column align-items-end">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link>
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Animator Showreel</button>
                        </Link>
                    </div>
                    <div className="image-area m-3"></div>
                </div>
                <div className="dept-desc-container d-flex justify-content-center align-items-center">
                    <div className="image-area m-3"></div>
                    <div className="description-area">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link>
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Compositor Showreel</button>
                        </Link>
                    </div>
                </div>
                <div className="dept-desc-container d-flex justify-content-center align-items-center">
                    <div className="description-area d-flex flex-column align-items-end">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link>
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Programmer Showreel</button>
                        </Link>
                    </div>
                    <div className="image-area m-3"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Department;