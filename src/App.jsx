import { useState, useCallback } from "react";
import { Home } from "./pages/Home/Home";
import Preloader from "./components/Preloader";
import "./globals.css";
import "./index.css";
import "./landing.css";

function App() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <>
      {!ready && <Preloader onReady={handleReady} />}
      <div style={{ opacity: ready ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
        <Home />
      </div>
    </>
  );
}

export default App;
