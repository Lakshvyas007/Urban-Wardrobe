/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCard = ({ productData, id }) => {
  //   const { image, brandname, price, rating, description } = productData;
  return (
    <>
      <div className="text-center mt-5 w-80 h-auto m-3 flex justify-center items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-1 mt-1 ">
          <img
            className="max-w-full h-auto"
            src={`../${productData[id]?.image}`}
            
            alt="img"
          />
        </div>
        <div className="p-3">
          <a href="#">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productData[id]?.brandname}
            </h5>
          </a>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {productData[id]?.description}
          </p>
          <div className="flex justify-around items-center text-center">
            <p className="mx-2 font-bold text-gray-700 dark:text-gray-400">
              {productData[id]?.price}
            </p>
            <p className="mx-2 font-bold text-gray-700 dark:text-gray-400">
              Rating {productData[id]?.rating}
            </p>
          </div>
        </div>
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

  //   console.log(productData[id]);
  return (
    <div>
      ProductPage id:{id}
      <ProductCard productData={productData} id={id} />
    </div>
  );
};

export default ProductPage;
