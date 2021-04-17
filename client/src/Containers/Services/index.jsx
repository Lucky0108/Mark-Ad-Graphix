/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Service.css'
import PageTitle from '../../Components/UI/PageTitle'
import { Container, Row, Col } from 'react-bootstrap';
import service1 from '../../img/site.jpg'
import service2 from '../../img/design-concept.jpg'
import service3 from '../../img/prototype.jpg';
import service4 from '../../img/world-class.jpg';
import service5 from '../../img/signage-install.jpg';

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
            <h3>Site Investigaton & visualization </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service1} alt=" " />
            </a>
            <div className="service-content">
            Signage deployment is largely dependent on the site recce results and hence is the most critical to the success of the program. This process includes:
            <ul>
              <li> - Effective route plan for the installation team to cover all the locations.</li>
              <li> - Identify the right signage based on the space availability</li>
              <li> - Identify installation requirements</li>
              <li> - Take actual size for right creative adaptation and thereby production</li>
            </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4"  style={{ overflow: "hidden"}}>
            <h3>Design Translation & Conceptualization </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service2} alt=" " />
            </a>
            <div className="service-content">
            We highly follow a saying “if it doesn’t sell it isn’t creative” Hence creating a good design become essence of its selling. Also estabalishing client expectations & taste while delivering valuable information. It commands attention through first impression.
            <ul>
              <li> - Graphic Designs</li>
              <li> - Technical Drawings</li>
              <li> - Reference Images</li>
            </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4"  style={{ overflow: "hidden"}}>
            <h3>Prototyping & Approvals </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service3} alt=" " />
            </a>
            <div className="service-content">
            Engineering design record and specification requirements are properly understood that the process has the potential to produce product consistently meeting these requirements during an actual production run at the quoted production rate. In a Project it helps:
            <ul>
              <li> - To Ensure that the approved Sign can meet the manufacturability and quality requirements.</li>
              <li> - Provides Clear undersatnding to the client that the design and specification approved are clearly understood and fulfilled.</li>
              <li> - We are Good to go for Production with or without any changes.</li>
            </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4"  style={{ overflow: "hidden"}}>
            <h3>World Class Development </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service4} alt=" " />
            </a>
            <div className="service-content">
            This is the part where one needs to be careful as it involves both, huge effort and cost at. It comprises of:
            <ul>
              <li> - Finalizing the message content for the signage</li>
              <li> - Artwork adaptation based on brand guidelines and the site recce</li>
              <li> - Training the field team to accommodate adjustments</li>
              <li> - An exclusive project team for end to end coordination of the entire project with the client and regional teams</li>
            </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}  style={{ overflow: "hidden"}}>
            <h3> Installation all-over India </h3>
            <a href="#" target="_self" className="service-img-div">
            <img src={service5} alt=" " />
            </a>
            <div className="service-content">
            Installation teams are deputed to make ensure:
            <ul>
              <li> - The each sign is neatly installed at the desired location.</li>
              <li> - Installtion progress & complete Installtion pictures sharing with the clients .</li>
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