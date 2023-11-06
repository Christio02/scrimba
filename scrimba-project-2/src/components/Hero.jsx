import HeroImage from "../images/hero-images.svg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="image-container">
        <img src={HeroImage}></img>
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by <br></br>one-of-a-kind
        hosts—all without leaving home.
      </p>
    </section>
  );
};

export default Hero;
