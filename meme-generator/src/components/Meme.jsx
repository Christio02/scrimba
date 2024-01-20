/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

const Meme = () => {
  return (
    <div className="form-container">
      <form className="meme-form">
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
      </form>
      <button type="submit" name="submitBtn" className="button">
        Get a new meme image 🖼
      </button>
    </div>
  );
};

export default Meme;
