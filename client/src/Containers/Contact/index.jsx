import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'

// Component Import
import PageTitle from '../../Components/UI/PageTitle'

/**
* @author
* @function Contact
**/

const Contact = (props) => {
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
                    <b>Corporate office: </b>
                    Site 4, Plot No. 4/8, Sahibabad, Ghaziabad, Uttar Pradesh 201010 (INDIA)
                  </div>
                </div>
                <div className="contact-box">
                  <i className="fa fa-map-marker"></i>
                  <div className="contact-box-content">
                    <b>Registered office: </b>
                    Site 4, Plot No. 4/8, Sahibabad, Ghaziabad, Uttar Pradesh 201010 (INDIA)
                  </div>
                </div>
                <div className="contact-box">
                  <i className="fa fa-envelope-o"></i>
                  <a className="contact-box-content" href="mailto:info@markadgrafix.in" target="_blank" rel="noopener noreferrer"> info@markadgrafix.in</a>
                </div>
                <div className="contact-box">
                  <i className="fa fa-phone"></i>
                  <a href="tel: +91 9999999999" className="contact-box-content" target="_blank" rel="noopener noreferrer"> +91 9999999999</a>, &nbsp; <a href="tel: +91 9999999999" className="contact-box-content" target="_blank" rel="noopener noreferrer"> +91 9999999999</a>
                </div>
                <div className="contact-box">
                  <i className="fa fa-thumbs-o-up"></i>
                  <div className="contact-box-content">
                    We love to hear good things
                    <b> ( <a href="/" className="contact-box-content" target="_blank" rel="noopener noreferrer">Review us </a> )</b>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <div className="contact-form-div">
                <form className="contact-form">
                  <Row>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Your Name" className="contact-form-input form-control" required></input>
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="email" placeholder="Your Email" className="contact-form-input form-control" required></input>
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Subject" className="contact-form-input" required></input>
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Phone" className="contact-form-input" required></input>
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Country" className="contact-form-input" required></input>
                    </Col>
                    <Col lg={6} xs={12}>
                    <input type="text" placeholder="Interested in" className="contact-form-input" required></input>
                    </Col>
                    <Col lg={12} xs={12}>
                    <textarea col="40" rows="10" className="contact-form-input" placeholder="Your Message"></textarea>
                    </Col>
                    <Col lg={12} xs={12}>
                      <button type="submit" className="contact-submit-btn">Send us a Message</button>
                    </Col>
                  </Row>
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