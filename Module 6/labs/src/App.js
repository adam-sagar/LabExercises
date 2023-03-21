import "./App.css";
import Greeting from "./Greeting";
import HookGreeting from "./HookGreeting";
import RenderEmojis from "./RenderEmojis";

function App() {
  return (
    <div className="App">
      <Greeting name="Adam" />
      <HookGreeting name="Adam" />
      <RenderEmojis />
    </div>
  );
}

export default App;