import Earth from "/images/earth-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-contents">
        <img src={Earth}></img>
        <h2>Christopher&apos;s travel journal</h2>
      </div>
    </div>
  );
};

export default Navbar;
