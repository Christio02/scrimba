import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero></Hero> */}
      <Card
        img="./images/zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
