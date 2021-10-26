import React, { useState } from "react";
import "./WordBuilder.css";

function WordBuilder() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="parent">
        <div className="child">
          <input
            className="mt-4 mr-10"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <h1>{text}</h1>
      </div>
    </>
  );
}

export default WordBuilder;
