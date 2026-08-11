import { Link } from "react-router-dom";

function CountryCard({ country, favorites = [], setFavorites = () => {} }) {
  // Get the country name first
  const countryName = country?.name || "Unknown";

  // Check if this country is already a favorite
  const isFavorite = favorites.some(
    (favorite) => favorite?.name === countryName,
  );

  function handleFavorite() {
    if (isFavorite) {
      setFavorites(
        favorites.filter((favorite) => favorite?.name !== countryName),
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

      <img
        src={country.flags?.png || country.flag}
        alt={`${countryName} flag`}
      />

      <h2>{countryName}</h2>

      <p>Region: {country.region || "N/A"}</p>

      <p>Capital: {country.capital || "N/A"}</p>

      <Link to={`/country/${encodeURIComponent(countryName)}`}>
        View Details
      </Link>
    </div>
  );
}

export default CountryCard;
