import React, { useState, useEffect } from "react";
import Message from "./Message.js";
import Cells from "./Cells.js";
import _ from "lodash";
import { playerProperties, winningStreaks } from "../utils/constants.js";

const Board = () => {
  const initialCellState = Object.fromEntries(
    Array.from({ length: 9 }, (_, index) => [index, null])
  );

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
            result[value].push(+key);
          }
          return result;
        },
        {}
      );

      for (const player of Object.keys(playerStats)) {
        for (const streak of winningStreaks) {
          if (_.intersection(playerStats[player], streak).length === 3) {
            setWinningStreak(streak);
            setMessage(`Player ${playerProperties[player]["emoji"]} has won!`);
            return;
          }
        }
      }
    }
  }

  function cellOnClick(id) {
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

  useEffect(checkWinningStat, [cellState, moveCount]);

  return (
    <div>
      <button className="button" type="reset" onClick={resetBoard}>
        Reset
      </button>
      <div className="board">
        <Cells
          cellState={cellState}
          winningStreak={winningStreak}
          cellOnClick={cellOnClick}
        />
      </div>
      {message && <Message message={message} />}
    </div>
  );
};

export default Board;
