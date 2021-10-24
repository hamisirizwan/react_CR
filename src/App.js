import DataFetching from "./DataFetching";
import PostForm from "./PostForm";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <DataFetching />
        </div>
        <div className="col">
          <PostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
