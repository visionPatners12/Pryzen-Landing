import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Roadmap } from "./pages/Roadmap/Roadmap";
import Preloader from "./components/Preloader";
import "./globals.css";
import "./index.css";
import "./landing.css";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}

function App() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {!ready && <Preloader onReady={handleReady} />}
      </AnimatePresence>
      <div
        style={{
          position: ready ? "relative" : "fixed",
          top: 0,
          left: 0,
          width: "100%",
          opacity: ready ? 1 : 0,
          pointerEvents: ready ? "auto" : "none",
          visibility: ready ? "visible" : "hidden",
        }}
        aria-hidden={!ready}
      >
        {ready ? (
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AppRoutes />
          </motion.div>
        ) : (
          <AppRoutes />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
