import { useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  window.addEventListener("offline", (event) => {
    console.log("The network connection has been lost. You are " + event.type );
    setIsOnline(false);
  });
  return isOnline;
};

export default useOnline;
