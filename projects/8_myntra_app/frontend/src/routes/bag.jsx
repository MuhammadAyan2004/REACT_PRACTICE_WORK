import BagItem from "../components/bagItem.jsx";
import BagSummary from "../components/bagSummary.jsx";

const Bag = () => {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container"><BagItem /></div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
