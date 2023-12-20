import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./data";

function App() {
  const cardElements = Data.map((card) => <Card key={card.id} {...card} />);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-container">{cardElements}</div>
    </div>
  );
}

export default App;
