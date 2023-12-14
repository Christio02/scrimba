import Logo from "/images/airbnb1.svg";

const Navbar = () => {
  return (
    <header className="header-nav">
      <nav className="nav">
        <img src={Logo} className="airbnd-logo1"></img>
      </nav>
    </header>
  );
};

export default Navbar;
