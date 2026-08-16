const HomeItem = ({ item }) => {
  return (
    <>
      <div class="item-container">
        <img class="item-image" src={item.image} alt="item image" />
        <div class="rating">
          {item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">{item.company}</div>
        <div class="item-name">{item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}% OFF)</span>
        </div>
        <button
          class="btn-add-bag"
          onClick={() => console.log("item was clicked")}
        >
          Add to Bag
        </button>
      </div>
    </>
  );
};

export default HomeItem;
