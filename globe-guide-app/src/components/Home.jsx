function Home() {
  return (
    <main className="home">
      {" "}
      <section className="hero">
        {" "}
        <div className="hero-content">
          {" "}
          <p className="welcome">WELCOME TO GLOBEGUIDE</p>{" "}
          <h1>
            {" "}
            Explore the World, <br /> One Country at a Time 🌎{" "}
          </h1>{" "}
          <p className="hero-text">
            {" "}
            Discover countries around the world and learn about their people,
            places, languages, and cultures.{" "}
          </p>{" "}
          <a href="/countries" className="explore-button">
            {" "}
            Explore Countries →{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
      <section className="features">
        {" "}
        <h2>Discover the World</h2>{" "}
        <div className="feature-cards">
          {" "}
          <div className="feature-card">
            {" "}
            <span>🌍</span> <h3>Explore Countries</h3>{" "}
            <p>
              {" "}
              Search for countries and discover interesting information about
              them.{" "}
            </p>{" "}
          </div>{" "}
          <div className="feature-card">
            {" "}
            <span>📚</span> <h3>Learn More</h3>{" "}
            <p>
              {" "}
              Find information about capitals, populations, languages,
              currencies, and more.{" "}
            </p>{" "}
          </div>{" "}
          <div className="feature-card">
            {" "}
            <span>❤️</span> <h3>Save Favorites</h3>{" "}
            <p> Keep track of the countries you want to explore again. </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
export default Home;
