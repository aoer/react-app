import Hangman from "../Hangman/Hangman";
//import GuessTheNumber from "../GuessTheNumber";
import GuessTheNumberV2 from "../GuessTheNumber/GuessTheNumberV2";

function ComponentDisplay({name}) {
    const GetComponentToDisplay = () => {
        switch (name) {
            case 'guessTheNumber':
                return <GuessTheNumberV2 min={1} max={10} />;
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