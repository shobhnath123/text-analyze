import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleUpLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    const newText = e.target.value;
    // console.log(newText);
    setText(newText);
  };
  const handleClearText = () => {
    // console.log(newText);
    setText("");
  };

  return (
    <div>
      <div className="form-floating">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{ height: 1 }}
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          ChangeUpper case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpLowerCase}>
          Change to lover
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearText}>
          Clear text
        </button>
      </div>
      <div className="container my-2">
        <h2>You text summery </h2>

        <p>
          {text.split(" ").length} words and {text.length}
        </p>
        <p>{0.0008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
