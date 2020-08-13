import PropTypes from "prop-types";
import React from "react";

const Card = ({ handleClick, flipped, id, width, type, disabled, solved }) => {
  return (
    <div>
      <img
        src={flipped || solved ? `/img/${type}.png` : `/img/back.png`}
        width={width}
        onClick={() => (disabled ? null : handleClick(id))}
        alt={""}
      />
    </div>
  );
};

Card.propTypes = {
  solved: PropTypes.bool.isRequired,
  flipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Card;
