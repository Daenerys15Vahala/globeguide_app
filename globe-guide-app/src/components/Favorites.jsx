import CountryCard from "./CountryCard";

function Favorites({ favorites, setFavorites }) {
  return (
    <main>
      <h1>My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p>You haven't saved any countries yet</p>
      ) : (
        <div className="country-container">
            {favorites.map((country) => (
                <CountryCard
                key={country.alpha2Code}
                country={country}
                favorites={favorites}
                setFavorites={setFavorites}
                />
            ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;