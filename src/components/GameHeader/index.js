import React from 'react';

const gameHeader = (props) =>
    (<div className = 'GameHeader'><h1 className="GameHeader__text">{props.currentPlayer} -
     Take Turn</h1>
      </div>);

export default gameHeader;
