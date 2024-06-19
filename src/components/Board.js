import React, { useState, useEffect } from "react";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import Message from "./Message.js";
import _ from "lodash";

const Board = () => {
  const playerAssets = {
    1: { icon: circle, emoji: "🍪", description: "circle" },
    2: { icon: cross, emoji: "⚔️", description: "cross" },
  };

  const winningStreaks = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const initialCellState = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  };

  const [winningStreak, setWinningStreak] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [player, setPlayer] = useState(1);
  const [cellState, setCellState] = useState(initialCellState);
  const [message, setMessage] = useState(null);

  function checkWinningStat() {
    // no need to check for the first 5 moves because its impossible to win yet
    if (moveCount >= 5) {
      const playerStats = _.reduce(
        cellState,
        (result, value, key) => {
          if (value) {
            if (!result[value]) {
              result[value] = [];
            }
            result[value].push(Number(key));
          }
          return result;
        },
        {}
      );

      Object.keys(playerStats).forEach((player) => {
        winningStreaks.forEach((streak) => {
          if (_.intersection(playerStats[player], streak).length === 3) {
            setWinningStreak(streak);
            setMessage(`Player ${playerAssets[player]["emoji"]} has won!`);
          }
        });
      });
    }
  }

  function buttonOnClick(id) {
    if (cellState[id]) {
      setMessage("Foul! You cannot undo this move! ⚠️");
      return;
    }
    setPlayer(player === 1 ? 2 : 1);
    setCellState({
      ...cellState,
      ...{ [id]: player },
    });
    setMoveCount((prevMoveCount) => prevMoveCount + 1);
    setMessage(null);
  }

  function resetBoard() {
    setCellState(initialCellState);
    setWinningStreak([]);
    setMessage(null);
  }

  useEffect(checkWinningStat, [cellState]);

  return (
    <div>
      <button className="Button" type="reset" onClick={resetBoard}>
        Reset
      </button>
      <div className="Board">
        {Object.keys(cellState).map((id) => (
          <div>
            <button
              type="button"
              className="Cell"
              disabled={winningStreak.length > 0}
              id={`button-${id}`}
              onClick={() => buttonOnClick(id)}
              style={
                winningStreak.includes(+id)
                  ? {
                      borderColor: "#F5D83C",
                      borderStyle: "solid",
                      borderWidth: "5px",
                    }
                  : null
              }
            >
              {cellState[id] && (
                <img
                  className="Player"
                  src={playerAssets[cellState[id]]["icon"]}
                  alt={playerAssets[cellState[id]]["description"]}
                />
              )}
            </button>
          </div>
        ))}
      </div>
      {message && <Message message={message} />}
      {}
    </div>
  );
};

export default Board;
