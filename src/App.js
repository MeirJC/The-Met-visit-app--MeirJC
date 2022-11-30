// import logo from "./logo.svg";
import "./App.css";
import ArtItemsList from "./components/ArtItemsList/ArtItemsList";
import NavBar from "./components/NavBar/NavBar";
import WelcomePage from "./components/WelcomePage/WelcomePage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomePage />
      <ArtItemsList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
