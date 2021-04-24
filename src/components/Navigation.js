import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <nav>
      <Navbar variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="logo">AMY LO</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/#">
                <Nav.Link className="nav-link">Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/play">
                <Nav.Link className="nav-link">Playground</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link className="nav-link">Resume</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav-link">About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </nav>
  );
};

export default Navigation;
