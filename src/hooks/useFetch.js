import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("something went wrong !!!");
        }

        const tempData = await response.json();

        setData(tempData);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, [url]);

  return { data };
}
