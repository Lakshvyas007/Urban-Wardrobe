// eslint-disable-next-line react/prop-types
const Card = ({image, brandname, description, price, rating }) => {

  return (
    <div className="text-center mt-5 w-80 h-auto m-3 flex justify-center items-center flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-1 mt-1 ">
        <img className="max-w-full h-auto" src={image} alt="img" />
      </div>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {brandname}
          </h5>
        </a>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-around items-center text-center">
          <p className="mx-2 font-bold text-gray-700 dark:text-gray-400">
            {price}
          </p>
          <p className="mx-2 font-bold text-gray-700 dark:text-gray-400">
          Rating {rating} 
          </p>
        </div>
          <button className="pt-0.5 pb-0.5 mt-2 rounded-md">
            Buy Now 
          </button>
      </div>
    </div>
  );
};

export default Card;



// You can continue adding more items in a similar format.

