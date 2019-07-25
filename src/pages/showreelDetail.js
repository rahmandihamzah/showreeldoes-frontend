import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/showreelDetail.css';

class ShowreelDetail extends Component {

    linkToProfile(e) {
        console.log(e)
        this.props.history.push('/studentProfile/' + e)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="showreel-play-container d-flex justify-content-center align-items-center">
                    <div className="showreel-play-frame">
                    </div>
                </div>
                <div className="col">
                    <div className="showreel-title">
                        <h3>This Title Lorem Ipsum</h3>
                    </div>
                    <ul className="student-list-container row p-0">
                        <li className="student-list-frame m-2 mb-4" onClick={() => this.linkToProfile("student.id")}>
                            <div className="student-detail-space d-flex align-items-center">
                                <div className="profile-pic position-relative">
                                    {/* <img src={DummyPicture} alt="" /> */}
                                    <i className="fas fa-user-circle fa-4x icon-user"></i>
                                </div>
                                <div className="name-dept d-flex flex-column justify-content-center">
                                    <p className="m-0 pl-2 font-weight-bold">Lorem Ipsum</p>
                                    <hr className="m-0 seperate-name-dept" />
                                    <p className="m-0 pl-2">3D Modeler</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="showreel-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique ex vitae interdum
                            efficitur. Nam et felis rutrum, euismod sapien sit amet, pellentesque ipsum. Donec vehicula
                            libero a nibh ultrices euismod. Suspendisse vitae felis lacinia,
                        </p>
                        <p className="see-more">see more</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShowreelDetail;