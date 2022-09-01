import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001172f4612ed9a4a50ba0bdb50b2d8e051";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center mt-5 ">Dictionary</h1>
      <section>
        <form onSubmit={search}>
          <h2>What word do you want to look up?</h2>
          <input
            type="search"
            plaseholder="Search a word..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        <div className="hint">suggested words: piano, love, rainbow...</div>
      </section>
      <Results result={result} />
      <Photos photos={photos} />
    </div>
  );
}
