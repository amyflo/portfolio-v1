import React from "react";

const Blockquote = (props) => (
  <blockquote className="blockquote mt-4 mb-0">
    <p>{props.quote}</p>
    <p>
      <cite title="Source Title">{props.source}</cite>
    </p>
  </blockquote>
);

export default Blockquote;
