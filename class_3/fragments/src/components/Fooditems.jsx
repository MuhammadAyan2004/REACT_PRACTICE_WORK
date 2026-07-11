import { useState } from "react";
import Items from "./items";

function Fooditems({ items }) {

  let [activeItem, setActiveItem] = useState([])

  const onBuyButton = (item, e) => {
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
    e.target.innerHTML = "delete"
  };
  return (
    <>
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItem.includes(item)}
          buyFood={(e) => onBuyButton(item, e)}
        ></Items>
      ))}
    </>
  );
}
export default Fooditems;
