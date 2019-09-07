import React, {Component} from 'react';
import './admin_dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card} from 'react-bootstrap';
import AdminSidebar from '../../../components/Admin/adminsidebar';
import axios from 'axios';


class AdminDashboard extends Component {
    constructor(){
        super()
        this.state = {
            // about: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            editAbout: false,
            founder: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            editFounder:false,
            // video: '',
            // file: '',
            // name: '',
            // dataPartner: [],
            dataAbout: {},
            about: '',
            fileAbout: '',
            // founder: '',
            fileFounder: '',
            id_about: '',
            pic: false
        } 
    }

    componentDidMount () {
        //  axios.get('http://backend-beli.herokuapp.com/product/7uYYSg0Yjya44BqlGGJi').then(response => {
            //      console.log(response)
            //      this.setState({dataAbout: response.data.result})
            //  })
        this.getDataAbout()
    }
    getDataAbout() {
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/abouts').then(response => {
            console.log(response)
            this.setState({
                dataAbout: response.data.abouts[0],
                about: response.data.abouts[0].content,
                fileAbout: response.data.abouts[0].image,
                id_about: response.data.abouts[0]._id
            });
        });        
    }
 
    editAbout () {
        this.setState({
            editAbout: true,
            abdataout: this.state.dataAbout.content,
            fileAbout: this.state.dataAbout.image

        })
    }

    cancelEditAbout () {
        this.setState({
            editAbout: false,
        })
    }

    fileAbout (value) {
        if(value.target.files[0]) {
            let file = value.target.files[0]
            let data = new FormData()
            data.append('images', file)
            data.append('nameImage', file)
            let params = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.setState({pic: true})
            axios.post('https://showreeldoes-backend.herokuapp.com/v1/upload', data, params).then(res=> {
                console.log(res.data.created.cloudImage[0])
                this.setState({fileAbout: res.data.created.cloudImage[0]})
                this.setState({pic: false})
    
            })
        }
    }
    chooseAbout () {
        this.refs.uploadAbout.click()
    }

    saveAbout () {
        let data = {
            content: this.state.about,
            image: this.state.fileAbout
        }
        console.log('data about yang mau dikirim', data)
        axios.put('https://showreeldoes-backend.herokuapp.com/v1/about/' + this.state.id_about, data).then(res => {
            console.log(res)
            this.setState({editAbout: false});
            this.getDataAbout()
        })
    }

    editFounder () {
        this.setState({editFounder: true})
    }
    cancelEditFounder () {
        this.setState({editFounder: false})
    }
    chooseFounder () {
        this.refs.uploadfounder.click()
    }
    fileFounder (value) {
        console.log(value.target.files[0])
    }

    handleText (value) {
        this.setState({[value.target.name]: value.target.value})
    }


    //PENTING

    // video(e) {
    //     if(e.target.files[0]) {
    //         this.setState({
    //             video: '',
    //             file: '',
    //             name: ''
    //         });
    //         console.log(e.target.files[0].name)

    //         var data = e.target.files[0].type
    //         var names = e.target.files[0].name
    //         var files = URL.createObjectURL(e.target.files[0])
            
    //         if(data === "video/mp4") {
    //             this.setState({
    //                 video: files,
    //                 name: names
    //             })
    //         }else {
    //             this.setState({
    //                 file: files,
    //                 name: names
    //             })
    //         }

    //     }
    // }
    
    render() {
        return(
            <div className="dashboard-admin">
                <AdminSidebar/>
                <div className="col-11 p-0 mx-auto">
                    <div className="about_wrapper">
                        <div className="about_card">
                            <h4>About</h4>
                            <div className="about_list">
                                    {this.state.editAbout == true ?
                                        <div className="about_img">
                                            {this.state.pic === true ?
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                :
                                                <div>
                                                    <img src={this.state.fileAbout} className="img-about" onClick={()=> this.chooseAbout()} />
                                                    <input type="file" className="d-none" ref="uploadAbout" onChange={this.fileAbout.bind(this)}/>
                                                </div>
                                            }
                                        </div>
                                        :
                                        <div className="about_img">
                                            <img src={this.state.dataAbout.image} className="img-about" />
                                        </div>
                                    }
                                <div className="about_detail">
                                    {this.state.editAbout === true ?
                                        <textarea className="form-control" rows="6" value={this.state.about} name="about" onChange={this.handleText.bind(this)} name="about"></textarea>
                                        :
                                        
                                        <p>{this.state.dataAbout.content}</p>
                                    }
                                </div>
                            </div>
                            {this.state.editAbout === true ? 
                                <div className="text-right col-5 ml-auto d-flex">
                                    <button className="btn btn-sm btn-outline-info mr-3" onClick={() => this.saveAbout()}>
                                        <FontAwesomeIcon icon ="save" className="mr-2" />Save
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => this.cancelEditAbout()}>
                                        <FontAwesomeIcon icon ="window-close" className="mr-2" />Cancel
                                    </button>
                                </div>
                                :
                                <div className="text-right">
                                    <FontAwesomeIcon icon ="pencil-alt" className="text-muted" onClick={()=> this.editAbout()} />
                                </div>
                            }
                        </div>

                        <div className="founder_card">
                            <h4 className="text-right">Founder</h4>
                            <div className="founder_list">
                                <div className="founder_detail">
                                    {this.state.editFounder === true ?
                                        <textarea className="form-control" rows="6" value={this.state.founder} onChange={this.handleText.bind(this)} name="founder">{this.state.founder}</textarea>
                                        :
                                        <p>{this.state.founder}</p>
                                    }
                                </div>
                                {this.state.editFounder == true ?
                                    <div className="founder_img">
                                        <FontAwesomeIcon icon="camera-retro" className="text-muted fa-2x"  />
                                    </div>
                                    :
                                    <div className="founder_img">
                                        <input type="file" className="d-none" ref="uploadfounder" onChange={this.fileFounder.bind(this)} />
                                        <FontAwesomeIcon icon="camera-retro" className="text-muted fa-2x" onClick={()=> this.chooseFounder()}/>
                                    </div>
                                }
                            </div>
                            {this.state.editFounder=== true ? 
                                <div className="d-flex col-5">
                                    <button className="btn btn-sm btn-outline-info mr-3">
                                        <FontAwesomeIcon icon ="save" className="mr-2" />Save
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => this.cancelEditFounder()}>
                                        <FontAwesomeIcon icon ="window-close" className="mr-2" />Cancel
                                    </button>
                                </div>
                                :
                                <div>
                                    <FontAwesomeIcon icon ="pencil-alt" className="text-muted" onClick={()=> this.editFounder()} />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {/* PENTINGGGG

                <div>
                    <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={this.video.bind(this)} />
                    {this.state.video != '' ?
                    <div>
                        <video controls>
                            <source src={this.state.video} />
                        </video>
                        <p>Nama File : {this.state.name}</p>
                    </div>
                    : null
                    }
                    {this.state.file !='' ?
                        <div>
                            <img src={this.state.file} />
                            <p>Nama File : {this.state.name}</p>
                        </div>
                        : null
                    }
                </div> */}


            </div>
        )
    }
}

export default AdminDashboard;
