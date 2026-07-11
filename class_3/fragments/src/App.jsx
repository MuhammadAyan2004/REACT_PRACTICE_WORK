import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // use state method
  // let [initialTextValue , setValue] = useState("Food Item Entered by the user");

  let [foodItems , setFoodItem] = useState([])

  // event handling 
  const onKeyDown = (e) => {
    if (e.key == 'Enter'){
      let newFoodItem = e.target.value;
      let updatedFoodArray = [newFoodItem , ...foodItems]
      setFoodItem(updatedFoodArray)
      e.target.value = '';
    }
    // setValue(e.target.value)
  };

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ul className="list-group">
          <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
          <ErrorMsg items={foodItems}></ErrorMsg>
          <Fooditems items={foodItems}></Fooditems>
        </ul>
      </Container>
    </>
  );
}

export default App;

  // conditional statement
  // if(foodItems.length === 0 ){
  //   return <h1>There is no foods items to be displayed</h1>
  // }

  // let emptyArrayMsg =
  //   foodItems.length === 0 ? (
  //     <h1>There is no foods items to be displayed</h1>
  //   ) : null;

// {/* <h1>Healthy Foods</h1>
//     <ul className="list-group"> */}
//       {/* 2 method of using conditional statement the tarnary operators */}
//       {/* {foodItems.length === 0 ? <h1>There is no foods items to be displayed</h1> : null} */}

//       {/* 3 method of using conditional statement */}
//       {/* {emptyArrayMsg} */}

//       {/* 3 method of using conditional statement */}
//       {/* {foodItems.length === 0 && (
//         <h1>There is no foods items to be displayed</h1>
//       )} */}

//       {/* <ErrorMsg items={foodItems}></ErrorMsg> */}

//       {/* use map method to show multiple food items */}
//       {/* {foodItems.map((item) => (
//         <li key={item} className="list-group-item">
//           {item}
//         </li>
//       ))} */}
//       {/* <Fooditems items={foodItems}></Fooditems>
//     </ul> */}
