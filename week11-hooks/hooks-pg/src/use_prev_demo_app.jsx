import { useState } from "react";
import "./App.css";
import { usePrev } from "./hooks/usePrev";

function UsePrevDemoApp() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  return (
    <>
      <div>Counter {state}</div>
      <button onClick={() => setState((c) => c + 1)}>Increase</button>
      <p>The previous value was: {prev}</p>
    </>
  );
}

export default App;
