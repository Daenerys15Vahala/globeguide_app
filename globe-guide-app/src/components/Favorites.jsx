import CountryCard from "./CountryCard";

function Favorites({ favorites = [] }) {
  return (
    <main>
      <h1>My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p>You haven't saved any countries yet</p>
      ) : (
        favorites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))
      )}
    </main>
  );
}

export default Favorites;