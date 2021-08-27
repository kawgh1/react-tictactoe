import React from "react";
import './styles/root.scss'

// Components
import Board from './components/Board'

const App = () => {
  return (
    <div className='app'>
        <h1>TIC TAC TOE</h1>
        <Board />
    </div>
    
  );
};

export default App;