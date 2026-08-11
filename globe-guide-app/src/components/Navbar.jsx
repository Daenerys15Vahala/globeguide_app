import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        GlobeGuide
      </Link>

      <div className="nav-actions">
        <input
          type="text"
          className="nav-search"
          placeholder="Search countries"
          aria-label="Search countries"
        />

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/countries">Explore Countries</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
