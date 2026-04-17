import { useFetch } from "../hooks/useFetch";
import Card from "./Card";

const URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,cca3";

function CardList() {
  const { data } = useFetch(URL);

  console.log(data);
  return (
    <div className="flex flex-col items-center gap-10">
      {data.map((item) => (
        <Card key={item.cca3} obj={item} />
      ))}
    </div>
  );
}

export default CardList;
