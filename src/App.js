import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DataFetching from "./DataFetching";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import WordBuilder from "./WordBuilder";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <h3 className="text-center mt-4">
          THESE ARE TWO APPS BUILD WITH REACT
          <br />
          USE THE NAVBAR TO TOGGLE BETWEEN THEM
        </h3>
        <Switch>
          <Route path="/home">
            <Link to="/form">
              <button className="btn btn-success mt-4">ADD NAME</button>
            </Link>
            <div className="container">
              <DataFetching />
            </div>
          </Route>
          <Route path="/form">
            <Link to="/home">
              <button className="btn btn-primary mt-4">SEE USERS</button>
            </Link>
            <div className="col-6">
              <PostForm />
            </div>
          </Route>
          <Route path="/word-app">
            <div className="col-6">
              <WordBuilder />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
