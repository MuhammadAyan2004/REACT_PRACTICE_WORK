import { useSelector } from "react-redux";

const DisplayValue = ()=>{
    const {counterVal} = useSelector((store) => store.counter)
    return <p className="fs-5 mb-4 text-center">Counter current value: {counterVal}</p>;
}

export default DisplayValue