import React, { useState } from "react";
import "./styles.css";

const emojiDictionary1 = {
  "🏁": "Chequered Flag",
  "🚩": "Flag on Pole",
  "🏳️": "Sign of surrender",
  "🏴‍☠️": "Pirate Flag",
  "🏳️‍🌈": "Pride Flag",
  "⛳": "Golf Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🎌": "Crossed Flags",
  "🤞": "Good Luck",
  "🏴": "Black Flag",
};
const emojiDictionary2 = {
  "Chequered Flag": "🏁",
  "Flag on Pole": "🚩",
  "Sign of surrender": "🏳️",
  "Pirate Flag": "🏴‍☠️",
  "Pride Flag": "🏳️‍🌈",
  "Golf Flag": "⛳",
  "Transgender Flag": "🏳️‍⚧️",
  "Crossed Flags": "🎌",
  "Good Luck": "🤞",
  "Black Flag": "🏴",
};

const emojis = Object.keys(emojiDictionary1);
// const emojis2 = Object.keys(emojiDictionary2);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    "You will see the flag & its meaning here.."
  );

  function clearAll() {
    document.getElementById("button").style.color = "rgb(65, 63, 63)";
    setMeaning("You will see the flag & its meaning here..");
    setEmoji("");
  }

  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  function changeHandler(event) {

    document.getElementById("button").style.color = "white";

    const inputEmoji = event.target.value;
    const inputValue = titleCase(inputEmoji);
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary1){
      setMeaning(emojiDictionary1[inputEmoji]);
    } 
    else if (inputValue in emojiDictionary2){
      setMeaning(emojiDictionary2[inputValue]);
    }else {
      setMeaning(
        "Hi, unable to recognise above flag. Plz select flag as shown below."
      );
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary1[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 className="title">Flag emoji interpreter</h1>
      <div id="flexbox">
        <input
          className="box"
          onChange={changeHandler}
          value={emoji}
          placeholder={"Search Flag by entering symbol or text here..."}
          style={{
            padding: "0.7em",
            margin: "10px",
            minWidth: "50%",
            borderRadius: "0.5rem",
            fontSize: "1rem"
          }}
        />
        <button
          className="box"
          id="button"
          onClick={clearAll}
          type="button"
          style={{
            padding: "0.7em",
            margin: "10px",
            minWidth: "10%",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "rgb(65, 63, 63)",
            backgroundColor: "rgba(178, 34, 34, 0.523)"
          }}
        >
          Reset All
        </button>
      </div>
      <div id="flexbox">
        <h1>
          {" "}
          {emoji}
          <span>&nbsp;&nbsp;&nbsp;</span>{" "}
        </h1>{" "}
        {}
        <h1 id="meaning"> {meaning} </h1> {}
      </div>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
        {" "}{emoji}{" "}
        </span>
      ))}
    </div>
  );
}
