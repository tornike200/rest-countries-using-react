import { useNavigate } from "react-router-dom";

function Card({ obj }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="shadow-md" onClick={() => navigate(`detail/${obj.cca3}`)}>
        <img src={obj.flags.svg} alt="flag image" className="w-66" />
        <div className="mt-5">
          <h2>{obj.name.common}</h2>
          <h3>
            Population: <span>{obj.population.toLocaleString()}</span>
          </h3>
          <h3>
            Region: <span>{obj.region}</span>
          </h3>
          <h3>
            Capital: <span>{obj.capital[0]}</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Card;
