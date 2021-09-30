import Hangman from "../Hangman/Hangman";
import GuessTheNumber from "../GuessTheNumber";

function ComponentDisplay({name}) {
    const GetComponentToDisplay = () => {
        switch (name) {
            case 'guessTheNumber':
                return <GuessTheNumber min={1} max={5} />;
            case 'hangman':
                return <Hangman />; 
            default:
                return null;
        }
    }
    
    return (
        <div className='component-display'>
            {GetComponentToDisplay()}
        </div>
    );
}

export default ComponentDisplay;