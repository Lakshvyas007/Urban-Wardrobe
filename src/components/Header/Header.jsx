import "./header.css";

const Title = () => <h1>Food Zilla</h1>;

const Header = () => {
  return (
    <div className="header">
      <Title />
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
