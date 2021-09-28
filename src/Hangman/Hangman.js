import { useState } from 'react';
import ShowDrawing from './ShowDrawing'
import ShowWord from './ShowWord';
import Keyboard from './Keyboard';
import './Hangman.css';

function Hangman() {
    let wordToGuess = 'muumitalo';
    let [gameEnded, setGameEnded] = useState(false);
    let [wrongGuessCount, setWrongGuessCount] = useState(0);
    let [gChars, setGuessedChars] = useState([]);
    let [gameOverClassName, setGameOverClassName] = useState('game-over-invisible');
    let [gameWonClassName, setGameWonClassName] = useState('game-won-invisible');
    
    const CharacterPressed = (character) => {
        //console.log('Character pressed: ' + character);
        if (gameEnded)
            return
        
        CharFound(character);
        CheckWrongGuessCount();
    }

    const GameWon = () => {
        setGameEnded(true);
        setGameWonClassName('game-won-visible');
    }

    const CheckWrongGuessCount = () => {
        if (wrongGuessCount >= 9){
            setGameEnded(true);
            setGameOverClassName('game-over-visible');
        }
    }

    const CharFound = (character) => {
        if (CharAlreadyGuessed(character)) 
            return
        
        if (wordToGuess.includes(character))
            setGuessedChars(gChars.concat([character]));
        else{
            if (wrongGuessCount < 9)
                setWrongGuessCount(++wrongGuessCount);
        }
    }

    const CharAlreadyGuessed = (character) => {
        for (let i = 0; i < gChars.length; i++) {
            if (gChars[i] === character)
                return true;
        }
        return false;
    }

    const ReStart = () => {
        window.location.reload(false);
    }

    return(
        <div className='Hangman'>
            <h1>Hangman</h1>
            <ShowDrawing imageIndex={wrongGuessCount+1} />
            <ShowWord toGuessChars={wordToGuess.split('')} guessedChars={gChars} gameWonCallBack={GameWon} />
            <Keyboard MainCharacterPressed={CharacterPressed} />
            <div id='GameWon' className={gameWonClassName}>
                <p>Game Won!</p>
                <button onClick={ReStart}>New Game</button>
            </div>
            <div id='GameOver' className={gameOverClassName}>
                <p>Game Over!</p>
                <button onClick={ReStart}>New Game</button>
            </div>
        </div>
    );
}

export default Hangman;