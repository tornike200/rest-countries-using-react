import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Detail() {
  const { cca3 } = useParams();

  const { data } = useFetch(
    `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`,
  );

  console.log(data);
  return (
    <div>
      <h2>Detail page {cca3}</h2>

      <img src={data.flags?.svg} alt="" />
    </div>
  );
}

export default Detail;
