// import logo from './logo.svg';

import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />

      <Greet name="Sourav" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Rishav" heroName="Superman" />
      <Greet name="Tarun" heroName="Hanuman" />
      <Welcome />
      <Hello />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheets primary={true} />
      <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
