import ThemeToggler from "./ThemeToggler/ThemeToggler";

function PageFooter({ChangeThemeCallBack}) {
    return (
        <footer>
            <span>TODO Footer..</span>
            <label>
                <p>Change Theme:</p>
                <ThemeToggler ChangeThemeCallBack={ChangeThemeCallBack} />
            </label>
        </footer>
    );
}

export default PageFooter;