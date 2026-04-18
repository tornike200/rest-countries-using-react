import { useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "./Card";
import { useFilter } from "../store/useFilter";

const URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,cca3";

function CardList() {
  const { data } = useFetch(URL);
  const countryName = useFilter((state) => state.countryName);
  const regionName = useFilter((state) => state.regionName);

  const filterdData = useMemo(() => {
    const country = countryName !== "";
    const region = regionName !== "";

    if (country) {
      return data.filter((item) =>
        item.name.common.toLowerCase().includes(countryName.toLowerCase().trim()),
      );
    }

    if (region) {
      return data.filter((item) => item.region.toLowerCase() === regionName.toLowerCase().trim());
    }

    return data;
  }, [data, countryName, regionName]);

  // console.log(data);
  return (
    <div className="flex flex-col items-center gap-10 mt-8">
      {filterdData.length === 0 ? (
        <h2>Country Not Found</h2>
      ) : (
        filterdData.map((item) => <Card key={item.cca3} obj={item} />)
      )}
    </div>
  );
}

export default CardList;
