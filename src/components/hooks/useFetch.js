import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const d = await response.json();
        setData(d);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [url]);

  return data;
}

export default useFetch;
