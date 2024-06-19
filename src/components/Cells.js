import { playerProperties } from "../utils/constants.js";

const Cells = (props) => {
  const { cellState, winningStreak, cellOnClick } = props;
  return (
    <div className="grid-container">
      {Object.keys(cellState).map((id) => (
        <button
          type="button"
          className="cell"
          disabled={winningStreak.length > 0}
          key={`button-${id}`}
          onClick={() => cellOnClick(id)}
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
              className="player-icon"
              src={playerProperties[cellState[id]]["icon"]}
              alt={playerProperties[cellState[id]]["description"]}
            />
          )}
        </button>
        // </div>
      ))}
    </div>
  );
};

export default Cells;
