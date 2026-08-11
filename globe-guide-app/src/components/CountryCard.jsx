import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      />

      <h2>{country.name.common}</h2>

      <p>Region: {country.region}</p>

      <p>Capital: {country.capital?.[0] || "N/A"}</p>

      <Link to={`/country/${country.name.common}`}>
        View Details
      </Link>
    </div>
  );
}

export default CountryCard;