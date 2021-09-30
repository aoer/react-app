import { useState, useEffect } from 'react';
import ShowDrawing from './ShowDrawing'
import ShowWord from './ShowWord';
import Keyboard from './Keyboard';
import './Hangman.css';

function Hangman() {
    let wordToGuess = 'hattivatti';
    let [gameLost, setGamelost] = useState(false);
    let gameWon = false;
    let [wrongGuessCount, setWrongGuessCount] = useState(0);
    let [wChars, setWrongChars] = useState([]);
    let [gChars, setGuessedChars] = useState([]);
    let [gameOverClassName, setGameOverClassName] = useState('game-over-invisible');
    let [gameWonClassName, setGameWonClassName] = useState('game-won-invisible');
    useEffect(() => {
        UpdateButtonColors(gChars, wChars);
        UpdateGameState();
    });


    const CharacterPressed = (character) => {
        //console.log('Character pressed: ' + character);
        if (gameWon || gameLost)
            return
        
        CharFound(character);
        CheckWrongGuessCount();
    }

    const UpdateButtonColors = (correctButtonsToUpdate, wrongButtonsToUpdate) => {
        for (let i = 0; i < correctButtonsToUpdate.length; i++ ){
            document.getElementById('button-' + correctButtonsToUpdate[i]).style.backgroundColor = 'green';
        }
        for (let i = 0; i < wrongButtonsToUpdate.length; i++ ){
            document.getElementById('button-' + wrongButtonsToUpdate[i]).style.backgroundColor = 'red';
        }
    }

    const UpdateGameState = () => {
        if (gameWon) {
            setGameWonClassName('game-won-visible');
        }
        if (gameLost) {
            setGameOverClassName('game-over-visible');
        }            
    }

    const GameWon = () => {
        gameWon = true;
    }

    const GameLost = () => {
        setGamelost(true);
    }

    const CheckWrongGuessCount = () => {
        if (wrongGuessCount >= 9){
            GameLost();
        }
    }

    const CharFound = (character) => {
        if (CharAlreadyGuessed(character)) 
            return
        
        if (wordToGuess.includes(character)) {
            setGuessedChars(prevState => {
                return prevState.concat([character]);
            });
        }else {
            if (wrongGuessCount < 9){
                setWrongGuessCount(++wrongGuessCount);
                setWrongChars(prevState => {
                    return prevState.concat([character]);
                });
            }
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