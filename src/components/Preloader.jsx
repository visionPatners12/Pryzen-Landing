import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staticLayers, animatedLayers } from "../data/sceneLayers";

const CRITICAL_IMAGES = [
  "/landing/landing_assests/hero_shades.svg",
  "/landing/landing_assests/rectangle_black.svg",
  "/landing/landing_assests/hero_gradiant.svg",
  "/landing/landing_assests/nav_logo.svg",
  "/landing/landing_assests/btnBg.png",
  ...staticLayers.map((l) => l.src),
];

const CRITICAL_LOTTIE = animatedLayers.map((l) => l.animationUrl);

const MIN_DISPLAY_MS = 1800;
const TIMEOUT_MS = 8000;

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
}

function preloadLottie(url) {
  return fetch(url)
    .then((r) => r.json())
    .then(() => {})
    .catch(() => {});
}

export default function Preloader({ onReady }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const allTasks = [
      ...CRITICAL_IMAGES.map((src) => preloadImage(src)),
      ...CRITICAL_LOTTIE.map((url) => preloadLottie(url)),
    ];

    const total = allTasks.length;
    let loaded = 0;
    const startTime = Date.now();

    const tracked = allTasks.map((p) =>
      p.then(() => {
        loaded++;
        setProgress(Math.round((loaded / total) * 100));
      })
    );

    const allDone = Promise.all(tracked);
    const timeout = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));

    Promise.race([allDone, timeout]).then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        setProgress(100);
        setDone(true);
      }, remaining);
    });
  }, []);

  useEffect(() => {
    if (done) {
      const timer = setTimeout(onReady, 600);
      return () => clearTimeout(timer);
    }
  }, [done, onReady]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#0D0A06" }}
        >
          <motion.img
            src="/landing/landing_assests/nav_logo.svg"
            alt="Pryzen"
            className="h-14 sm:h-16 w-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="w-48 sm:w-64 h-[3px] rounded-full overflow-hidden bg-white/10 mb-4">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #FEB413, #F59E0B)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          <motion.p
            className="text-white/40 text-xs font-medium tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
