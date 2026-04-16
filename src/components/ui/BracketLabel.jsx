import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const BracketSvg = ({ flipped = false }) => (
  <svg
    className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${
      flipped ? "right-0 -scale-x-100" : "left-0"
    }`}
    width="7"
    height="27"
    viewBox="0 0 7 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.307678 6.30762V0.307617H6.30768" stroke="white" strokeWidth="0.615385" />
    <path d="M6.30768 26.3076L0.307678 26.3076L0.307678 20.3076" stroke="white" strokeWidth="0.615385" />
  </svg>
);

/**
 * BracketLabel — Animated bracket-decorated label/badge
 * @param {string} children - Label text
 * @param {string} [className]
 * @param {number} [delay=0] - Framer Motion entrance delay
 */
export const BracketLabel = ({ children, className, delay = 0 }) => (
  <motion.span
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.2 }}
    className={cn(
      "inline-flex uppercase text-sm leading-normal text-white font-sans relative p-2",
      className
    )}
  >
    <BracketSvg />
    <BracketSvg flipped />
    {children}
  </motion.span>
);
