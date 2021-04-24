import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Image, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

const PortfolioCard = (props) => (
  <Fade bottom>
    <div className="mt-5">
      <h3 to={"/" + props.PortfolioLink} className="cardTitle">
        {props.Headline}
      </h3>
      <p>{props.Subheader}</p>
      <LinkContainer to={"/" + props.PortfolioLink}>
        <Card className="my-2">
          <Image
            width="100%"
            src={props.ImageLink}
            alt={props.ImageAlt}
            fluid
          />
          <Card.ImgOverlay />
        </Card>
      </LinkContainer>
      <FigureCaption>{props.Text}</FigureCaption>
    </div>
  </Fade>
);

export default PortfolioCard;
