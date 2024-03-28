import { useState } from "react";

export default function Player({
  playerName,
  playerSymbol,
  isActive,
  //   buttonTitle = "Edit",
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  function handleChange(event) {
    setName(event.target.value);
  }

  let buttonTitle = "Edit";

  function buttonClickHandler() {
    console.log("button clicked");

    setIsEditing((editing) => !editing);
    console.log(buttonTitle);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={name} required onChange={handleChange} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        {/* <span className="player-name">{playerName}</span> */}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={buttonClickHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
