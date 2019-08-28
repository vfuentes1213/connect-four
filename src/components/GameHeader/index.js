import React from 'react';

const gameHeader = (props) =>
    (<div className = 'GameHeader'><h1>{props.currentPlayer} -
     Take Turn</h1>
      </div>);

export default gameHeader;
