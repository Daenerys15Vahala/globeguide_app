
import { Link } from "react-router-dom";

function CountryCard({ country, favorites = [], setFavorites = () => {} }) {
  const isFavorite = favorites.some((favorite) => favorite.name === country.name);

  function handleFavorite() {
    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.name !== country.name
    )
);
    } else {
      setFavorites([...favorites, country]);
    }
  }

  return (
    <div className="country-card">
      <button className="fav-button" onClick={handleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img src={country.flags?.png || country.flag} alt={`${country.name} flag`} />

      <h2>{country.name}</h2>

      <p>Region: {country.region || "N/A"}</p>

      <p>Capital: {country.capital?.[0] || "N/A"}</p>

      <Link to={`/country/${encodeURIComponent(country.name)}`}>View Details</Link>
    </div>
  );
}

export default CountryCard;

