import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err.data);
  return (
    <>
      <div>Oops!</div>
      <h3>Something went Wrong</h3>
      <h3>{err.data}</h3>
    </>
  );
};

export default Error;
