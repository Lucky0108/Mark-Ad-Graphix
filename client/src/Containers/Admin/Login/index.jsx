import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Card, Col, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import logoImg from '../../../img/logo2.png'
import { authenticate, isAuthenticated, login } from '../../../user/user';
import { toast } from 'react-toastify';
import './Login.css';

/**
* @author
* @function Login
**/

const Login = (props) => {

  const toastId = React.useRef(null);

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
    response: false,
  })

  const { email, password, error, loading, response } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values ,error: false, loading: true })
    login({ email, password })
      .then((user) => {
        authenticate(user.data, () => setValues({ email: "", password: "", response: true, loading: false }))
      }) 
      .catch((err) => {
        setValues({ ...values, error: err.response.data.message, loading: false })
      })
  }

  const checkRedirect = () => {
    if(isAuthenticated()) {
      return <Redirect to="/admin/profile" />
    } else {
      return <Redirect to="/admin" />
    }
  }

  useEffect(() => {
    if(loading) {
      toastId.current = toast.info("Loading...", {autoClose: false})
    }
    if(response) {
      toast.dismiss(toastId.current);
      toast.success("Logged In Succesfully!")
      setValues({ ...values, response: false})
    } else if(error) {
      toast.dismiss(toastId.current);
      toast.error(error)
      setValues({ ...values, error: false})
    }
  },[error, loading, response, values])

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
                  <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" onChange={handleChange("email")} value={email.toLowerCase()} required />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={handleChange("password")} value={password} required />
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <p><Link to="/"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Get Back to Mark Ad Grafix</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      {checkRedirect()}
    </>
  )
}


export default Login