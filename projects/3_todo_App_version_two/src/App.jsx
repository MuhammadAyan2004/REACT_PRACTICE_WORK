import TodoName from "./component/TodoTitle";
import AddTodo from "./component/addTodo";
import TodoItems from "./component/TodoItems";
import "./Apps.css";

function App() {
  const todoItems = [
    {
      name: "meeting with Tech solution company",
      date: "7/7/2026",
    },
    {
      name: "lunch with desginers",
      date: "7/7/2026",
    },
    {
      name: "Auction Event",
      date: "12/7/2026",
    },
    {
      name: "Car Event",
      date: "13/7/2026",
    },
  ];
  return (
    <center>
      <div className="main">
        <TodoName />
        <AddTodo />
        <TodoItems todos={todoItems} />
      </div>
    </center>
  );
}

export default App;
