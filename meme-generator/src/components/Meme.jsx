import { useState } from "react";
import { default as memesData } from "../memesData";

/**
 * Challenge:
 * 1. Set up the text inputs to save to
 *    the `topText` and `bottomText` state variables.
 * 2. Replace the hard-coded text on the image with
 *    the text being saved to state.
 */


const Meme = () => {
  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [memeData, setMemeData] = useState({
    toptext: "",
    bottomtext: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memeArray = allMemeImages.data.memes;
    let imageNum = Math.floor(Math.random() * memeArray.length);
    let imageObj = memeArray[imageNum];
    setMemeData((prevMeme) => ({ ...prevMeme, randomImage: imageObj.url }));
  };

  const handleChange = (event) => {
    const {name, value} = event.target
    setMemeData(prevState =>(
        {
          ...prevState,
          [name]: value

        }
    ))
  }

  return (
    <div className="form-container">
      <div className="meme-form">
        <div className="input-top">
          <label htmlFor="top-text">Top text</label>
          <input type="text" name="toptext" placeholder="Shut up" onChange={handleChange} value={memeData.toptext}></input>
        </div>

        <div className="input-bottom">
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            type="text"
            name="bottomtext"
            placeholder="And take my money"
            onChange={handleChange}
            value={memeData.bottomtext}
          ></input>
        </div>
      </div>
      <button name="submitBtn" className="button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="meme">
        <img className="meme-image" src={memeData.randomImage} alt={"memeData"}></img>
        <h2 className="meme--text top">{memeData.toptext}</h2>
        <h2 className="meme--text bottom">{memeData.bottomtext}</h2>
      </div>

    </div>
  );
};

export default Meme;
