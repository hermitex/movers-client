import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("jwt");
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const d = await response.json();
        setData(d);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [token, url]);

  return data;
}

export default useFetch;
