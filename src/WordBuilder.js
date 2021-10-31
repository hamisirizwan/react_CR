import React, { useState } from "react";

function WordBuilder() {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="child">
        <label htmlFor="detail" className="form-label">
          TYPE IN THE BOX
        </label>
        <br />
        <input
          className=" mr-10"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <h3 style={{ color: "red" }}>{text}</h3>
    </div>
  );
}

export default WordBuilder;
