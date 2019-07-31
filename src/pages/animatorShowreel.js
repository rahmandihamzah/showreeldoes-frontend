import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ShowreelList from '../components/showreelList';
import '../styles/showreelPerDept.css';
import axios from 'axios';

class AnimatorShowreel extends Component {

    constructor() {
        super();
        this.state = {
            showreels: [],
        }
    }

    componentDidMount() {
        axios.get('http://192.168.2.11:5000/v1/showreels')
            .then((response) => {
                console.log(response.data.showreels)
                this.setState({
                    showreels: response.data.showreels
                })
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
                <div className="page-title text-center">
                    <p className="mb-0">ANIMATOR</p>
                    <hr className="seperate-line my-0 mx-auto" />
                    <p className="sub-title">SHOWREEL</p>
                </div>
                <div className='showreel-container'>
                    <div className='mx-3 justify-content-start d-flex row'>
                        {this.state.showreels.map((res, i) => {
                            return (
                                <div className="col-6 col-md-4 col-lg-2" key={i}>
                                    {res.id_student.department == "programmer" ?
                                        <div className='px-1' onClick={() => this.linkToShowreelDetail(res._id)} key={i}>
                                            <div className='showreel-frame'>
                                                <div className='showreel-thumbnail d-flex justify-content-center'>
                                                    <img src={res.fileUpload} alt="" className="img-thumbnail" />
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
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AnimatorShowreel;