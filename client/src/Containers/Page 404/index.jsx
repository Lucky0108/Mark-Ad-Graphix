import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import err404 from '../../img/404.svg'
import PageTitle from '../../Components/UI/PageTitle'
import './ErrorPage.css'
import { Link } from 'react-router-dom'

/**
* @author
* @function ErrorPage
**/

const ErrorPage = (props) => {
  return(
    <>
    <PageTitle heading="Error 404" />
    <section className="error-page-section section-padding">
      <Container>
        <Row>
          <Col md={8} className="offset-md-2 col">
          <div className="content clearfix">
            <img src={err404} alt="Error 404" />
            <div className="error-message text-center">
              <h3>Oops! Page Not Found!</h3>
              <p>We’re sorry but we are not able to find the page you requested. This might be because you have entered an incorrect web address.</p>
              <Link className="btn-theme" to="/">Back To Home</Link>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
   )
  }


export default ErrorPage