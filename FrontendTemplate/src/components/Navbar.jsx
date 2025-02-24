import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  const navigate = useNavigate();
  
  const titleStyle = {
    fontSize: "clamp(32px, 5vw, 60px)",
    paddingTop: "50px",
    textAlign: "center",
    margin: 0
  };

  return (
    <>
    <div className="bg-black pt-4">
      <Navbar expand="md" className="bg-black mt-4">
        <Container>
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            className="border-0" 
            style={{ filter: "invert(1)" }}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto align-items-center gap-4">
              <Nav.Link as={Link} to="/home" className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
              <Nav.Link as={Link} to="/another" className="text-light">Another</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>
              <div className="d-flex gap-2">
                <Button 
                  variant="secondary" 
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button 
                  variant="primary" 
                  onClick={() => navigate("/register")}
                >
                  SignUp
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Container>
        <h1 style={titleStyle}>
          <span style={{fontWeight: "bold"}} className="text-secondary">Road</span>
          <span style={{fontWeight: "bold"}}>map</span>
          <span style={{ color: "#3046ed", fontWeight: "bold"}}>AI</span>
        </h1>
      </Container>
      </div>
    </>
  );
};

export default NavigationBar;
