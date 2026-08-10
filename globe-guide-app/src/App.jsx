import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites.jsx";
import "./App.css";

function Home() {
  return <h1>Welcome to GlobeGuide 🌎</h1>;
}

function Countries() {
  return <h1>Explore Countries 🌍</h1>;
}

function About() {
  return <h1>About GlobeGuide ℹ️</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
