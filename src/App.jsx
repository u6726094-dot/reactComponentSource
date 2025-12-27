import Greetings from "./components/Greetings";
import User from "./components/User";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Greetings />
        <User name="Su Eain" />
      </div>
    </div>
  );
}

export default App;
