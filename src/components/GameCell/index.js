import React from 'react';

const gameCell = (props) => {
  let style;

  if (props.type === 1) {
    style = 'GameCell__item--black';
  } else if (props.type === 2) {
    style = 'GameCell__item--red';
  } else {
    style = 'GameCell__item';
  }

  return (
    <div
      className={['GameCell col', style].join(' ')}
      onClick={props.addChip}
    ></div>
  );
};

export default gameCell;
