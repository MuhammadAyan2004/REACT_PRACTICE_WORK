const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      className="foodInput"
      placeholder="Enter your food item name "
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
