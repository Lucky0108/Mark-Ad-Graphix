import React from 'react';
import { Container, Row, Button, Card, Col, Form } from 'react-bootstrap';
import logoImg from '../../../img/logo2.png'
import './Login.css';

/**
* @author
* @function Login
**/

const Login = (props) => {
  return (
    <>
    <section className="login-section">
      <Container className="login-container">
        <Row>
          <Col lg={12}>
            <div className="login-wrap">
              <img src={logoImg} alt="Logo" />
              <Card className="login-card">
                <Card.Body>
                  <h3 className="text-center">Login</h3>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}


export default Login