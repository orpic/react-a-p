import { useDispatch } from "react-redux";
import { getData } from "../lib/api";
import { dataActions } from "../store/dataSlice";
import { useHttp } from "../hooks";
import { useEffect } from "react";

const useDataFetch = () => {
  const dispatch = useDispatch();
  const { sendRequest, status, data, error } = useHttp(getData, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (status === "pending") dispatch(dataActions.updateStatus("pending"));

    if (error) dispatch(dataActions.updateStatus(error));

    if (status === "completed" && (!data || data.length === 0)) {
      dispatch(dataActions.updateStatus("empty"));
    }

    if (status === "completed" && data.length > 0) {
      dispatch(dataActions.addData(data));
      dispatch(dataActions.updateStatus("success"));
    }
  }, [status, data, error, dispatch]);
};

export default useDataFetch;
