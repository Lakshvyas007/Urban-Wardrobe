import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const filterData = (searchText, items) => {
  const filteredItems = items.filter((item) =>
    item?.category?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredItems;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/data");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setAllData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
