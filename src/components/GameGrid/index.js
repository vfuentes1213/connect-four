import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameHeader from '../../components/GameHeader';
import * as actionTypes from '../../store/actions';
import GameCell from '../GameCell';

class GameGrid extends Component {
  render() {
    const gameCellRows = this.props.board.map((row, rowIndex) => {
      const gameCellRow = row.map((cell, colIndex) => {
        return (
          <GameCell
            key={rowIndex + ' ' + colIndex}
            addChip={() => this.props.onAddChip(rowIndex, colIndex)}
            type={cell}
          />
        );
      });

      return (
        <div className='row' key={rowIndex}>
          {gameCellRow}
        </div>
      );
    });

    return (
      <div className='GameGrid'>
        <GameHeader currentPlayer={this.props.currentPlayerColor} />
        <div className='container'>{gameCellRows}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    currentPlayerColor: state[state.currentPlayer].color
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onAddChip: (rowIndex, colIndex) =>
      dispatch({ type: actionTypes.ADD_CHIP, payload: { rowIndex, colIndex } })
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(GameGrid);
