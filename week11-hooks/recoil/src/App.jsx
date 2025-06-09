import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Increment setCount={setCount} />
      <Decrement setCount={setCount} />
      <ValueDisplay count={count} />
    </>
  );
}

function ValueDisplay({count}) {
  return <div> Count {count}</div>;
}

function Increment({setCount}) {
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

function Decrement({setCount}) {
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
}

export default App;
