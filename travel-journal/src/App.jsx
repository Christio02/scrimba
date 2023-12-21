import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Data from "./data";
function App() {
  const cardElements = Data.map((card) => <Card key={card.id} {...card} />);
  return (
    <div className="main-container">
      <Navbar />
      <div className="cards-container">{cardElements}</div>
    </div>
  );
}

export default App;
