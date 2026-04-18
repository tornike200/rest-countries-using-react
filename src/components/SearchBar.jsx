import { useFilter } from "../store/useFilter";
import { useTheme } from "../store/useTheme";

function SearchBar() {
  const isDark = useTheme((state) => state.isDark);
  const countryName = useFilter((state) => state.countryName);
  const findCountry = useFilter((state) => state.findCountry);

  console.log(countryName);
  console.log("#########" + isDark);
  return (
    <>
      <div className="shadow-md py-4 px-8 flex gap-6 ">
        <label htmlFor="search">🔍</label>
        <input
          value={countryName}
          onChange={(e) => findCountry(e.target.value)}
          className={`outline-0 ${isDark ? "input" : ""}`}
          placeholder="Search for a country…"
          type="text"
        />
      </div>
    </>
  );
}

export default SearchBar;
