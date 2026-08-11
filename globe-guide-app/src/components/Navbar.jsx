import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        GlobeGuide
      </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/countries">Explore Countries</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/about">About</Link>
        </div>
    </nav>
  );
}

export default Navbar;
