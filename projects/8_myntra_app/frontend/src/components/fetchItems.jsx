import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchSliceAction } from "../store/fetchSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchSliceAction.markfetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchSliceAction.markfetchDone());
        dispatch(fetchSliceAction.markfetchingFinished());
        dispatch(itemsAction.addInitialPost(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
