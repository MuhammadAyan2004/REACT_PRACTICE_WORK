import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItem1 from "./component/todoitem1";
import TodoItem2 from "./component/todoitem2";
import "./Apps.css";

function App() {
  return (
    <center>
      <div className="main">
      <TodoName />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
