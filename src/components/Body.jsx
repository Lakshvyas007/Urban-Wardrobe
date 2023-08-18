import Card from "./Card";
import { DATA } from "../constants";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData]= useState(DATA)

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
        <button className="btn"
          onClick={() => {
            filterData();
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
