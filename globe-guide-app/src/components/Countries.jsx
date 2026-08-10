import { useEffect, useState } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
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

      {countries.map((country) => (
        <div key={country.cca3}>
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default Countries;
