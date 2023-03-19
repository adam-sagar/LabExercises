import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greeting name="Adam" />
    </div>
  );
}

export default App;


// @TODO1: Create a Greeting component (as a class) which renders a text “Hello World”.

// @TODO2: Pass a prop called ‘name’ down to the Greeting component and render the text ‘Hello <yourname>’ (e.g. Hello John).
