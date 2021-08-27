import React, {useState} from "react";
import './styles/root.scss'

// Components
import Board from './components/Board'
import { calculateWinner } from "./helpers";

const App = () => {

  // board is now an array of 9 elements all set to null
    // setBoard is setState
    const [board, setBoard] = useState(Array(9).fill(null));

    // isNext is is next player
    const [isXNext, setIsXNext] = useState(false);

    const winner = calculateWinner(board);

    const message = winner ? `Winner is ${winner}` : `Next Player is ${isXNext ? 'X' : 'O'}`; 

    

    const handleSquareClick = (position) => {

        if (board[position] || winner) { return}
        setBoard( (prevState) => {

            return prevState.map((square, pos) => {

                if(pos === position) {
                    return isXNext ? 'X' : 'O'
                }

                return square;
            });
        });

        setIsXNext(prevState => !prevState)
    };

    

  return (
    <div className='app'>
        <h1>TIC TAC TOE</h1>
        <h2>{message}</h2>
        <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
    
  );
};

export default App;