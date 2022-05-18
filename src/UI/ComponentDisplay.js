import Hangman from "../Hangman/Hangman";
//import GuessTheNumber from "../GuessTheNumber";
import GuessTheNumberV2 from "../GuessTheNumber/GuessTheNumberV2";
import TableExercise from "../TableExercise/TableExercise";

function ComponentDisplay({name}) {
    const GetComponentToDisplay = () => {
        switch (name) {
            case 'guessTheNumber':
                return <GuessTheNumberV2 min={1} max={10} />;
            case 'hangman':
                return <Hangman />; 
            case 'TableExercise':
                return  <TableExercise rowCount={5} columnCount={4} />
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