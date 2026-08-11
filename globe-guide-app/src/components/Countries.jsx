
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries({ favorites = [], setFavorites = () => {} }) {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://countries.dev/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.toLowerCase() || "";
    return countryName.includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <h1>Explore Countries 🌍</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        {searchTerm && (
          <button onClick={() => setSearchTerm("")}>
            Clear
          </button>
        )}
      </div>

      <p>{filteredCountries.length} countries found</p>

      <div className="country-container">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard
              key={country.alpha2Code}
              country={country}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>
    </main>
  );
}

export default Countries;
