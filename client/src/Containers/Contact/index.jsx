import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './Contact.css'

// Component Import
import PageTitle from '../../Components/UI/PageTitle'
import { ContactApi } from '../../user/user';

/**
* @author
* @function Contact
**/

const Contact = (props) => {

  const initialValues = {
    name: '',
    email: '',
    subject: "",
    phone: '',
    country: '',
    Interest: '',
    message: '',
    response: false,
    error: false,
    loading: false
  }

  const [{ name, email, subject, phone, country, Interest, message, response, error, loading }, setValues] = useState(initialValues)

  const toastId = React.useRef(null);

  const clearValues = () => {
    setValues({ ...initialValues });
  };

  const handleChange = name => event => {
    setValues(preValues => ({ ...preValues, response: false, [name]: event.target.value }) )
  }

  const submitForm = (e) => {
    e.preventDefault();
    setValues(preValues => ({ ...preValues, response: false, loading: true }) )
    ContactApi({ name, email, subject, phone, country, Interest, message })
    .then((res) => {
      clearValues()
      setValues(preValues => ({ ...preValues, response: res.data.message, loading: false }) )
    })
    .catch((err) => {
      setValues(preValues => ({ ...preValues, error: err.response.data.message, loading: false }) )
    })
  }

  useEffect(() => {
    if(loading) {
      toastId.current = toast.info("Loading...", {autoClose: false})
    }
    if(response) {
      toast.dismiss(toastId.current);
      toast.success(response);
      setValues(preValues => ({ ...preValues, response: false}) )
     } else if(error) {
      toast.dismiss(toastId.current);
      toast.error(error);
      setValues(preValues => ({ ...preValues, error: false}) )
     }
  }, [loading, response, error])

  return(
    <>
      <PageTitle heading="Contact Us" />
      <section className="contact-details-section section-padding">
        <Container fluid>
          <h3 className="contact-title mb-5">Mark Ad Grafix</h3>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="contact-details">
                <div className="contact-box">
                  <i className="fa fa-map-marker"></i>
                  <div className="contact-box-content">
                    <b>Corporate Office: </b>
                    Delhi, India
                  </div>
                </div>
                <div className="contact-box">
                  <i className="fa fa-envelope-o"></i>
                  <a className="contact-box-content" href="mailto:raolakshayyadav02@gmail.com" target="_blank" rel="noopener noreferrer"> raolakshayyadav02@gmail.com</a>
                </div>
                <div className="contact-box">
                  <i className="fa fa-phone"></i>
                  <a href="tel: +919891433344" className="contact-box-content" target="_blank" rel="noopener noreferrer"> +91 9891433344</a>, &nbsp; <a href="tel: 0120-0000000" className="contact-box-content" target="_blank" rel="noopener noreferrer"> 0120-0000000</a>
                </div>
                <div className="contact-box">
                  <i className="fa fa-thumbs-o-up"></i>
                  <div className="contact-box-content">
                    We appreciate every feedback.
                    <b> ( <a href="https://www.google.com/" className="contact-box-content" target="_blank" rel="noopener noreferrer">Review us </a> )</b>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <div className="contact-form-div">
                <form className="contact-form" onSubmit={submitForm}>
                  <Row>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Your Name" className="contact-form-input form-control" onChange={handleChange("name")} value={name} required />
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="email" placeholder="Your Email" className="contact-form-input form-control" onChange={handleChange("email")} value={email} required />
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Subject" className="contact-form-input" onChange={handleChange("subject")} value={subject} required />
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Phone" className="contact-form-input" onChange={handleChange("phone")} value={phone} />
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Country" className="contact-form-input" onChange={handleChange("country")} value={country} />
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Your Requirement / Interest" className="contact-form-input" onChange={handleChange("Interest")} value={Interest} />
                    </Col>
                    <Col lg={12} xs={12}>
                    <textarea col="40" rows="10" className="contact-form-input" name="MESSAGE" placeholder="Your Message" required onChange={handleChange("message")} value={message} />
                    </Col>
                    <Col lg={12} xs={12}>
                    <button className="contact-submit-btn">Send us a Message</button>
                    </Col>
                  </Row>
                  <input type="hidden" name="ht" value="4db7503e3fc2ec800836fe597ee2f83cf99cc0a3:MTYxOTA4NTYyMC4xOTIy" />
                  <input type="hidden" name="mc_signupsource" value="hosted" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-map-section">
          <div style={{ width: "100%" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56003.82693238917!2d77.23198480543262!3d28.68249094376418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f509c976f%3A0x9ec1dbe6a1f4fd3c!2sShahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1630950497600!5m2!1sen!2sin" width="100%" height="600" frameBorder="0" style={{ border: "0" }} allowFullScreen title="Our Office" aria-hidden="false" tabIndex="0" ></iframe>
          </div>
      </section>
    </>
   )
  }


export default Contact