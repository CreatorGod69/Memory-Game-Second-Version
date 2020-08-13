import React, { useState, useEffect } from "react";
import Board from "./components/board";

import initializeDeck from "./deck";

export default function App() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeBoard);
  });

  useEffect(() => {
    console.log(flipped)
  }, [flipped])

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([...flipped, id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return setDisabled(false);
      setFlipped([flipped[0], id]);
      if(isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards();
      } else {
        setTimeout(resetCards, 700);
      }
    }
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  }

  const sameCardClicked = (id) => {
    return flipped.includes(id);
  };

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id );
    const flippedCard = cards.find((card) => flipped[0] === card.id );
    return flippedCard.type === clickedCard.type
  }

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
      solved={solved}
    />
  );
}
