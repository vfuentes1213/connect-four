import React from 'react';

const gameCell = ({ cell, addChip }) => {
  let style;
  console.log(cell);
  if (cell.color === 'black') {
    style = 'GameCell__item--black';
  } else if (cell.color === 'red') {
    style = 'GameCell__item--red';
  } else {
    style = 'GameCell__item';
  }

  return (
    <div className={['GameCell col', style].join(' ')} onClick={addChip}></div>
  );
};

export default gameCell;
