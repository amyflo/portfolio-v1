import React from "react";

const Data = (props) => (
  <div className="dataquote">
    <h1 className="dataNum">{props.number}</h1>
    <p>{props.text}</p>
    <p>
      <cite title="Source Title">{props.source}</cite>
    </p>
  </div>
);

export default Data;
