import "./App.css";
import Calculator from "./Calculator";
import Greeting from "./Greeting";
import HookGreeting from "./HookGreeting";
import RenderEmojis from "./RenderEmojis";
import ToggleEmoji from "./ToggleEmoji";

function App() {
  return (
    <div className="App">
      <Greeting name="Adam" />

      <HookGreeting name="Adam" />

      <RenderEmojis />
      
      <Calculator />      
    </div>
  );
}

export default App;