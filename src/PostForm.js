import React, { useState } from "react";
import axios from "axios";
import Error from "./Error";
import Loading from "./Loading";

function PostForm() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");

  const hundleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);

      return;
    }
    console.log(name);
    setLoading(true);
    // console.log(loading);
    // setTimeout(NotifyLoading(), 3000);
    // NotifyLoading();
    await axios
      .post("http://localhost:5000/api/v1/todos", {
        name: name,
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        // console.log(loading);
      })
      .catch((err) => {
        // setLoading(false);
        // setError(true);
        console.log(err);
      });

    // NotifyError();
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // const NotifyLoading = () => {
  //   if (loading === true) {
  //     document.getElementById("loading").style.display = "block";
  //   } else {
  //     document.getElementById("loading").style.display = "none";
  //   }
  // };
  // const NotifyError = () => {
  //   if (error === true) {
  //     document.getElementById("error").style.display = "block";
  //   } else {
  //     document.getElementById("error").style.display = "none";
  //   }
  // };
  return (
    <div className="container">
      {error && <Error />}
      {loading && <Loading />}
      <form>
        <div className="mb-3 mt-3">
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
