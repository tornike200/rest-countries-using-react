function SearchBar() {
  return (
    <>
      <div className="shadow-md py-4 px-8 flex gap-6 mt-6">
        <label htmlFor="search">🔍</label>
        <input type="text" id="search" placeholder="Search for a country…" className="outline-0" />
      </div>
    </>
  );
}

export default SearchBar;
