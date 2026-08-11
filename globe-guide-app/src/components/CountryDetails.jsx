import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const { name } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://countries.dev/name/${encodeURIComponent(name)}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountry(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching country:", error);
      });
  }, [name]);

  if (!country) {
    return <p>Loading country information...</p>;
  }

  return (
    <div className="country-details">
      <h1>{country.name}</h1>

      <img src={country.flags.png} alt={`${country.name} flag`} />

      <p>🌎 Region: {country.region}</p>

      <p>👥 Population: {country.population.toLocaleString()}</p>

      <p>🏛️ Capital: {country.capital || "N/A"}</p>

      <p>
        🗣️ Languages:{" "}
        {country.languages
          ? country.languages.map((language) => language.name).join(", ")
          : "N/A"}
      </p>

      <p>
        💰 Currency:{" "}
        {country.currencies
          ? country.currencies.map((currency) => currency.name).join(", ")
          : "N/A"}
      </p>
    </div>
  );
}

export default CountryDetails;
