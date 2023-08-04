const Header = () => {
  return (
    <div className="flex justify-between bg-slate-900 p-5" >
      <h2 className="text-4xl font-bold ">Urban Wardrobe</h2>
      <div >
        <ul className=" text-lg flex flex-column gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
