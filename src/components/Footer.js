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
            href="https://calendly.com/amyflo/checkin"
          >
            Get in touch
          </Button>
        </ColGroup>
        <ColGroup title="Site Map" md="4">
          <li>
          <LinkContainer to="/">
            <a href="/" className="textLink" >Work</a>
          </LinkContainer>
          </li>
          {/* <LinkContainer to="/play">
            <li className="FooterLink" >Playground</li>
          </LinkContainer> */}
          <li>
          <LinkContainer to="/resume">
            <a href="/resume" className="textLink">Resume</a>
          </LinkContainer>
          </li>
          <li>
          <LinkContainer to="/about">
            <a href="/about" className="textLink" >About</a>
          </LinkContainer>
          </li>
        </ColGroup>
        <ColGroup title="Contact" md="4">
          <li><a className="textLink" href="https://calendly.com/amyflo/checkin">Meet with me</a></li>
          <li><a className="textLink" href="https://www.linkedin.com/in/amyflo/">LinkedIn</a></li>
          <li><a className="textLink" href="mailto:amyflo@stanford.edu">Email</a></li>
        </ColGroup>
      </Row>
    </Container>
  </footer>
);

export default Footer;
