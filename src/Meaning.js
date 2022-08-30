import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3> {props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index) {
          if (index < 2) {
            return (
              <div key={index} className="definition-inner">
                <div className="definition">{definitions.definition}</div>
                <Example example={definitions.example} />
              </div>
            );
          }
          return null;
        })}

        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
