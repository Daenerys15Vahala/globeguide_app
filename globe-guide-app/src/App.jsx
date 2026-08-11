import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

import "./App.css";

function About() {
  return <h1>About GlobeGuide ℹ️</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

    <main className="page-content"> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
</main> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
