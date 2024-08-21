import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <div className="home-component">
      <Navbar expand="lg">
        <Container fluid>
          <div className="main-text">
            <Navbar.Brand href="#" className="text-light fw-bolder">
              Bootstrap Project
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
              <Nav.Link href="/About" className="nav-li">
                about
              </Nav.Link>
              <Nav.Link href="/Product" className="nav-li">
                products
              </Nav.Link>
              <Nav.Link href="/Vesite" className="nav-li">
                Vesiter
              </Nav.Link>
              <Nav.Link href="/Discount" className="nav-li">
                Discounts
              </Nav.Link>
              <Nav.Link href="/Slider" className="nav-li">
                items
              </Nav.Link>
              <Nav.Link href="/Services" className="nav-li">
                Services
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
