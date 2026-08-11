
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img
        src={country.flags?.png || country.flag}
        alt={`${country.name} flag`}
      />

      <h2>{country.name}</h2>

      <p>Region: {country.region || "N/A"}</p>

      <p>Capital: {country.capital || "N/A"}</p>

      <Link to={`/country/${country.name}`}>
        View Details
      </Link>
    </div>
  );
}

export default CountryCard;

