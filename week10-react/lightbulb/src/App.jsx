import { useState, createContext, useContext } from "react";
import "./App.css";

const BulbContext = createContext();

function App() {
  return <Light />;
}

function BulbProvider({ children }) {
  const [isBulbOn, setBulb] = useState(false);

  return (
    <BulbContext.Provider
      value={{
        isBulbOn: isBulbOn,
        setBulb: setBulb,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function Light() {
  return (
    <BulbProvider>
      <LightBulb />
      <LightSwitch />
    </BulbProvider>
  );
}

function LightBulb() {
  const { isBulbOn } = useContext(BulbContext);
  return (
    <div style={{ paddingBottom: 20 }}>
      {" "}
      {isBulbOn ? (
        <img src="https://www.w3schools.com/js/pic_bulboff.gif"></img>
      ) : (
        <img src="https://www.w3schools.com/js/pic_bulbon.gif"></img>
      )}{" "}
    </div>
  );
}

function LightSwitch() {
  const { setBulb } = useContext(BulbContext);
  function toggle() {
    setBulb((c) => !c);
  }

  return <button onClick={toggle}>Toggle Bulb</button>;
}

export default App;
