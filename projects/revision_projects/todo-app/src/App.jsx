import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/addTodo";
import TodoTitle from "./components/todoTitle";
import TodoItems from "./components/todoItems";
import TodoItemProvider from "./store/todoItemProvider";

function App() {
  return (
    <TodoItemProvider>
      <div className="card">
        <TodoTitle></TodoTitle>
        <AddTodo />
        <TodoItems></TodoItems>
      </div>
    </TodoItemProvider>
  );
}

export default App;
