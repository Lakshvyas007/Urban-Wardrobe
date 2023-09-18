import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import useData from "../utils/useData";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const allData = useData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(allData);
  }, [allData]);

  const offline = useOnline();

  if (!offline) {
    return <h1>You are offline</h1>;
  }

  return allData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex mt-3 justify-end mr-12">
        <input
          value={searchText}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const info = filterData(searchText, allData);
            setFilteredData(info);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly ">
        {filteredData.length === 0 ? (
          <h2>No results Found</h2>
        ) : (
          filteredData.map((item) => {
            return <Card {...item} key={item.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
