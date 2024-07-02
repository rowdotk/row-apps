import "./styles/TicTacToeStyles.css";
import "./styles/PasswordManagerStyles.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TicTacToe from "./components/TicTacToe/TicTacToe.js";
import PasswordManager from "./components/PasswordManager/PasswordManager.js";

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
