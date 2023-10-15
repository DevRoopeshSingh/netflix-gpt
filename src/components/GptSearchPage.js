import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LargeBackgroundImage2 } from "../utils/constants";

function GptSearchPage() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LargeBackgroundImage2} alt="Netflix Logo"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearchPage;
