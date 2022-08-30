import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center mt-5 ">Dictionary</h1>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            plaseholder="Search a word..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        <div className="hint">suggested words: piano, love, rainbow...</div>
      </section>
      <Results result={result} />
    </div>
  );
}
