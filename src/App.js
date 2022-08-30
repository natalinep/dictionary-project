import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer className="text-center my-4">
          This site was coded by Nataliia Neporiadkina and{" "}
          <a
            href="https://github.com/natalinep/dictionary-project"
            title="GitHub repository"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
