import { useState, useEffect } from 'react';
import './ThemeToggler.css';

function ThemeToggler({ChangeThemeCallBack}) {
    const [togglerTheme, setTogglerTheme] = useState ('theme-toggler');
    const [togglerState, setTogglerState] = useState(false);
    useEffect(() => {
        if (togglerState)
            setTogglerTheme(prevState => prevState = 'theme-toggler theme-toggler-selected');
        else
            setTogglerTheme(prevState => prevState = 'theme-toggler');

        ChangeThemeCallBack(togglerState);
    }, [togglerState, ChangeThemeCallBack])

    const ThemeTogglerClicked = (event) => {
        setTogglerState(prevState => prevState = !togglerState)
    }

    return (
        <span onClick={ThemeTogglerClicked} className={togglerTheme}>
            <span></span>
        </span>
    );
}

export default ThemeToggler;
