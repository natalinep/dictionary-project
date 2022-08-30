import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          plaseholder="Search a word..."
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </div>
  );
}
