import { useEffect, useState } from "react";
import "./App.css";
import { useDeboune } from "./hooks/useDebounce";

function App() {
  const [val, setVal] = useState();
  const debouncedVal = useDeboune(val, 1111);

  function change(e) {
    setVal(e.target.value);
  }

  useEffect(() => {
    console.log("Searching..");
  }, [debouncedVal]);

  return (
    <>
      <input type="text" onChange={change}></input>
    </>
  );
}

export default App;
