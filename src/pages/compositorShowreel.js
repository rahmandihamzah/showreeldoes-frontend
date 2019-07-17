import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ShowreelList from '../components/showreelList';
import '../styles/showreelPerDept.css';

class CompositorShowreel extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page-title text-center">
                    <p className="mb-0">COMPOSITOR</p>
                    <hr className="seperate-line my-0" />
                    <p className="sub-title">SHOWREEL</p>
                </div>
                <ShowreelList />
                <Footer />
            </div>
        )
    }
}

export default CompositorShowreel;