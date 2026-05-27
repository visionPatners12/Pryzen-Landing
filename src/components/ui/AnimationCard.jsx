import { cn } from "../../lib/utils";

export const AnimationCard = ({ children, bgImage, className, style, width, height }) => (
  <div
    className={cn(
      "relative shrink-0 rounded-[16px] overflow-hidden",
      !width && "w-full lg:w-[45%]",
      className
    )}
    style={{
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.03)",
      boxShadow: "0 24px 64px 0 rgba(0,0,0,0.4)",
      minHeight: height || 320,
      ...(width && { width }),
      ...(height && { height }),
      ...style,
    }}
  >
    {bgImage && (
      <img
        src={bgImage}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
        decoding="async"
      />
    )}
    <div className="relative w-full h-full">{children}</div>
  </div>
);
