// import logo from './logo.svg';

import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello"
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

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
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
