const Shimmer = () => {
  return (
    <>
      <div className="flex mt-3 justify-end mr-12">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="flex flex-row justify-evenly flex-wrap">
        {Array(8)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="text-center mt-5 w-80 m-5 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            ></div>
          ))}
      </div>
    </>
  );
};
export default Shimmer;
