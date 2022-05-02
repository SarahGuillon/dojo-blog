import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect exercize with fetch (& with setTimeOut to see the loading message)
  useEffect(() => {
    const abortCont = new AbortController();

    console.log("use effect ran")
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(response => {
          console.log(response);
          // error message if i can access the server but problem with the fetch
          if (!response.ok) {
            throw Error("Cannot fetch the data for that resource")
          }
          return response.json()})
        .then(data => {
          console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
        })
        // error message if it can't connect to the server to fetch("failed to fetch") but doesn't see the error of the API if it can access the server
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        })
    }, 1000)

  }, [url]);

  return { data, isPending, error }
}

export default useFetch;
