import "./App.css";
import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItem1 from "./component/todoitem1";
import TodoItem2 from "./component/todoitem2";

function App() {
  return (
    <center>
      <TodoName />
      <AddTodo></AddTodo>
      <br />
      <TodoItem1 />
      <br />
      <TodoItem2 />
    </center>
  );
}

export default App;
