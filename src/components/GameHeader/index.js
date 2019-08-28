import React from 'react';

const gameHeader = (props) => (
  <div className='GameHeader'>
    <div className='GameHeader__text'>{props.currentPlayer} - Take Turn</div>
    <div>Round: {props.round}</div>
  </div>
);

export default gameHeader;
