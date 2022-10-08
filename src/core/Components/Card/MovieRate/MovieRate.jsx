/* import packages */
import React from "react";

export default function MovieRate() {
  return (
    <div className="absolute top-10 right-20 py-3 px-5 bg-white/30 shadow-md backdrop-blur-md">
      <span></span>
      <p className="rating">
        <span className="score"></span>
        <span className="max-score">10</span>
      </p>
    </div>
  );
}
