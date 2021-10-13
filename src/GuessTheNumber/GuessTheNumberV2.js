import { useState, useEffect } from 'react';

function GuessTheNumberV2 ({min, max}) {
    const [gameState, setGameState] = useState(() => {
        return {
            randomNumber: undefined,
            userInput: undefined,
            gameOver: false,
            wrongGuesses: [],
            feedBack: '',
            guessButtonEnabled: false
        }
    });
    useEffect(() => {
        setGameState(prevState => {
            return {
                ...prevState,
                randomNumber: prevState.randomNumber = GenerateRandomNumber(min, max),
                feedBack: prevState.feedBack = 'New game started!'
            };
        });
    }, [min, max])
    
    const ResetGame = () => {
        setGameState({
            randomNumber: GenerateRandomNumber(min, max),
            userInput: undefined,
            gameOver: false,
            wrongGuesses: [],
            feedBack: 'New game started!',
            guessButtonEnabled: false
        });
    }

    const GenerateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const IsValidNumber = (number) => {
        if (Number.isNaN(number))
            return false;
        if (number < min || number > max)
            return false;
        if (NumberAlreadyGuessed(number))
            return false;

        return true;
    }

    const NumberAlreadyGuessed = (number) => {
        for (let i = 0; i < gameState.wrongGuesses.length; i++) {
            if (gameState.wrongGuesses[i] === number)
                return true;
        }
        return false;
    }

    const InputGiven = (event) => {
        /* Do not process input when game is over */
        if (gameState.gameOver)
            return;
        
        /* Handle improper input from user */
        let number = Number(event.target.value);
        if (!IsValidNumber(number)) {
            setGameState(prevState => {
                return {
                    ...prevState,
                    guessButtonEnabled: prevState.guessButtonEnabled = false
                };
            });
            return;
        }

        /* Handle proper input from user */
        setGameState(prevState => {
            return {
                ...prevState,
                userInput: prevState.userInput = number,
                feedBack: prevState.feedBack = <br/>,
                guessButtonEnabled: prevState.guessButtonEnabled = true
            };
        });
    }

    const GuessButtonPressed = () => {
        let number = gameState.userInput;
        
        /* Handle correct guess from user */
        if (number === gameState.randomNumber) {
            setGameState(prevState => {
                return {
                    ...prevState,
                    gameOver: prevState.gameOver = true,
                    feedBack: prevState.feedBack = 'Correct!',
                    guessButtonEnabled: prevState.guessButtonEnabled = false
                };
            });
            return;
        }
        
        /* Handle incorrect guess from user */
        let feedBack
        if (number > gameState.randomNumber)
            feedBack = 'Guess went over.';
        else
            feedBack = 'Guess went under.';
        
        setGameState(prevState => {
            return {
                ...prevState, 
                wrongGuesses: [...prevState.wrongGuesses, number], 
                feedBack: prevState.feedBack = feedBack,
                guessButtonEnabled: prevState.guessButtonEnabled = false
            };
        })
    }

    const NewGameButtonPressed = () => {
        ResetGame();
    }

    const guessButton = <button onClick={GuessButtonPressed} disabled={!gameState.guessButtonEnabled}>Make Guess</button>;
    const newGameButton = <button onClick={NewGameButtonPressed}>New Game</button>;

    return (
       <div className='GuessTheNumber'>
           <h1>Guess a number beetween {min}-{max}</h1>
            <p>Take a guess:</p>
            <input onChange={InputGiven} type='number' min={min} max={max}></input>
            {gameState.gameOver ? newGameButton : guessButton}
            <p>{gameState.feedBack}</p>
            <p>{gameState.wrongGuesses.length > 0 ? 'Previous guesses:' : ''}</p>
            <p>{gameState.wrongGuesses.toString()}</p>
        </div> 
    );
}

export default GuessTheNumberV2;