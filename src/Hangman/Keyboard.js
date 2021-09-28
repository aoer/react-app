function Keyboard({MainCharacterPressed}) {
    let keyboardCharacters = 'abcdefghijklmnopqrstuvxyzäö';
    const ButtonPressed = (button) => {
        MainCharacterPressed(button.target.id.split('-')[1]);
    }
    
    const GetButtons = () => {
        return keyboardCharacters.split('').map(char => <button  id={'button-' + char} onClick={ButtonPressed}>{char}</button>);
    }
    
    return (
        <div className='Keyboard'>
            {GetButtons()}
        </div>
    );
}

export default Keyboard;