import React, {Component} from 'react';
import GameCell from '../GameCell';

class GameGrid extends Component {
  render() {
    // const gameCells = this.props.gridCells.map( cell => {
    //   return (<GameCell contents = {
    //     cell
    //   } />)
    const cells = [
      [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
    ];

    const gameCellRows = cells.map((row, rowIndex) => {
      const gameCellRow = row.map((cell, colIndex) => {
        return (<GameCell key={
          colIndex}/>);
      });

      return <div className='row' key={rowIndex}>{gameCellRow}</div>;
      });

    return (
      <div className='GameGrid container'>
        {gameCellRows}
        </div>);
  }
  }

  export default GameGrid;
