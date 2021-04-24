import React from "react";
import Image from "react-bootstrap/Image";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import Fade from "react-reveal/Fade";

const Figure = (props) => (
  <Fade bottom>
    <div className="my-3">
      <Image src={props.ImageLink} alt={props.ImageAlt} fluid />
      <FigureCaption className="my-2">
        <span class="imageNum">{props.ImageNum} </span>
        {props.ImageCaption}
      </FigureCaption>
    </div>
  </Fade>
);

export default Figure;
