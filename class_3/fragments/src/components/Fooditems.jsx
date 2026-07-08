import Items from "./items";

function Fooditems(props) {
    const {items} = props 
  return (
    <>
      {items.map((item) => (
        <Items key={item} foodItem={item}></Items>
      ))}
    </>
  );
}

export default Fooditems;
