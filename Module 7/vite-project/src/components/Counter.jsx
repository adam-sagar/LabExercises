import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'
import Button from 'react-bootstrap/Button';

function Counter() {

    const [count, setCount] = useState(0)
    const themeContext = useContext(ThemeContext)
    const darkMode = themeContext.theme.background === themes.dark.background

    useEffect(() => {
        document.title = `You clicked ${count} times`

        return function cleanup() {
            document.title = 'My React App'
        }
    }, [count]) // Only re-run the effect if count changes

    return (
        <div className="Counter componentBox" style={{ backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground }}>
            <p>You clicked {count} times</p>
            <Button variant="outline-success" onClick={() => setCount(count+1)}>Click Me!</Button>
            <br />
            <Button variant="outline-danger" onClick={() => setCount(0)}>Reset Me!</Button>
            <br />
            Change theme <input type="checkbox" value={darkMode} onChange={() => darkMode ? themeContext.setTheme(themes.light) : themeContext.setTheme(themes.dark)} />

            {/* how could we make a reset button to reset the count back to zero? */}
        </div>
    )
}

export default Counter