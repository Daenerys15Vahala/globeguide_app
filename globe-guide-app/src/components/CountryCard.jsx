function CountryCard ({country}) {
    return (
    <div className="country-card">

      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      />

      <h2>{country.name.common}</h2>

      <p>Region: {country.region}</p>

      <p>
        Capital: {country.capital?.[0]}
      </p>

      <button>View Details</button>

    </div>
  );
}

export default CountryCard;