import React, { Component } from 'react';
import '../../styles/student/profile_student.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Input, InputGroup, InputGroupAddon, InputGroupText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from "reactstrap"
import StudentHeader from '../../components/student/student_header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from "react-moment";
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { config } from '../../config';
// import Profile2 from '../../images/man.png'

class StudentProfile extends Component {
   constructor() {
      super()
      this.state = {
         edit: false,
         hide: true,
         dataStudent: {},
         type: 'password',
         eye: 'eye-slash',
         startDate: new Date(),
         date: '',
         gender: false,
         username: '',
         password: '',
         full_name: '',
         department: '',
         dropdown: false,
         birthday: '',
         email: '',
         address: '',
         phone: '',
         all_data_student: {},
         status: '',
         id: ''
      }
      this.showHide = this.showHide.bind(this)
      this.handleChange = this.handleChange.bind(this);
      this.toggleDep = this.toggleDep.bind(this)
   }


   // Get Data 
   componentDidMount() {
      this.getData()
      // console.log('id')
   }
   // // AXIOS
   getData() {
      // console.log("GET ID",this.props.match.params.id)
      axios.get(config.baseurl + 'student/' + this.props.match.params.id)
         .then(res => {
            console.log('Data Student', res.data.student)
            this.dataStudent(res.data.student)
            this.setDate(res.data.student.birthday)
            this.setState({
               render: true,
               username: res.data.student.id_user.username,
               password: res.data.student.id_user.password,
               all_data_student: res.data.student,
               status: res.data.student.status,
               id: res.data.student._id
            })
         });
   }

   // seting format date
   setDate(data) {
      var date = data.slice(0, 10)
      this.setState({ date: moment(date).format('DD-MM-YYYY') })
   }
   handleChange(date) {
      this.setState({ date: moment(date).format('DD-MM-YYYY') });
   }
   // Show Password
   showHide(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
         type: this.state.type === 'password' ? 'input' : 'password'
      })
   }
   // Edit Form
   openEdit() {
      this.setState({
         edit: true
      })
   }
   // close edit form
   closeEdit() {
      this.setState({
         edit: false
      })
   }

   //Department Toggle
   toggleDep() {
      this.setState({
         dropdownOpen: !this.state.dropdownOpen
      })
   };

   // Gender and Status Changed 
   dataStudent(data) {
      // Gender
      if (data.gender === true) {
         data.gender = 'L'
         this.setState({
            dataStudent: data
         })
      } else {
         data.gender = 'P'
         this.setState({
            dataStudent: data
         })
      }
   }

   handleDataChange(data) {
      this.setState({ [data.target.name]: data.target.value })
   }
   handleDateChange(date) {
      this.setState({ date: moment(date).format('DD-MM-YYYY') })
   }
   // Update data Form Profile
   updateData() {
      // console.log(id)
      let status_student = ''
      if (this.state.status === 'Lulus') {
         status_student = false
      } else {
         status_student = true
      }

      let data = {
         username: this.state.username,
         password: this.state.password,
         full_name: this.state.full_name,
         department: this.state.department,
         birthday: this.state.birhtday,
         email: this.state.email,
         address: this.state.address,
         phone: this.state.phone,
      }
      console.log(data, 'dasdfsdfjslkdfjlskdfjsld')
      // axios.put(config.baseurl + 'student/' + this.state.id , data).then(res => {
      //     // console.log(res.data)

      //     this.getData()
      // }).catch(error => {

      //     console.log("errorrrrrrrrr")
      // })
   }

   profileChange() {

   }
   changeProfile() {
      this.refs.profileImg.click()
   }

   addShowreel() {
      let id = localStorage.getItem('idStudent')
      this.props.history.push('/student/upload/' + id)
   }

   render() {
      return (
         <div>
            <StudentHeader />
            {this.state.render === true ?
               <div>
                  <div className="wrap-content">
                     {/* ProfileHead */}
                     <div>
                        <ul className="student-list-container row p-0 justify-content-center m-0">
                           <li className="student-list-frame m-2 mb-4">
                              <div className="student-detail-space d-flex align-items-center">
                                 <div className="profile-pic position-relative">

                                    {/* GANTI KETIKA UPLOAD FOTO PROFILE */}
                                    <i className="fas fa-user-circle fa-4x icon-user"></i>
                                 </div>
                                 <div className="name-dept d-flex flex-column justify-content-center">
                                    <p className="m-0 pl-2 font-weight-bold" style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.full_name}</p>
                                    <hr className="m-0 seperate-name-dept" />
                                    <p className="m-0 pl-2" style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.department}</p>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>

                     {/* Student Profile BOX */}
                     <div className="col-sm-12 col-md-5 col-lg-5 mx-auto mb-5 border border-dark round ">
                        <div className="d-flex px-lg-5 pt-lg-5 p-2  " >
                           <div className="row justify-content-center">
                              <div className="col-5 m-0">
                                 <p>username</p>
                                 <p>password</p>
                                 {/* <br /> */}
                                 <p>Full Name</p>
                                 <p>Department</p>
                                 <p>Status</p>
                                 <p>Gender</p>
                                 <p>Birthday</p>
                                 <p>Email</p>
                                 <p>Address</p>
                                 <p>Phone</p>
                              </div>
                              <div className="col-1 mr-0">
                                 <p>:</p>
                                 <p>:</p>
                                 {/* <br /> */}
                                 <p>:</p>
                                 <p>:</p>
                                 <p>:</p>
                                 <p>:</p>
                                 <p>:</p>
                                 <p>:</p>
                                 <p>:</p>
                                 <p>:</p>
                              </div>
                              <div className="font-weight-bold">
                                 <p>{this.state.username}</p>
                                 <p>88888888</p>
                                 {/* <br /> */}
                                 <p style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.full_name}</p>
                                 <p style={{ textTransform: 'uppercase' }}>{this.state.dataStudent.department}</p>
                                 {this.state.dataStudent.status === true ?
                                    <p style={{ textTransform: 'uppercase' }}>Mahasiswa</p>
                                    :
                                    <p style={{ textTransform: 'uppercase' }}>Lusus</p>
                                 }
                                 <p>{this.state.dataStudent.gender}</p>
                                 <p><Moment format="DD/MM/YYYY">{this.state.dataStudent.birthday}</Moment></p>
                                 <p>{this.state.dataStudent.email}</p>
                                 <p>{this.state.dataStudent.address}</p>
                                 <p>{this.state.dataStudent.phone}</p>
                              </div>
                           </div>
                        </div>

                        {/* Edit Data Profile */}
                        <div className="text-right">
                           <FontAwesomeIcon icon="pencil-alt" title="Edit Profile" className="m-4 fas fa-2x text-muted" onClick={() => this.openEdit()} />
                        </div>
                     </div>
                  </div>
                  {this.state.edit === true ?
                     <div className="col-lg-5 col-12 mx-auto p-0">
                        <div className="row d-flex justify-content-center m-0 p-0">
                           <div className="col-12 p-0">
                              <div className="row">
                                 <div className="image-edit col-lg-3 text-center m-0 p-0">
                                    {/* Mengganti Profile Image */}
                                    <input type="file" className="d-none" ref="profileImg" onChange={this.profileChange.bind(this)} />
                                    <div ref="changeProfile" className="" >
                                       <img src={this.state.dataStudent.profile_pic} className="photoProfile " alt="" onClick={() => this.changeProfile()} />
                                       <label>Click to browse</label>
                                    </div>
                                 </div>
                                 <div className="form-edit col-lg-9 ">
                                    <div className="p-2">
                                       {/* Useername */}
                                       <Form.Group as={Row}>
                                          <Form.Label column sm="3">Username</Form.Label>
                                          <Col sm="9">
                                             <Form.Control name="username" type="name" />
                                          </Col>
                                       </Form.Group>
                                       {/* Password */}
                                       <Form.Group
                                          as={Row}
                                          controlId="formPlaintextPassword">
                                          <Form.Label column sm="3">Password</Form.Label>
                                          <Col sm="9">
                                             <InputGroup>
                                                <Input name="password" type={this.state.type} placeholder="username" />
                                                <InputGroupAddon addonType="append">
                                                   <InputGroupText><FontAwesomeIcon icon={this.state.type === 'input' ? 'eye' : 'eye-slash'} onClick={this.showHide} /></InputGroupText>
                                                </InputGroupAddon>
                                             </InputGroup>
                                          </Col>
                                       </Form.Group>
                                       {/* Full Name */}
                                       <Form.Group as={Row}>
                                          <Form.Label column sm="3">Full Name</Form.Label>
                                          <Col sm="9">
                                             <Form.Control name="full_name" type="name" placeholder={this.state.dataStudent.full_name} onChange={this.handleDataChange.bind(this)} />
                                          </Col>
                                       </Form.Group>
                                       {/* Department */}
                                       <Form.Group as={Row} >
                                          <Form.Label column sm="3">Department</Form.Label>
                                          <Col sm="9">
                                             {/* <Form.Control name="department" type="name" placeholder={this.state.dataStudent.department} onChange={this.handleDataChange.bind(this)} /> */}
                                             <ButtonDropdown
                                                direction="right"
                                                isOpen={this.state.dropdownOpen}
                                                toggle={this.toggleDep}
                                                className="rounded"
                                                onChange={ () => { if(this.value) {
                                                   window()
                                                   // jika data diterima  === value, load yang diperlukan saja. 
                                                   // jika jurusan animator hilangkan pilihan animator dan tampilkan jurusan lainnya
                                                }}}
                                                >
                                                <DropdownToggle caret size="m" >
                                                   Pilih Jurusan
                                                   {/* Jika sudah memilih pilih jurusan akan berubah dan akan menampilkan jurusan yang dipilih  */}
                                                   </DropdownToggle>
                                                <DropdownMenu>
                                                   <DropdownItem value="modeler">
                                                      Animator
                                                   </DropdownItem>
                                                   <DropdownItem value="modeler">
                                                      Modeler
                                                   </DropdownItem>
                                                   <DropdownItem value="compositor" >
                                                      Compositor
                                                   </DropdownItem>
                                                   <DropdownItem value="programmer" >
                                                      Programmer
                                                   </DropdownItem>
                                                </DropdownMenu>
                                             </ButtonDropdown>
                                          </Col>
                                       </Form.Group>
                                       {/* Status */}
                                       <Form.Group as={Row}>
                                          <Form.Label column sm="3">Status</Form.Label>
                                          <Col sm="9">
                                             <div className="form-check">
                                                {this.state.status === true ?
                                                   <input name="status" className="form-check-input" type="radio" name="status" id="exampleRadios1" onChange={this.handleDataChange.bind(this)} checked value="Mahasiswa" ref="mahasiswa" />
                                                   :
                                                   <input name="status" className="form-check-input" type="radio" name="status" id="exampleRadios1" onChange={this.handleDataChange.bind(this)} value="Mahasiswa" ref="mahasiswa" />
                                                }
                                                <label className="form-check-label">Mahasiswa</label>
                                             </div>
                                             <div className="form-check">
                                                {this.state.status === false ?
                                                   <input name="status" className="form-check-input" type="radio" name="status" id="exampleRadios2" onChange={this.handleDataChange.bind(this)} checked value="Lulus" ref="lulus" />
                                                   :
                                                   <input name="status" className="form-check-input" type="radio" name="status" id="exampleRadios2" onChange={this.handleDataChange.bind(this)} value="Lulus" ref="lulus" />
                                                }
                                                <label className="form-check-label">Lulus</label>
                                             </div>
                                          </Col>
                                       </Form.Group>
                                       {/* Gender */}
                                       <Form.Group as={Row}>
                                          <Form.Label column sm="3">Gender</Form.Label>
                                          <Col sm="9">
                                             <div className="form-check">
                                                <input name="gender" className="form-check-input" type="radio" name="gender" id="exampleGender1" onChange={this.handleDataChange.bind(this)} />
                                                <label className="form-check-label" >
                                                   {this.state.dataStudent.gender}
                                                </label>
                                             </div>
                                             <div className="form-check">
                                                <input name="gender" className="form-check-input" type="radio" name="gender" id="exampleGender2" onChange={this.handleDataChange.bind(this)} />
                                                <label className="form-check-label" >
                                                   P
                                                </label>
                                             </div>
                                          </Col>
                                       </Form.Group>
                                       {/* Birthday */}
                                       <Form.Group as={Row}>
                                          <Form.Label column sm="3">Birthday</Form.Label>
                                          <Col sm="9">
                                             <DatePicker
                                                name=""
                                                placeholderText={this.state.date}
                                                onChange={this.handleDateChange.bind(this)}
                                                dateFormat="MMMM d, yyyy" className="p-1 col w-100 rounded" />
                                          </Col>
                                       </Form.Group>
                                       {/*Email */}
                                       <Form.Group as={Row}>
                                          <Form.Label column sm="3">Email</Form.Label>
                                          <Col sm="9">
                                             <Form.Control type="email" placeholder={this.state.dataStudent.email} onChange={this.handleDataChange.bind(this)} />
                                          </Col>
                                       </Form.Group>
                                       {/* Address */}
                                       <Form.Group as={Row}>
                                          <Form.Label column sm="3">Address</Form.Label>
                                          <Col sm="9">
                                             <Form.Control type="address" placeholder={this.state.dataStudent.address} onChange={this.handleDataChange.bind(this)} />
                                          </Col>
                                       </Form.Group>
                                       {/* Phone */}
                                       <Form.Group as={Row} >
                                          <Form.Label column sm="3">Phone</Form.Label>
                                          <Col sm="9">
                                             <Form.Control type="number" placeholder={this.state.dataStudent.phone} onChange={this.handleDataChange.bind(this)} />
                                          </Col>
                                       </Form.Group>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-5 col-12 text-right ml-auto d-flex justify-content-around p-0">
                           <Button variant="warning" className="" onClick={() => this.closeEdit()}>Cancel</Button>
                           <Button variant="danger ml-2" className="" onClick={() => this.updateData()}>Save Change</Button>
                        </div>
                        <div className="mb-5"></div>
                     </div>
                     : null
                  }
                  {this.state.edit === false ?
                     <div className="row justify-content-center mb-4 mt-5 m-0">
                        <div className="add-showreel col-lg-4 m-0 m-lg-0">
                           <Button variant="danger" onClick={() => this.addShowreel()}>Add showreel</Button>
                        </div>
                     </div>
                     : true
                  }
               </div> : null
            }
         </div>
      )
   }
}

export default StudentProfile;