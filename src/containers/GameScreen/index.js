import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import GameHeader from '../../components/GameHeader';
import GameGrid from '../../components/GameGrid';
import GameCell from '../../components/GameCell';
import Modal from '../../components/Modal';

class GameScreen extends Component {
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
      <div className='GameScreen'>
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
        <GameGrid gameCellRows={gameCellRows} />
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
)(GameScreen);
