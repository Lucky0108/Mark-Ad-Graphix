/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Service.css'
import PageTitle from '../../Components/UI/PageTitle'
import { Container, Row, Col } from 'react-bootstrap';
import service1 from '../../img/solvent.jpg'
import service2 from '../../img/eco-solvent.png'
import service3 from '../../img/multi-print.jpg';
import service4 from '../../img/digital.jpg';
/**
* @author
* @function Services
**/

const Services = (props) => {
  return(
    <>
    <PageTitle heading="Services" />
    <section className="services-section section-padding">
      <Container>
      <div className="services-wrap">
        <Row>
          <Col lg={6} md={6} sm={12} className="mb-4" style={{ overflow: "hidden"}}>
            <h3>Solvent Printing Services </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service1} alt="Solvent Printing Machine" />
            </a>
            <div className="service-content">
            We Provide The Best Solvent Printing Services in the most cost and time effective way and we're proud of it. 
            <ul>
              <li> - Choose one of the most popular large format printing technique.</li>
              <li> - These prints are resistant to atmospheric factors such as UV radiations and more.</li>
              <li> - High Quality and Durable Prints.</li>
              <li> - Pixel Sharp Image Reproduction. </li>
            </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4"  style={{ overflow: "hidden"}}>
            <h3>Eco Solvent Printing Services </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service2} alt="Eco Solvent Printing Machine" />
            </a>
            <div className="service-content">
            We believe in providing the best and eco-friendly services to everyone so we also have Eco solvent printing services which includes: 
            <ul>
              <li> - Harmless to both health and environment.</li>
              <li> - Extreme High Quality Print.</li>
              <li> - More Scratch & Chemical Resistant.</li>
            </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4"  style={{ overflow: "hidden"}}>
            <h3>Digital Printing Services </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service4} alt="Digital Printing Machine" />
            </a>
            <div className="service-content">
            We are well aware of the modernising world and that's why we also offer Digital Printing Services to provide best in class solutions.
            <ul>
              <li> - Best suitable for indoor uses.</li>
              <li> - Also Environment Friendly. </li>
              <li> - Faster process. </li>
            </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4"  style={{ overflow: "hidden"}}>
            <h3>Multiple Printing Machines</h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service3} alt="Multiple Printing Machines" />
            </a>
            <div className="service-content">
            Multiple printing machines  gives us the flexibility to offer the most cost effective and efficient printing solution to meet all your needs.
            <ul>
              <li> - To Provide All The Requirements in a way which is more time effective.</li>
              <li> - To Offer A Cost Effective Solution Of Your need.</li>
              <li> - We are here to provide every solution in the most effective way.</li>
            </ul>
            </div>
          </Col>
        </Row>
      </div>
      </Container>
    </section>
    </>
   )
  }


export default Services