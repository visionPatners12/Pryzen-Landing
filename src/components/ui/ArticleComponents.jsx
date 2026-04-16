import { cn } from "../../lib/utils";

/**
 * ArticleNumber — Large muted section number (01. / 02. / 03.)
 * @param {string|number} n — The number to display
 * @param {string} [className]
 */
export const ArticleNumber = ({ n, className }) => (
  <p
    className={cn("text-white/20 font-bold mb-4", className)}
    style={{ fontSize: "3rem", lineHeight: 1 }}
  >
    {n}.
  </p>
);

/**
 * ArticleBadge — Small uppercase border badge (e.g. "FAN APP")
 * @param {string} label
 * @param {string} [className]
 */
export const ArticleBadge = ({ label, className }) => (
  <div
    className={cn(
      "inline-flex items-center border border-white/20 px-3 py-1 rounded text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-6",
      className
    )}
  >
    {label}
  </div>
);

/**
 * ArticleHeading — Two-line heading: white line + gold line
 * @param {string} line1 — First line (white)
 * @param {string} line2 — Second line (gold)
 * @param {string} [className]
 */
export const ArticleHeading = ({ line1, line2, className }) => (
  <h3
    className={cn("font-bold uppercase leading-tight mb-6", className)}
    style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
  >
    <span className="text-white block">{line1}</span>
    <span className="text-[#FEB413] block">{line2}</span>
  </h3>
);
