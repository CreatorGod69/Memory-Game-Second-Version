import React from "react";
import PropTypes from "prop-types";
import "./board.css";

import Card from "../card";

const Board = ({ handleClick, flipped, cards, dimension, disabled }) => {
  return (
    <div className="board-wrapper">
      <div className="board">
        {cards.map((card) => (
          <Card
            dimension={dimension}
            key={card.id}
            id={card.id}
            type={card.type}
            width={dimension / 4.5}
            back={card.back}
            front={card.front}
            flipped={flipped.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  // flipped: PropTypes.arrayOf(PropTypes.bool).isRequired,
  flipped: PropTypes.bool.isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Board;
