import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../lib/api";
import { dataActions } from "../store";

const useDataFetch = () => {
  const dispatch = useDispatch();

  const { sendRequest, status, data, error } = useHttp(getData, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (error) {
      dispatch(dataActions.updateStatus("error"));
    }
    if (status === "completed" && (!data || data.length === 0)) {
      dispatch(dataActions.updateStatus("empty"));
    }
    if (status === "completed" && data.length > 0) {
      dispatch(dataActions.addDataToStore(data));
      dispatch(dataActions.updateStatus("success"));
    }
  }, [status, products, error, dispatch]);
};

export default useDataFetch;
