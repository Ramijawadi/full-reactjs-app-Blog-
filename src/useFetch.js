import { useEffect , useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("could not access to data form this endpoint");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null)
          })
  
          .catch((err) => {
            setError(err.message)
            setIsLoading(false)
          });
      }, 1000);
    }, [url]);
  
return {  data , isLoading , error}
}