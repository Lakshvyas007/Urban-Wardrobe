import Card from "./Card";
import { useEffect, useState } from "react";


const filterData = (searchText, items) => {
  const filteredItems = items.filter((item) =>
    item.category.includes(searchText)
  );
  return filteredItems;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/data");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
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
            const info = filterData(searchText, data);
            setData(info);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly ">
        {data.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
