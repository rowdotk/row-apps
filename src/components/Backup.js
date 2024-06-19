import React, { useState, useEffect } from "react";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import ErrorCard from "./ErrorCard.js";

const Board = () => {
  const [buttonState, setButtonState] = useState(false);
  const [playerState, setPlayerState] = useState(1);
  const [cellState, setCellState] = useState({
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
  });
  const [error, setError] = useState(null);

  console.log("---buttonState", buttonState);
  console.log("---playerState", playerState);
  console.log("---cellState", cellState);

  function buttonOnClick(id) {
    if (cellState[id]["buttonState"]) {
      setError("You cannot undo this move!");
      return;
    }

    setButtonState(true);
    setPlayerState(playerState === 1 ? 2 : 1);

    setCellState({
      ...cellState,
      ...{ [id]: { buttonState: true, playerState } },
    });
  }

  return (
    <div>
      <div className="Board">
        {Object.keys(cellState).map((id) => (
          <button
            type="button"
            className="Button"
            key={`button-${id}`}
            onClick={() => {
              buttonOnClick(id);
            }}
          >
            {cellState[id]["buttonState"] && (
              <img
                className="PlayerIcon"
                src={cellState[id]["playerState"] === 1 ? circle : cross}
                alt={cellState[id]["playerState"] === 1 ? "circle" : "cross"}
              />
            )}
          </button>
        ))}
      </div>
      {error && <ErrorCard error={error} />}
    </div>
  );
};

export default Board;
