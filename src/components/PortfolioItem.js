import React from "react";

const PortfolioItem = (props) => (
  <div className="my-4">
    <h3>{props.headline}</h3>
    <p>{props.text}</p>
  </div>
);

export default PortfolioItem;
