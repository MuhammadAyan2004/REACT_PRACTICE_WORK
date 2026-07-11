function Items({ foodItem, bought ,buyFood }) {
  
  return (
    <>
      <li className={`list-group-item ${bought && 'active'}`}>
        {foodItem}
        <button className="btn btn-info buyBtn" onClick={buyFood}>
          Buy
        </button>
      </li>
    </>
  );
}

export default Items;
