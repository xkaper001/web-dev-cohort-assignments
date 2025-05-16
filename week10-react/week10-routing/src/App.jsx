import { useRef, useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const clock = useRef(0);

  function startClock() {
    let timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    clock.current = timer;
  }

  function stopClock() {
    clearInterval(clock.current);
  }

  return (
    <>
      {count}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </>
  );
}

export default App;
