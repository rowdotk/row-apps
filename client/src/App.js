import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TicTacToe from "../src/components/TicTacToe/TicTacToe.js";
import PasswordManager from "../src/components/PasswordManager/PasswordManager.js";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/password-manager" element={<PasswordManager />} />
        <Route path="*" element={<Navigate to="/tic-tac-toe" />} />
      </Routes>
    </Router>
  );
}

export default App;
