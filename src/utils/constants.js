import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

export const playerProperties = {
  1: { icon: circle, emoji: "🍪", description: "circle" },
  2: { icon: cross, emoji: "⚔️", description: "cross" },
};

export const winningStreaks = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const jsonFields=[ "title", "url", "username", "userId", "password", "notes"]