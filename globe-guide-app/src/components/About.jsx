import { Link } from "react-router-dom";

function About() {
    return (
        <main className="about-page">
            <section className="about-hero">
                <h1>About GlobeGuide🌎</h1>
                <p>Your passport to discovering the world.</p>
            </section>

            <section className="about-section">
                <h2>What is GlobeGuide</h2>
                <p>GlobeGuide is an interactive web application designed to make exploring countries simple and fun.</p>
                <p>Discover cultures, languages, populations, currencies, locations, and more.</p>
            </section>

            <section className="about-section">
                <h2>What Can You Explore?</h2>

                <div className="about-features">
                    <p>Country Info🌎</p>
                    <p>🗣️Languages</p>
                    <p>💰Currencies</p>
                    <p>👥Population</p>
                    <p>🕐Time Zones</p>
                    <p>📍Locations</p>
                </div>
            </section>

            <section className="about-section">
                <h2>Why GlobeGuide🌎</h2>
                <p>GlobeGuide brings useful information about countries together in one easy.</p>
                <p>Whether you're curious about a country's capital, language, population, or location, GlobeGuide makes exploring the world easier.</p>
            </section>

            <section className="about-section">
                <h2>Ready to explore the world?</h2>

                <Link to="/countries">
                <button className="button">Explore Countries</button>
                </Link>
            </section>
        </main>
    );
}

export default About;