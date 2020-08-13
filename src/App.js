import React, { useState, useEffect } from "react";
import Board from "./components/board";

import initializeDeck from "./deck";

export default function App() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimension, setDimension] = useState(400);
  // const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeBoard);
  });

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([...flipped, id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
    }
  };

  const sameCardClicked = (id) => {
    flipped.includes(id);
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <Board
      dimension={dimension}
      cards={cards}
      handleClick={handleClick}
      flipped={flipped}
      disabled={disabled}
    />
  );
}
