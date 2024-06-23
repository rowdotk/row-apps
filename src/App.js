import "./styles/Board.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Board from "./components/Board.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tic-tac-toe" element={<Board />} />
        <Route path="*" element={<Navigate to="/tic-tac-toe" />} />
      </Routes>
    </Router>
  );
}

export default App;
