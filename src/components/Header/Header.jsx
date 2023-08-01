import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="text-4xl font-bold ">Food Zilla</h2>
      <div className="navItems">
        <ul>
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
