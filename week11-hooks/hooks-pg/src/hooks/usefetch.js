import { useEffect, useState } from 'react'


export function useFetch(url) {
  const [isLoading, setLoadingState] = useState(true);
  const [response, setResponse] = useState({});

  async function fetchUrlResponse() {
    setLoadingState(() => true);
    const res = await fetch(url);
    const resJson = await res.json()
    setResponse(() => resJson);
    setLoadingState(() => false);
  }

  useEffect(() => {
    fetchUrlResponse()
  }, [url])

  useEffect(() => {
    setInterval(fetchUrlResponse, 10 * 1000);
    return () => {
      clearInterval()
    }
  }, [])
  

  return { response, isLoading };
}