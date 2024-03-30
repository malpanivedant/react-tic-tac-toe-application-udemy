import { useState } from "react";

export default function Player({
  playerName,
  playerSymbol,
  isActive,
  onChangeName,
  //   buttonTitle = "Edit",
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  function handleChange(event) {
    setName(event.target.value);
  }

  function buttonClickHandler() {
    console.log("button clicked");

    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName({ symbol: playerSymbol, newName: name });
    }
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
