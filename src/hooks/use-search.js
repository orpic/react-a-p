import { useEffect, useState } from "react";

const useSearch = (data) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    setSearchResults(
      data.filter((eachData) => {
        return (
          eachData.name.toLowerCase().includes(searchText.toLowerCase()) ||
          eachData.email.toLowerCase().includes(searchText.toLowerCase()) ||
          eachData.role.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }, [searchText, data]);

  return [searchResults, setSearchText];
  // TODO
  // access the pagination hook and set current page to 1
};

export default useSearch;
