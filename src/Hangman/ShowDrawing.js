function ShowDrawing({imageIndex}) {
    return (
        <div className='ShowDrawing'>
            <img src={process.env.PUBLIC_URL + '/hangman_images/hangman_' + imageIndex + '.png'} alt='hangmanImage'></img>
        </div>
    );
}

export default ShowDrawing;