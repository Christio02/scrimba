import { useState } from "react";
import Memes from "../memesData";

/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state.
 */

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */

const Meme = () => {
  const getRandomImage = () => {
    const memeArray = Memes.data.memes;
    let imageNum = Math.floor(Math.random() * memeArray.length);
    let imageObj = memeArray[imageNum];
    setMemeImage(imageObj.url);
    console.log(imageObj.url);
  };
  const [memeImage, setMemeImage] = useState("");

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
      <button name="submitBtn" className="button" onClick={getRandomImage}>
        Get a new meme image 🖼
      </button>

      <img className="meme-image" src={memeImage}></img>
    </div>
  );
};

export default Meme;
