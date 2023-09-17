import { useEffect, useState } from "react";

const useData = () => {
  const [productData, setProductData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/data");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return productData;
};

export default useData;
