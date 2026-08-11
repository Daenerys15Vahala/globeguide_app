import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const { name } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
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
      <h1>{country.name.common}</h1>

      <img src={country.flags.png} alt={`${country.name.common} flag`} />

      <p>🌎 Region: {country.region}</p>

      <p>👥 Population: {country.population.toLocaleString()}</p>

      <p>🏛️ Capital: {country.capital?.[0] || "N/A"}</p>

      <p>
        🗣️ Languages:{" "}
        {country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A"}
      </p>

      <p>
        💰 Currency:{" "}
        {country.currencies ? Object.values(country.currencies)[0].name : "N/A"}
      </p>
    </div>
  );
}

export default CountryDetails;
