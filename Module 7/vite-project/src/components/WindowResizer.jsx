import useToggle from "../hooks/useToggle";
import useWindowResize from "../hooks/useWindowResize";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { ThemeContext, themes } from "../context/ThemeContext";
import { useContext } from "react";

function WindowResizer() {

    const [isToggled, setIsToggled] = useToggle();
    const windowSize = useWindowResize();
    const isOnline = useOnlineStatus();
    const themeContext = useContext(ThemeContext)
    const darkMode = themeContext.theme.background === themes.dark.background

    return (
        <div className="WindowResizer componentBox" style={{ backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground }}>
            <button onClick={setIsToggled}>{isToggled ? 'Toggled' : 'Click to Toggle'}</button>
            <div>{windowSize.width <= 768 ? 'Small Screen Detected' : 'Large Screen Detected'}</div>
            <p>{isOnline ? 'Online' : 'Offline'}</p>

            <input type="checkbox" value={darkMode} onChange={() => darkMode ? themeContext.setTheme(themes.light) : themeContext.setTheme(themes.dark)} />
        </div>
    );
}

export default WindowResizer

//follow the guide at https://react.dev/learn/reusing-logic-with-custom-hooks and implement the useOnlineStatus custom hook
//then make use of it here and display the online status in this component