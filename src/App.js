import logo from "./logo.svg";
import "./App.css";
import ArtItemsList from "./components/ArtItemsList/ArtItemsList";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ArtItemsList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
