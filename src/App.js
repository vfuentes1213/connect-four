import React from 'react';

import Modal from './components/Modal';
import GameScreen from './containers/GameScreen';

function App() {
  return (
    <div className='App'>
      <Modal message='Player 1 - Please choose your color:'>
        <button className='btn btn-danger'>red</button>
        <button className='btn btn-dark'>black</button>
      </Modal>
      <GameScreen />
    </div>
  );
}

export default App;
