import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { isAuthenticated, updateUser } from '../../../user/user';
import './Profile.css';
import AdminLeftPanel from '../../../Components/UI/AdminLeftPanel';
// import profileImg from '../../../img/lakshay.webp'
import profileImg from '../../../img/default.webp'

/**
* @author
* @function Profile
**/

const Profile = (props) => {

  const { user }  = isAuthenticated();

  const toastId = React.useRef(null);
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    _id: user._id,
    email: user.email,
    error: false,
    loading: false,
    response: false
  });

  const { firstName, lastName, phone, _id, email, error, loading, response } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const editForm = (e) => {
    e.preventDefault();
   setValues({ ...values, error: false, loading: true })
   updateUser({ firstName, lastName, phone, _id, email })
   .then((data) => { 
      setEdit(false)
      setValues({ ...values, response: data.data.message, loading: false })
      localStorage.removeItem("jwt");
      localStorage.setItem("jwt", JSON.stringify(data.data));
   })
   .catch((err) => { 
    setValues({ firstName: user.firstName, lastName: user.lastName, phone: user.phone, _id: user._id, error:err.response.data.message, loading: false })
    setEdit(false)
    })
  }

  useEffect(() => {
    if(loading) {
      toastId.current = toast.info("Loading...", {autoClose: false})
    }
    if(response) {
      toast.dismiss(toastId.current);
      toast.success(response);
      setValues({ ...values, response: false })
     } else if(error) {
      toast.dismiss(toastId.current);
      toast.error(error);
      setValues({ ...values, error: false })
     }
  }, [loading, response, error, values])

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
              <FormControl type="text" min="3" placeholder="First Name" value={firstName} onChange={handleChange("firstName")} className="profile-input" disabled={edit ? false: true} required />
            </InputGroup>
          </Col>
          <Col md={5} lg={5} sm={12}>
            <InputGroup className="mb-3">
            <Form.Label>Last Name</Form.Label>
              <FormControl type="text" min="3" placeholder="Last Name" value={lastName} onChange={handleChange("lastName")} className="profile-input" disabled={edit ? false: true} />
            </InputGroup>
          </Col>
          <Col md={5} lg={5} sm={12}>
            <InputGroup className="mb-3">
            <Form.Label>Email address</Form.Label>
              <FormControl type="email" placeholder="Email Address" value={email} onChange={handleChange("email")}  className="profile-input" disabled={edit ? false: true} />
            </InputGroup>
          </Col>
          <Col md={5} lg={5} sm={12}>
            <InputGroup className="mb-3">
            <Form.Label>Contact</Form.Label>
              <FormControl type="text" placeholder="Phone Number" value={phone} onChange={handleChange("phone")} className="profile-input" disabled={edit ? false: true} />
            </InputGroup>
          </Col>
          {/* <Col lg={10} md={10} sm={12} style={edit ? {display: "block"}: {display: "none"}}>
            <InputGroup className="mb-3">
            <Form.Label>Change Password</Form.Label>
              <FormControl type="password" placeholder="Change Password" value={true ? values.password: false} onChange={(e) => setValues({ ...values, password: e.target.value}) } className="profile-input"  disabled={edit ? false: true} />
            </InputGroup>
          </Col> */}
        </div>
        <Button variant="outline-primary" className="edit-profile-btn" onClick={() => setEdit(true)} style={edit ? {display: "none"}: {display: "block"}}> Edit Profile </Button>
        <Button variant="outline-success" className="edit-profile-btn" onClick={editForm} style={edit ? {display: "inline"}: {display: "none"}}> Save Changes </Button>
        <Button variant="outline-warning" className="edit-profile-btn" onClick={() => { setEdit(false); setValues({ firstName: user.firstName, lastName: user.lastName, phone: user.phone, _id: user._id })}} 
                style={edit ? {display: "inline"}: {display: "none"}}> Cancel Changes </Button>
      </div>
    </AdminLeftPanel>
  )
}


export default Profile