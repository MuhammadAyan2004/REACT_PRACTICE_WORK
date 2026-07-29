import { useSelector } from "react-redux";

const DisplayValue = ()=>{
    const counterValue = useSelector((store) => store.counter)
    return <p className="fs-5 mb-4 text-center">Counter current value: {counterValue}</p>;
}

export default DisplayValue