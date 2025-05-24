import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/usefetch";

function UseFetchDemoApp() {
  const [postNumber, setPostNumber] = useState(1);
  const { response, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postNumber}`
  );

  if (isLoading) { 
    return "Loading...";
  }

  return (
    <>
      <div>
        <button style={{ margin: 24 }} onClick={() => setPostNumber(1)}>
          1
        </button>
        <button style={{ margin: 24 }} onClick={() => setPostNumber(2)}>
          2
        </button>
        <button style={{ margin: 24 }} onClick={() => setPostNumber(3)}>
          3
        </button>
      </div>
      <h2>{response.title}</h2>
      <div>{response.body}</div>
    </>
  );
}

export default UseFetchDemoApp;
