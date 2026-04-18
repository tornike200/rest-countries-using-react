import { useFilter } from "../store/useFilter";

const options = [
  { name: "Filter by Region", value: "" },
  { name: "Africa", value: "africa" },
  { name: "America", value: "americas" },
  { name: "Asia", value: "asia" },
  { name: "Europe", value: "europe" },
  { name: "Oceania", value: "oceania" },
];

function RegionFilter() {
  const regionName = useFilter((state) => state.regionName);
  const filterByRegion = useFilter((state) => state.filterByRegion);

  console.log(regionName);
  return (
    <div>
      <select value={regionName} onChange={(e) => filterByRegion(e.target.value)}>
        {options.map((item) => (
          <option key={item.name} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionFilter;
