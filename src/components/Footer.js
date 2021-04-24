import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import ColGroup from "./ColGroup";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => (
  <footer>
    <hr className="mt-5" />
    <Container className="mb-5">
      <Row>
        <ColGroup title="Amy Lo" md="4">
          <p>
            <a className="textLink" href="https://github.com/amyflo/portfolio">
              Made with ❤️ on Github.
            </a>
          </p>
          <Button
            className="custom-btn"
            href="https://calendly.com/amyflo/checkin?month=2021-04"
          >
            Get in touch
          </Button>
        </ColGroup>
        <ColGroup title="Site Map" md="4">
          <LinkContainer to="/">
            <li className="FooterLink" >Work</li>
          </LinkContainer>
          <LinkContainer to="/play">
            <li className="FooterLink" >Playground</li>
          </LinkContainer>
          <LinkContainer to="/resume">
            <li className="FooterLink" >Resume</li>
          </LinkContainer>
          <LinkContainer to="/about">
            <li className="FooterLink" >About</li>
          </LinkContainer>
        </ColGroup>
        <ColGroup title="Contact" md="4">
          <li>Meet with me</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ColGroup>
      </Row>
    </Container>
  </footer>
);

export default Footer;
