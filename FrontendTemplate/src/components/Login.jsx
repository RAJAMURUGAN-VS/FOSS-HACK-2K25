import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setShowError(true);
    } else {
      setShowError(false);
        navigate("/about");
    }
    
    setValidated(true);
  };

  // Custom styles with blue and white theme
  const styles = {
    pageBackground: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(1, 1, 1) 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    glassCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgb(255, 255, 255)',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    glowingHeading: {
      color: '#ffffff',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      animation: 'glow 2s ease-in-out infinite alternate',
      textShadow: `
        0 0 10px #00f7ff,
        0 0 20px #00f7ff,
        0 0 30px #00f7ff,
        0 0 40px #0091ff
      `,
    },
    '@keyframes glow': {
      'from': {
        textShadow: `
          0 0 10px #00f7ff,
          0 0 20px #00f7ff,
          0 0 30px #00f7ff,
          0 0 40px #0091ff
        `,
      },
      'to': {
        textShadow: `
          0 0 20px #00f7ff,
          0 0 30px #00f7ff,
          0 0 40px #00f7ff,
          0 0 50px #0091ff,
          0 0 60px #0091ff
        `,
      }
    },
    input: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: '#fff',
      '&::placeholder': {
        color: 'rgba(255, 255, 255, 0.7)',
      }
    },
    buttonGlow: {
      background: 'linear-gradient(45deg, #00f7ff, #0091ff)',
      border: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 15px rgba(0, 247, 255, 0.5)',
      }
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#00f7ff',
        textShadow: '0 0 10px rgba(0, 247, 255, 0.5)',
      }
    }
  };

  return (
    <div style={styles.pageBackground} className="py-5">
      <style>
        {`
          @keyframes glow {
            from {
              text-shadow: 
                0 0 10px #00f7ff,
                0 0 20px #00f7ff,
                0 0 30px #00f7ff,
                0 0 40px #0091ff;
            }
            to {
              text-shadow: 
                0 0 20px #00f7ff,
                0 0 30px #00f7ff,
                0 0 40px #00f7ff,
                0 0 50px #0091ff,
                0 0 60px #0091ff;
            }
          }
          .glowing-heading {
            color: #ffffff;
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1.5rem;
            animation: glow 2s ease-in-out infinite alternate;
          }

          .form-control {
            background-color: transparent !important; /* Keep background transparent */
            color: white !important; /* Text color */
            border: 1px solid white; /* Optional: White border */
          }

            .form-control::placeholder {
            color: white !important; /* Make placeholder text white */
            opacity: 1; /* Ensure visibility */
          }
        `}
      </style>
      <div style={styles.circuitPattern} />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card style={styles.glassCard}>
              <Card.Body>
                <h2 className="glowing-heading">
                  roadmapAI
                </h2>
                
                {showError && (
                  <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                    Please check your credentials and try again.
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        className="shadow-sm"
                    />

                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Enter Password"
                      style={styles.input}
                      className="shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your password.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      className="text-white"
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      style={styles.buttonGlow}
                      className="shadow btn-lg"
                    >
                      Login
                    </Button>
                  </div>

                  <div className="text-center mt-3">
                    <a
                      href="#forgot-password"
                      className="text-white text-decoration-none me-3 hover-glow"
                    >
                      Forgot Password?
                    </a>
                    <a
                      href="/register"
                      className="text-white text-decoration-none hover-glow"
                    >
                      Sign Up
                    </a>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;