import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [todos, setTodos] = useState([]);
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

      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">action</th>
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
              {/* <td>
                <i className="fa fa-trash text-danger" aria-hidden="true"></i>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetching;
