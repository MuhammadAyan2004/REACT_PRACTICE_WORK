import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItems from "./component/TodoItems";
import "./Apps.css";
import TodoContextProvider from "./store/todoContextProvider";


function App() {

  return (
    <TodoContextProvider>
      <center>
        <div className="main">
          <TodoName />
          <AddTodo />
          <TodoItems />
        </div>
      </center>
    </TodoContextProvider>
  );
}

export default App;
