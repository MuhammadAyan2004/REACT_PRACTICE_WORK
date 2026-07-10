import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  let foodItems = [
    "Banana",
    "Salmon",
    "Mutton",
    "Chicken Breast",
    "Milk",
    "Green vegetables",
  ];

  // conditional statement
  // if(foodItems.length === 0 ){
  //   return <h1>There is no foods items to be displayed</h1>
  // }

  // let emptyArrayMsg =
  //   foodItems.length === 0 ? (
  //     <h1>There is no foods items to be displayed</h1>
  //   ) : null;

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ul className="list-group">
          <ErrorMsg items={foodItems}></ErrorMsg>
          <Fooditems items={foodItems}></Fooditems>
        </ul>
      </Container>
      
      <Container>
        <p>The above foods is super delicios and healthy ans strongly recommanded to you</p>
      </Container>
    </>
  );
}

export default App;

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
