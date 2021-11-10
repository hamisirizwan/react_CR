import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [todos, setTodos] = useState([]);
  const [number, setNumber] = useState("");
  const handle = (e) => {
    setNumber(e.target.value);
  };
  const addNumber = () => {
    if (number.length !== 12) {
      alert("enter valid number");
      return;
    }
    alert(`you have added ${number} as your number`);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteUser = async (id) => {
    console.log(id);
    await axios
      .delete(`http://localhost:5000/api/v1/todos/${id}`)
      .then((res) => {
        console.log(res);
        alert("user deleted sucessfully");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
    // alert("good job");
  };
  const sendSms = async (name) => {
    console.log(name);
    console.log(number);
    if (number.length !== 12) {
      alert("enter valid number");
      return;
    }

    await axios
      .post("http://localhost:5000/api/v1/sms", {
        name: name,
        number: number,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h2>
        users : <span className="text-primary">{todos.length}</span>
      </h2>
      <div className="d-flex">
        <h4 className="text-success">NAMES: </h4>
        {todos.map((todo) => (
          <h4 key={todo._id}>{todo.name}, </h4>
        ))}
      </div>
      <label style={{ alignItems: "center" }}>
        enter your number to receive sms
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <input
          type="number"
          placeholder="eg. 254722345687"
          style={{
            border: "2px solid #39395f",
            marginRight: "3px",
            borderRadius: "50px",
          }}
          value={number}
          onChange={handle}
        />
        <button
          style={{
            border: "2px solid #39395f",
            borderRadius: "20px",
            backgroundColor: "rgb(245, 238, 194)",
          }}
        >
          <i
            className="fa fa-plus"
            aria-hidden="true"
            style={{ color: "#39395f" }}
            onClick={addNumber}
          ></i>
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">action</th>
            <th scope="col">message</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td>{todo._id}</td>
              <td>{todo.name}</td>
              <td>
                <i className="fa fa-pencil text-primary" aria-hidden="true"></i>
                |{" "}
                <i
                  className="fa fa-trash text-danger"
                  aria-hidden="true"
                  onClick={() => deleteUser(todo._id)}
                ></i>
              </td>
              <td>
                <i
                  className="fa fa-comment text-success"
                  aria-hidden="true"
                  onClick={() => sendSms(todo.name)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetching;
