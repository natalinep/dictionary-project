import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio !== "" && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} controls />

        {props.phonetic.text}
      </div>
    );
  }
  return null;
}
