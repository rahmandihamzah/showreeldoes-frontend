import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ShowreelList from '../components/showreelList';
import '../styles/showreelPerDept.css';

class ProgrammerShowreel extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page-title text-center">
                    <p className="mb-0">PROGRAMMER</p>
                    <hr className="seperate-line my-0 mx-auto" />
                    <p className="sub-title">SHOWREEL</p>
                </div>
                <ShowreelList />
                <Footer />
            </div>
        )
    }
}

export default ProgrammerShowreel;