import logo from "./images/coffee-cup.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to our coffee shop, we have been in business for many years!
        </p>
      </header>
    </div>
  );
}

export default App;
