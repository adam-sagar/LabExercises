// import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import PropsDisplayer from "./components/PropsDisplayer";
import Comment from "./components/Comment";
import Example from "./components/Example";
import Weather from "./components/Weather";
import HookExample from "./components/HookExample";
import HookWeather from "./components/HookWeather";
import ClockDisplay from "./components/Clock";
import HookLogin from "./components/HookLogin";
import {Hello} from "./components/Hello";
import Reservation from "./components/Reservation";
import StudentList from "./components/StudentList";
import SignUpDialog from "./components/SignupDialog";
import Breweries, { TypeFilter } from "./components/Breweries";
import FancyBorder from "./components/FancyBorder";

function formatName(name) {
  return name.first + " " + name.last;
}

function App() {
  const name = { first: "Adam", last: "Sagar" };

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <div className="App">
      <h2>{formatName(name)}</h2>
      <FancyBorder color="green">
        <MyComponent />
      </FancyBorder>

      <PropsDisplayer name="Adam" location="Chch" />

      <Comment user={comment.author} date={comment.date} text={comment.text} />

      <Example />

      <HookExample />

      <Weather />

      <HookWeather />

      <SignUpDialog />
    
      <ClockDisplay />

      <HookLogin />

      <Hello />

      <Reservation />

      <StudentList />

      <Breweries />
    </div>
  );
}

export default App;
