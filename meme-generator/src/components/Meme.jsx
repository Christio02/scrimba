import { useState } from "react";
import { default as memesData } from "../memesData";

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable  called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

const Meme = () => {
  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    toptext: "",
    bottomtext: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memeArray = allMemeImages.data.memes;
    let imageNum = Math.floor(Math.random() * memeArray.length);
    let imageObj = memeArray[imageNum];
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: imageObj.url }));
  };

  return (
    <div className="form-container">
      <div className="meme-form">
        <div className="input-top">
          <label htmlFor="top-text">Top text</label>
          <input type="text" name="top-text" placeholder="Shut up"></input>
        </div>

        <div className="input-bottom">
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            type="text"
            name="bottom-text"
            placeholder="And take my money"
          ></input>
        </div>
      </div>
      <button name="submitBtn" className="button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>

      <img className="meme-image" src={meme.randomImage} alt={"meme"}></img>
    </div>
  );
};

export default Meme;
