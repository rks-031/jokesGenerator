import React from "react";

export default function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    console.log(isShown);
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div className="container">
      {props.setup && <p id="setup">{props.setup}</p>}
      <button onClick={toggleShown}>{isShown ? "Hide" : "Show"}</button>
      <hr />
    </div>
  );
}
