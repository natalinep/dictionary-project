import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
