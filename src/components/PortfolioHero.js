import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const PortfolioHero = (props) => (
  <Row>
    <Col>
      <h1>{props.Headline}</h1>
      <p>{props.Subheader}</p>
      <Image
        className="my-4"
        src={props.ImageLink}
        alt={props.ImageAlt}
        fluid
      />
      <h2>Overview</h2>
      <p>{props.Overview}</p>
    </Col>
  </Row>
);

export default PortfolioHero;
