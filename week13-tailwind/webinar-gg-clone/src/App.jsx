import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VerifyAgePage } from "./pages/VerifyAgePage";
import "./index.css";
import { LetGetStarted } from "./pages/LetGetStarted";
import { Completed } from "./pages/Completed";

function App() {
  return (
    <div className="h-screen bg-blue-500 content-center flex flex-col items-center justify-center text-white">
      <BrowserRouter>
        <Routes>
          <Route index element={<VerifyAgePage />} />
          <Route path="/get-started" element={<LetGetStarted />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
