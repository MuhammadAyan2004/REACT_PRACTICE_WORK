import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.bagSlice);
  const Items = useSelector((state) => state.items);
  const finalItems = Items.filter((item) => bagItemIds.includes(item.id));
  let TotalMRP = 0;
  let TotalDiscount = 0; 
  const ConvenienceFee = 99; 

  finalItems.forEach((Item)=>{
    TotalMRP += Item.original_price;
    TotalDiscount += Item.original_price - Item.current_price;
  })

  let finalAmount = TotalMRP - TotalDiscount + ConvenienceFee;


  const bagSummary = {
    totalItem: bagItemIds.length,
    totalMRP: TotalMRP,
    totalDiscount: TotalDiscount,
    finalPayment: finalAmount,
  };

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSummary.totalItem} Items){" "}
        </div>

        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">${bagSummary.totalMRP}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummary.totalDiscount}
          </span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">${ConvenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">${bagSummary.finalPayment}</span>
        </div>
      </div>

      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
      
    </div>
  );
};

export default BagSummary;
