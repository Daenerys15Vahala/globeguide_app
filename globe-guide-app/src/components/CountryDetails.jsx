import { useParams } from "react-router-dom";

function CountryDetails() {
  const { name } = useParams();

  return (
    <div className="country-details">
      <h1>{name}</h1>

      <p>🌎 Country information will appear here.</p>
      <p>Population:</p>
      <p>Capital:</p>
      <p>Languages:</p>
      <p>Currency:</p>
    </div>
  );
}

export default CountryDetails;
