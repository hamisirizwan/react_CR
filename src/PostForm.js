import React, { useState, useEffect } from "react";
import axios from "axios";

function PostForm() {
  const [name, setName] = useState("");
  const hundleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    axios
      .post("http://localhost:5000/api/v1/todos", {
        name: name,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            enter even just yours
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={hundleSubmit}
        >
          Submit
        </button>
      </form>
      {/* <h4>you entered {name}</h4> */}
    </div>
  );
}

export default PostForm;
