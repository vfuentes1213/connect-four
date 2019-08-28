import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameHeader from '../../components/GameHeader';
import * as actionTypes from '../../store/actions';
import GameCell from '../GameCell';
import Modal from '../Modal';
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
        <Modal
          message='Player 1 - Please choose your color:'
          show={this.props.gameState === 'start' ? true : false}
        >
          <button
            className='btn btn-danger'
            onClick={() => this.props.onStartGame('red')}
          >
            red
          </button>
          <button
            className='btn btn-dark'
            onClick={() => this.props.onStartGame('black')}
          >
            black
          </button>
        </Modal>
        <GameHeader currentPlayer={this.props.currentPlayerColor} />
        <div className='container'>{gameCellRows}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    currentPlayerColor: state[state.currentPlayer].color,
    gameState: state.gameState
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onAddChip: (rowIndex, colIndex) =>
      dispatch({ type: actionTypes.ADD_CHIP, payload: { rowIndex, colIndex } }),
    onStartGame: (color) =>
      dispatch({ type: actionTypes.START_GAME, payload: { color } })
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(GameGrid);
