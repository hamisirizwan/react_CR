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
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td>{todo._id}</td>
              <td>{todo.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataFetching;
