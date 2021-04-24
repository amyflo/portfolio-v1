import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal";
import "./style.css";

const Hero = (props) => (
  <Fade top>
    <Jumbotron bg="dark" variant="dark">
      <Container>
        <Row>
          <Col>
            <p>MY MANIFESTO</p>
            <h1>
              I push my pixels where they can count the most, for the people who
              need a voice the most.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="custom-btn" href="mailto:amyflo@stanford.edu">
              Get in touch
            </Button>{" "}
            <Button className="custom-btn" href={props.ButtonLink}>
              Meet with me
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </Fade>
);

export default Hero;
