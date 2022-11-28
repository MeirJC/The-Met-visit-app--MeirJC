import logo from "./logo.svg";
import "./App.css";
import ArtItemsList from "./components/ArtItemsList/ArtItemsList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ArtItemsList/>
      </header>
    </div>
  );
}

export default App;
