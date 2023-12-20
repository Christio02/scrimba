import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./data";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
  const cardElements = Data.map((card) => (
    <Card
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      price={card.price}
    />
  ));
  return (
    <div>
      <Navbar />
      {/* <Hero></Hero> */}
      <div>{cardElements}</div>
    </div>
  );
}

export default App;
