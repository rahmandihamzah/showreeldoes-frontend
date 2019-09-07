import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ShowreelList from '../components/showreelList';
import '../styles/home.css'

import axios from 'axios';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            showreels: [],
            showreelType: Boolean
        }
    }

    componentDidMount() {
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/showreels')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    showreels: response.data.showreels,
                    // showreelType: response.date.showreels.fileUpload.includes("image")
                })
                console.log(this.state.showreels)
                // console.log(this.state.showreelType)
            })
    }

    linkToShowreelDetail(e) {
        console.log(e)
        this.props.history.push('/showreelDetail/' + e)
    }


    render() {
        return (
            <div>
                <Header />
                <div className='artwork-space'>
                </div>
                <ul className="second-nav d-flex justify-content-center py-1">
                    <li className="px-1 px-md-4">
                        <a href="/modelerShowreel">3D Modeler</a>
                    </li>
                    <li className="px-1 px-md-4">
                        <a href="/animatorshowreel">Animator</a>
                    </li>
                    <li className="px-1 px-md-4">
                        <a href="compositorShowreel">Compositor</a>
                    </li>
                    <li className="px-1 px-md-4">
                        <a href="programmerShowreel">Programmer</a>
                    </li>
                </ul>
                <div className='showreel-highlight'>
                    {/* <div className='container'> */}
                    {/* <Container> */}
                    <ul className='showreel-container row mx-3 justify-content-start row'>
                        {this.state.showreels.map((res, i) => {
                            return (
                                <li className='col-6 col-md-4 col-lg-2 px-1' onClick={() => this.linkToShowreelDetail(res._id)} key={i}>
                                    <div className='showreel-frame'>
                                        <div className='showreel-thumbnail d-flex justify-content-center'>
                                            {res.fileUpload.includes("image") == true ?
                                                <img src={res.fileUpload} alt="" className="img-thumbnail" />
                                                :
                                                <video className="video-thumbnail" src={res.fileUpload}></video>
                                            }
                                        </div>
                                        <div className='showreel-resp'>
                                            {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                        </div>
                                    </div>
                                    <div className='creator'>
                                        {res.id_student.full_name}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    {/* </div> */}
                    {/* </Container> */}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;