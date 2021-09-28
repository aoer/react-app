function ShowWord({toGuessChars, guessedChars, gameWonCallBack}) {
    let gameWon = true;
    const CheckQuess = () => {
        let wordShow = '', charFound = false;
        toGuessChars.forEach(tgc => {
            guessedChars.forEach(gc => {
                if (tgc === gc) {
                    wordShow += gc;
                    charFound = true;
                    return
                }
            });
            
            if (!charFound) {
                wordShow += '*';
                gameWon = false;
            } else {
                charFound = false;
            }
        });

        if(gameWon)
            gameWonCallBack();
        
        return wordShow;
    }
    
    return (
        <div className='ShowWord'>
            <h2>{CheckQuess()}</h2>
        </div>
    );
}

export default ShowWord;