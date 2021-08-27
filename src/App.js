import React, {useState} from "react";
import './styles/root.scss'

// Components
import Board from './components/Board'
import { calculateWinner } from "./helpers";

const App = () => {

  // board is now an array of 9 elements all set to null
    // setBoard is setState
    const [history, setHistory] = useState([ {board: Array(9).fill(null), isXNext: true},
    ]);

    const [currentMove, setCurrentMove] = useState(0);

    const current = history[currentMove];

    // isXNext is is next player
    // const [isXNext, setIsXNext] = useState(false);

    const winner = calculateWinner(current.board);

    const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isXNext ? 'X' : 'O'}`; 

    

    const handleSquareClick = (position) => {

        if (current.board[position] || winner) { return}

        setHistory( (prevState) => {

          const last = prevState[prevState.length -1];

            return last.board.map((square, pos) => {

                if(pos === position) {
                    return last.isXNext ? 'X' : 'O'
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