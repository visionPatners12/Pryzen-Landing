import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { staticLayers, animatedLayers } from "../data/sceneLayers";
import { preloadAndCacheLottie } from "../lib/lottieCache";

const CRITICAL_IMAGES = [
  "/landing/landing_assests/hero_shades.svg",
  "/landing/landing_assests/rectangle_black.svg",
  "/landing/landing_assests/hero_gradiant.svg",
  "/landing/landing_assests/nav_logo.svg",
  "/landing/landing_assests/btnBg.png",
  "/landing/landing_assests/animation_bg.svg",
  ...staticLayers.map((l) => l.src),
];

const CRITICAL_LOTTIE = animatedLayers.map((l) => l.animationUrl);

const STEP_THRESHOLDS = [0, 30, 65, 95];

const MIN_DISPLAY_MS = 3200;
const SAFETY_TIMEOUT_MS = 20000;

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ src, ok: true });
    img.onerror = () => reject(new Error(`Image failed: ${src}`));
    img.src = src;
  });
}

const particleCount = 40;
const particles = Array.from({ length: particleCount }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 2,
  opacity: Math.random() * 0.4 + 0.1,
}));

export default function Preloader({ onReady }) {
  const { t } = useTranslation();
  const stepLabels = t("preloader.steps", { returnObjects: true });
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const total = CRITICAL_IMAGES.length + CRITICAL_LOTTIE.length;
    let loaded = 0;
    let failedCount = 0;
    const startTime = Date.now();
    let timedOut = false;

    const bump = (ok) => {
      loaded++;
      if (!ok) failedCount++;
      const pct = Math.round((loaded / total) * 100);
      setProgress(pct);
    };

    const imagePromises = CRITICAL_IMAGES.map((src) =>
      preloadImage(src)
        .then(() => bump(true))
        .catch(() => {
          console.warn(`[Preloader] Image failed to load: ${src}`);
          bump(false);
        })
    );

    const lottiePromises = CRITICAL_LOTTIE.map((url) =>
      preloadAndCacheLottie(url).then((data) => bump(data !== null))
    );

    const allAssets = Promise.all([...imagePromises, ...lottiePromises]);

    const safetyTimeout = new Promise((resolve) => {
      setTimeout(() => {
        timedOut = true;
        resolve();
      }, SAFETY_TIMEOUT_MS);
    });

    Promise.race([allAssets, safetyTimeout]).then(() => {
      if (timedOut) {
        const missing = total - loaded;
        if (missing > 0) {
          console.warn(
            `[Preloader] Safety timeout reached. ${missing} of ${total} assets still loading (${failedCount} failed). Proceeding anyway.`
          );
        }
      }

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        setProgress(100);
        setExiting(true);
      }, remaining);
    });
  }, []);

  useEffect(() => {
    const idx = [...STEP_THRESHOLDS].reverse().findIndex((threshold) => progress >= threshold);
    const stepIdx = idx >= 0 ? STEP_THRESHOLDS.length - 1 - idx : 0;
    setCurrentStep(stepIdx);
  }, [progress]);

  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => setDone(true), 900);
      return () => clearTimeout(timer);
    }
  }, [exiting]);

  useEffect(() => {
    if (done) {
      const timer = setTimeout(onReady, 100);
      return () => clearTimeout(timer);
    }
  }, [done, onReady]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const glowRadius = 200 + Math.sin(t * 2) * 30;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
      grad.addColorStop(0, `rgba(254, 180, 19, ${0.06 + Math.sin(t * 3) * 0.02})`);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(cx - glowRadius, cy - glowRadius, glowRadius * 2, glowRadius * 2);

      particles.forEach((p) => {
        const px = (p.x / 100) * canvas.width;
        const py = (p.y / 100) * canvas.height + Math.sin(t * (1 / p.duration) * Math.PI * 2 + p.delay) * 20;
        const alpha = p.opacity * (0.5 + Math.sin(t * 2 + p.delay) * 0.5);
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254, 180, 19, ${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (done) return null;

  return (
    <motion.div
      key="preloader"
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ background: "transparent" }}
    >
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{ background: "#0D0A06" }}
        animate={exiting ? { x: "-100%" } : { x: "0%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: exiting ? 0.15 : 0 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{ background: "#0D0A06" }}
        animate={exiting ? { x: "100%" } : { x: "0%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: exiting ? 0.15 : 0 }}
      />

      <motion.div
        className="absolute inset-0"
        animate={exiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 10 }}
        animate={exiting ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10"
        >
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(254,180,19,0.3) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src="/landing/landing_assests/nav_logo.svg"
            alt="Pryzen"
            className="h-16 sm:h-20 w-auto relative z-10"
          />
        </motion.div>

        <div className="w-56 sm:w-72 h-[3px] rounded-full overflow-hidden bg-white/10 mb-6 relative">
          <motion.div
            className="h-full rounded-full relative"
            style={{
              background: "linear-gradient(90deg, #FEB413, #F59E0B, #FEB413)",
              backgroundSize: "200% 100%",
            }}
            initial={{ width: "0%" }}
            animate={{
              width: `${progress}%`,
              backgroundPosition: ["0% 0%", "100% 0%"],
            }}
            transition={{
              width: { duration: 0.4, ease: "easeOut" },
              backgroundPosition: { duration: 1.5, repeat: Infinity, ease: "linear" },
            }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
            style={{
              left: `${progress}%`,
              background: "#FEB413",
              boxShadow: "0 0 12px rgba(254,180,19,0.8), 0 0 24px rgba(254,180,19,0.4)",
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>

        <div className="flex flex-col items-center gap-3 h-16">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              className="text-white/60 text-sm font-medium tracking-widest uppercase"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
            >
              {stepLabels[currentStep]}
            </motion.p>
          </AnimatePresence>

          <div className="flex gap-2 mt-1">
            {STEP_THRESHOLDS.map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: i <= currentStep ? "#FEB413" : "rgba(255,255,255,0.15)",
                  scale: i === currentStep ? [1, 1.4, 1] : 1,
                }}
                transition={{
                  backgroundColor: { duration: 0.3 },
                  scale: { duration: 0.6, repeat: i === currentStep ? Infinity : 0 },
                }}
              />
            ))}
          </div>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
