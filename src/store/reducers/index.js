import * as actionTypes from '../actions';

const initialState = {
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
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CHIP:
      console.log(
        `add chip to board! row: ${action.payload.rowIndex}, col: ${action.payload.colIndex}`
      );
      // copy over current board & set new val for grid cell
      const newBoard = state.board.slice(0);
      const newVal = state[state.currentPlayer].color === 'black' ? 1 : 2;

      // update board with current players chip color
      newBoard[action.payload.rowIndex][action.payload.colIndex] = newVal;

      // update current player
      const currentPlayer =
        state.currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';

      // check if game has been won or if there is a draw

      return { ...state, board: newBoard, currentPlayer };
    case actionTypes.START_GAME:
      console.log(action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
