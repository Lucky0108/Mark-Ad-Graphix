import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'

// Component Import
import PageTitle from '../../Components/UI/PageTitle'
import { ContactApi } from '../../user/user';

/**
* @author
* @function Contact
**/

const Contact = (props) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: "",
    phone: '',
    country: '',
    Interest: '',
    message: '',
    response: false,
    loading: false
  })

  const { name, email, subject, phone, country, Interest, message } = values;

  const handleChange = name => event => {
    setValues({ ...values, response: false, [name]: event.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setValues({ ...values, response: false, loading: true })
    ContactApi({ name, email, subject, phone, country, Interest, message })
    .then((res) => {
      setValues({ ...values, response: res.data.message, loading: false })
    })
    .catch((err) => {
      setValues({ ...values, response: err.response.data.message, loading: false })
    })
  }

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
                    Site 4, Plot No. 4/8, Sahibabad, Ghaziabad, Uttar Pradesh 201010 (INDIA)
                  </div>
                </div>
                <div className="contact-box">
                  <i className="fa fa-envelope-o"></i>
                  <a className="contact-box-content" href="mailto:info@markadgrafix.in" target="_blank" rel="noopener noreferrer"> markadgrafix@gmail.com</a>
                </div>
                <div className="contact-box">
                  <i className="fa fa-phone"></i>
                  <a href="tel: +919810191865" className="contact-box-content" target="_blank" rel="noopener noreferrer"> +91 9810191865</a>, &nbsp; <a href="tel: 0120-4241246" className="contact-box-content" target="_blank" rel="noopener noreferrer"> 0120-4241246</a>
                </div>
                <div className="contact-box">
                  <i className="fa fa-thumbs-o-up"></i>
                  <div className="contact-box-content">
                    We appreciate every feedback.
                    <b> ( <a href="https://www.google.com/search?q=mark+ad+grafix&tbm=lcl&sxsrf=ALeKk00Ydn6pDr_Lr5q0wUalyGM5CmrEAw%3A1618678801335&ei=ERR7YP32E_aR4-EP2Jqu8A0&oq=Mark&gs_l=psy-ab.3.1.35i39k1l3j0i67k1j0i273k1j0i67k1j0i273k1j0i433i67k1j0i263i433i20k1j0i433k1.22918.23519.0.24720.4.4.0.0.0.0.181.655.0j4.4.0....0...1c.1.64.psy-ab..0.4.653...0j0i433i131k1j0i263i20k1.0.WNOvl_cloN0#lrd=0x390cfb149c4b7d4f:0xdf92fc7ae9415531,3,,,&rlfi=hd:;si:16110216421887268145;mv:[[28.6799221,77.3215017],[28.6509752,77.2849947]]" className="contact-box-content" target="_blank" rel="noopener noreferrer">Review us </a> )</b>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <div className="contact-form-div">
              {/* <form onSubmit={submitForm}> */}
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.291970959898!2d77.31931301503673!3d28.650975182410445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb149c4b7d4f%3A0xdf92fc7ae9415531!2sMark%20Ad%20Grafix!5e0!3m2!1sen!2sin!4v1618499140324!5m2!1sen!2sin" width="100%" height="600" frameBorder="0" style={{ border: "0" }} allowFullScreen title="Our Office" aria-hidden="false" tabIndex="0" ></iframe>
          </div>
      </section>
    </>
   )
  }


export default Contact