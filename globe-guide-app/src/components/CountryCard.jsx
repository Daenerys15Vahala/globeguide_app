
import { Link } from "react-router-dom";

function CountryCard({ country, favorites = [], setFavorites = () => {} }) {
  const countryName = country?.name?.common || country?.name || "Unknown";
  const isFavorite = favorites.some((favorite) => favorite?.name?.common === countryName || favorite?.name === countryName);

  function handleFavorite() {
    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => (favorite?.name?.common || favorite?.name) !== countryName));
    } else {
      setFavorites([...favorites, { ...country, name: { common: countryName } }]);
    }
  }

  return (
    <div className="country-card">
      <button className="fav-button" onClick={handleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img src={country.flags?.png || country.flag} alt={`${countryName} flag`} />

      <h2>{countryName}</h2>

      <p>Region: {country.region || "N/A"}</p>

      <p>Capital: {country.capital?.[0] || "N/A"}</p>

      <Link to={`/country/${encodeURIComponent(countryName)}`}>View Details</Link>
    </div>
  );
}

export default CountryCard;

