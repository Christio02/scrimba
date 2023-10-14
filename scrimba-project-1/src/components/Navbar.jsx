import logo from "../assets/reactjs-icon.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav--icon" />
        <h3 className="nav--logo-text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </header>
  );
};

export default Navbar;
