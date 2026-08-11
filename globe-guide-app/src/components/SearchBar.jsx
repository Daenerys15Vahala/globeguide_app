function SearchBar ({ search, setSearch}) {
    return (
        <div>
            <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
             />
        </div>
    );
}

export default SearchBar;