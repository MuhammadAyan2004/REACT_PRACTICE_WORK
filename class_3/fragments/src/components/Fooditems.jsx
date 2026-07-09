import Items from "./items";

function Fooditems(props) {
    const {items} = props 
  return (
    <>
      {items.map((item) => (
        <Items key={item} foodItem={item}></Items>
      ))}
      <p><strong>thank you for your ordering</strong></p>
    </>
  );
}

export default Fooditems;
