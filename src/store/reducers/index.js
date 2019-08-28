import * as actionTypes from '../actions';
import GridCell from '../../models/GridCell';

const board = [];

for (let i = 0; i < 6; i++) {
  const row = [];
  for (let j = 0; j < 7; j++) {
    row.push(new GridCell(null, i, j));
  }
  board.push(row);
}

const initialState = {
  currentPlayer: 'playerOne',
  playerOne: { color: 'red' },
  playerTwo: { color: 'black' },
  gameState: 'start',
  winner: null,
  board,
  round: 0
};

const reducer = (state = initialState, action) => {
  // update round
  let { round } = { ...state };

  switch (action.type) {
    case actionTypes.ADD_CHIP:
      console.log(state.round);

      // copy over current board & set new val for grid cell
      const newBoard = state.board.map((row) => {
        const newRow = row.map((cell) => {
          return { ...cell };
        });
        return newRow;
      });

      // update grid cell with current players chip color
      newBoard[action.payload.rowIndex][action.payload.colIndex].color =
        state[state.currentPlayer].color;

      // update current player
      const currentPlayer =
        state.currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';

      // check if game has been won or if there is a draw
      let { gameState } = { ...state };
      let { winner } = { ...state };
      round++;

      if (round >= 8) {
        gameState = 'end';
        winner = 'black';
      }

      return {
        ...state,
        board: newBoard,
        currentPlayer,
        round,
        gameState,
        winner
      };

    case actionTypes.START_GAME:
      console.log(action.payload);

      const { playerOne, playerTwo } = { ...state };

      playerOne.color = action.payload.color;
      playerTwo.color = playerOne.color === 'red' ? 'black' : 'red';

      // update round
      round++;

      return { ...state, playerOne, playerTwo, gameState: 'playing', round };
    case actionTypes.NEW_GAME:
      return {
        currentPlayer: 'playerOne',
        playerOne: { color: 'red' },
        playerTwo: { color: 'black' },
        gameState: 'start',
        winner: null,
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        round: 0
      };
    default:
      return state;
  }
};

export default reducer;
