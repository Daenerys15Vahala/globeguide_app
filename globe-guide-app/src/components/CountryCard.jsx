import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt={`${country.name.common} flag`} />

      <h2>{country.name}</h2>

      <p>Region: {country.region}</p>

      <p>Capital: {country.capital || "N/A"}</p>

      <Link to={`/country/${country.cca3}`}>View Details</Link>
    </div>
  );
}

export default CountryCard;
