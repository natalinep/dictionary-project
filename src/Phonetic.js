import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio !== "" && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  }
  return null;
}
