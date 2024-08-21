import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Link to="/about" className="nav-li">
                About
              </Link>
              <Link to="/product" className="nav-li">
                products
              </Link>
              <Link to="/vesite" className="nav-li">
                Vesiter
              </Link>
              <Link to="/discount" className="nav-li">
                Discounts
              </Link>
              <Link to="/slider" className="nav-li">
                items
              </Link>
              <Link to="/services" className="nav-li">
                Services
              </Link>
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
