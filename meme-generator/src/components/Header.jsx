import TrollFace from "../../public/troll-face.png";

const Header = () => {
  return (
    <header className="header-container">
      <img src={TrollFace} alt="image of troll face"></img>
      <h1>Meme generator</h1>
      <h4>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
