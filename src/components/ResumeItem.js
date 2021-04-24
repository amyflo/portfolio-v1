import React from "react";
import { Col, Row } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const ResumeItem = (props) => (
  <Fade bottom>
  <Row className="my-4">
    <Col md={3}><h2>{props.heading}</h2></Col>
    <Col>
      <h4>{props.title}</h4>
      <h5>{props.subhead}</h5>
      <p>{props.children}</p>
    </Col>
  </Row>
  </Fade>
);

export default ResumeItem;
