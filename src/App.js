// import logo from './logo.svg';

import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello"

function App() {
  return (
    <div className="App">
      <Greet name="Sourav" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Rishav" heroName="Superman"/>
      <Greet name="Tarun" heroName="Hanuman"/>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
