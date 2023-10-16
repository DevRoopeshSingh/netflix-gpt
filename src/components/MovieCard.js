import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

function movieCard({ posterPath }) {
  if (!posterPath) return;
  return (
    <div className="p-2">
      <img
        className="max-w-none h-56 rounded-md cursor-pointer shadow-xl shadow-cyan-500/50 hover:shadow-lg hover:shadow-red-500"
        alt="movie card"
        src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  );
}

export default movieCard;
