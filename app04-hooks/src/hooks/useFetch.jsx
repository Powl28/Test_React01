import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    setLoading(true)
    fetchData();
    console.log("ggggg")
    setTimeout(()=> {

      setLoading(false)
    },2000)
        

   
  }, [url]);

  return { data,Loading };
};
