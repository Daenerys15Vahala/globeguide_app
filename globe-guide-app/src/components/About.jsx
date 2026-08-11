import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About GlobeGuide</h1>
        <p>Your passport to discovering the world.</p>
      </section>

      <section className="about-section">
        <h2>What is GlobeGuide?</h2>
        <p>GlobeGuide is an interactive web app for exploring countries in a simple, fun way.</p>
      </section>

      <section className="about-section">
        <h2>Why use it?</h2>
        <p>Discover country details, save favorites, and explore new places from one place.</p>
      </section>

      <section className="about-section">
        <Link to="/countries" className="explore-button">
          Explore Countries
        </Link>
      </section>
    </main>
  );
}

export default About;
