import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("The button was clicked.");
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    // console.log("The button was clicked.");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
  };

  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Special characters have been removed", "success");
  };

  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
    props.showAlert("Only numbers are being shown", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("All extra spaces have been removed", "success");
  };

  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword);
    props.showAlert("First character has been capitalized", "success");
}

const handleCopy = () => {
  
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard!!", "success");
}

  const handleOnChange = (event) => {
    // console.log("On Change occured.");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Leave a comment here"
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'#0C2D48':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Upper-Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lower-Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handletextExtract}>
          Remove Symbols
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleNumExtract}>
          Show Only Numbers
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={capitalFirstLetter}>
          First Letter Capital
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="my-3">Your text summary</h2>
        <p>
          <strong>Number of Characters:</strong> {text.length}
        </p>
        <p>
          <strong>Number of Words:</strong> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
        </p>
        <p>
          <strong>Expected time taken to read:</strong>{" "}
          {0.008 * (text.split(" ").length)} secs
        </p>
        <h4 className="my-5">Preview:</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
