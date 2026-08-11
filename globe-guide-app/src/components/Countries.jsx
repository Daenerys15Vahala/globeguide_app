import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countries.dev/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div>
      <h1>Explore Countries 🌍</h1>

      <div className="country-container">
        {countries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
