import { useSelector } from "react-redux";
import BagSummary from "../components/bagSummary.jsx";
import BagItem from "../components/bagItem.jsx";

const Bag = () => {
    const bagItems = useSelector((state) => state.bagSlice);
    const Items = useSelector((state) => state.items);
    const items = Items.filter((item) => bagItems.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {items.map((item) => (
            <BagItem item={item} key={item.id} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
