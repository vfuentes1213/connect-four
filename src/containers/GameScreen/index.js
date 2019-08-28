import React, {Component} from 'react';
import GameGrid from '../../components/GameGrid';
import GameHeader from '../../components/GameHeader';

class GameScreen extends Component {
  render() {
    return(<div className='GameScreen'>
      <GameHeader currentPlayer='Red Player'/>
     <GameGrid/>
    </div>);
  }
}

export default GameScreen;