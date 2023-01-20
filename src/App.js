import { useEffect, useState } from "react";
import {
  DisplayData,
  LoadingSpinner,
  Pagination,
  SearchBar,
} from "./components";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("error occured");
      });
  }, []);

  const [filteredData, setfilteredData] = useState(data);
  useEffect(() => {
    setfilteredData(data);
  }, [data]);

  const searchFilter = (input) => {
    setfilteredData(
      data.filter((eachData) => {
        return (
          eachData.name.toLowerCase().includes(input.toLowerCase()) ||
          eachData.email.toLowerCase().includes(input.toLowerCase()) ||
          eachData.role.toLowerCase().includes(input.toLowerCase())
        );
      })
    );
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(filteredData.length / recordsPerPage);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Admin UI</h1>
        <SearchBar onInputChange={searchFilter} />
        {loading ? <LoadingSpinner /> : <DisplayData data={currentRecords} />}
        {!loading && (
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default App;
