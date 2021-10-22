import React from "react";

export default function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.ename}</span>
      </dt>
      <dd>{props.edisc}</dd>
    </div>
  );
}
