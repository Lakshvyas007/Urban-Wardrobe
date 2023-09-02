import { useState } from "react";

const Header = () => {
  const [isLoggenIn, setIsLoggenIn] = useState(false);
  return (
    <div className="flex justify-between bg-slate-900 p-5">
      <h2 className="text-4xl font-bold ">Urban Wardrobe</h2>
      <div>
        <ul className=" text-lg flex flex-column gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggenIn ? (
        <button className="rounded-md" onClick={() => setIsLoggenIn(false)}>
          Log Out
        </button>
      ) : (
        <button className="rounded-md" onClick={() => setIsLoggenIn(true)}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Header;
