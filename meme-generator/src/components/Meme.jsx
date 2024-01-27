import Memes from "../memesData";

/**
 * Challenge: Get a random image from the `memesData` array
 * when the "new meme image" button is clicked.
 *
 * Log the URL of the image to the console. (Don't worry
 * about displaying the image yet)
 */
const getRandomImage = () => {
  const memeArray = Memes.data.memes;
  let imageNum = Math.floor(Math.random() * memeArray.length);
  let imageObj = memeArray[imageNum];
  console.log(imageObj.url);
};
const Meme = () => {
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
    </div>
  );
};

export default Meme;
