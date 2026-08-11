function About() {
  return (
    <main className="about">
      <h1>About GlobeGuide 🌎</h1>

      <p>
        GlobeGuide is an interactive application that helps users explore
        countries around the world.
      </p>

      <section className="about-section">
        <h2>Explore the World</h2>
        <p>
          Users can browse countries, search for specific countries, and view
          information about their population, capital, languages, and currency.
        </p>
      </section>

      <section className="about-section">
        <h2>How It Works</h2>
        <p>
          GlobeGuide uses a third-party country API to retrieve real country
          information and display it through React.
        </p>
      </section>

      <section className="about-section">
        <h2>Built With 💻</h2>
        <p>
          This application was built using React, React Router, JavaScript, JSX,
          CSS, and a third-party API.
        </p>
      </section>
    </main>
  );
}

export default About;
