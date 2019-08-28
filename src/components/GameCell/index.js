import React from 'react';

const gameCell = ({ cell, addChip }) => (
  <div
    className={`GameCell col GameCell__item--${cell.color}`}
    onClick={addChip}
  ></div>
);

export default gameCell;
