import React from 'react'
import './Profile.css';
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel';
import profileImg from '../../../img/lakshay.webp'
import { Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
// import profileImg from '../../../img/default.jpg'

/**
* @author
* @function Profile
**/

const Profile = (props) => {
  return (
    <AdminLeftPanel>
      <div className="profile-wrap">
        <div className="profile-wrap-image">
        <img src={profileImg} alt="Profile" />
        </div>
        <div className="profile-details">
          <Col md={5} lg={5} sm={12}>
            <InputGroup className="mb-3">
            <Form.Label>First Name</Form.Label>
              <FormControl type="text" placeholder="First Name" value="Lakshay" className="profile-input" disabled />
            </InputGroup>
          </Col>
          <Col md={5} lg={5} sm={12}>
            <InputGroup className="mb-3">
            <Form.Label>Last Name</Form.Label>
              <FormControl type="text" placeholder="Last Name" value="Yadav" className="profile-input" disabled />
            </InputGroup>
          </Col>
          <Col md={5} lg={5} sm={12}>
            <InputGroup className="mb-3">
            <Form.Label>Email address</Form.Label>
              <FormControl type="email" placeholder="Email Address" value="yadavlakshay76@gmail.com" className="profile-input" disabled />
            </InputGroup>
          </Col>
          <Col md={5} lg={5} sm={12}>
            <InputGroup className="mb-3">
            <Form.Label>Contact</Form.Label>
              <FormControl type="text" placeholder="Phone Number" value="+91 9891433344" className="profile-input" disabled />
            </InputGroup>
          </Col>
          <Col lg={10} md={10} sm={12} style={{display: "none"}}>
            <InputGroup className="mb-3">
            <Form.Label>Change Password</Form.Label>
              <FormControl type="password" placeholder="Change Password" className="profile-input"  disabled />
            </InputGroup>
          </Col>
        </div>
        <Button variant="outline-primary" className="edit-profile-btn"> Edit Profile </Button>
        <Button variant="outline-success" className="edit-profile-btn" style={{display: "none"}}> Save Changes </Button>
      </div>
    </AdminLeftPanel>
  )
}


export default Profile