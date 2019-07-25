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
                <div className="dept-desc-container d-flex flex-column flex-md-row justify-content-center align-items-center px-4">
                    <div className="image-area m-3 col-12 col-md-7"></div>
                    <div className="description-area col-md-5 col-12">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link to="/modelerShowreel">
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">3D Modeler Showreel</button>
                        </Link>
                    </div>
                </div>
                <div className="dept-desc-container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center px-4">
                    <div className="description-area col-md-5 d-flex flex-column align-items-end col-12">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link to="/animatorShowreel">
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Animator Showreel</button>
                        </Link>
                    </div>
                    <div className="image-area m-3 col-12 col-md-7"></div>
                </div>
                <div className="dept-desc-container d-flex flex-column flex-md-row justify-content-center align-items-center px-4">
                    <div className="image-area m-3 col-12 col-md-7"></div>
                    <div className="description-area col-md-5 col-12">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link to="/compositorShowreel">
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Compositor Showreel</button>
                        </Link>
                    </div>
                </div>
                <div className="dept-desc-container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center px-4">
                    <div className="description-area col-md-5 d-flex flex-column align-items-end col-12">
                        <p className="dept-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aliquam tristique ex vitae interdum efficitur. Nam
    et felis rutrum, euismod sapien sit amet, pellentesque
    ipsum. Donec vehicula libero a nibh ultrices euismod.
    Suspendisse vitae felis lacinia, ullamcorper felis sed,
    sagittis nunc. Nulla nisi nisi, blandit vel dictum et,
    commodo eget sem.
                        </p>
                        <Link to="/programmershowreel">
                            <button className="button-linked btn-to-showreel pl-5 pr-5 border-0">Programmer Showreel</button>
                        </Link>
                    </div>
                    <div className="image-area m-3 col-12 col-md-7"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Department;