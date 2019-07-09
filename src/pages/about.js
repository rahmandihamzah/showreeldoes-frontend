import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/about.css'

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page-title text-center">
                    ABOUT
                </div>
                <div className="about-container container d-flex">
                    <div className="about-description align-self-center text-justify p-3">
                        Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Aliquam tristique ex vitae
    interdum efficitur. Nam et felis rutrum,
    euismod sapien sit amet, pellentesque ipsum.
    Donec vehicula libero a nibh ultrices
    euismod. Suspendisse vitae felis lacinia,
    ullamcorper felis sed, sagittis nunc. Nulla nisi
    nisi, blandit vel dictum et, commodo eget
    sem. Nunc lobortis sed turpis nec faucibus.
    Phasellus quis sollicitudin est. Suspendisse
    pretium lectus lectus, a tincidunt tellus porta
    sit amet. Fusce est justo, vehicula at
    vestibulum non, tempor sed metus. Mauris
    sed tellus tellus. Phasellus non nunc
    tincidunt, pharetra diam ac, mattis ipsum.
    Nullam a vestibulum ligula, eu porttitor
    lectus. Donec ut hendrerit mi.
                    </div>
                    <div className="artwork-space-about"></div>
                </div>
                <div className="container text-center mt-5 d-flex flex-column">
                    <i className="fas fa-quote-right fa-3x mb-1"></i>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique ex vitae interdum
    efficitur. Nam et felis rutrum, euismod sapien sit amet, pellentesque ipsum. Donec vehicula
    libero a nibh ultrices euismod. Suspendisse vitae felis lacinia, ullamcorper felis sed, sagittis
    nunc. Nulla nisi nisi, blandit vel dictum et, commodo eget sem. Nunc lobortis sed turpis nec
    faucibus. Phasellus quis sollicitudin est. Suspendisse pretium lectus lectus, a tincidunt tellus
    porta sit amet. Fusce est justo, vehicula at vestibulum non, tempor sed metus. Mauris sed
    tellus tellus. Phasellus non nunc tincidunt, pharetra diam ac, mattis ipsum. Nullam a
    vestibulum ligula, eu porttitor lectus. Donec ut hendrerit mi.
                    </p>
                    <div className="founder-profile align-self-center text-center d-flex flex-column">
                        <div className="pro-pic m-0 align-self-center">
                            <i className="fas fa-image fa-3x m-3"></i>
                        </div>
                        <p className="m-0">ERIX SOEKAMTI</p>
                        <p style={{ fontSize: '0.8rem' }}>FOUNDER</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;