import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
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
  // const deleteUser = (e) => {
  //   // const id = e.currentTarget.parentNode.getAttribute("key");
  //   // const id = e.target.name;
  //   console.log("id");
  //   // axios
  //   //   .delete(`http://localhost:5000/api/v1/todos/${id}`)
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err.message);
  //   //   });
  //   // alert("good job");
  // };
  return (
    <div>
      <button className="btn btn-success mt-4">
        <i className="fa fa-user text-primary" aria-hidden="true"></i> ADD TODO
      </button>
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
                | <i className="fa fa-trash text-danger" aria-hidden="true"></i>
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
}

export default DataFetching;
