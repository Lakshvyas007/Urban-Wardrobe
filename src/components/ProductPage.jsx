import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <>
      <div>
        {Object.values(props).map((item) => {
          return (
            <div key={item.id}>
              <div> {item.id} </div>
              <div> {item.name} </div>
              <div> {item.description} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const ProductPage = () => {
  const { id } = useParams();
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

  return (
    <div>
      ProductPage id:{id}
      <ProductCard {...productData} />
    </div>
  );
};

export default ProductPage;
