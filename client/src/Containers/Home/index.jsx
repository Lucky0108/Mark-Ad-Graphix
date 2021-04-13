import React from 'react'
import './Home.css'
import introVid from '../../img/intro.mp4'
import aboutVid from '../../img/about.mp4'
import { Container, Row } from 'react-bootstrap';
import HomeServiceCard from '../../Components/HomeServiceCard';
import { Link } from 'react-router-dom';
import HomeSectionsHeading from '../../Components/HomeSectionsHeading';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <>

    {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-section-wrap">
          <video src={introVid} className="introVideo" loop muted autoPlay />
          <div className="contentDiv">
          <div className="layer">
            <span>WE HAVE PARTNER NETWORK SPREAD ACROSS INDIA</span>
          </div>
          <div className="mouse-effect"></div>
        </div>
          </div>
      </section>

      {/* Services Section */}
      <section className="home-services-section py-5 section-padding">
        <Container>
          <Row>
            <HomeSectionsHeading heading="More than a National Sign & Maintenance Company" para="We bring brands to life through turnkey signage solutions, innovative brand elements and program management support services." />
          </Row>
          <Row>
            <HomeServiceCard imgIcon="fa-star" heading="Brand Implementation" para="We ensure your brand values are represented from design to installation." />
            <HomeServiceCard imgIcon="fa-home" heading="Signs & Brand Elements" para="We install and maintain brand elements using the latest technology and materials." />
            <HomeServiceCard imgIcon="fa-file" heading="Program Management" para="We take care of everything from site surveys to vendor management." />
            <HomeServiceCard imgIcon="fa-wrench" heading="Repair & Maintenance" para="We provide ongoing maintenance and repair services." />
          </Row>
          <div className="home-common-btn-div">
            <Link to="/service" className="home-common-btn">Know More</Link>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="home-about-section">
      <div className="home-about-wrap">
      <video src={aboutVid} className="aboutVideo" loop muted autoPlay />
      <div className="contentDiv">
        <div className="layer">
          <Container>
            <Row>
            <HomeSectionsHeading heading="The Signage Difference" para="Signage boasts over 58 years of experience implementing brands across a host of industries. The difference is our people and our processes. From healthcare to security, retail to automotive, our team consists of experts experienced within each of these fields, who understand our customers’ expectations and desires. Watch our video to learn more about The Signage Difference." />
            </Row>
            <div className="video-btn">
            <i className="fa fa-play fa-2x" aria-hidden="true"></i>
            </div>
            <div className="home-common-btn-div">
            <Link to="/about" className="home-common-btn">Know More</Link>
            </div>
          </Container>
        </div>
      </div>
      </div>
      </section>

      {/* Products Section */}
      <section className="home-product-section section-padding">
        <div className="home-product-wrap">
          <div className="layer">
            <Container>
              <Row>
              <HomeSectionsHeading heading="Our Products" para="We offer a wide gamut of virtual advertising products including signboards, indoor reception signs, name plates, metal signs, ACP signs, directional/wayfinding, information directory, frosted films, LED display boards, LED signs, Corian and other miscellaneous jobs." />
              </Row>
            </Container>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="home-client-section section-padding">
        <div className="home-client-wrap">
          <div className="layer">
            <Container>
              <Row>
              <HomeSectionsHeading heading="Our Clients" para="We have proudly served wide spectrum industries such as real estate,education and training, finance companies, manufacturing, schools and colleges, healthcare, news channels, restaurant & hospitality sector, banks, MNCs as well as government organisations including MTNL, Bank of Baroda, ONGC, NDMC, etc.." />
              </Row>
              <div className="home-common-btn-div">
              <Link to="/client" className="home-common-btn">View All</Link>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  )
}


export default Home