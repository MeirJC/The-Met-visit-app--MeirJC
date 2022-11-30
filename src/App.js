// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ArtItemsList from "./components/ArtItemsList/ArtItemsList";
import NavBar from "./components/NavBar/NavBar";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Favorits from "./components/Favorites/Favorits";
import { useState } from "react";
function App() {
  const [favArr, setFavArr] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/items" element={<ArtItemsList setFavArr={setFavArr} />} />
        <Route
          path="/favorites"
          element={<Favorits favArr={favArr} setFavArr={setFavArr} />}
        />
      </Routes>

      {/* <WelcomePage />
      <ArtItemsList /> */}
    </div>
  );
}

export default App;
