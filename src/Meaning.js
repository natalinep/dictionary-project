import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        if (index < 2) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong>
                {definitions.definition}

                <Example example={definitions.example} />
              </p>
            </div>
          );
        }
        return null;
      })}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
